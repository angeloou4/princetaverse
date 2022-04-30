import React, {useRef, useMemo} from "react";
import { Marker as MyMarker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'


const Marker = ({details, index, showBuilding}) => {
// coordinates is an object, title is a string, image is a URL, price is a number
	const {title, coordinates, image, price, current_owner, address} = details
	const markerRef = useRef();

	const eventHandlers = useMemo(
		() => ({
		mouseover() {
			if (markerRef) markerRef.current.openPopup();
		},
		click() {
			showBuilding(index)
		}
		// mouseout() {
		// 	if (markerRef) markerRef.current.closePopup();
		// }
		}),
		[]
	);
	return (
		<MyMarker position={coordinates}
			ref={markerRef}
			eventHandlers={eventHandlers}
			>
			<Popup >
				{/* todo: fix alignment */}
				{/* todo: center map on pin when hovered over */}
				{/* todo: add way to enlarge NFT image */}
				<div style={{display: "flex", flexDirection: "column", textAlign: "center",  width: 300}}>
					<img src={image} 
						style = {{objectFit: "contain", "width": "100%", "height": "200px"}}/>
					<h1 style={{textDecoration: "underline"}}>{title}</h1>
					<h2>${price}</h2>
					{/* maybe eventually replace with link to profile page */}
					<h5>Currently owned by <a>{current_owner}</a></h5>
					<h4 onClick={()=> {showBuilding(index)}} style={{color: "#0000EE", cursor: "pointer"}}>view</h4>
				</div>
			</Popup>
		</MyMarker>
	)
}

export default Marker;