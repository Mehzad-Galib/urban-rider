import { Link } from "react-router-dom";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="Container mr-5 ml-5" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to={`/home/`}>Peaceful Travel Planning</Navbar.Brand>
        <Nav className="mr-auto align-items-end">
          <Nav.Link as={Link} to={`/home/`}>Home</Nav.Link>
          <Nav.Link as={Link} to={`/details/1/`}>Destination</Nav.Link>
          <Button as={Link} to={`/login/`} variant="outline-info">Login</Button>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
