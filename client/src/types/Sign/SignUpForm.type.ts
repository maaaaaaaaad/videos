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
export type SignInForm = Pick<SignUpForm, "userId" | "pass2">;
export type ChangePasswordForm = Pick<SignUpForm, "pass1" | "pass2">;

export type State = {
  formInfo?: SignUpForm | UpdateForm | ChangePasswordForm;
  login?: SignInForm;
};

export type Action =
  | {
      type: "SET_SIGNUP_FORM";
      formInfo: SignUpForm;
    }
  | {
      type: "SET_SIGNIN_FORM";
      login: SignInForm;
    }
  | {
      type: "SET_UPDATE_FORM";
      formInfo: UpdateForm;
    }
  | {
      type: "SET_CHANGE_PASSWORD";
      formInfo: ChangePasswordForm;
    };

export type SignUpFormDispatch = Dispatch<Action>;
