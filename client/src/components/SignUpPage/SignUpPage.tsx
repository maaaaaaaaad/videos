import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../mediaQuery";
import { SignUpUserData } from "../../types/signUp.type";
import axios from "axios";

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState<SignUpUserData>({
    //sample user data
    userId: "dummy",
    pass1: "123",
    pass2: "123",
    email: "123@gs.com",
    nickname: "www",
  });

  const [checkingId, setCheckingId] = useState<string>("");
  const [firPassword, setFirPassword] = useState<string>("");
  const [secPassword, setSecPassword] = useState<string>("");
  const [okFirPassword, setOkFirPassword] = useState<boolean>(false);
  const [okSecPassword, setOkSecPassword] = useState<boolean>(false);
  const [saveId, setSaveId] = useState<string>("");
  const [okSign, setOkSign] = useState<boolean>(false);

  const [onIdValidationBtn, setOnidValidationBtn] = useState<boolean>(false);

  const handleChangedId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idValue = e.currentTarget.value;
    const idReg = /^[A-za-z0-9]{5,15}$/g;

    const test = idReg.test(idValue);

    if (test === true) {
      setOnidValidationBtn(true);
      setCheckingId(idValue);
    } else {
      setOnidValidationBtn(false);
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const firPassValue = e.currentTarget.value;
    const passReg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;

    const test = passReg.test(firPassValue);

    if (test === true) {
      setFirPassword(firPassValue);
      setOkFirPassword(true);
    } else {
      setOkFirPassword(false);
    }
  };

  const handleCheckingPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const secPassword = e.currentTarget.value;

    if (firPassword !== secPassword) {
      setOkSecPassword(false);
    }
    //
    else {
      setOkSecPassword(true);
      setSecPassword(secPassword);
    }
  };

  const handleOnIdValBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/users/validation/id", checkingId);

    window.alert(`Success validation to you ID: ${checkingId}`);
    setSaveId(checkingId);
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
              <>
                {saveId ? (
                  <SuccessValidation theme={theme}>
                    OK Validation
                  </SuccessValidation>
                ) : (
                  <ValidationBtn onClick={handleOnIdValBtn} theme={theme}>
                    ID Validation
                  </ValidationBtn>
                )}
              </>
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
              onChange={handleChangePassword}
            />
            <PasswordFormat theme={theme}>
              {okFirPassword ? (
                <FirPassWordSign theme={theme}>* Success!</FirPassWordSign>
              ) : (
                "At least 8 characters, including uppercase and special characters"
              )}
            </PasswordFormat>
          </Label>
          <Label htmlFor="password2">
            <Name theme={theme}>Val Password</Name>
            <Input
              theme={theme}
              type="password"
              id="password2"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleCheckingPassword}
            />
            <PasswordFormat theme={theme}>
              {okSecPassword ? (
                <SecPassWordSign theme={theme}>
                  * Your password has been verified!
                </SecPassWordSign>
              ) : (
                "Please enter the same password"
              )}
            </PasswordFormat>
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

const NotSignUpBtn = styled.span`
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

const SuccessValidation = styled.span`
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

const PasswordFormat = styled.div`
  margin-left: 6rem;
  margin-top: 3px;
  padding: 0;
  font-size: 11px;
  color: #4a4d53;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 5px;
  }
`;

const FirPassWordSign = styled.span`
  margin-top: 3px;
  padding: 0;
  font-size: 11px;
  font-weight: bold;
  color: #4c7cd6;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 5px;
  }
`;

const SecPassWordSign = styled.span`
  margin-top: 3px;
  padding: 0;
  font-size: 11px;
  font-weight: bold;
  color: #4c7cd6;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 5px;
  }
`;

export default SignUpPage;
