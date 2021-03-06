import React, { useContext } from "react";
import { usersApiContext } from "../../api/user/UserApi";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../contexts/SignUpContexts";
import { SignInForm } from "../../types/sign/SignUpForm.type";
import LoginView from "./LoginForm";

const LoginControllers = () => {
  //
  const api = useContext(usersApiContext);
  const state = useContext(SignUpStateContext);
  const dispatch = useContext(SignUpDispatchContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //
    const signIn = state!.login! as SignInForm;

    try {
      await api.login(signIn);
      window.location.href = "/";
    } catch (error) {
      const ERROR_MESSAGE = "The user id or password do not match";
      window.alert(`Information error: ${ERROR_MESSAGE}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    const { name, value } = e.currentTarget;

    dispatch!({
      type: "SET_SIGNIN_FORM",
      login: {
        ...(state?.login as SignInForm),
        [name]: value,
      },
    });
  };

  return (
    <LoginView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default LoginControllers;
