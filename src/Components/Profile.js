import React, { useState } from "react";
import Sidebar from './Sidebar'
import BuildingList from './BuildingList'
import Divider from '@mui/material/Divider';
import BuildingDetails from './BuildingDetails'
import BuyDialogContent from "./BuyDialogContent";
import SellDialogContent from "./SellDialogContent";

const Profile = ({ buildings, isLoggedInUser=false, user = {
	name: "Chris Eisgruber",
	address: "0x474EdC23535767f479f519a581b5FDB7Ff4c1310",
} }) => {

	const [selectedBuilding, setSelectedBuilding] = useState(buildings[0])
	const showBuilding = (key) => {
		setSelectedBuilding(buildings[key])
	}
	const drawerWidth = 700
	const infoBarHeight = "20vh"
	const navBarHeight = "77px"

	const { name, address } = user

	const etherscan_address = "https://etherscan.io/address/" + address
	const marginTop = "calc(" + infoBarHeight + " + " + navBarHeight + ")"

	console.log("calc(100% - " + infoBarHeight + " - " + navBarHeight + ")"	)
	return (
		<div style={{ "height": "100%", "width": "100%" }}>
			{/* List sidebar */}

			<Sidebar
				open={true}
				content=
				{
					<BuildingList
						buildings={buildings}
						showBuilding={showBuilding}
					/>
				}
				marginTop={marginTop}
				height={"calc(100% - " + infoBarHeight + " - " + navBarHeight + ")"}
			/>
			{/* framing div */}
			<div style={{ display: "flex", width: "100%", height: "100%", marginTop: navBarHeight }}>
				<div style={{ display: "flex", flexDirection: "column", height: "100%", width: drawerWidth }}>
					{/* User info */}
					<div style={{ height: infoBarHeight, width: "100%", position: "relative" }}>
						<div style={{ margin: "auto", width: "100%" }} className="vertical-center">
							<h1>{name}</h1>
							<a href={etherscan_address} target="_blank">{address}</a>
						</div>
						<Divider />
					</div>

					<div style={{ height: "calc(100% - 700px)" }}></div>
				</div>
				{/* right side */}
				<div style={{ width: "calc(100% - 700px)", height: "100%", paddingTop:"10vh"}}>
				<BuildingDetails
						building={selectedBuilding}
						buying = {isLoggedInUser ? false : true}
						dialogContent={
							isLoggedInUser ?
							<SellDialogContent building={selectedBuilding}/>
							: <BuyDialogContent building={selectedBuilding}/>}

					/>
				</div>
			</div>

		</div>
	)
}

export default Profile;