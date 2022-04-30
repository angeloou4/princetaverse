import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MyDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Dialog = ({open, setOpen, dialogContent}) => {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <MyDialog open={open} onClose={handleClose} >
        {dialogContent}
		<DialogActions sx={{padding: "0px 20px 20px 0px"}}>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Confirm</Button>
			</DialogActions>
      </MyDialog>
    </div>
  );
}

export default Dialog;