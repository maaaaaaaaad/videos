import React from "react";
import styled from "styled-components";
import theme from "../../../mediaQuery";
import signFormHeaderLogo from "./signFormHeaderLogo.jpeg";

const SignFormHeader = () => {
  return (
    <HeaderImg
      theme={theme}
      src={signFormHeaderLogo}
      alt="signFormHeaderLogo"
    />
  );
};

const HeaderImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20%;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.device.mobile} {
    width: 150px;
    height: 150px;
  }
`;

export default SignFormHeader;
