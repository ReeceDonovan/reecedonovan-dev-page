import React from "react";
import "./AboutSec.css";
import AboutItem from "./AboutItem";
function AboutSec() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-wrapper">
          <ul className="about-items">
            <AboutItem />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
