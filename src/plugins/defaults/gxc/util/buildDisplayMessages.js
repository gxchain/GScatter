import {getAmountDescription, getFeeDescription} from './chainUtil'
import Error from '../../../../models/errors/Error';

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
    data.fee = await getFeeDescription(client, ops.fee)
    data.from = account.name
    data.to = originalArgs[0]
    data.memo = originalArgs[1]
    data.amount = await getAmountDescription(client, ops.amount)

    return {
        code : '无',
        type: '转账',
        ricardian: 'ririririri',
        data: data
    }
}

handlerMap.callContract = async (tr, network, account, originalArgs, client) => {
    var data = {}
    const ops = tr.operations[0][1]
    data.fee = await getFeeDescription(client, ops.fee)
    data.from = account.name
    data.contractName = originalArgs[0]
    data.methodName = originalArgs[1]
    data.params = JSON.stringify(originalArgs[2])
    if(!!originalArgs[3]){
        data.carryAmount = originalArgs[3]
    }

    return {
        code : data.contractName,
        type: '合约调用',
        ricardian: '合约ricardian',
        data: data
    }
}

handlerMap.vote = async (tr, network, account, originalArgs, client) => {
    var data = {}
    const ops = tr.operations[0][1]
    data.fee = await getFeeDescription(client, ops.fee)
    data.from = account.name
    data.accounts = originalArgs[0].join(',')

    return {
        code : '无',
        type: '投票',
        ricardian: '投票投票',
        data: data
    }
}

const buildDisplayMessages = async (tr, network, account, originalArgs, method, client) => {
    const handler = handlerMap[method] || function () { }
    let ret
    try{
        ret = await handler(tr, network, account, originalArgs, client);
    }catch(err){
        throw Error.buildDisplayMessageError(err.message)
    }
    const { code, data, type, ricardian } = ret
    return buildRet(code, data, type, ricardian, account);
};

export default buildDisplayMessages;