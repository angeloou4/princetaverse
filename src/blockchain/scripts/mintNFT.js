let { API_URL, PUBLIC_KEY, PRIVATE_KEY } = require('../../secrets')

const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const web3 = createAlchemyWeb3(API_URL)

// Get contract
const contract = require('../buildFolder/contracts/PrincetonNFT.json')
const contractAddress = '0x4F4e34beAdB6568f066858f1F8335BD453e080D4' // Address of PrincetonNFT contract
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

const mintNFT = async tokenURI => {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest')

  // Create transaction
  const tx = {
    'from': PUBLIC_KEY, // Destination of minted NFT
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'maxPriorityFeePerGas': 1999999987,
    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
  }

  // Sign NFT
  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
  
  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`)
}

let TOKEN_URI_ADDRESS = 'ipfs://JSON_METADATA_HASH_HERE'
mintNFT(TOKEN_URI_ADDRESS)

exports.mintNFT = mintNFT
