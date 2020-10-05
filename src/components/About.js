import React from "react";
import "./About.css";
import AboutItem from "./AboutItem";
function About() {
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

export default About;
