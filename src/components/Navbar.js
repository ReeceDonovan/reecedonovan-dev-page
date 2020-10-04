import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <i className="fas fa-rupee-sign" />
        </Link>

        <ul className="nav-menu internal">
          <li className="nav-item">
            <Link to="/">
              <i className="far fa-home-alt" />
            </Link>
            <div className="item-caption">Home</div>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <i className="far fa-user" />
            </Link>
            <div className="item-caption">About</div>
          </li>
          <li className="nav-item">
            <Link to="/projects">
              <i className="far fa-book-open" />
            </Link>
            <div className="item-caption">Projects</div>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <i className="far fa-envelope" />
            </Link>
            <div className="item-caption">Contact</div>
          </li>
        </ul>

        <ul className="nav-menu external">
          <li className="nav-item">
            <Link to="/github">
              <i className="far fa-code-branch" />
            </Link>
            <div className="item-caption">Github</div>
          </li>
          <li className="nav-item">
            <Link to="/insta">
              <i className="fab fa-instagram" />
            </Link>
            <div className="item-caption">Instagram</div>
          </li>
          <li className="nav-item">
            <Link to="/email">
              <i className="far fa-at" />
            </Link>
            <div className="item-caption">Email</div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
