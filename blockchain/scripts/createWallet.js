let { API_URL } = require('../../secrets')

const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(API_URL)

const makeAccount = async () => {
  let newAcc = web3.eth.accounts.create()

  return newAcc
}

let { address, privateKey } = newAcc
console.log('Address: ' + address)
console.log('Private key: ' + privateKey)

exports.makeAccount = makeAccount
