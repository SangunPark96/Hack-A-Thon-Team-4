import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Leave A Feedback</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Connect With Our Social Media</h3>
          </div>

          <div>
            <ul>
              <li>
                <Link to="/SignUp">Sign Up/Create Account</Link>
              </li>
              <li>
                <Link to="/SignIn">Log In</Link>
              </li>
              <li>
                <Link to="/help">Forgot Password</Link>
              </li>
              <li>
                <Link to="/help">FAQ</Link>
              </li>
              <li>
                <Link to="/help">Help & Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <p>
          © 2023 Hackathon Team 4 - Florence Osei, Sangun Park, Vandhana Mohan,
          Wilton Camilo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


  