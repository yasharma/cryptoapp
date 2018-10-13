/* global axios */

export const getMarketData = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.cryptonator.com/api/full/btc-usd')
            .then(({data}) => resolve(data && data.success ? data.ticker.markets.map(x => ({market: x.market, y: Number(x.price)})): []))
            .catch(error => reject(error))
    })
} 