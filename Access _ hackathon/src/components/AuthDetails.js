import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Jessica from "../Images/Jessica.png";
import Wilton from "../Images/Wilton.png";

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

  const users = {
    jessica: {
      name: "Jessica",
      photoURL: Jessica,
    },
    // wilton: {
    //   name: "Wilton",
    //   photoURL: Wilton,
    // },
  };

  return (
    <div>
      {authUser ? (
        <div className="d-flex flex-column flex-sm-row align-items-center gap-5">
          <img
            alt="Profile"
            src={
              users[authUser.displayName]?.photoURL ||
              authUser.photoURL ||
              Jessica
            }
            className="rounded-circle my-3"
            style={{ width: "100px", height: "100px" }}
          />
          {users[authUser.displayName] && (
            <span className="text-dark me-2">
              Welcome, {users[authUser.displayName].name}
            </span>
          )}
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
