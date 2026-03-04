<template>
  <span :class="value >= 0 ? 'text-green-500' : 'text-red-500'" class="font-medium">
    {{ formatPercent(value) }}
  </span>
</template>

<script setup lang="ts">
import { formatPercent } from '~/shared/lib/formatters'

defineProps<{
  value: number
}>()
</script>
