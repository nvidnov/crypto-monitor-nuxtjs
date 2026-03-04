<template>
  <div>
    <CryptoHero />
    <MarketStatsGrid :stats="marketStats" />

    <CryptoSearchBar v-model="search" :last-updated="lastUpdated" />

    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 pb-12">
      <CryptoTable :coins="filteredCoins" />
      <CryptoCardList :coins="filteredCoins" />
      <CryptoEmptyState v-if="filteredCoins.length === 0" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCryptoData } from '~/entities/crypto/model/useCryptoData'

const { search, filteredCoins, marketStats, lastUpdated } = useCryptoData()
</script>
