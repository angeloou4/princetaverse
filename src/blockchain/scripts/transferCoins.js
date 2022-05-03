let { API_URL, PUBLIC_KEY, PUBLIC_KEY2, PRIVATE_KEY, PRIVATE_KEY2 } = require('../secrets')

// const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
// const web3 = createAlchemyWeb3(API_URL)
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(API_URL))

const transferCoins = async (from, to, coinAmount, privateKey) => {

  // Get Princeton Coin contract
  const coinJson = require('../build/contracts/PrincetonCoin.json')
  const coinContractAddress = '0x1D2DBA1203E20EBc9425ef263ACBe0FcD109b244' // Address of PrincetonCoin contract
  const coinContract = new web3.eth.Contract(coinJson.abi, coinContractAddress)

  const nonce = await web3.eth.getTransactionCount(from, 'latest')
  
  // Create transaction
  const tx = {
    'from': from, // Destination of minted NFT
    'to': coinContractAddress,
    'value': 0,
    'nonce': nonce,
    'gas': 500000,
    'maxPriorityFeePerGas': 1999999987,
    'data': coinContract.methods.transfer(to, coinAmount).encodeABI()
  }

  // Sign transaction
  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey)
  const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
  
  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`)
}

// let coinAmount = 420
// transferCoins(PUBLIC_KEY, PUBLIC_KEY2, coinAmount, PRIVATE_KEY)

exports.transferCoins = transferCoins
