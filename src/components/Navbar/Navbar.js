import React from "react";
// import { NavLink } from "react-router-dom";
import { Navlink } from "./NavbarStyles";
import { Navbar } from "./NavbarStyles";

const NavBar = () => {
  return (
    <Navbar>
      <Navlink to="/">Home</Navlink>
      <Navlink to="about">About</Navlink>
      <Navlink to="contact">Contact</Navlink>
    </Navbar>
  );
};

export default NavBar;
