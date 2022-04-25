import React, {useRef, useMemo, useEffect} from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import Marker from "./Marker"
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

	return (
		<div style={{"height": "100%", "width":"100%"}}>
			<MapContainer center={[40.347402699984606, -74.65859686137848]} zoom={17.5} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{buildings.map((building)=>
					<Marker
						details={building}
					/>
				)}
				</MapContainer>
		</div>
		
	)
}

export default Map;