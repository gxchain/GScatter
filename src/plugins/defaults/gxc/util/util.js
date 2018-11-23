export function getWsAddress(network){
    return network.fullhost().replace("https://", "wss://").replace("http://", "ws://")
}

export function isMethodNeedIdentity(method){
    const methodNeedIdentity = ['transfer','vote','callContract']

    return methodNeedIdentity.includes(method)
}