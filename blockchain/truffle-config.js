var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = "crypto wallet words";

module.exports = {
  compilers: {
    solc: {
      version: "0.8.0"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1", 
      port: 7545, 
      network_id: "*"
    }, 
    ropsten: {
      provider: () => new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/INFURA_ID"),
      network_id: 3, 
      gas: 4000000
    }, 
  }
};
