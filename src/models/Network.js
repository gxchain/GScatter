import {Blockchains} from './Blockchains';

export default class Network {
    constructor(_name = '', _protocol = 'https', _host = '', _port = 0, blockchain = Blockchains.GXC, chainId = '') {
        this.name = _name;
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;
        this.blockchain = blockchain;
        this.chainId = chainId.toString();
    }

    static placeholder() {
        return new Network();
    }

    static fromJson(json) {
        const p = Object.assign(Network.placeholder(), json);
        p.chainId = p.chainId ? p.chainId.toString() : '';
        return p;
    }

    static fromUnique(netString) {
        const blockchain = netString.split(':')[0];
        if (netString.indexOf(':chain:') > -1)
            return new Network('', '', '', '', blockchain, netString.replace(`${blockchain}:chain:`, ''));

        const splits = netString.replace(`${blockchain}:`, '').split(':');
        return new Network('', '', splits[0], parseInt(splits[1] || 80), blockchain);
    }

    unique() {
        return (`${this.blockchain}:` + (this.chainId.length ? `chain:${this.chainId}` : `${this.host}:${this.port}`)).toLowerCase();
    }

    hostport() {
        return `${this.host}${this.port ? ':' : ''}${this.port}`;
    }

    fullhost() {
        return `${this.protocol}://${this.host}${this.port ? ':' : ''}${this.port}`;
    }

    clone() {
        return Network.fromJson(JSON.parse(JSON.stringify(this)));
    }

    isEmpty() {
        return !this.host.length;
    }

    isValid() {
        return (this.host.length && this.port) || this.chainId.length;
    }

    explorer() {
        if (this.blockchain === Blockchains.GXC) {
            if (this.chainId === '4f7d07969c446f8342033acb3ab2ae5044cbe0fde93db02de75bd17fa8fd84b8') {
                return 'https://block.gxb.io';
            }
            if (this.chainId === 'c2af30ef9340ff81fd61654295e98a1ff04b23189748f86727d0b26b40bb0ff4') {
                return 'https://testnet.explorer.gxchain.org';
            }
        }
        return null;
    }
}
