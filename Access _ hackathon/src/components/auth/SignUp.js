import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="text-center text-light display-4 mb-4">
            Create Account
          </h1>
          <form onSubmit={signUp}>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                <FaUser className="me-2" />
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                autoFocus
                required
                title="Enter your First Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                <FaUser className="me-2" />
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
                title="Enter your Last Name"
              />
            </div>

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
              <p className="form-text" style={{ fontSize: "12px" }}>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="confirm_password" className="form-label">
                <FaLock className="me-2" />
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                placeholder="Confirm your Password"
                value={confirmPassword}
                required
                onChange={(event) => setConfirmPassword(event.target.value)}
                title="Confirm your password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
