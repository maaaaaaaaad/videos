import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../mediaQuery";
import NaviSearch from "./Navi-Search/NaviSearch";

const Navigator = () => {
  return (
    <NaviSection theme={theme}>
      Logo
      <Link to="/">
        <NaviItem>Home</NaviItem>
      </Link>
      <Link to="/login">
        <NaviItem>Login</NaviItem>
      </Link>
      <Link to="/signup">
        <NaviItem>Sign up</NaviItem>
      </Link>
      <NaviSearch />
    </NaviSection>
  );
};

const NaviSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
  }
`;

const NaviItem = styled.nav`
  color: white;
  font-weight: bold;
`;

export default Navigator;
