import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const AdminNav = () => {
    const logout = () => {
        let user = JSON.parse(localStorage.getItem('credential'));
        user && (user.isAuthenticated = false);
        console.log(user)
        localStorage.setItem('credential', JSON.stringify(user));
        window.location.replace('/admin');
    }
    return (
        <Navbar className="bground" expand="lg">
            <Navbar.Brand>
                <Link to="/admincomp">
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
                    <Link className="nav-link" to={'/admin/establishments'}>Establishments</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" to={'/admin/createestb'}>Create establishment</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" to={'/admin/message'}>Messages</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" onClick={logout} to={'/admin'}>Log out</Link>
                </Nav>  
            </Navbar.Collapse>
      </Navbar>
    )

}

export default AdminNav;