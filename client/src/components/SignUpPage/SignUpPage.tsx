import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../mediaQuery";
import { SignUpUserData } from "../../types/signUp.type";

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState<SignUpUserData>({
    //sample user data
    userId: "dummy",
    pass1: "123",
    pass2: "123",
    email: "123@gs.com",
    nickname: "www",
  });

  const [signUpId, setSignUpId] = useState<string>("");
  const [okSign, setOkSign] = useState<boolean>(false);

  const [onIdValidationBtn, setOnValidationBtn] = useState<boolean>(false);

  const handleChangedId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idValue = e.currentTarget.value;
    const idReg = /^[A-za-z0-9]{5,15}$/g;

    const test = idReg.test(idValue);

    if (test === true) {
      setOnValidationBtn(true);
    } else {
      setOnValidationBtn(false);
    }
  };

  const handleOnIdValBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //Call API
    console.log("Success ID format, call by API");
  };

  return (
    <>
      <Title theme={theme}>
        {/*Or Img*/}
        <h2>Welcome to VBN!</h2> Please create only your use account
      </Title>
      <SignFormSection>
        <Form>
          <Label htmlFor="id">
            <Name theme={theme}>Create ID</Name>
            <Input
              onChange={handleChangedId}
              theme={theme}
              type="text"
              id="id"
              name="id"
              placeholder="Numbers and(or) letters(5-15length)"
              autoComplete="off"
            />
            {onIdValidationBtn ? (
              <ValidationBtn onClick={handleOnIdValBtn} theme={theme}>
                ID Validation
              </ValidationBtn>
            ) : (
              <NotValidationBtn theme={theme}>ID Validation</NotValidationBtn>
            )}
          </Label>
          <Label htmlFor="password1">
            <Name theme={theme}>Set Password</Name>
            <Input
              theme={theme}
              type="password"
              id="password1"
              name="password1"
              placeholder="Password"
              autoComplete="off"
            />
          </Label>
          <Label htmlFor="password2">
            <Name theme={theme}>Val Password</Name>
            <Input
              theme={theme}
              type="text"
              id="password2"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
          </Label>
          <Label htmlFor="email">
            <Name theme={theme}>Email</Name>
            <Input
              theme={theme}
              type="email"
              id="email"
              name="email"
              placeholder="Please enter an email to verify"
              autoComplete="off"
            />
            <ValidationBtn theme={theme}>Email Validation</ValidationBtn>
          </Label>
          <Label htmlFor="nickname">
            <Name theme={theme}>Nickname</Name>
            <Input
              theme={theme}
              type="text"
              id="nickname"
              name="nickname"
              placeholder="Create a unique nickname."
              autoComplete="off"
            />
            <ValidationBtn theme={theme}>Nickname Validation</ValidationBtn>
          </Label>
        </Form>
        {okSign ? (
          <SignUpBtn theme={theme}>Sign up</SignUpBtn>
        ) : (
          <NotSignUpBtn theme={theme}>Not Sign</NotSignUpBtn>
        )}
      </SignFormSection>
    </>
  );
};

const Title = styled.header`
  border-radius: 10px;
  padding: 1rem;
  padding-bottom: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  background: #4c7cd6;
  color: white;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
    padding: 0.5rem;
    padding-bottom: 1.25rem;
  }
`;

const SignFormSection = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 1rem;
`;

const Name = styled.span`
  margin-right: 0.5rem;
  color: #928f8f;
  font-weight: bold;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 25px;
  text-align: center;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 0.5rem;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    width: 180px;
    height: 20px;
  }
`;

const ValidationBtn = styled.button`
  height: 28px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  background: #4c7cd6;
  color: white;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    height: 20px;
  }
`;

const NotValidationBtn = styled.span`
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  background: #4a4d53;
  color: white;
  opacity: 0.3;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    height: 20px;
  }
`;

const SignUpBtn = styled.button`
  margin-top: 3rem;
  padding: 0 20px 0 20px;
  height: 28px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  background: #4c7cd6;
  color: white;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    height: 20px;
  }
`;

const NotSignUpBtn = styled.button`
  margin-top: 3rem;
  padding: 0 20px 0 20px;
  height: 28px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  background: #4a4d53;
  color: white;
  opacity: 0.3;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
    height: 20px;
  }
`;

export default SignUpPage;
