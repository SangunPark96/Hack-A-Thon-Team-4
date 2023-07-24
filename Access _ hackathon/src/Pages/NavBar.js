import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* below button code only for responsiveness */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-fill">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-link-animation custom-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/council"
                className="nav-link nav-link-animation custom-link"
              >
                City Council
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link nav-link-animation custom-link"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link nav-link-animation custom-link"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resources"
                className="nav-link nav-link-animation custom-link"
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
