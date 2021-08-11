import { Dispatch } from "react";

export type SignUpForm = {
  userId: string;
  pass1: string;
  pass2: string;
  email: string;
  nickname: string;
};

export type State = {
  formInfo: SignUpForm;
};

export type Action = { type: "SET_FORM"; formInfo: SignUpForm };

export type SignUpFormDispatch = Dispatch<Action>;
