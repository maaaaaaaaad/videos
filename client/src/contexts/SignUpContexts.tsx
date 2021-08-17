import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import {
  Action,
  ChangePasswordForm,
  SignUpForm,
  SignUpFormDispatch,
  State,
  UpdateForm,
} from "../types/Sign/SignUpForm.type";

export const SignUpStateContext = createContext<State | null>(null);
export const SignUpDispatchContext = createContext<SignUpFormDispatch | null>(
  null
);

function signUpReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SIGNUP_FORM":
      return {
        ...(state.formInfo as SignUpForm),
        formInfo: action.formInfo,
      };

    case "SET_UPDATE_FORM":
      return {
        ...(state.formInfo as UpdateForm),
        formInfo: action.formInfo,
      };

    case "SET_CHANGE_PASSWORD":
      return {
        ...(state.formInfo as ChangePasswordForm),
        formInfo: action.formInfo,
      };

    default:
      throw new Error("Unhandle actions");
  }
}

const initSignUpForm: State = {
  formInfo: {
    userId: "",
    pass1: "",
    pass2: "",
    email: "",
    nickname: "",
    avatar: undefined,
  },
};

const SignUpContexts: React.FC = ({ children }) => {
  //
  const [state, dispatch] = useReducer(signUpReducer, initSignUpForm);

  return (
    <SignUpStateContext.Provider value={state}>
      <SignUpDispatchContext.Provider value={dispatch}>
        {children}
      </SignUpDispatchContext.Provider>
    </SignUpStateContext.Provider>
  );
};

export default SignUpContexts;
