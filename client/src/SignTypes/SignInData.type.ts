import { Dispatch } from "react";

export type SignInData = {
  id: string;
  pass1: string;
  pass2: string;
};

export type SignInToggle = {
  toggle: boolean;
};

export type State = {
  userSignInData: SignInData;
  userSignInToggle: SignInToggle;
};

export type Action =
  | { type: "SET_LOGIN"; userSignInData: SignInData }
  | { type: "SET_TOGGLE"; userSignInToggle: SignInToggle };

export type UserSignInDispatch = Dispatch<Action>;
