import React from "react";
import styled from "styled-components";

const SignUp = () => {
  //Then onClick btn, history push "/signup"

  return <SignUpBtn>Create Account</SignUpBtn>;
};

const SignUpBtn = styled.button`
  padding: 0;
  margin-top: 2rem;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: underline;
  color: #147ee0;
`;

export default SignUp;
