require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth meadow minor guess globe flower sketch'; 
let testAccounts = [
"0xa89f1e6b965fbff6d00c66b5b9a88e9c0a9f7f92d766253f56ae2fb217f125cc",
"0x765cbafc58ceb552aa01dd22e29e53702fc489b0aecdcdf1be40840021dd1c25",
"0xbe7c7c210528a3579c727b56173b750375b54653bb6bc608673b8311e97d9d2d",
"0xe255375b1a45a6f5c969b99a92c9c601f49bc31fe55c69f4a22694ee28ed9506",
"0x64919b4348071bcbb2a2d6ac78c20980c7bff632da5067bf7d6b52305d12d983",
"0x11d2f579a48acce71f06d563b47a5886a3faa9bbb1317500d7c1873782ac37a2",
"0xa8cf0eddca8596e70b0198c07eb90b2d8190966c50ee6e34d09ad6e0a77e1c05",
"0x43214ed8f9c74d332b92698a46560b79c33746bafd02aad1ec82654b1dae94d8",
"0x9e233a023ca07cacf81b0e8f7658ec7e57d9fcc847bd1d0421f0ed64789386cd",
"0x2166055cdc3804399ae9e279547ea728ca7316b06c843921042b3e4d62be963e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


