import React, { useState } from "react";
import Header from "./pages/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "./requests";
import "./styles/App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
