import { Dispatch } from "react";

export type SignUpForm = {
  userId: string;
  pass1: string;
  pass2: string;
  email: string;
  nickname: string;
  avatar: File | undefined;
};

export type UpdateForm = Pick<SignUpForm, "email" | "nickname" | "avatar">;

export type State = {
  formInfo: SignUpForm | UpdateForm;
};

export type Action = { type: "SET_FORM"; formInfo: SignUpForm | UpdateForm };

export type SignUpFormDispatch = Dispatch<Action>;
