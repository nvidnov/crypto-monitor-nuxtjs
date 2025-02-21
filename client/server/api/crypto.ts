export default defineEventHandler(async (event) => {
    const data = await $fetch('https://api.coingecko.com/api/v3/coins/markets', {
        query: { vs_currency: 'usd', order: 'market_cap_desc' },
    });

    return data;
});
