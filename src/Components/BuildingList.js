import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from "./ListItem"

const BuildingList = ({ buildings, showBuilding }) => {
	return (
		<Box sx={{ overflow: 'auto' }}>
		<List>
			{buildings.map((details, index) => (
				<>
					<ListItem details={details} key={index} index={index} showBuilding={showBuilding}/>
					<Divider />
				</>
			))}
		</List>
	</Box>
	)
	
}

export default BuildingList