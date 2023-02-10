import React from "react";
// import { NavLink } from "react-router-dom";
import { Navlink } from "./NavbarStyles";
import { NavContainer, Navbar, NavHeading } from "./NavbarStyles";

const NavBar = () => {
  return (
    <NavContainer>
      <NavHeading>Navbar</NavHeading>
      <Navbar>
        <Navlink to="/">Home</Navlink>
        <Navlink to="about">About</Navlink>
        <Navlink to="contact">Contact</Navlink>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;
