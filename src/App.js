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
import AdminComps from "./components/admin/AdminComps";
import Enquiry from "./components/admin/enquiry/Enquiry";

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
              <Route exact path="/admin" component={AdminLogin} />
              <Route exact path="/hotelspecific/:id" component={HotelSpecific}></Route>
              <Route exact path="/hotellist" component={HotelList}></Route>
              <Route exact path="/bookhotel/:id" component={BookHotel}></Route>
              <Route exact path="/admin" component={AdminComps}></Route>
              <Route exact path="/admin/enquiries" component={Enquiry}></Route>
          </Switch>
    </Router>
    )
  }

export default App;
