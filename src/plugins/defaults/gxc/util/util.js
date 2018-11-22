export function getWsAddress(network){
    return network.fullhost().replace("https://", "wss://").replace("http://", "ws://")
}