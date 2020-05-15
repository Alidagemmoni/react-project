import React from 'react';
import "./sass/style.scss";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import ContactPage from "./components/contact/ContactPage";
import AdminLogin from "./components/admin/AdminLogin";
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <Router>
      <Navbar className="bground" expand="lg">
      <Navbar.Brand  href="/">
        <Image src="HolidazeLogo.svg/100px250" fluid />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
        <Nav.Link className="nav-link" href="/contact/">Contact</Nav.Link>
        <Nav.Link className="nav-link" href="/admin/">Admin Login</Nav.Link>
      </Nav>
      </Navbar>
      <Container>
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/contact/:id" component={ContactPage} />
              <Route path="/admin" component={AdminLogin} />
          </Switch>
      </Container>
    </Router>
    )
  }

export default App;