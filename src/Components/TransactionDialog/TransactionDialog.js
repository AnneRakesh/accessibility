import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import moment from "moment";

function TransactionDialog(props) {
  let [lebalError, setLebaleError] = React.useState(false);
  let [amountError, setAmountError] = React.useState(false);
  let amountRef = React.useRef("");
  let lebalRef = React.useRef("");

  const operationHandle = (action, timeStamp) => {
    let amount = amountRef.current.value;
    let lebal = lebalRef.current.value;
    props.getTransactionDate(lebal, Number(amount), action, timeStamp);
  };

  const checkForValuesForlebal = () => {
    let lebal = lebalRef.current.value;
    if (lebal === "") {
      setLebaleError(true);
      return false;
    } else {
      return true;
    }
  };
  const checkForValuesForAmount = () => {
    let amount = amountRef.current.value;
    if (amount === "") {
      setAmountError(true);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <Dialog
        open={props.openDialog}
        onClose={() => {
          props.handleClose();
          setLebaleError(false);
          setAmountError(false);
        }}
      >
        <DialogTitle>Make a Transaction</DialogTitle>
        <DialogContent>
          <TextField
            error={lebalError}
            autoFocus
            id="name"
            label="Transaction Label"
            type="text"
            fullWidth
            variant="standard"
            inputRef={lebalRef}
            required
          />
          <TextField
            error={amountError}
            inputRef={amountRef}
            id="name"
            label="Amount"
            type="Number"
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <IconButton
            aria-label="Credit"
            style={{
              border: "1px solid black",
            }}
            onClick={() => {
              let time = moment().format("MMMM Do YYYY, h:mm:ss a");
              if (checkForValuesForlebal() && checkForValuesForAmount()) {
                props.handleClose();
                operationHandle("add", time);
                setLebaleError(false);
                setAmountError(false);
              }
            }}
          >
            <AddCircleOutlineIcon />
            Credit
          </IconButton>
          <IconButton
            aria-label="Debit"
            style={{
              border: "1px solid black",
            }}
            onClick={() => {
              if (checkForValuesForAmount() && checkForValuesForlebal()) {
                let time = moment().format("MMMM Do YYYY, h:mm:ss a");
                props.handleClose();
                operationHandle("sub", time.toString());
                setLebaleError(false);
                setAmountError(false);
              }
            }}
          >
            <RemoveIcon />
            Debit
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TransactionDialog;
