import React from 'react';
import "./sass/style.scss";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/Homepage";
import ContactPage from "./components/contact/ContactPage";
import AdminLogin from "./components/admin/AdminLogin";
import HotelSpecific from './components/hotelresult/HotelSpecific';

function App() {
  return (
    <Router>
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
        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
        <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
        <Nav.Link className="nav-link" href="/admin">Admin Login</Nav.Link>
      </Navbar.Collapse>
      </Navbar>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/contact/:id" component={ContactPage} />
              {/* <Route path="/admin" component={AdminLogin} /> */}
              <Route path="/hotelspecific/:id" component={HotelSpecific}></Route>
          </Switch>
    </Router>
    )
  }


export default App;