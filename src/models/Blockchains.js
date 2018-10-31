
export const Blockchains = {
    EOS:'eos',
    ETH:'eth',
    GXC:'gxc'
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));
