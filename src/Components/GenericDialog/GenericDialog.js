import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const GenericDialog = (props) => {
  let [isError, setIsError] = React.useState(false)
  const toFocusRef = React.useRef(null);

  const checkforValue = () => {
    if (toFocusRef.current.value === undefined || toFocusRef.current.value === "") {
      setIsError(true)
      return false;
    } else {
      return true
    }
  }

  return (
    <div>
      <Dialog open={props.openDialog} onClose={() => {
        props.handleClose()
        setIsError(false)
      }
        }>
        <DialogTitle>Please enter your E-mail</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              color: "black",
            }}
          >
            To upgrading your plan to premium
          </DialogContentText>
          <TextField
          error={isError}
            autoFocus
            inputRef={toFocusRef}
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
              // checkforValue() && props.OpenSnackbar(); props.handleClose();
              if (checkforValue()) {
                props.OpenSnackbar(); 
                props.handleClose();
                setIsError(false)
              }
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
