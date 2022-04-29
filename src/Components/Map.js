import React, {useRef, useMemo, useEffect, useState} from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import Marker from "./Marker"
import Sidebar from './Sidebar'
import BuildingList from './BuildingList'
import BuildingPurchase from './BuildingPurchase'
import 'leaflet/dist/leaflet.css';


import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// buildings is an array of buildings
const Map = ({buildings}) => {

	const [isBuildingSidebarOpen, setIsBuildingSidebarOpen] = React.useState(false);
	const [isListSidebarOpen, setListSidebarOpen] = React.useState(true);
	const [selectedBuilding, setSelectedBuilding] = useState(buildings[0])
	const showBuilding = (key) => {
		console.log(buildings[key])
		setSelectedBuilding(buildings[key])
		setIsBuildingSidebarOpen(true)
	}

	return (
		<div style={{"height": "100%", "width":"100%"}}>
			{/* List sidebar */}
			<Sidebar 
				open={isListSidebarOpen}
				setOpen={setListSidebarOpen}
				content=
				{
					<BuildingList 
						buildings={buildings} 
						showBuilding={showBuilding}
						/>
				} />
			{/* Building Sidebar */}
			<Sidebar 
				open={isBuildingSidebarOpen}
				setOpen={setIsBuildingSidebarOpen}
				content={
					<BuildingPurchase 
						building={selectedBuilding} 
					/>
				} />
			<MapContainer center={[40.347402699984606, -74.65859686137848]} zoom={17.5} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{buildings.map((building, index)=>
					<Marker
						key={index}
						details={building}
						showBuilding={showBuilding}
						index={index}
					/>
				)}
				</MapContainer>
		</div>
		
	)
}

export default Map;