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

    const signUpFormData = new FormData();
    signUpFormData.append("userId", state!.formInfo.userId);
    signUpFormData.append("pass1", state!.formInfo.pass1);
    signUpFormData.append("pass1", state!.formInfo.pass2);
    signUpFormData.append("email", state!.formInfo.email);
    signUpFormData.append("nickname", state!.formInfo.nickname);

    state?.formInfo.avatarImg &&
      signUpFormData.append("avatar", state!.formInfo.avatarImg);

    try {
      const res = await PostSignUp(signUpFormData);
      console.log(res.data);
      history.push("/login");
    } catch (error) {
      window.alert(`This user id or email or nickname is already taken.`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.currentTarget;

    dispatch!({
      type: "SET_FORM",
      formInfo: {
        ...state!.formInfo,
        [name]: value,
        avatarImg: files ? files[0] : null,
      },
    });

    console.log(state?.formInfo);
  };

  return (
    <SignUpView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default SignUpControllers;
