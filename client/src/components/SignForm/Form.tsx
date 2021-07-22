import React from "react";
import styled from "styled-components";
import SignFormHeader from "./Header/SignFormHeader";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUpBtn/SignUpBtn";

const Form = () => {
  return (
    <FormSection>
      <SignFormHeader />
      <SignIn />
      <SignUp />
    </FormSection>
  );
};

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Form;
