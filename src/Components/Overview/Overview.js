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
import Typography from "@mui/material/Typography";
import moment from "moment";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Overview = () => {
  let [total, setTotal] = React.useState(992.04);
  let [transanctionArr, setTransanctionArr] = React.useState([
    ["Power Bill", 220.1, "add", moment().format('MMMM Do YYYY, h:mm:ss a')],
  ]);
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

  const getTransactionDate = (label, amount, action, timeStamp) => {
    let newValue =
      action === "add" ? Number(total) + Number(amount) : total - amount;
    setTotal(newValue.toFixed(2));
    setTransanctionArr((previewstate) => [
      ...previewstate,
      [label, amount, action, timeStamp],
    ]);
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
              tabIndex="-1"
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
              <Typography sx={{
                  fontWeight: "400",
                  fontSize: "1.50rem",
                }}
                variant="h2" color="antiquewhite">
                Get Exclusive discounts for any payment Method
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "1.1rem",
                  marginTop: "5px",
                }}
                variant="h3"
                color="antiquewhite"
              >
                By upgrading your plan to premium
              </Typography>
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
          <TransactionCard transanctionArr={transanctionArr} />
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
