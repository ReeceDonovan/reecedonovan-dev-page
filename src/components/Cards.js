import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out my projects</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/project-1.gif"
              text="Visual Sort"
              label="JS"
            />
            <CardItem
              src="images/project-1.gif"
              text="Visual Sort"
              label="JS"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
