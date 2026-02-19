<template>
  <UContainer class="py-10">
    <UCard class="max-w-2xl mx-auto">
      <template #header>
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-circle-x" class="w-5 h-5 text-error" />
              <h1 class="text-xl font-semibold truncate">Ошибка</h1>
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

      <UAlert
        color="error"
        variant="soft"
        :title="title"
        :description="details"
      />

      <template #footer>
        <div class="flex flex-wrap gap-3 justify-end">
          <UButton color="neutral" variant="soft" to="/">
            На главную
          </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const nuxtError = useError();

const statusCode = computed(() => {
  const codeFromError = (nuxtError.value as any)?.statusCode;
  if (typeof codeFromError === "number") return codeFromError;

  const fromQuery = Number(route.query.code);
  return Number.isFinite(fromQuery) && fromQuery > 0 ? fromQuery : null;
});

const title = computed(() => {
  return (
    (nuxtError.value as any)?.statusMessage ||
    (nuxtError.value as any)?.message ||
    (typeof route.query.title === "string" ? route.query.title : null) ||
    "Что-то пошло не так"
  );
});

const details = computed(() => {
  return (
    (typeof route.query.details === "string" ? route.query.details : null) ||
    "Мы уже знаем о проблеме или скоро узнаем. Попробуйте вернуться на главную."
  );
});
</script>

