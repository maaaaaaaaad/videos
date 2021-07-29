import { Dispatch } from "react";

export type SignInData = {
  id: string;
  pass: string;
};

export type SignInToggle = {
  toggle: boolean;
  nickname: string;
  sessionId: string | null;
};

export type State = {
  userSignInData: SignInData;
  userSignInToggle: SignInToggle;
};

export type Action =
  | { type: "SET_LOGIN"; userSignInData: SignInData }
  | { type: "SET_TOGGLE"; userSignInToggle: SignInToggle };

export type UserSignInDispatch = Dispatch<Action>;
