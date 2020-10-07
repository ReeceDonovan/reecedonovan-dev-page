import React from "react";

function AboutItem(props) {
  return (
    <>
      <li className="about-item">
        <a className="about-item-link" href={props.link}>
          <div className="about-item-info">
            <h5 className="about-item-text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default AboutItem;
