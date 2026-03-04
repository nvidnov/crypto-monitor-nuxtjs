<template>
  <div class="hidden md:block rounded-xl border border-(--ui-border) overflow-hidden">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-(--ui-bg-elevated)/60 text-(--ui-text-muted) text-left">
          <th class="py-3 px-4 font-medium w-10">#</th>
          <th class="py-3 px-4 font-medium">Монета</th>
          <th class="py-3 px-4 font-medium text-right">Цена</th>
          <th class="py-3 px-4 font-medium text-right">24ч %</th>
          <th class="py-3 px-4 font-medium text-right">7д %</th>
          <th class="py-3 px-4 font-medium text-right">Капитализация</th>
          <th class="py-3 px-4 font-medium text-right">Объём (24ч)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(coin, i) in coins"
          :key="coin.symbol"
          class="border-t border-(--ui-border) hover:bg-(--ui-bg-elevated)/40 transition-colors"
        >
          <td class="py-3.5 px-4 text-(--ui-text-muted)">{{ i + 1 }}</td>
          <td class="py-3.5 px-4">
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ coin.icon }}</span>
              <div>
                <span class="font-semibold text-(--ui-text-highlighted)">{{ coin.name }}</span>
                <span class="ml-2 text-xs text-(--ui-text-muted) uppercase">{{ coin.symbol }}</span>
              </div>
            </div>
          </td>
          <td class="py-3.5 px-4 text-right font-mono font-medium text-(--ui-text-highlighted)">
            ${{ formatNumber(coin.price) }}
          </td>
          <td class="py-3.5 px-4 text-right">
            <CryptoChange :value="coin.change24h" />
          </td>
          <td class="py-3.5 px-4 text-right">
            <CryptoChange :value="coin.change7d" />
          </td>
          <td class="py-3.5 px-4 text-right text-(--ui-text-muted)">
            ${{ formatCompact(coin.marketCap) }}
          </td>
          <td class="py-3.5 px-4 text-right text-(--ui-text-muted)">
            ${{ formatCompact(coin.volume24h) }}
          </td>
        </tr>
      </tbody>
    </table>
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
