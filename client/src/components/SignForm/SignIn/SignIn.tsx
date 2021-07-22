import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <FormSection>
      <TextInput placeholder="User ID" type="text" name="userId" />
      <TextInput placeholder="User Password" type="password" name="password" />
      <Submit type="submit" value="SIGN IN" name="signIn" />
    </FormSection>
  );
};

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TextInput = styled.input`
  width: 300px;
  height: 30px;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  margin-bottom: 5px;
  &:focus {
    border-bottom: 1px solid rgba(85, 83, 83, 0.3);
  }
`;

const Submit = styled.input`
  margin-top: 2rem;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: bold;
  background: #4c7cd6;
  color: white;
`;

export default SignIn;
