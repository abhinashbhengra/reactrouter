import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
  background: gray;
  height: 10vh;
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const Navlink = styled(NavLink)`
  padding-right: 1rem;
  text-decoration: none;
`;
