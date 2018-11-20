import Network from '../models/Network'
export const getCurrentAccount = (scatter, domain, network) => {
    const identity = scatter.keychain.findIdentityFromDomain(domain);
    if (!identity || identity.isDisabled) {
        throw Error.identityMissing();
    }

    // Getting the account from the identity based on the network
    const account = identity.networkedAccount(Network.fromJson(network));
    if (!account) {
        throw Error.signatureAccountMissing();
    }

    return account;
}