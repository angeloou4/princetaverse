import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar'
import BuildingList from './BuildingList'
import Divider from '@mui/material/Divider';
import BuildingDetails from './BuildingDetails'
import SellDialogContent from "./SellDialogContent";
import { useParams } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries'

const Profile = ({ buildings }) => {

	const { id } = useParams()
	const [profile, setProfile] = useState({
		user: {
			email: '',
			address: ''
		},
		buildings: []
	})
	const [selectedBuilding, setSelectedBuilding] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			
			let newProfile = {}

			// Get user info
			const existingUsers = await API.graphql(graphqlOperation(queries.listUsers))
			const allUsers = existingUsers.data.listUsers.items
			const profileInfo = allUsers.filter(user => user.email === (id + '@princeton.edu'))[0]
			newProfile.user = profileInfo

			const profileBuildings = buildings.filter(b => {
				return b.current_owner === profileInfo.email
			})
			newProfile.buildings = profileBuildings

			if (profile.buildings.length === 0 || profile.buildings[0].address === 0) {
				setProfile(newProfile)
			}
			if (!selectedBuilding || Object.keys(selectedBuilding).length === 0 || selectedBuilding.address === 0) {
				setSelectedBuilding(profile.buildings[0])
			}
		}
		fetchData()
	}, [buildings, id, selectedBuilding, profile])

	// TODO: fetch buildings, user info from backend using userID
	// TODO: if id==logged-in-user, fetch using logged in user's ID
	const showBuilding = (key) => {
		setSelectedBuilding(profile.buildings[key])
	}
	const drawerWidth = 700
	const infoBarHeight = "20vh"
	const navBarHeight = "77px"

	// setSelectedBuilding(profile.buildings[0])
	const { email, address } = profile.user

	const etherscan_address = "https://ropsten.etherscan.io/address/" + address
	const marginTop = "calc(" + infoBarHeight + " + " + navBarHeight + ")"
	return (
		<div style={{ "height": "100%", "width": "100%" }}>
			{/* List sidebar */}

			<Sidebar
				open={true}
				content=
				{
					<BuildingList
						buildings={profile.buildings}
						showBuilding={showBuilding}
					/>
				}
				marginTop={marginTop}
				height={"calc(100% - " + infoBarHeight + " - " + navBarHeight + ")"}
			/>
			{/* framing div */}
			<div style={{ display: "flex", width: "100%", height: "100%", marginTop: navBarHeight }}>
				<div style={{ padding: '50px', display: "flex", flexDirection: "column", height: "100%", width: drawerWidth }}>
					{/* User info */}
					<div style={{ height: infoBarHeight, width: "100%", position: "relative" }}>
						<div style={{ margin: "auto", width: "100%" }} classemail="vertical-center">
							<h1>{email ? email.split('@')[0] + '\'s Profile Page' : null}</h1>
							<a href={etherscan_address} target="_blank" rel="noreferrer">{address}</a>
						</div>
						<Divider />
					</div>

					<div style={{ height: "calc(100% - 700px)" }}></div>
				</div>
				{/* right side */}
				<div style={{ width: "calc(100% - 700px)", height: "100%", paddingTop:"10vh"}}>
				<BuildingDetails
						building={selectedBuilding || {}}
						logged={true}
				/>
				</div>
			</div>

		</div>
	)
}

export default Profile;