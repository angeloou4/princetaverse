import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MyDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import BuyDialogContent from "./BuyDialogContent";
import SellDialogContent from "./SellDialogContent";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries'
import { transferNFT } from '../blockchain/scripts/transferNFT'
import { transferCoins } from '../blockchain/scripts/transferCoins'

const Dialog = ({ open, setOpen, userOwnsNFT, building }) => {
  const { price, current_owner, tokenID } = building
  const [sellPrice, setSellPrice] = useState(price)

  const handleClose = () => {
    setOpen(false);
  };

	const handlePurchase = async () => {

		console.log("Handling purchase... might take a minute...")
		setOpen(false)
		alert("Handling purchase... might take a minute. You'll receive another message once the transaction is completed on the blockchain")

		// Get user and owner info
		const userAuthInfo = await Auth.currentUserInfo()
		const currentEmail = userAuthInfo.attributes.email
		const existingUsers = await API.graphql(graphqlOperation(queries.listUsers))
		const allUsers = existingUsers.data.listUsers.items
		const userInfo = allUsers.filter(user => user.email === currentEmail)[0]

		const NFTOwnerEmail = current_owner
		const ownerInfo = allUsers.filter(user => user.email === NFTOwnerEmail)[0]

    if (parseInt(price) > userInfo.coins) {
			alert('Not enough coins')
      return
    }

		// NOTE BLOCKCHAIN STUFF NOT ENABLED RIGHT NOW
		// Transfer coins on blockchain
		await transferCoins(userInfo.address, ownerInfo.address, price, userInfo.privateKey)

		// Transfer NFT on blockchain
		await transferNFT(userInfo.address, ownerInfo.address, tokenID, userInfo.privateKey)

		// Update user in database
		const userDetails = {
			id: userInfo.id,
			coins: userInfo.coins - price,
			_version: userInfo._version
		}		
		await API.graphql({ 
			query: mutations.updateUser, 
			variables: {input: userDetails}
		})

		// Update owner in database
		const ownerDetails = {
			id: ownerInfo.id,
			coins: ownerInfo.coins + price,
			_version: ownerInfo._version
		}
		await API.graphql({ 
			query: mutations.updateUser, 
			variables: {input: ownerDetails}
		})

		// Update NFT in database
		const existingNFTs = await API.graphql(graphqlOperation(queries.listNFTS))
		const allNFTs = existingNFTs.data.listNFTS.items
		const NFTInfo = allNFTs.filter(nft => nft.tokenID === tokenID)[0]
		const NFTDetails = {
			id: NFTInfo.id,
			price: -1,
			owner: userInfo.email,
			onSale: false,
			_version: NFTInfo._version
		}
		console.log('NFTDetails')
		console.log(NFTDetails)
		await API.graphql({ 
			query: mutations.updateNFT, 
			variables: {input: NFTDetails}
		})

		alert("Success! The NFT is now yours. Please refresh to see updates")

	}

	const handleSell = async () => {

		setOpen(false)
		alert("We got your request -- you'll receive another confirmation shortly if successful")

		// Confirm user has coins
    if (parseInt(sellPrice) < 0) {
			alert('Price must be at least 0')
      return
    }

		// Update NFT in database
		const existingNFTs = await API.graphql(graphqlOperation(queries.listNFTS))
		const allNFTs = existingNFTs.data.listNFTS.items
		const NFTInfo = allNFTs.filter(nft => nft.tokenID === tokenID)[0]
		const NFTDetails = {
			id: NFTInfo.id,
			price: parseInt(sellPrice),
			onSale: true,
			_version: NFTInfo._version
		}
    
		let res = await API.graphql({ 
			query: mutations.updateNFT, 
			variables: {input: NFTDetails}
		})

		alert("Your sale is on the market! Please refresh to see updates")
    console.log('Sold!')
		console.log(res)

	}

  return (
    <div>

      <MyDialog open={open} onClose={handleClose} >
      {
        userOwnsNFT ? (
          <SellDialogContent building={building} setSellPrice={setSellPrice} />
        ) : (
          <BuyDialogContent building={building} />
        )
      }
		  <DialogActions sx={{padding: "0px 20px 20px 0px"}}>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={userOwnsNFT ? handleSell : handlePurchase}>Confirm</Button>
			</DialogActions>
      </MyDialog>
    </div>
  );
}

export default Dialog;