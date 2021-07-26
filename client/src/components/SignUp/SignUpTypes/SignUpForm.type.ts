import { Dispatch } from "react";

export type SignUpForm = {
  id: string;
  pass1: string;
  pass2: string;
  email: string;
  nickname: string;
};

export type SignUpCompleted = {
  userId: string;
  userEmail: string;
  userNickname: string;
};

export type State = {
  formInfo: SignUpForm;
  signUpData: SignUpCompleted;
};

export type Action =
  | { type: "SET_FORM"; formInfo: SignUpForm }
  | { type: "SAVE_FORM"; signUpData: SignUpCompleted };

export type SignUpFormDispatch = Dispatch<Action>;
