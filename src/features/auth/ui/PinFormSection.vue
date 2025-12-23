<template>
  <div class="max-w-lg mx-auto p-6">
    <div class="flex flex-col justify-center items-center gap-2 mb-2">
      <UIcon name="i-lucide-mail" class="w-6 h-6 text-primary" />
      <h1 class="text-2xl">Верификация</h1>
    </div>

    <p class="text-gray-600 mb-8 flex justify-center items-center text-center">
      На указанную почту было отправлено письмо с кодом верификации.
    </p>
    <USeparator class="mb-6" />
    <div class="flex justify-center items-center gap-2 mb-4">
      <UPinInput :length="6" v-model="pin" />
    </div>
    <UAlert
      v-if="error"
      color="error"
      title="Ошибка Верификации"
      :description="error"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: string | null;
}>();

const emit = defineEmits(["fetchPin"]);
const pin = ref([]);
const isComplete = computed(() => pin.value.length === 6);

watch(isComplete, (done) => {
  if (!done) return;
  emit("fetchPin", pin.value.join(""));
});
</script>

<style scoped></style>
