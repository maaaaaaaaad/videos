import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostSignUp } from "./api/signUp";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "./SignUpContexts/SignUpContexts";

import SignUpView from "./SignUpView";

const SignUpControllers = () => {
  const history = useHistory();
  const dispatch = useContext(SignUpDispatchContext);
  const state = useContext(SignUpStateContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;

    dispatch!({
      type: "SET_FORM",
      formInfo: {
        ...state!.formInfo,
        [name]: value,
      },
    });
  };

  const handleSignUpBtn: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    //
    e.preventDefault();
    try {
      await PostSignUp(state!);
      history.push("/");
    } catch (error) {
      window.alert(`This user id or email or nickname is already taken.`);
    }
  };

  return (
    <SignUpView handleChange={handleChange} handleSignUpBtn={handleSignUpBtn} />
  );
};

export default SignUpControllers;
