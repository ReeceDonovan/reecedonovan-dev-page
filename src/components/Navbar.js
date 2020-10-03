import React from "react";
// { useState }
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  //   const [click, setClick] = useState(false);
  //   const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <i className="fas fa-rupee-sign">EECE</i>
        </Link>
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">
                <i className="far fa-home-alt" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <i className="far fa-user" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">
                <i className="far fa-book-open" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <i className="far fa-envelope" />
              </Link>
            </li>
          </ul>
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <i className="fas fa-rupee-sign">EECE</i>
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/">
                  <i className="far fa-home-alt" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <i className="far fa-user" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">
                  <i className="far fa-book-open" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <i className="far fa-envelope" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
