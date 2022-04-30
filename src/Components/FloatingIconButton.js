import React from "react";
import SpeedDial from '@mui/material/SpeedDial';
import MenuIcon from '@mui/icons-material/Menu';

const FloatingIconButtoon = ({handleClick}) => {
	return (
		<SpeedDial
			ariaLabel="SpeedDial basic example"
			sx={{ position: 'absolute', bottom: 30, left: 30, color: "gray" }}
			icon={<MenuIcon />}
			onClick={handleClick}
		/>	
	)

}

export default FloatingIconButtoon;