import { GXClient } from 'gxclient/es/index'

export const getAmountDescription = async (client, amount) => {
    const asset = await client.getObject(`1.3.${amount.asset_id}`)
    const symbol = asset.symbol
    const num = amount.amount.toNumber() / Math.pow(10, asset.precision)
    return `${num} ${symbol}`
}

export const getFeeDescription = async (client, fee) => {
    const asset = await client.getObject(fee.asset_id)
    const symbol = asset.symbol
    const num = fee.amount / Math.pow(10, asset.precision)
    return `${num} ${symbol}`
}