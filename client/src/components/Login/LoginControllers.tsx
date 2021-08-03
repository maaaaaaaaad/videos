import React, { useContext } from "react";
import { PostLogin } from "../../api/user/signIn";
import {
  SignInDispatch,
  SignInStateContext,
} from "../../contexts/LoginContext";
import LoginView from "./LoginView";

const LoginControllers = () => {
  //

  const dispatch = useContext(SignInDispatch);
  const state = useContext(SignInStateContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await PostLogin(state!.userSignInData);
      dispatch!({
        type: "SET_TOGGLE",
        userSignInToggle: {
          toggle: true,
        },
      });

      window.location.href = "/";
    } catch (error) {
      const ERROR_MESSAGE = "The user id or password do not match";
      window.alert(`Information error: ${ERROR_MESSAGE}`);
    }
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
  };

  return (
    <LoginView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default LoginControllers;
