<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-4">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="rounded-xl border border-(--ui-border) bg-(--ui-bg-elevated)/60 backdrop-blur p-4 text-center"
      >
        <p class="text-xs sm:text-sm text-(--ui-text-muted)">{{ stat.label }}</p>
        <p class="mt-1 text-lg sm:text-xl font-bold text-(--ui-text-highlighted)">
          {{ stat.value }}
        </p>
        <p
          v-if="stat.change !== undefined"
          :class="stat.change >= 0 ? 'text-green-500' : 'text-red-500'"
          class="mt-0.5 text-xs font-medium"
        >
          {{ formatPercent(stat.change) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MarketStat } from '~/entities/crypto/types/types'
import { formatPercent } from '~/shared/lib/formatters'

defineProps<{
  stats: MarketStat[]
}>()
</script>
