import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {

    return(
        <nav className="nav-bar">

                <Link className="petition-link" to="/petition">
                    File a new Petiton
                </Link>

            <br></br>

                <Link className="city-council-link" to="/city-council">
                    City Council
                </Link>

            <br></br>

                <Link className="resources-link" to="/resources">
                    Resources
                </Link>

            <br></br>

            <Link className="profile-link" to="/profile">
                    Profile
                </Link>

            <br></br>


        </nav>
    )
}