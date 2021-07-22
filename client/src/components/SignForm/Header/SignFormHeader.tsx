import React from "react";
import styled from "styled-components";
import signFormHeaderLogo from "./signFormHeaderLogo.jpeg";

const SignFormHeader = () => {
  return <HeaderImg src={signFormHeaderLogo} alt="signFormHeaderLogo" />;
};

const HeaderImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20%;
  margin-bottom: 1rem;
`;

export default SignFormHeader;
