<template>
  <div class="md:hidden grid gap-3">
    <div
      v-for="(coin, i) in coins"
      :key="coin.symbol"
      class="rounded-xl border border-(--ui-border) bg-(--ui-bg-elevated)/40 p-4"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-2xl">{{ coin.icon }}</span>
          <div>
            <div class="font-semibold text-(--ui-text-highlighted)">
              {{ coin.name }}
              <span class="text-xs text-(--ui-text-muted) uppercase ml-1">{{ coin.symbol }}</span>
            </div>
            <div class="text-xs text-(--ui-text-muted)">#{{ i + 1 }}</div>
          </div>
        </div>
        <div class="text-right">
          <div class="font-mono font-semibold text-(--ui-text-highlighted)">
            ${{ formatNumber(coin.price) }}
          </div>
          <CryptoChange :value="coin.change24h" class="text-sm" />
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between text-xs text-(--ui-text-muted)">
        <span>Кап: ${{ formatCompact(coin.marketCap) }}</span>
        <span>Объём: ${{ formatCompact(coin.volume24h) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CryptoData } from '~/entities/crypto/types/types'
import { formatNumber, formatCompact } from '~/shared/lib/formatters'
import CryptoChange from './CryptoChange.vue'

defineProps<{
  coins: CryptoData[]
}>()
</script>
