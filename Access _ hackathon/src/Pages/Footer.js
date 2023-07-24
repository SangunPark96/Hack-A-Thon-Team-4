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
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="font-weight-bold">
              <Link to="/about" className="footer-link">
                About us
              </Link>
            </h6>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="font-weight-bold">
              <Link to="/feedback" className="footer-link">
                Share Your Thoughts
              </Link>
            </h6>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="font-weight-bold">
              <Link to="/signup" className="footer-link">
                Create Account
              </Link>
            </h6>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="font-weight-bold">
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </h6>
          </div>
        </div>
        <hr className="my-5" />

        <div className="text-center">
          <Link
            to="#"
            className="text-dark me-4 footer-social-icons"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="#"
            className="text-dark me-4 footer-social-icons"
            target="_blank"
          >
            <FaTwitter />
          </Link>
          <Link
            to="#"
            className="text-dark me-4 footer-social-icons"
            target="_blank"
          >
            <FaGoogle />
          </Link>
          <Link
            to="#"
            className="text-dark me-4 footer-social-icons"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            to="#"
            className="text-dark me-4 footer-social-icons"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="#"
            className="text-dark me-4 footer-social-icons"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
      <div className="text-center py-3">
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
