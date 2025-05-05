import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button
} from "@mui/material";
import { BannerLogo } from "../others/BannerLogo";

export const CredentialConfirmModal = ({
  open,
  onClose,
  onConfirm,
  first_name,
  last_name,
  birthdate,
  user_name,
  password
}) => {
  return (
    <Dialog
  
    PaperProps={{
      sx: {
        width: '500px',
        borderRadius: 4,
        padding: 2,
        backgroundColor: '#fefefe'
      }
    }}
    open={open} onClose={onClose}>
      
      <DialogTitle className="text-center flex flex-col ">
        <BannerLogo className="w-30 self-center"/>
        <span className="font-annie" >CONFIRM YOUR INFORMATION</span>
      </DialogTitle>
      
      <DialogContent dividers 
        className=""
      >
        <Typography><strong>First Name:</strong> {first_name}</Typography>
        <Typography><strong>Last Name:</strong> {last_name}</Typography>
        <Typography><strong>Birthdate:</strong> {birthdate}</Typography>
        <Typography><strong>Username:</strong> {user_name}</Typography>
        <Typography><strong>Password:</strong> {password}</Typography>
      </DialogContent>


      <DialogActions>

        <Button onClick={onClose}
        sx={{ borderColor: "#FF1F06", color: 'red' }}
        color="seconday"
        variant="outlined"
        >
          Cancel
        </Button>

        <Button
        sx={{backgroundColor : "#FF1F06" , color : 'white'}}
        onClick={onConfirm} color="primary" variant="contained">
          Confirm
        </Button>

      </DialogActions>


    </Dialog>
  );
};
