import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BuyDialogContent = ({ building }) => {
	const { title, image, price } = building
	return (
		<>
			<DialogTitle sx={{ fontSize: 30 }}>Confirm Purchase</DialogTitle>
			<DialogContent>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<img src={image} alt={title}
						style={{ objectFit: "contain", "width": "90%", "height": "400px", borderRadius: 10, marginBottom: 20 }} />
					<DialogContentText sx={{ fontSize: 20 }}>
						Confirm purchase of <strong>{title} </strong> for ${price}?
					</DialogContentText>
				</div>
			</DialogContent>

		</>
	)
}

export default BuyDialogContent
