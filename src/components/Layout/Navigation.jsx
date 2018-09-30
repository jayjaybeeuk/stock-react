import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Stock Demo</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/stockListing">
        Stock Listing
      </NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
