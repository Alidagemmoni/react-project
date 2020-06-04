import React from "react";
import "./sass/style.scss";
import VisitorNav from "./components/navigation/VisitorNav";
import AdminNav from "./components/navigation/AdminNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/Homepage";
import ContactForm from "./components/contact/ContactUs";
import AdminSignup from "./components/admin/AdminSignup";
import HotelSpecific from "./components/hotelresult/HotelSpecific";
import HotelList from "./components/hotels/HotelList";
import BookHotel from "./components/enquiry/BookHotel";
import AdminComps from "./components/admin/AdminComps";
import AllEstablishments from "./components/admin/establishment/AllEstablishments";
import Messages from "./components/admin/message/Messages";
import AdminLogin from "./components/admin/login/AdminLogin";
import MessageDetail from "./components/admin/message/MessageDetail";
import CreateEstb from "./components/admin/establishment/CreateEstb";

function App() {
  return (
    <Router>
      <VisitorNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/admin-signup" component={AdminSignup} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/hotelspecific/:id" component={HotelSpecific} />
        <Route exact path="/hotellist" component={HotelList} />
        <Route exact path="/bookhotel/:id" component={BookHotel} />
        <Route exact path="/admincomp" component={AdminComps} />
        <Route exact path="/admin/establishments" component={AllEstablishments} />
        <Route exact path="/admin/message" component={Messages} />
        <Route exact path="/admin/messagedetail" component={MessageDetail} />
        <Route exact path="/admin/createestb" component={CreateEstb} />
      </Switch>
    </Router>
  )
}

export default App;
