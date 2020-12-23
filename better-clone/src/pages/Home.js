// import React from "react";
import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "../styles/Home.css";
import HomeAnimation from "../components/HomeAnimation";

function Home() {
  // const [mobile, setMobile] = useState(false);

  // const isMobile = () => {
  //   if (window.innerWidth <= 960) {
  //     setMobile(true);
  //   } else {
  //     setMobile(false);
  //   }
  // };

  // useEffect(() => {
  //   isMobile();
  // }, []);

  // window.addEventListener("resize", isMobile);
  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    // return function cleanup() {
    //   window.removeEventListener("scroll".changeBackgroundColor);
    // };
  }, []);

  // useEffect(() => {
  //   const height = document.getElementsByClassName("home_covid").clientHeight;
  //   console.log("height", height)
  // }, [])
 
  const changeBackgroundColor = () => {
    const height = document.getElementsByClassName("home").height
    console.log("height", height)
  };

  return (
    <div className="home">
      {/* purple div */}
      <div className="home__covid">
        <p>We're all in this together.</p>
        <p>Learn more about our response to COVID-19.</p>
      </div>
      <div className="home__main">
        <div className="home__mainLeft">
          <div className="home__firstLeft">
            <h3>Better Mortgage</h3>
            <span>No lender fees.</span>
            <span>No commission.</span>
            <span>No, really.</span>
            <p className="home__firstParagraph">
              We've streamlined the mortgage process to eliminate fees,
              unnecessary steps, and time-wasting appointments. Our efficiency
              not only makes it easier to buy a home. It translates into the
              best rates available.
            </p>
            <Button>See today's rates</Button>
          </div>
          <div className="home__secondLeft">
            <span>It doesn't have to be so complicated</span>
            <p className="home__secondParagraph">
              Buying or refinancing a home takes-time, patience, and,
              traditionally, a lot of paperwork. We've dismantled the old
              mortgage infrastructure and replaced it with innovative technology
              and far fewer hurdles.
            </p>
          </div>
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
