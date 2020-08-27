import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import PlaceHolder from "./PlaceHolder";
import { Switch, Link } from "react-router-dom";
import Logo from "./Logo";

import "../Styles/navbar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarBrand,
  MDBNavbarNav,
} from "mdbreact";
import Footer from "./Footer";

function Navbar() {
  return (
    <Router>
      <MDBContainer className="navbar__container navbar">
        <MDBNavbar className="navbar">
          <MDBContainer className="navbar__container">
            <MDBNavbarBrand className="navbar__Brand">
              <Link to="/"> <Logo /> </Link>
            </MDBNavbarBrand>
            <MDBNavbarNav className="navbar__LinkContainer">
              <MDBNavItem className="navbar__Link">
                <MDBNavLink id="navbar__Link" to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navbar__Link">
                <MDBNavLink id="navbar__Link" to="/NewPage">Link</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/NewPage" component={PlaceHolder} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Navbar;
