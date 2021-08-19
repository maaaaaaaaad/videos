import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { PostSignUp } from "../../api/user/signUp";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../contexts/SignUpContexts";
import { SignUpForm } from "../../types/Sign/SignUpForm.type";

import SignUpView from "./SignUpView";

const SignUpControllers = () => {
  //
  const dispatch = useContext(SignUpDispatchContext);
  const state = useContext(SignUpStateContext);
  const [loadingSpanner, setLoadingSpanner] = useState<boolean>(false);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    //
    e.preventDefault();

    if (state?.formInfo) {
      const formData = new FormData();
      formData.append("userId", (state.formInfo! as SignUpForm).userId);
      formData.append("pass1", (state.formInfo! as SignUpForm).pass1);
      formData.append("pass2", (state.formInfo! as SignUpForm).pass2);
      formData.append("email", (state.formInfo! as SignUpForm).email);
      formData.append("nickname", (state.formInfo! as SignUpForm).nickname);
      formData.append("avatar", (state.formInfo! as SignUpForm).avatar!);

      try {
        const res = await PostSignUp(formData);
        console.log(res.data);
        window.location.href = "/login";
      } catch (error) {
        window.alert(`This user id or email or nickname is already taken.`);
      }
    }
  };

  const handleCheckEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userEmail = (state!.formInfo as SignUpForm).email;
    const RegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/;

    const emailInspect = RegExp.test(userEmail);

    if (emailInspect === true) {
      const body = {
        email: userEmail,
      };

      try {
        setLoadingSpanner(true);
        const res = await axios.post(
          "http://localhost:5000/users/email-authentication",
          body,
          { withCredentials: true }
        );
        setLoadingSpanner(false);

        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      window.alert("Please you check email format");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.currentTarget;

    dispatch!({
      type: "SET_SIGNUP_FORM",
      formInfo: {
        ...(state!.formInfo! as SignUpForm),
        [name]: files ? files[0] : value,
      },
    });
  };

  return (
    <SignUpView
      handleChange={handleChange}
      handleSubmitBtn={handleSubmitBtn}
      handleCheckEmail={handleCheckEmail}
      loadingSpanner={loadingSpanner}
    />
  );
};

export default SignUpControllers;
