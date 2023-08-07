import React, { Fragment } from "react";
import "./Overview.css";
import Button from "@mui/material/Button";
import GenericDialog from "../GenericDialog/GenericDialog";
import QuickAccess from "./QuickAccess/QuickAccess";
import Graph from "../Graph/Graph";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import SearchIcon from "@mui/icons-material/Search";
import BalanceCard from "../Balance/Balance";
import TransactionCard from "../../Components/Overview/TransactionCard/TransactionCard";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Overview = () => {
  let [total, setTotal] = React.useState(0);
  let [transanctionArr, setTransanctionArr] = React.useState([])
  let [openDialog, setOpenDialog] = React.useState(false);
  let [openSnack, setOpenSnack] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const OpenSnackbar = () => {
    setOpenSnack(true);
  };

  const closeSnack = () => {
    setOpenSnack(false);
  };

  const getTransactionDate = (label, amount, action) => {
    let newValue =
      action === "add" ? Number(total) + Number(amount) : total - amount;
    setTotal(newValue);
    setTransanctionArr(Previewstate => [...Previewstate, [label, amount, action]]);
    console.log(transanctionArr)
  };

  return (
    <Fragment>
      <div className="container">
        <div className="Overview">
          <h1> Overview </h1>
          <div className="search-box">
            <input
              className="search-text"
              type="text"
              placeholder="Search Anything"
              aria-label="Type anything you want to search"
            />
            <a
              href="test"
              className="search-btn"
              aria-label="Click here to Search"
            >
              <SearchIcon fontSize="large" />
            </a>
          </div>
          <div className="box">
            <div className="">
              <h3>Get Exclusive Discounts for any payment method</h3>
              <h4>By upgrading your plan to premium</h4>
            </div>
            <Button
              variant="outlined"
              sx={{
                color: "#515dc3",
                backgroundColor: "#fdfdff",
                borderRadius: "25px",
                ":hover": {
                  bgcolor: "#fff",
                  color: "#515dc3",
                },
              }}
              onClick={handleClickOpen}
            >
              Upgrade Now
            </Button>
          </div>
          <QuickAccess getTransactionDate={getTransactionDate} />
          <Graph />
        </div>
        <div className="balance">
          <BalanceCard total={total} />
          <TransactionCard transanctionArr={transanctionArr}/>
        </div>
      </div>

      <Snackbar open={openSnack} autoHideDuration={5000} onClose={closeSnack}>
        <Alert onClose={closeSnack} severity="success" sx={{ width: "100%" }}>
          Email has been successfully updated!!!
        </Alert>
      </Snackbar>
      <GenericDialog
        openDialog={openDialog}
        handleClose={handleClose}
        OpenSnackbar={OpenSnackbar}
      />
    </Fragment>
  );
};

export default Overview;
