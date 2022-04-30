import React, { useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from "./ListItem"
import Dialog from "./Dialogue"

const BuildingDetails = ({ building, buying = true, dialogContent }) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)
	const { title, coordinates, image, price, current_owner, address } = building
	const etherscan_address = "https://etherscan.io/address/" + address
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

					<div className="action-button" onClick={() => { setIsDialogOpen(true) }} style={{ width: "90%", maxWidth: "600px", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "rgb(32, 129, 226)" }}> {buying ? "Purchase" : "Sell"} </div>

				</div>
			</Box>
			<Dialog
				open={isDialogOpen}
				setOpen={setIsDialogOpen}
				dialogContent={dialogContent}
			/>
		</>
	)

}

export default BuildingDetails