import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  background: gray;
  display: flex;
  justify-content: space-between;
`;

export const Navbar = styled.div`
  height: 10vh;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const NavHeading = styled.h1`
  display: flex;
`;

export const Navlink = styled(NavLink)`
  padding-right: 1rem;
  text-decoration: none;
  color: aquamarine;
`;
