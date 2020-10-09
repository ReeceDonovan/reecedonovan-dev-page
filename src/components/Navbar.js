import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/reecedonovan-dev-page/" className="navbar-logo">
          <i className="fas fa-rupee-sign" />
        </Link>

        <ul className="nav-menu internal">
          <li className="nav-item">
            <Link to="/reecedonovan-dev-page/">
              <i className="far fa-home-alt" />
            </Link>
            <div className="item-caption">Home</div>
          </li>
          <li className="nav-item">
            <Link to="/reecedonovan-dev-page/about">
              <i className="far fa-user" />
            </Link>
            <div className="item-caption">About</div>
          </li>
          <li className="nav-item">
            <Link to="/reecedonovan-dev-page/projects">
              <i className="far fa-book-open" />
            </Link>
            <div className="item-caption">Projects</div>
          </li>
        </ul>

        <ul className="nav-menu external">
          <li className="nav-item">
            <a href="https://github.com/ReeceDonovan">
              <i className="far fa-code-branch" />
            </a>
            <div className="item-caption">Github</div>
          </li>
          <li className="nav-item">
            <a href="https://www.instagram.com/r_e_e_c_e_9_9/">
              <i className="fab fa-instagram" />
            </a>
            <div className="item-caption">Instagram</div>
          </li>
          <li className="nav-item">
            <a href="mailto:reecedonovan99@gmail.com">
              <i className="far fa-at" />
            </a>
            <div className="item-caption">Email</div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
