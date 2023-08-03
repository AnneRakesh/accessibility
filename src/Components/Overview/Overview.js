import React, { Fragment } from "react";
import "./Overview.css";
import Button from "@mui/material/Button";
import GenericDialog from "../GenericDialog/GenericDialog";
import QuickAccess from "./QuickAccess/QuickAccess";
import Graph from "../Graph/Graph";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import SearchIcon from '@mui/icons-material/Search';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Overview = () => {
  let [openDialog, setOpenDialog] = React.useState(false);
  let [openSnack, setOpenSnack] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
    handleClick();
  };
  const handleClick = () => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };
  const OpenSnackbar = () => {
    setOpenSnack(true);
  };

  const closeSnack = () => {
    setOpenSnack(false);
  };

  return (
    <Fragment>
      <div className="Overview">
        <div className="headingOverview">
        <h1> Overview </h1>
        <div className="search-box">
          <input
            className="search-text"
            type="text"
            placeholder="Search Anything"
          />
          <a href="#" className="search-btn" aria-label="Click here to Search">
            <SearchIcon fontSize="large"/>
          </a>
        </div>
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
      </div>
      <GenericDialog
        openDialog={openDialog}
        handleClose={handleClose}
        OpenSnackbar={OpenSnackbar}
      />
      {showSuccessMessage && (
        <h1 style={{ color: "green" }}> Success! Your Email was submitted.</h1>
      )}
      <QuickAccess />
      <Graph />
      <Snackbar open={openSnack} autoHideDuration={5000} onClose={closeSnack}>
        <Alert onClose={closeSnack} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Overview;
