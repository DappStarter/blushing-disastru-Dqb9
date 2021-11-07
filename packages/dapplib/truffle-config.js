require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain minor inflict argue tackle topple'; 
let testAccounts = [
"0x0a9221c4a9688483f2e5c9eee75dc9362e35a627f4e434c22b78d8f9679258ed",
"0x8f7297e9a172cacd252e35596ac2261d75934b2ee4c346b3aaf1872fce26bcbe",
"0xe8b9e4dfafcd9fca01132750fc75d00b85381a6d1b97fa14ac8f6b79a0a2ab6a",
"0xd31111f51c202fe96f697e1790bb2cff50245af8a470630dfb7618fc0d507a6f",
"0x16079859362f23580ffed02e79d61f6788b05c42a83000de98fe3c8bab4e23e3",
"0x6485538f79684bdad9e78b904901a21bdb99a6b60ce13cf0405271aef3b35c62",
"0x67068c3e528d03f51347a2ad1975eb9ae6768a0c7b848556ab5a8073cd8ecef1",
"0x367578c8653e9f9b2b191e4872ff6c00f471be40281ce2c9c86cced0272fce60",
"0xfddab43efa8c3ca712ea09a8a14163f203821ce193e4480aff64efce4bdb7cce",
"0xe06f32ecf16bca54eb826c57eeea98fcf332940bc32e0b9790eb3db06ef146aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

