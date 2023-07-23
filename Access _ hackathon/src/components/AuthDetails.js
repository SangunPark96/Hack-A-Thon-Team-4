import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Jessica from "../Images/Jessica.png";

function AuthDetails() {
  const navigate = useNavigate();
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

  const userSignOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {authUser ? (
        <div className="d-flex flex-column flex-sm-row align-items-center gap-5">
          <img
            alt="Profile"
            src={Jessica}
            className="rounded-circle my-3"
            style={{ width: "100px", height: "100px" }}
          />

          <button
            className="btn btn-primary btn-lg px-4 py-2 d-flex align-items-center gap-2"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column flex-sm-row align-items-center gap-4">
          <Link to="/SignIn" className="btn btn-primary btn-lg px-4 py-2">
            Sign In
          </Link>
          <Link to="/SignUp" className="btn btn-primary btn-lg px-4 py-2">
            Create New Account
          </Link>
        </div>
      )}
    </div>
  );
}

export default AuthDetails;
