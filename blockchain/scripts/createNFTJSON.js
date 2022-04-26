let name = 'Campus Club'
let image = 'ipfs://a'
let description = 'yes'
let tokenId = 1
let filename = 'test.json'

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
  description, 
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
