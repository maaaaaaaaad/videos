import { Dispatch } from "react";

export type SignInData = {
  userId: string;
  pass2: string;
};

export type State = {
  userSignInData: SignInData;
};

export type Action = { type: "SET_LOGIN"; userSignInData: SignInData };

export type UserSignInDispatch = Dispatch<Action>;
