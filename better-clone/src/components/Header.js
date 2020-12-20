import React from "react";
import "../styles/Header.css";
import { Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__leftSection">
        <img
          className="header__logo"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="header__middleSection">
        <div className="header__combineOptions">
          <Button>Our Services</Button>
          <ExpandMoreIcon />
        </div>
        <div className="header__combineOptions">
          <Button>About us</Button>
          <ExpandMoreIcon />
        </div>
        <div className="header__combineOptions">
          <Button>View rates</Button>
          <ExpandMoreIcon />
        </div>
        <div className="header__combineOptions">
          <Button>Learn</Button>
          <ExpandMoreIcon />
        </div>
        <div className="header__combineOptions">
          <Button>FAQ</Button>
        </div>
        <div className="header__combineOptions">
          <Button>For agents</Button>
        </div>
        <div className="header__combineOptions">
          <Button>Sign in</Button>
        </div>
      </div>
      <div className="header__rightSection">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
