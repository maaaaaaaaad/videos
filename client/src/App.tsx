import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Navigator from "./components/Navigator/Navigator";
import Routers from "./routes/Routers";

const App = () => {
  return (
    <BrowserRouter>
      <AppSection>
        <AppNav>
          <Navigator />
        </AppNav>
        <Routers />
      </AppSection>
    </BrowserRouter>
  );
};

const AppSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppNav = styled.nav`
  border-bottom: 1px solid #0855e2;
  padding: 10px 0 10px 0;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  background: #4c7cd6;
`;

export default App;
