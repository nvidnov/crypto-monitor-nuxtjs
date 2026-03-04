<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <UInput
          :model-value="modelValue"
          icon="i-lucide-search"
          placeholder="Поиск криптовалюты..."
          size="md"
          class="w-64"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </div>
      <div class="flex items-center gap-2 text-sm text-(--ui-text-muted)">
        <UIcon name="i-lucide-clock" class="size-4" />
        <span>Обновлено: {{ lastUpdated }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  lastUpdated: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
