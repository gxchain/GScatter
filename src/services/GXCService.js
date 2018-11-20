import {getCurrentAccount} from '../util/util';
import {PrivateKey, Aes} from 'gxbjs';
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
        // TODO error handler
        const publicKey = getCurrentAccount(scatter, domain, network).publicKey;
        context.publicToPrivate(privateKey => {
            if (!privateKey) {
                sendResponse(null);
                return false;
            }

            sendResponse(Aes.encrypt_with_checksum(
                PrivateKey.fromWif(privateKey),
                toPublic,
                nonce,
                new Buffer(memo, "utf-8")
            ));
        }, publicKey);
    }
}