import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { userProvider } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
const Header = () => {
  const { user,logOut } = useContext(userProvider);


  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success("log out done")
    })
    .catch(err => {
      toast.err(err.message)
    })
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/rooms">Rooms</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
          <Nav>
            {user && <Nav.Link>Welcome, {user.displayName}</Nav.Link>}
            {user ? (
              <button onClick={handleLogOut} className="btn text-white">Log Out</button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
