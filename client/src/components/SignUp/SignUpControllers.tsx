import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { authUserEmail } from "../../api/auth/email";
import { PostSignUp } from "../../api/user/signUp";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../contexts/SignUpContexts";
import { Email } from "../../types/auth/email.type";
import { idCheck } from "../../types/auth/id.auth";
import { SignUpForm } from "../../types/Sign/SignUpForm.type";

import SignUpView from "./SignUpView";

const SignUpControllers = () => {
  //
  const dispatch = useContext(SignUpDispatchContext);
  const state = useContext(SignUpStateContext);
  const [loadingSpanner, setLoadingSpanner] = useState<boolean>(false);
  const [checkId, setCheckId] = useState<string | null>(null);
  const [emailKey, setEmailKey] = useState<string | null>(null);
  const [inputEmailKey, setInputEmailKey] = useState<string | null>(null);
  const [okEmail, setOkEmail] = useState<boolean>(false);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
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
        if (!okEmail) {
          return window.alert("Please authentication your email");
        }

        if (checkId === "Successfully") {
          const res = await PostSignUp(formData);
          console.log(res.data);
          window.location.href = "/login";
        }
      } catch (error) {
        window.alert(error.message);
      }
    }
  };

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userEmail = (state!.formInfo as SignUpForm).email;
    const RegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{3}$/;

    const emailInspect = RegExp.test(userEmail);

    if (emailInspect === true) {
      const body: Email = {
        email: userEmail,
      };

      try {
        setLoadingSpanner(true);
        const res = await authUserEmail(body);
        setLoadingSpanner(false);

        window.alert(`Send message you email: ${userEmail}`);

        console.log("User secret key: " + res.data.secret_key);
        setEmailKey(String(res.data.secret_key));
      } catch (error) {
        console.log(error.message);
        setEmailKey(null);
      }
    } else {
      window.alert("Please you check email format");
    }
  };

  const handleSignEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailKey !== inputEmailKey) {
      return window.alert("Email key does not match");
    }

    setEmailKey(null);
    setOkEmail(true);
  };

  const handleEmailKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    const value = e.currentTarget.value;
    setInputEmailKey(value);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.currentTarget;

    switch (name) {
      case "userId":
        const res = await idCheck(value);
        setCheckId(res);
        break;
    }

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
      checkId={checkId}
      handleSendEmail={handleSendEmail}
      handleEmailKey={handleEmailKey}
      handleSignEmail={handleSignEmail}
      loadingSpanner={loadingSpanner}
      emailKey={emailKey}
      okEmail={okEmail}
    />
  );
};

export default SignUpControllers;
