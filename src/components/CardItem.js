import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <a
          className="cards-item-link"
          href="https://github.com/ReeceDonovan/Visual-Sort"
        >
          <figure className="cards-item-img-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Project Image"
              className="cards-item-img"
            />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
