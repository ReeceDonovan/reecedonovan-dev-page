import React from "react";
import CardItem from "./CardItem";
import "./CardSec.css";

function AboutSec() {
  return (
    <div className="cards">
      <h1>About Me</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="https://corkcollegeofcommerce.ie/wp-content/uploads/2017/01/UCC.png"
              label="UCC"
              text="Education"
              link="https://www.ucc.ie/en/"
            />
            <CardItem
              src="https://scontent-dub4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/116786321_764523160968776_7242162511894402978_n.jpg?_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_cat=108&_nc_ohc=kt03Y8thONIAX-ff5vP&oh=fd1333d073a25398f681c4396516393c&oe=5FA80CFE"
              label="Photos"
              text="Hobbies"
              link="https://www.instagram.com/r_e_e_c_e_9_9/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
