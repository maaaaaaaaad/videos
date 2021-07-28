import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostLogin } from "./api/signIn";
import {
  SignInDispatch,
  SignInStateContext,
} from "./LoginContexts/LoginContext";
import LoginView from "./LoginView";

const LoginControllers = () => {
  //
  const history = useHistory();
  const dispatch = useContext(SignInDispatch);
  const state = useContext(SignInStateContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      state?.userSignInData.id === "" ||
      (state?.userSignInData.pass1 === "" && state.userSignInData.pass2 === "")
    ) {
      window.alert("Please fill sign in data");
    }

    if (state?.userSignInData.pass1 !== state?.userSignInData.pass2) {
      window.alert("Password does not match");
    }

    try {
      const res = await PostLogin(state!.userSignInData);
      dispatch!({
        type: "SET_TOGGLE",
        userSignInToggle: {
          toggle: true,
          nickname: res.data.result.nickname,
        },
      });
      history.push("/");
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
