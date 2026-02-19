<template>
  <UApp>
    <div class="min-h-screen flex items-center">
      <UContainer class="py-10">
        <UCard class="max-w-2xl mx-auto">
          <template #header>
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <UIcon name="i-lucide-triangle-alert" class="w-5 h-5 text-error" />
                  <h1 class="text-xl font-semibold truncate">Произошла ошибка</h1>
                </div>

                <p class="text-sm text-muted mt-1">
                  {{ title }}
                </p>
              </div>

              <UBadge v-if="statusCode" color="error" variant="soft">
                {{ statusCode }}
              </UBadge>
            </div>
          </template>

          <div class="space-y-4">
            <UAlert
              color="error"
              variant="soft"
              :title="title"
              :description="description"
            />

            <div v-if="showDebug" class="space-y-2">
              <USeparator />
              <div class="text-sm font-medium">Технические детали (dev)</div>
              <pre
                class="text-xs whitespace-pre-wrap break-words rounded-md bg-gray-950/90 text-gray-100 p-3 overflow-auto max-h-64"
              >{{ debugText }}</pre>
            </div>
          </div>

          <template #footer>
            <div class="flex flex-wrap gap-3 justify-end">
              <UButton color="neutral" variant="soft" @click="onTryAgain">
                Попробовать снова
              </UButton>
              <UButton color="primary" @click="onGoHome">
                На главную
              </UButton>
            </div>
          </template>
        </UCard>
      </UContainer>
    </div>
  </UApp>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";
import type { NuxtError } from "nuxt/app";

export default defineComponent({
  name: "NuxtErrorPage",
  props: {
    error: {
      type: Object as PropType<NuxtError | null>,
      default: null,
    },
  },
  setup(props) {
    const statusCode = computed(() => {
      const code = (props.error as any)?.statusCode;
      return typeof code === "number" ? code : null;
    });

    const title = computed(() => {
      return (
        (props.error as any)?.statusMessage ||
        (props.error as any)?.message ||
        "Неизвестная ошибка"
      );
    });

    const description = computed(() => {
      const code = statusCode.value;
      if (code === 404) return "Страница не найдена. Проверьте адрес и попробуйте ещё раз.";
      if (code === 401) return "Похоже, у вас нет доступа. Попробуйте войти заново.";
      if (code === 500) return "Сервер столкнулся с проблемой. Попробуйте повторить позже.";
      return "Что-то пошло не так. Попробуйте повторить действие или вернуться на главную.";
    });

    const showDebug = computed(() => import.meta.dev);

    const debugText = computed(() => {
      const err = props.error as any;
      const parts = [
        `statusCode: ${err?.statusCode ?? ""}`,
        `statusMessage: ${err?.statusMessage ?? ""}`,
        `message: ${err?.message ?? ""}`,
        "",
        err?.stack ?? "",
      ];
      return parts.join("\n").trim();
    });

    const onGoHome = () => clearError({ redirect: "/" });
    const onTryAgain = () => clearError();

    return {
      statusCode,
      title,
      description,
      showDebug,
      debugText,
      onGoHome,
      onTryAgain,
    };
  },
});
</script>

