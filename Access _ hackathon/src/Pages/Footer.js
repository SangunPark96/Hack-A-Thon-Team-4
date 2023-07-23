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
    <div className="container my-3">
      <footer className="text-center bg-light">
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="font-weight-bold">
                  <Link to="/about" className="footer-link">
                    About us
                  </Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="font-weight-bold">
                  <Link to="/contact" className="footer-link">
                    Leave A Feedback
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
                  <Link to="/help" className="footer-link">
                    FAQ
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
          </section>
          <hr className="my-5" />

          <section className="text-center mb-5">
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
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <p className="mt-3 text-dark" style={{ fontSize: "12px" }}>
            © 2023 Copyright: Hackathon Team - Florence Osei, Sangun Park,
            Vandhana Mohan, Wilton Camilo.
          </p>
          <p className="mt-3 text-dark" style={{ fontSize: "12px" }}>
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
