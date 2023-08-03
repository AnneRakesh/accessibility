import React from "react";
import "./QuickAccess.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MoveUpRoundedIcon from "@mui/icons-material/MoveUpRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import TransactionDialog from "../../TransactionDialog/TransactionDialog";
import MovieIcon from "@mui/icons-material/Movie";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const QuickAccess = () => {
  let [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      <h2> Quick Access</h2>
      <Stack direction="row" spacing={2}>
        <Button
          size="medium"
          onClick={handleClickOpen}
          startIcon={<MoveUpRoundedIcon />}
        >
          Transfer
        </Button>
        <Button size="medium" startIcon={<BoltRoundedIcon />}>
          Electricity
        </Button>
        <Button size="medium" startIcon={<WhatshotRoundedIcon />}>
          Gas
        </Button>
        <Button size="medium" startIcon={<MobileFriendlyRoundedIcon />}>
          Data
        </Button>
        <Button size="medium" startIcon={<ShoppingCartRoundedIcon />}>
          Shopping
        </Button>
        <Button size="medium" startIcon={<MovieIcon />}>
          Recharge
        </Button>
        <Button size="medium" startIcon={<AccountBalanceWalletIcon />}>
          Wallet
        </Button>
      </Stack>
      <TransactionDialog openDialog={openDialog} handleClose={handleClose} />
    </div>
  );
};

export default QuickAccess;
