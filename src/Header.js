import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_r5.png" />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type = "text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
