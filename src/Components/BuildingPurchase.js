import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from "./ListItem"

const BuildingPurchase = ({ building }) => {
	const { title, coordinates, image, price, current_owner } = building
	return (
		<Box sx={{ overflowY: 'auto' }}>
			<div style={{ display: "flex", flexDirection: "column", width: "100%", textAlign: "center", alignItems: "center", padding: "0px 10px" }}>
				<div style={{ display: "flex", flexDirection: "column", margin: "auto", width: "fit-content", alignItems: "center" }}>
					<div style={{ textAlign: "center", width: "100%", marginBottom: 10 }}>
						<h1 style={{ fontSize: "60px" }}>{title}</h1>
					</div>
					<img src={image}
						style={{ objectFit: "contain", "width": "90%", "height": "400px", borderRadius: 10 }} />

				</div>
				{/* maybe eventually replace with link to profile page */}
				<div style={{ textAlign: "center", width: "100%" }}>
					<h5>Currently owned by <a>{current_owner}</a></h5>
				</div>

				<h2>${price}</h2>

				<div className="button" style={{ width: "90%", borderRadius: 20, margin: "10px auto", lineHeight: "20px", padding: "10px", cursor: "pointer", height: 40, color: "white", backgroundColor: "blue" }}> Purchase </div>

			</div>
		</Box>
	)

}

export default BuildingPurchase