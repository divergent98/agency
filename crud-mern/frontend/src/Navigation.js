import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
export const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const burger = document.querySelector(".burger");
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    burger.classList.toggle("active");
  };
  return (
    <div className="nav-bar background-dark-gray">
      <Navbar className="hidden-big-screen bg-transparent z-index-3">
        <NavbarBrand href="/" className="me-auto">
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
        <div onClick={toggleNavbar} className="me-2 border-0 burger">
          <span></span>
        </div>
        <Collapse isOpen={!collapsed} navbar className="mobile-menu">
          <Nav navbar>
            <NavItem>
              <Link className="btn w-100" to="/BlogPosts">
                <span className="custom-link">Blog</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="btn w-100">
                <span className="custom-link">Special Offers</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="btn w-100">
                <span className="custom-link">Hot Tours</span>
              </Link>
            </NavItem>
     
            <NavItem>
              <Link
                to="/Login"
                className="btn rounded-0 text-light custom-button w-100"
              >
                Login
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Navbar className="text-light navigation-home hidden-small-screen z-index-3 container">
        <NavbarBrand className="text-light" href="/">
        {" "}
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
        <div>
          <Nav className="align-items-right">
            <NavItem>
              <Link
                className="btn text-light mx-3 roboto font-18"
                to="/BlogPosts"
              >
                <span className="custom-link">Blog</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="btn text-light mx-3 roboto font-18" to="/SpecialOffer">
                <span className="custom-link">Special Offers</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="btn text-light mx-3 roboto font-18" to='/HotTours'>
                <span className="custom-link">Hot Tours</span>
              </Link>
            </NavItem>
         
            <NavItem className="ms-5 ">
              <Link to="/Login">
                <div className="custom-button link-button roboto font-18">
                  Login
                </div>
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};
