import React from "react";
import styled from "styled-components";
import Form from "./components/SignForm/Form";

const App = () => {
  return (
    <AppSection>
      <Form />
    </AppSection>
  );
};

const AppSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
