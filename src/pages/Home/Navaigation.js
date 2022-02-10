import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { logOut, user } = useAuth()
  return (
    <Navbar className="custome-bg w-100" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Hostel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/*  <Link to='/dashboard'>Dashboard </Link> 
            <Link to='/home'> Home </Link>
            <Link to='/login'> Login </Link>
            <Link to='/foods'>Order Food </Link>
            <p onClick={logOut}> Logout </p>
            <Link to='/home'> {user?.displayName} </Link> */}
            <Nav.Link as={Link} to="/home" className="text-white nav_link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-white nav_link">
              Admin
            </Nav.Link>
          </Nav>

          <Nav.Link as={Link} className="text-white nav_link" to="/foods">
            Order Foods
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <div className="login-or-signup">
              <button className="login-btn" onClick={logOut}>Log Out</button>
            </div>
          </Nav.Link>
          {user?.displayName && <Nav.Link as={Link} to="/home">
            <div className="login-or-signup">
              <button className="login-btn">{user?.displayName}</button>
            </div>
          </Nav.Link>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
