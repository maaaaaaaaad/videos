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
export type ChangePasswordForm = Pick<SignUpForm, "pass1" | "pass2">;

export type State = {
  formInfo: SignUpForm | UpdateForm | ChangePasswordForm;
};

export type Action = {
  type: "SET_FORM";
  formInfo: SignUpForm | UpdateForm | ChangePasswordForm;
};

export type SignUpFormDispatch = Dispatch<Action>;
