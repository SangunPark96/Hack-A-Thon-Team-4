import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/index");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function google() {
    signInWithRedirect(auth, provider);
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="text-center text-light display-4 mb-4">Sign in</h1>
          <form onSubmit={signIn}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <FaEnvelope className="me-2" />
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
                required
                title="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <FaLock className="me-2" />
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your Password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
                title="Enter your password"
              />
              <p className="form-text" style={{ fontSize: "14px" }}>
                Use 8 or more characters with letters, numbers &
                symbols
              </p>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>
          </form>
          <div className="text-center border-top border-1 my-3">Or</div>
          <div className="d-grid gap-2">
            <button
              type="button"
              onClick={google}
              className="btn btn-primary w-100"
            >
              Sign In With Google
            </button>
          </div>

          <p className="mt-4 text-lg text-center">
            Don't have an account?{" "}
            <Link
              to="/SignUp"
              className="font-medium text-light text-decoration-none"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
