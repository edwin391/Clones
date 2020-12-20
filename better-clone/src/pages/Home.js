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
          <h3>Better Mortgage</h3>
          <span>No lender fees.</span>
          <h1>No commission.</h1>
          <h1>No, really.</h1>
          <p>We've streamlined the mortgage process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home. It translates into the best rates available.</p>
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
