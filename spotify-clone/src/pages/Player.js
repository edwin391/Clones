import React from "react";
import "../styles/Player.css";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../pages/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Player;
