import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import {
  Action,
  State,
  UserSignInDispatch,
} from "../types/Sign/SignInData.type";

export const SignInStateContext = createContext<State | null>(null);
export const SignInDispatch = createContext<UserSignInDispatch | null>(null);

function loginReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        userSignInData: action.userSignInData,
      };
    default:
      throw new Error("Unhandle actions");
  }
}

const initSignState: State = {
  userSignInData: {
    userId: "",
    pass2: "",
  },
};

const LoginContext: React.FC = ({ children }) => {
  //
  const [state, dispatch] = useReducer(loginReducer, initSignState);

  return (
    <SignInStateContext.Provider value={state}>
      <SignInDispatch.Provider value={dispatch}>
        {children}
      </SignInDispatch.Provider>
    </SignInStateContext.Provider>
  );
};

export default LoginContext;
