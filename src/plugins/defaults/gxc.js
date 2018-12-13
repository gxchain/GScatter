import Plugin from '../Plugin';
import * as PluginTypes from '../PluginTypes';
import { Blockchains } from '../../models/Blockchains';
import Network from '../../models/Network';
import Account from '../../models/Account';
import AlertMsg from '../../models/alerts/AlertMsg';
import * as Actions from '../../store/constants';
import ObjectHelpers from '../../util/ObjectHelpers';
import { GXClient } from 'gxclient/es/index';
import { PrivateKey, PublicKey, Signature } from 'gxbjs/es/index';
import Error from "../../models/errors/Error";
import { strippedHost } from '../../util/GenericTools'
import handleArgs from './gxc/util/handleArgs'
import buildDisplayMessages from './gxc/util/buildDisplayMessages'
import * as NetworkMessageTypes from '../../messages/NetworkMessageTypes'
import { cloneDeep } from 'lodash'
import { getWsAddress, isMethodNeedIdentity } from './gxc/util/util'
import { IdentityRequiredFields } from '../../models/Identity';

let networkGetter = new WeakMap();
let messageSender = new WeakMap();
// let throwIfNoIdentity = new WeakMap();

const proxy = (dummy, handler) => new Proxy(dummy, handler);

export default class GXC extends Plugin {

    constructor() {
        super(Blockchains.GXC, PluginTypes.BLOCKCHAIN_SUPPORT);
    }

    accountFormatter(account) {
        return `${account.name}@${account.authority}`;
    }

    returnableAccount(account) {
        return { name: account.name, authority: account.authority };
    }

    async getEndorsedNetwork() {
        return new Promise((resolve, reject) => {
            resolve(new Network(
                'GXChain Mainnet', 'https',
                'node1.gxb.io',
                443,
                Blockchains.GXC,
                '4f7d07969c446f8342033acb3ab2ae5044cbe0fde93db02de75bd17fa8fd84b8'
            ));
        });
    }

    async isEndorsedNetwork(network) {
        const endorsedNetwork = await this.getEndorsedNetwork();
        return network.hostport() === endorsedNetwork.hostport();
    }

    accountsAreImported() {
        return true;
    }

    async registerAccount(name, network){
        const client = new GXClient('', '', `${getWsAddress(network)}`);

        const keypair = client.generateKey()

        const MAIN_NET = '4f7d07969c446f8342033acb3ab2ae5044cbe0fde93db02de75bd17fa8fd84b8'
        const TEST_NET = 'c2af30ef9340ff81fd61654295e98a1ff04b23189748f86727d0b26b40bb0ff4'

        // TODO: hard code
        const faucetMap = {
            [TEST_NET]:'https://testnet.faucet.gxb.io',
            [MAIN_NET]:'https://opengateway.gxb.io'
        }

        try{

        }catch(err){

        }
        await client.register(name,keypair.publicKey,keypair.publicKey,keypair.publicKey,faucet)
    }

    importAccount(keypair, network, context, accountSelected) {
        const getAccountsFromPublicKey = (publicKey, network) => {
            return new Promise((resolve, reject) => {
                let client = new GXClient("", "", `${getWsAddress(network)}`);
                client.getAccountByPublicKey(publicKey).then(account_ids => {
                    client._query("get_objects", [account_ids]).then(accounts => {
                        let results = [];
                        accounts.forEach(acc => {
                            // just provide active account, cause operation like transfer only make effect on active account
                            // if (acc.owner.key_auths.find(k => k[0] === publicKey)) {
                            //     results.push({ name: acc.name, authority: 'owner' });
                            // }
                            if (acc.active.key_auths.find(k => k[0] === publicKey)) {
                                results.push({ name: acc.name, authority: 'active' });
                            }
                        });
                        resolve(results);
                    });
                }).catch(e => resolve([]));
            });
        };

        getAccountsFromPublicKey(keypair.publicKey, network).then(accounts => {
            switch (accounts.length) {
                case 0:
                    context[Actions.PUSH_ALERT](AlertMsg.NoAccountsFound());
                    reject();
                    return false;
                // Only one account, so returning it
                case 1:
                    accountSelected(Account.fromJson({
                        name: accounts[0].name,
                        authority: accounts[0].authority,
                        publicKey: keypair.publicKey,
                        keypairUnique: keypair.unique()
                    }));
                    break;
                // More than one account, prompting account selection
                default:
                    context[Actions.PUSH_ALERT](AlertMsg.SelectAccount(accounts)).then(res => {
                        if (!res || !res.hasOwnProperty('selected')) {
                            reject();
                            return false;
                        }
                        accountSelected(Account.fromJson(Object.assign(res.selected, {
                            publicKey: keypair.publicKey,
                            keypairUnique: keypair.unique()
                        })));
                    });
            }
        }).catch(e => {
            console.log('error', e);
            accountSelected(null);
        });
    }

    privateToPublic(privateKey) {
        let client = new GXClient();
        return client.privateToPublic(privateKey);
    }

    validPrivateKey(privateKey) {
        let client = new GXClient();
        return client.isValidPrivate(privateKey);
    }

    validPublicKey(publicKey) {
        let client = new GXClient();
        return client.isValidPublic(publicKey);
    }

    randomPrivateKey() {
        let client = new GXClient();
        return new Promise((resolve) => {
            resolve(client.generateKey().privateKey);
        });
    }

    convertsTo() {
        return [];
    }

    from_eth(privateKey) {
        return PrivateKey.fromHex(Buffer.from(privateKey, 'hex')).toWif();
    }

    async getBalances(account, network) {
        let client = new GXClient("", "", `${getWsAddress(network)}`);
        return client.getAccountBalances(account.name).then(balances => {
            return client._query("get_objects", [balances.map(b => b.asset_id)]).then(assets => {
                let result = balances.map(b => {
                    let asset = assets.find(a => a.id === b.asset_id);
                    return [asset.symbol, b.amount / Math.pow(10, asset.precision)];
                });
                console.log(result);
                return result;
            });
        });
    }

    actionParticipants(payload) {
        return ObjectHelpers.flatten(
            payload.messages
                .map(message => message.authorization
                    .map(auth => `${auth.actor}@${auth.permission}`))
        );
    }

    // TODO
    signer(bgContext, payload, publicKey, callback) {
        bgContext.publicToPrivate(privateKey => {
            if (!privateKey) {
                callback(null);
                return false;
            }
            var buf = Buffer.concat([new Buffer(payload.chain_id, "hex"), new Buffer(payload.tr_buffer)])
            var private_key = PrivateKey.fromWif(privateKey);
            var public_key = private_key.toPublicKey();
            var sig = Signature.signBuffer(
                buf,
                private_key,
                public_key
            );
            callback(sig.toBuffer());
        }, publicKey);
    }

    signatureProvider(...args) {

        messageSender = args[0];
        // throwIfNoIdentity = args[1];

        return (network) => {
            network = Network.fromJson(network);
            if (!network.isValid()) throw Error.noNetwork();
            const httpEndpoint = `${network.protocol}://${network.hostport()}`;

            const chainId = network.hasOwnProperty('chainId') && network.chainId.length ? network.chainId : _options.chainId;
            network.chainId = chainId;

            // proxy
            return proxy({}, {
                get: (ins, method) => {
                    return async (...args) => {
                        let handledArgs;
                        let returnedFields;
                        let identity;
                        let account;

                        // some methods need identity, like trnasfer
                        if (isMethodNeedIdentity(method)) {
                            // throwIfNoIdentity();
                            try {
                                identity = await messageSender(NetworkMessageTypes.IDENTITY_FROM_PERMISSIONS, { domain: strippedHost() });
                            } catch (err) {
                                if (err == null) {
                                    // identity not exist
                                    throw Error.noPermissionError()
                                } else {
                                    throw err
                                }
                            }
                        }

                        if (!!identity) {
                            account = identity.accounts[0];
                        } else {
                            account = {}
                        }

                        // requiredFields get and check
                        let requiredFields = args.find(arg => arg.hasOwnProperty('requiredFields'));
                        let hasRequireFields = false
                        if (!!requiredFields) hasRequireFields = true
                        requiredFields = IdentityRequiredFields.fromJson(requiredFields ? requiredFields.requiredFields : {});
                        if (!requiredFields.isValid()) throw Error.malformedRequiredFields();

                        const signProvider = async (tr, chain_id) => {
                            let payload = { tr_buffer: tr.tr_buffer, chain_id }
                            let result

                            // build prompt display messages
                            payload.messages = await buildDisplayMessages(tr, network, account, cloneDeep(args), method, client);

                            payload = Object.assign(payload, { domain: strippedHost(), network, requiredFields });

                            result = await messageSender(NetworkMessageTypes.REQUEST_SIGNATURE, payload)

                            // No signature
                            if (!result) return null;

                            if (result.hasOwnProperty('signatures')) {
                                // Holding onto the returned fields for the final result
                                returnedFields = result.returnedFields;

                                // Returning only the signatures
                                return result.signatures.map(sig => new Buffer(sig));
                            }

                            // 通过message发回，会变成普通对象，所以必须处理一下
                            return result.map(sig => new Buffer(sig));
                        }

                        const ext = {
                            network,
                            domain: strippedHost()
                        }

                        try {
                            handledArgs = await handleArgs(method, cloneDeep(args), messageSender, ext);
                        } catch (err) {
                            throw err;
                        }

                        var client = new GXClient("", account.name ? account.name : '', `${getWsAddress(network)}`, signProvider);

                        let ret = client[method].apply(client, handledArgs)

                        // some methods not return promise, like generateKey
                        return ret.then ? ret.then(res => {
                            // if method like `transfer  callContract  vote` has requiredFields
                            if (!!hasRequireFields && isMethodNeedIdentity(method)) {
                                return Object.assign({
                                    transaction: res,
                                    returnedFileds: returnedFields
                                })
                            } else {
                                return res
                            }
                        }) : ret;
                    }
                }
            })
        };
    }
}
