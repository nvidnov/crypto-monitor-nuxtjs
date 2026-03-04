export interface CryptoData {
  name: string
  symbol: string
  icon: string
  price: number
  change24h: number
  change7d: number
  marketCap: number
  volume24h: number
}

export interface MarketStat {
  label: string
  value: string
  change?: number
}
