import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HomeMain>Main content</HomeMain>
      <HomeFooter>© Videos Books Notes by Woong</HomeFooter>
    </>
  );
};

const HomeMain = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
`;

const HomeFooter = styled.footer`
  border-top: 1px solid #0855e2;
  text-align: center;
  color: white;
  width: 100%;
  background: #4c7cd6;
  font-size: 12px;
`;

export default Home;
