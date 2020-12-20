import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* purple div */}
      <div className="home__covid">
          <p>We're all in this together.</p>
          <p>Learn more about our response to COVID-19.</p>
      </div>
        <div className="home__main">
            <div className="home__mainLeft">
                <h1>Better Mortgage</h1>
            </div>
            <div className="home__mainRight">
                <h1>Pre approval</h1>
            </div>
        </div>
      {/* home */}
    </div>
  );
}

export default Home;
