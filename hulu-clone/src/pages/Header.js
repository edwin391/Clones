import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutLineIcon from "@material-ui/icons/PersonOutline";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div
          className="header__icon
                header__icon--active"
        >
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashIcon />
          <p>Trending</p>
        </div>

        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>

        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>

        <div className="header__icon">
          <PersonOutLineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
