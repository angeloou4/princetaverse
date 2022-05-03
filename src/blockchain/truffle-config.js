var HDWalletProvider = require('truffle-hdwallet-provider')
let { METAMASK_WORDS, API_URL } = require('../secrets')

module.exports = {
  compilers: {
    solc: {
      version: '0.8.1'
    }
  },
  networks: {
    development: {
      host: '127.0.0.1', 
      port: 7545, 
      network_id: '*'
    }, 
    ropsten: {
      provider: () => new HDWalletProvider(METAMASK_WORDS, API_URL),
      network_id: 3, 
      gas: 4000000
    }, 
  }
}
