import { PrivateKey, PublicKey, Signature, TransactionHelper } from 'gxbjs/es/index';
const methodArgsHandleMap = {}
import * as NetworkMessageTypes from '../../../../messages/NetworkMessageTypes'

methodArgsHandleMap.transfer = async (args, messageSender, ext) => {
    var memoStr = args[1];

    if (!!memoStr) {
        args[1] = async (fromAcc, toAcc) => {
            let memo_from_public, memo_to_public;
            let memo_object = {};
            let message;
            memo_from_public = fromAcc.options.memo_key;

            // The 1s are base58 for all zeros (null)
            if (/111111111111111111111/.test(memo_from_public)) {
                memo_from_public = null;
            }

            memo_to_public = toAcc.options.memo_key;
            if (/111111111111111111111/.test(memo_to_public)) {
                memo_to_public = null;
            }

            if (memo_to_public && memo_from_public) {
                let nonce = TransactionHelper.unique_nonce_uint64();

                try{
                    message = await messageSender(NetworkMessageTypes.ENCRYPT_MEMO, {
                        memo: memoStr,
                        nonce:nonce,
                        fromPublic: memo_from_public,
                        toPublic: memo_to_public,
                        domain: ext.domain,
                        network: ext.network
                    });
                }catch(err){
                    throw err;
                }

                memo_object = {
                    from: memo_from_public,
                    to: memo_to_public,
                    nonce,
                    message: new Buffer(message)
                };
            }

            return memo_object;
        }
    }

    return args;
}

const handleArgs = async (method, args, messageSender, ext) => {
    var handler = methodArgsHandleMap[method] || function (args) { return args };

    return await handler(args, messageSender, ext);
}

export default handleArgs;