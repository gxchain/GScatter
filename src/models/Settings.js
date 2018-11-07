import Network from './Network';

export default class Settings {

    constructor() {
        this.networks = [];
        this.hasEncryptionKey = false;
        this.inactivityInterval = 0;
        this.language = 'CHINESE';
    }

    static placeholder() {
        return new Settings();
    }

    static fromJson(json) {
        let p = Object.assign(this.placeholder(), json);
        if (json.hasOwnProperty('networks')) p.networks = json.networks.map(x => Network.fromJson(x));
        return p;
    }
}
