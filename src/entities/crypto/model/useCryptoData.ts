import type { CryptoData, MarketStat } from '../types/types'

const cryptoData = ref<CryptoData[]>([
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    price: 97_432.18,
    change24h: 2.34,
    change7d: 5.12,
    marketCap: 1_923_000_000_000,
    volume24h: 42_500_000_000,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    price: 3_841.52,
    change24h: -1.18,
    change7d: 3.47,
    marketCap: 462_000_000_000,
    volume24h: 18_200_000_000,
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    icon: '◎',
    price: 194.67,
    change24h: 4.82,
    change7d: 12.35,
    marketCap: 95_200_000_000,
    volume24h: 5_800_000_000,
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    icon: '🔶',
    price: 612.34,
    change24h: 0.91,
    change7d: -1.23,
    marketCap: 88_700_000_000,
    volume24h: 2_100_000_000,
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    icon: '✕',
    price: 2.47,
    change24h: -0.56,
    change7d: 8.94,
    marketCap: 142_000_000_000,
    volume24h: 7_300_000_000,
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    icon: '₳',
    price: 1.12,
    change24h: 3.27,
    change7d: 6.81,
    marketCap: 39_800_000_000,
    volume24h: 1_400_000_000,
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    icon: '🐕',
    price: 0.3842,
    change24h: -2.15,
    change7d: -4.32,
    marketCap: 56_100_000_000,
    volume24h: 3_200_000_000,
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    icon: '●',
    price: 8.74,
    change24h: 1.63,
    change7d: 2.18,
    marketCap: 12_900_000_000,
    volume24h: 620_000_000,
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    icon: '🔺',
    price: 41.28,
    change24h: 5.47,
    change7d: 9.63,
    marketCap: 16_800_000_000,
    volume24h: 890_000_000,
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    icon: '⬡',
    price: 19.56,
    change24h: -0.32,
    change7d: 1.87,
    marketCap: 12_300_000_000,
    volume24h: 740_000_000,
  },
  {
    name: 'Toncoin',
    symbol: 'TON',
    icon: '💎',
    price: 6.18,
    change24h: 2.91,
    change7d: 7.42,
    marketCap: 21_500_000_000,
    volume24h: 410_000_000,
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    icon: 'Ł',
    price: 128.45,
    change24h: 0.74,
    change7d: -2.16,
    marketCap: 9_600_000_000,
    volume24h: 580_000_000,
  },
])

const search = ref('')

const filteredCoins = computed(() => {
  if (!search.value) return cryptoData.value
  const q = search.value.toLowerCase()
  return cryptoData.value.filter(
    (c) => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q),
  )
})

const marketStats = computed<MarketStat[]>(() => [
  { label: 'Рыночная капитализация', value: '$2.41T', change: 1.84 },
  { label: 'Объём 24ч', value: '$98.7B', change: -3.21 },
  { label: 'Доминация BTC', value: '54.2%', change: 0.32 },
  { label: 'Активных монет', value: '12,847' },
])

const lastUpdated = computed(() => {
  return new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
})

export function useCryptoData() {
  return {
    cryptoData,
    search,
    filteredCoins,
    marketStats,
    lastUpdated,
  }
}
