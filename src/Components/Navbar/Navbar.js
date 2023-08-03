import React from "react";
import "./Navbar.css";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import dp from "../../Assests/DP.jpg"
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  return (
    <div className="leftBox">
      <div>
        <img className="imgTag"src={dp} alt="ProfilePicture" />
      </div>
      <div className="middle">
        <IconButton  aria-label="Go to Home Button">
          <HomeIcon />
        </IconButton>
        <IconButton  aria-label="Statatic's">
          <QueryStatsIcon />
        </IconButton>
        <IconButton  aria-label="Wallet Icon">
          <WalletIcon />
        </IconButton>
        <IconButton  aria-label="Setting">
          <SettingsIcon />
        </IconButton>
      </div>
      <div>
        <IconButton  aria-label="Logout">
          <LogoutIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
