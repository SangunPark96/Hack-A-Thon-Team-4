import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-2">
            <h6 className="font-weight-bold">
              <Link to="/about" className="footer-link">
                About us
              </Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="font-weight-bold">
              <Link to="/feedback" className="footer-link">
                Share Your Thoughts
              </Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="font-weight-bold">
              <Link to="/signup" className="footer-link">
                Create Account
              </Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="font-weight-bold">
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </h6>
          </div>
        </div>
        <hr className="my-5" />

        <div className="text-center mb-5">
          <a href="#" className="text-dark me-4" target="_blank">
            <FaFacebookF />
          </a>
          <a href="#" className="text-dark me-4" target="_blank">
            <FaTwitter />
          </a>
          <a href="#" className="text-dark me-4" target="_blank">
            <FaGoogle />
          </a>
          <a href="#" className="text-dark me-4" target="_blank">
            <FaInstagram />
          </a>
          <a href="#" className="text-dark me-4" target="_blank">
            <FaLinkedin />
          </a>
          <a href="#" className="text-dark me-4" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
      <div
        className="text-center py-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="text-dark mb-0" style={{ fontSize: "12px" }}>
          © 2023 Copyright: Hackathon Team - Florence Osei, Sangun Park,
          Vandhana Mohan, Wilton Camilo.
        </p>
        <p className="text-dark mb-0" style={{ fontSize: "12px" }}>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
