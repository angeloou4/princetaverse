import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Dialog from "./Dialogue"
import { Auth } from 'aws-amplify'
import { Link } from "react-router-dom";

const BuildingDetails = ({ building, logged}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const [userOwnsNFT, setUserOwnsNFT] = useState(false)
	let { title, image, price, current_owner, address, onSale } = building
	current_owner = current_owner || ''
	const etherscan_address = "https://ropsten.etherscan.io/token/" + address

	useEffect(() => {
		const fetchData = async () => {
			let userInfo = await Auth.currentUserInfo()
			let email = userInfo.attributes.email
			setUserOwnsNFT(current_owner === email)
		}
		fetchData()
	}, [current_owner])

	return (
		<>
			<Box sx={{ overflowY: 'auto' }}>
				<div style={{ display: "flex", flexDirection: "column", width: "100%", textAlign: "center", alignItems: "center", padding: "0px 10px" }}>
					<div style={{ display: "flex", flexDirection: "column", margin: "auto", width: "fit-content", alignItems: "center" }}>
						<div style={{ textAlign: "center", width: "100%", marginBottom: 10 }}>
							<h1 style={{ fontSize: "60px" }}>{title}</h1>
						</div>
						<img src={image} alt={title}
							style={{ objectFit: "contain", "width": "90%", "height": "400px", borderRadius: 10, marginBottom: 2 }} />
						<div style={{ marginBottom: 5, }}><a href={etherscan_address} target="_blank" rel="noreferrer">{address}</a></div>
					</div>
					{/* maybe eventually replace with link to profile page */}
					<div style={{ textAlign: "center", width: "100%" }}>
						<h5> Owned by <a href={"/profile/" + current_owner.split('@')[0]}>{current_owner}</a></h5>
					</div>

					{ price === -1 ? (
							<h2>Not For Sale</h2>
						) : (
							<h2>{price} PTON</h2>
						)
					}

					{ logged ? 

							userOwnsNFT ? 
								onSale ? 
									<div className="action-button" onClick={() => { setIsDialogOpen(true) }} style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>
									Edit Sale
									</div> 
								: 
									<div className="action-button" onClick={() => { setIsDialogOpen(true) }} style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>
									Sell
									</div> 
							: 
								
								onSale ? 
									<div className="action-button" onClick={() => { setIsDialogOpen(true) }} style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>
									Purchase
									</div> 
								: 
									<div className="action-button" onClick={() => { setIsDialogOpen(false) }} style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>
									Not For Sale
									</div> 
						:
							<Link to='/Login' style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}>
								Login to Purchase
							</Link>
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