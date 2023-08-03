import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const GenericDialog = (props) => { 

  return (
    <div>
      <Dialog open={props.openDialog} onClose={props.handleClose}>

        <DialogTitle>Please enter your E-mail</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{
            color: "black"
          }}>
            To upgrading your plan to premium
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.OpenSnackbar();
              props.handleClose();
            }}
          >
            Submit
          </Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
};

export default GenericDialog;
