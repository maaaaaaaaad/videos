import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NaviSearch from "./Navi-Search/NaviSearch";

const Navigator = () => {
  return (
    <NaviSection>
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
`;

const NaviItem = styled.nav`
  color: white;
  font-weight: bold;
`;

export default Navigator;
