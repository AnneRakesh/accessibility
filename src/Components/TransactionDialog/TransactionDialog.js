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
  let [total, setTotal] = React.useState(999);
  let totalRef = React.useRef();

  const numberPicker = () => {
    let amount = total.current.value;
    setTotal(amount);
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
          />
          <TextField
            ref={totalRef}
            id="name"
            label="Amount"
            type="Number"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <IconButton aria-label="Add">
            <AddCircleOutlineIcon onClick={props.handleClose} />
          </IconButton>
          <IconButton aria-label="Subtract">
            <RemoveIcon onClick={props.handleClose} />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TransactionDialog;
