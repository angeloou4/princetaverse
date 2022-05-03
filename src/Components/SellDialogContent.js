import * as React from 'react';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SellDialogContent = ({ building, setSellPrice }) => {
	const { title, image } = building
	return (
		<>
			<DialogTitle sx={{ fontSize: 30 }}>Confirm Sale</DialogTitle>
			<DialogContent>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<img src={image} alt={title}
						style={{ objectFit: "contain", "width": "90%", "height": "400px", borderRadius: 10, marginBottom: 20 }} />
					<DialogContentText sx={{ fontSize: 20 }}>
						<div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
							<p style={{paddingRight:"10px"}}>Sell <strong>{title} </strong> for</p>
							<TextField
								autoFocus
								margin="dense"
								id="price"
								type="price"
								onChange={e => setSellPrice(e.target.value || 0)}
								variant="standard"
								sx={{position: "relative", bottom: "10px"}}
							/>
							<p style={{paddingLeft:"10px"}}> PTON</p>
						</div>
					</DialogContentText>
				</div>
			</DialogContent>

		</>
	)
}

export default SellDialogContent
