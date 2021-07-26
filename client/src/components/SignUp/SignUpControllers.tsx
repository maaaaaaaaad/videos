import React from "react";
import { useContext } from "react";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "./SignUpContexts/SignUpContexts";

import SignUpView from "./SignUpView";

const SignUpControllers = () => {
  //
  const dispatch = useContext(SignUpDispatchContext);
  const state = useContext(SignUpStateContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
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

  return <SignUpView handleChange={handleChange} />;
};

export default SignUpControllers;
