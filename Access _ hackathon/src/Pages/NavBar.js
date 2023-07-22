import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {

    return(
        <nav className="nav-bar">

                <Link className="e-waste-link" to="/ewaste">
                    E-Waste
                </Link>

            <br></br>

                <Link className="food-waste-link" to="/foodwaste">
                    Food Waste
                </Link>

            <br></br>

                <Link className="pharma-link" to="/pharma">
                    Pharmaceuticals/Syringes
                </Link>

            <br></br>


        </nav>
    )
}