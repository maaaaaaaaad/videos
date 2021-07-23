import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const history = useHistory();

  const handleSignUpRouter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/signup");
  };

  return <SignUpBtn onClick={handleSignUpRouter}>Create Account</SignUpBtn>;
};

const SignUpBtn = styled.button`
  padding: 0;
  margin-top: 2rem;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: underline;
  color: #4c7cd6;
`;

export default withRouter(SignUp);
