import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostSignUp } from "../../api/user/signUp";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../contexts/SignUpContexts";

import SignUpView from "./SignUpView";

const SignUpControllers = () => {
  const history = useHistory();
  const dispatch = useContext(SignUpDispatchContext);
  const state = useContext(SignUpStateContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    //
    e.preventDefault();

    const signUpFormData = state?.formInfo;

    try {
      if (signUpFormData) {
        const res = await PostSignUp(signUpFormData);
        console.log(res.data);
        history.push("/login");
      }
    } catch (error) {
      window.alert(`This user id or email or nickname is already taken.`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    dispatch!({
      type: "SET_FORM",
      formInfo: {
        ...state!.formInfo,
        [name]: value,
      },
    });
  };

  return (
    <SignUpView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default SignUpControllers;
