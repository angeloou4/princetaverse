let { API_URL } = require('../secrets')

// const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
// const web3 = createAlchemyWeb3(API_URL)
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(API_URL))

const transferNFT = async (from, to, tokenId, privateKey) => {

  // Get contract
  const contract = require('../buildFolder/contracts/PrincetonNFT.json')
  const contractAddress = '0x4F4e34beAdB6568f066858f1F8335BD453e080D4' // Address of PrincetonNFT contract
  const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

  const nonce = await web3.eth.getTransactionCount(from, 'latest') 

  // Create transaction
  const tx = {
    'from': from, // Destination of minted NFT
    'to': contractAddress,
    'value': 0,
    'nonce': nonce,
    'gas': 800000,
    'maxPriorityFeePerGas': 2999999987,
    'data': nftContract.methods.safeTransferFrom(from, to, tokenId).encodeABI()
  }

  // Sign transaction
  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey)
  const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`)
}

// let tokenId = 13
// transferNFT(PUBLIC_KEY, PUBLIC_KEY2, tokenId, PRIVATE_KEY)

exports.transferNFT = transferNFT
