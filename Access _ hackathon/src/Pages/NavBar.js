import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  useEffect(() => {
    // Enable Bootstrap's dropdown functionality
    const toggleDropdown = () => {
      const dropdownToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (dropdownToggler && navbarCollapse) {
        dropdownToggler.addEventListener("click", () => {
          navbarCollapse.classList.toggle("show");
        });
      }
    };
    toggleDropdown();

    // Close the mobile navbar when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navLinks && navbarCollapse) {
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navbarCollapse.classList.remove("show");
        });
      });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* below button code only for mobile hamburger responsiveness */}
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link custom-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/petition" className="nav-link custom-link">
                File New Petition
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/support" className="nav-link custom-link">
                View Petitions
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/council" className="nav-link custom-link">
                City Council
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile" className="nav-link custom-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-link custom-link">
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
