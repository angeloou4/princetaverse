let { API_URL, PUBLIC_KEY, PUBLIC_KEY2, PRIVATE_KEY, PRIVATE_KEY2 } = require('../../secrets')

const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(API_URL)

// Get contract
const contract = require('../build/contracts/PrincetonNFT.json')
const contractAddress = '0x4F4e34beAdB6568f066858f1F8335BD453e080D4' // Address of PrincetonNFT contract
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function transferNFT(from, to, tokenId, privateKey) {
  const nonce = await web3.eth.getTransactionCount(from, 'latest')

  // Create transaction
  const tx = {
    'from': from, // Destination of minted NFT
    'to': contractAddress,
    'value': 0,
    'nonce': nonce,
    'gas': 500000,
    'maxPriorityFeePerGas': 1999999987,
    'data': nftContract.methods.safeTransferFrom(from, to, tokenId).encodeABI()
  }

  // Sign NFT
  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey)
  const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
  
  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`)
}

let tokenId = 1
transferNFT(PUBLIC_KEY2, PUBLIC_KEY, tokenId, PRIVATE_KEY2)
