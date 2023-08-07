import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";

function TransactionDialog(props) {
  let amountRef = React.useRef(null);
  let lebalRef = React.useRef(null);

  const operationHandle = (action) => {
    let amount = amountRef.current.value;
    let lebal = lebalRef.current.value;
    props.getTransactionDate(lebal, Number(amount), action);
  };

  return (
    <div>
      <Dialog open={props.openDialog} onClose={props.handleClose}>
        <DialogTitle>Make a Transaction</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Transaction Label"
            type="text"
            fullWidth
            variant="standard"
            inputRef={lebalRef}
            // onChnage={}
          />
          <TextField
            inputRef={amountRef}
            id="name"
            label="Amount"
            type="Number"
            variant="standard"
            // onChnage={}
          />
          {/* <input type="text" ref={amountRef} /> */}
        </DialogContent>
        <DialogActions>
          <IconButton
            aria-label="Add"
            onClick={() => {
              props.handleClose();
              operationHandle("add");
            }}
          >
            <AddCircleOutlineIcon />
            Add
          </IconButton>
          <IconButton
            aria-label="Subtract"
            onClick={() => {
              props.handleClose();
              operationHandle("sub");
            }}
          >
            <RemoveIcon />
            Sub
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TransactionDialog;
