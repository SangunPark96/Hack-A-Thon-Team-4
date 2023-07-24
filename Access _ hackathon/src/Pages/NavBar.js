import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/style.css";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      data-bs-theme="light"
      className="border-bottom custom-navbar"
    >
      <Container>
        <Nav className="me-auto navbar-links">
          <Nav.Link as={Link} to="/" className="me-2">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/council" className="me-2">
            City Council Reps
          </Nav.Link>

          <Nav.Link as={Link} to="/profile" className="me-2">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/resources" className="me-2">
            Resources
          </Nav.Link>
        </Nav>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar; //#377CA3ff
