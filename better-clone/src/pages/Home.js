import React from "react";
import { Button } from "@material-ui/core";
import "../styles/Home.css";
import HomeAnimation from "../components/HomeAnimation";

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
          <span>No commission.</span>
          <span>No, really.</span>
          <p>
            We've streamlined the mortgage process to eliminate fees,
            unnecessary steps, and time-wasting appointments. Our efficiency not
            only makes it easier to buy a home. It translates into the best
            rates available.
          </p>
          <Button>See today's rates</Button>
        </div>
        <div className="home__mainRight">
          <div className="home__phone">
            <HomeAnimation />
          </div>
        </div>
      </div>
      {/* home */}
    </div>
  );
}

export default Home;
