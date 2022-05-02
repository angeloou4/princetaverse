import React, { useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from "./ListItem"
import Dialog from "./Dialogue"
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries'
import { transferNFT } from '../blockchain/scripts/transferNFT'
import { transferCoins } from '../blockchain/scripts/transferCoins'
import { Link } from "react-router-dom";

const BuildingDetails = ({ building, buying = true, dialogContent, logged}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const { title, coordinates, image, price, current_owner, address, token_id } = building
	const etherscan_address = "https://etherscan.io/address/" + address

	const handlePurchase = async () => {

		// Get user and owner info
		const userAuthInfo = await Auth.currentUserInfo()
		const currentEmail = userAuthInfo.attributes.email
		const existingUsers = await API.graphql(graphqlOperation(queries.listUsers))
		const allUsers = existingUsers.data.listUsers.items
		const userInfo = allUsers.filter(user => user.currentEmail === currentEmail)[0]

		const NFTOwnerEmail = current_owner.name
		const ownerInfo = allUsers.filter(user => user.email === NFTOwnerEmail)[0]

		// Transfer coins on blockchain
		await transferCoins(userInfo.address, ownerInfo.address, price, userInfo.privateKey)

		// Transfer NFT on blockchain
		await transferNFT(userInfo.address, ownerInfo.address, token_id, ownerInfo.privateKey)

		// Update user in database
		const userDetails = {
			id: userInfo.id,
			coins: userInfo.coins - price
		}		
		await API.graphql({ 
			query: mutations.updateUser, 
			variables: {input: userDetails}
		})

		// Update owner in database
		const ownerDetails = {
			id: ownerInfo.id,
			coins: ownerInfo.coins + price
		}		
		await API.graphql({ 
			query: mutations.updateUser, 
			variables: {input: ownerDetails}
		})

		// Update NFT in database
		const existingNFTs = await API.graphql(graphqlOperation(queries.listNFTS))
		const allNFTs = existingNFTs.data.listNFTS.items
		const NFTInfo = allNFTs.filter(nft => nft.tokenID === token_id)[0]
		const NFTDetails = {
			id: NFTInfo.id,
			price: -1,
			owner: userInfo.email,
			onSale: false
		}		
		await API.graphql({ 
			query: mutations.updateUser, 
			variables: {input: NFTDetails}
		})

	}

	return (
		<>
			<Box sx={{ overflowY: 'auto' }}>
				<div style={{ display: "flex", flexDirection: "column", width: "100%", textAlign: "center", alignItems: "center", padding: "0px 10px" }}>
					<div style={{ display: "flex", flexDirection: "column", margin: "auto", width: "fit-content", alignItems: "center" }}>
						<div style={{ textAlign: "center", width: "100%", marginBottom: 10 }}>
							<h1 style={{ fontSize: "60px" }}>{title}</h1>
						</div>
						<img src={image}
							style={{ objectFit: "contain", "width": "90%", "height": "400px", borderRadius: 10, marginBottom: 2 }} />
						<div style={{ marginBottom: 5, }}><a href={etherscan_address} target="_blank">{address}</a></div>
					</div>
					{/* maybe eventually replace with link to profile page */}
					<div style={{ textAlign: "center", width: "100%" }}>
						<h5>Currently owned by <a href={"/profile/" + current_owner.id}>{current_owner.name}</a></h5>
					</div>

					<h2>${price}</h2>

					{ logged ? 
						<div className="action-button" onClick={() => { setIsDialogOpen(true) }} style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>
						"Purchase"
						</div> :
						<Link to='/Login' style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>Login to Purchase</Link>
					}	



					 
					{/* { buying ? "Purchase" : "Sell"}  */}
					
					
				</div>
			</Box>
			<Dialog
				open={isDialogOpen}
				setOpen={setIsDialogOpen}
				dialogContent={dialogContent}
				handlePurchase={handlePurchase}
			/>
		</>
	)

}

export default BuildingDetails