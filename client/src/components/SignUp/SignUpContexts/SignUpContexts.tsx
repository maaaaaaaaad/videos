import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import {
  Action,
  SignUpFormDispatch,
  State,
} from "../SignUpTypes/SignUpForm.type";

export const SignUpStateContext = createContext<State | null>(null);
export const SignUpDispatchContext = createContext<SignUpFormDispatch | null>(
  null
);

function signUpReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FORM":
      return {
        ...state,
        formInfo: action.formInfo,
      };
    case "SAVE_FORM":
      return {
        ...state,
        signUpData: action.signUpData,
      };
    default:
      throw new Error("Unhandle actions");
  }
}

const intiSignUpForm: State = {
  formInfo: {
    id: "",
    pass1: "",
    pass2: "",
    email: "",
    nickname: "",
  },
  signUpData: {
    userId: "",
    userEmail: "",
    userNickname: "",
  },
};

const SignUpContexts: React.FC = ({ children }) => {
  //
  const [state, dispatch] = useReducer(signUpReducer, intiSignUpForm);

  return (
    <SignUpStateContext.Provider value={state}>
      <SignUpDispatchContext.Provider value={dispatch}>
        {children}
      </SignUpDispatchContext.Provider>
    </SignUpStateContext.Provider>
  );
};

export default SignUpContexts;
