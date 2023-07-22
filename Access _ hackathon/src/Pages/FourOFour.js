import { Link } from "react-router-dom";

function FourOFour() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4">Oops! Page not found</h1>
        <p className="lead">
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Please Visit Homepage
        </Link>
      </div>
    </div>
  );
}

export default FourOFour;
