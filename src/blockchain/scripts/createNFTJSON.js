let image = 'ipfs://IPFS_ADDRESS_OF_IMAGE'
let name = 'Name'
let filename = 'NFT_JSONs/NFT_name.json'
let tokenId = -1

let data = {
  attributes: [
    {
      trait_type: 'Class', 
      value: 'Building'
    }, 
    {
      trait_type: 'Name', 
      value: name
    }, 
  ], 
  image, 
  name, 
  tokenId
}

let json = JSON.stringify(data, null, 2)
let fs = require('fs')
fs.writeFile(filename, json, 'utf8', err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Success! File stored at: ' + filename)
  }
})
