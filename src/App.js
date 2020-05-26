import React from "react";
import "./sass/style.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/Homepage";
import ContactForm from "./components/contact/ContactUs";
import AdminLogin from "./components/admin/AdminLogin";
import HotelSpecific from "./components/hotelresult/HotelSpecific";
import HotelList from "./components/hotels/HotelList";
import BookHotel from "./components/enquiry/BookHotel";

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
              <Route exact path="/contact" component={ContactForm} />
              <Route path="/admin" component={AdminLogin} />
              <Route path="/hotelspecific/:id" component={HotelSpecific}></Route>
              <Route path="/hotellist" component={HotelList}></Route>
              <Route path="/bookhotel/:id" component={BookHotel}></Route>
          </Switch>
    </Router>
    )
  }

export default App;
