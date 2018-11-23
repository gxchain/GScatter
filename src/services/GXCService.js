import {getCurrentAccount} from '../util/util';
import {PrivateKey, Aes} from 'gxbjs/es/index';
import Error from '../models/errors/Error';
export default class GXCService {

    /***
     * Tries to import an account using an existing private key
     * @param keypair
     * @param network
     * @param context
     * @returns {Promise}
     */
    static encryptMemo(payload, scatter, context, sendResponse) {
        const {domain, network, memo, toPublic, nonce} = payload;
        let publicKey;
        try{
            publicKey = getCurrentAccount(scatter, domain, network).publicKey;
        }catch(err){
            sendResponse(err);
            return;
        }
        
        context.publicToPrivate(privateKey => {
            let message
            if (!privateKey) {
                sendResponse(null);
                return false;
            }

            try{
                message = Aes.encrypt_with_checksum(
                    PrivateKey.fromWif(privateKey),
                    toPublic,
                    nonce,
                    new Buffer(memo, "utf-8")
                )
            }catch(err){
                sendResponse(Error.encryptMemoError(err.message));
                return;
            }

            sendResponse(message);
        }, publicKey);
    }
}