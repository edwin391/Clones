import React from "react";
import Sidebar from "./Sidebar";
import Chat from "../components/Chat";
import "../styles/Imessage.css";

function Imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Imessage;
