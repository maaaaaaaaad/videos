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

    if (state?.formInfo) {
      const formData = new FormData();
      formData.append("userId", state.formInfo.userId);
      formData.append("pass1", state.formInfo.pass1);
      formData.append("pass2", state.formInfo.pass2);
      formData.append("email", state.formInfo.email);
      formData.append("nickname", state.formInfo.nickname);
      formData.append("avatar", state.formInfo.avatar!);

      try {
        const res = await PostSignUp(formData);
        console.log(res.data);
        history.push("/login");
      } catch (error) {
        window.alert(`This user id or email or nickname is already taken.`);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.currentTarget;

    dispatch!({
      type: "SET_FORM",
      formInfo: {
        ...state!.formInfo,
        [name]: files ? files[0] : value,
      },
    });
  };

  return (
    <SignUpView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default SignUpControllers;
