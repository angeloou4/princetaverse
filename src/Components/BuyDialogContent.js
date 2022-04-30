import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MyDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BuyDialogContent = ({ building }) => {
	const { title, coordinates, image, price, current_owner, address } = building
	return (
		<>
			<DialogTitle sx={{ fontSize: 30 }}>Confirm Purchase</DialogTitle>
			<DialogContent>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<img src={image}
						style={{ objectFit: "contain", "width": "90%", "height": "400px", borderRadius: 10 }} />
					<DialogContentText sx={{ fontSize: 20 }}>
						Confirm purchase of <strong>{title} </strong> for ${price}?
					</DialogContentText>
				</div>
			</DialogContent>

		</>
	)
}

export default BuyDialogContent
