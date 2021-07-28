import React, { useContext } from "react";
import {
  SignInDispatch,
  SignInStateContext,
} from "./LoginContexts/LoginContext";
import LoginView from "./LoginView";

const LoginControllers = () => {
  //
  const dispatch = useContext(SignInDispatch);
  const state = useContext(SignInStateContext);

  const handleSubmitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.name);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    dispatch!({
      type: "SET_LOGIN",
      userSignInData: {
        ...state!.userSignInData,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });

    console.log(state?.userSignInData);
  };

  return (
    <LoginView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default LoginControllers;
