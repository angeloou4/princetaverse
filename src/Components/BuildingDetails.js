import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Dialog from "./Dialogue"
import { Auth } from 'aws-amplify'
import { Link } from "react-router-dom";

const BuildingDetails = ({ building, buying = true, logged}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [userOwnsNFT, setUserOwnsNFT] = useState(false)
	const { title, coordinates, image, price, current_owner, address, tokenID } = building
	const etherscan_address = "https://etherscan.io/address/" + address

	useEffect(() => {
		const fetchData = async () => {
			let userInfo = await Auth.currentUserInfo()
			let email = userInfo.attributes.email
			setUserOwnsNFT(current_owner.name === email)
		}
		fetchData()
	}, [current_owner.name])

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
						<h5> Owned by <a href={"/profile/" + current_owner.id}>{current_owner.name}</a></h5>
					</div>

					<h2>${price}</h2>

					{ logged ? 
						<div className="action-button" onClick={() => { setIsDialogOpen(true) }} style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>
						Purchase
						</div> :
						<Link to='/Login' style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>Login to Purchase</Link>
					}	
					
				</div>
			</Box>
			<Dialog
				open={isDialogOpen}
				setOpen={setIsDialogOpen}
				userOwnsNFT={userOwnsNFT}
				building={building}
			/>
		</>
	)

}

export default BuildingDetails