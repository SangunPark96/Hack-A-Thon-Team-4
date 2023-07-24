import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Housing-Hub.jpg";
import AuthDetails from "../components/AuthDetails";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <header className="d-flex align-items-center justify-content-between p-1">
      <Link to="/">
        <div className="logo ml-3">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
      </Link>
      <div>
        {!authUser ? (
          <React.Fragment>
            <Link to="/SignIn" className="btn btn-primary mx-2">
              Sign In
            </Link>
            <Link to="/SignUp" className="btn btn-primary mx-2">
              Sign Up
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="text-dark me-2">Welcome, {authUser.email}</span>
            <AuthDetails />
          </React.Fragment>
        )}
      </div>
    </header>
  );
};

export default Header;
