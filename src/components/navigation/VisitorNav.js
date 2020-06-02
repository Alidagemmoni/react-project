import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useHistory } from "react-router-dom";

const VisitorNav = () => {
    const history = useHistory();
    
    const logout = () => {
        let user = JSON.parse(localStorage.getItem('credential'));
        user && (user.isAuthenticated = false);
        console.log(user)
        localStorage.setItem('credential', JSON.stringify(user));
        history.push('/admin');
    }

    return (
        <Navbar className="bground" expand="lg">
            <Navbar.Brand href="/">
            <img  
                src="/holidazelogo.svg"
                width="120"
                className="d-inline-block align-top"
                alt="Holidaze Logo"
            />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Link className="nav-link" to={'/'}>Home</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" to={'/contact'}>Contact</Link>
                </Nav>
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <Link className="ml-2" style={{color: "black"}} to={'/admin'}>Log in</Link>
                    <br/>
                    <Link className="ml-2" style={{color: "black"}} onClick={logout} to={'/admin'}>Log out</Link>
            </NavDropdown>
            </Navbar.Collapse>
      </Navbar>
    )
}

export default VisitorNav;