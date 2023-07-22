import { Link } from "react-router-dom";

function FourOFour() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Page not found</h1>
      <p>
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link to="/">Please Visit Homepage</Link>
    </div>
  );
}

export default FourOFour;
