import {getAmountDescription, getFeeDescription} from './chainUtil'
function buildRet(code, data, type, ricardian, account) {
    return [{
        code,
        data,
        type,
        ricardian,
        authorization: [{
            actor: account.name,
            permission: account.authority
        }]
    }]
}

const handlerMap = {}
handlerMap.transfer = async (tr, network, account, originalArgs, client) => {
    var data = {}
    const ops = tr.operations[0][1]
    data.from = account.name
    data.to = originalArgs[0]
    data.memo = originalArgs[1]
    data.amount = await getAmountDescription(client, ops.amount)
    data.fee = await getFeeDescription(client, ops.fee)

    return {
        code : '无',
        type: '转账',
        ricardian: 'ririririri',
        data: data
    }
}

const buildDisplayMessages = async (tr, network, account, originalArgs, method, client) => {
    const handler = handlerMap[method] || function () { }
    const { code, data, type, ricardian } = await handler(tr, network, account, originalArgs, client);
    return buildRet(code, data, type, ricardian, account);
};

export default buildDisplayMessages;