import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const VisitorNav = () => {

    return (
        <Navbar className="bground" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    <img  
                        src="/holidazelogo.svg"
                        width="150"
                        className="d-inline-block align-top"
                        alt="Holidaze Logo"
                    />
            </Link>
            </Navbar.Brand> 
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Link className="nav-link" to={'/'}>Home</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" to={'/contact'}>Contact</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" to={'/admin'}>Admin Login</Link>
                </Nav> 
            </Navbar.Collapse>
      </Navbar>
    )
}

export default VisitorNav;