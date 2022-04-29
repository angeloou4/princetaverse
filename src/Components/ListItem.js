import React, { useRef, useMemo } from "react";
import MuiListItem from '@mui/material/ListItem';

const ListItem = ({ details, setItem, index, showBuilding }) => {
	const { title, coordinates, image, price, current_owner } = details

	return (
		<MuiListItem button onClick={() => {showBuilding(index)}}>
			<div style={{ width: "100%", height: "300px", display: "flex", float: "left", justifyContent:"space-between", padding: "0px 20px"}}>
				<div style={{display: "flex", flexDirection: "column", margin: "30px 5px", justifyContent: "flex-start"}}>
					<h1>{title}</h1>
					<h2 style={{color: "gray", }}>${price}</h2>
					{/* maybe eventually replace with link to profile page */}
					<h5>Owned by <a>{current_owner}</a></h5>
				</div>
				<img src={image}
					style={{ objectFit: "contain", "height": "220px", margin: "30px 0px", marginRight: "0px", float: "right"}} />
			</div>
		</MuiListItem>
	)

}

export default ListItem;