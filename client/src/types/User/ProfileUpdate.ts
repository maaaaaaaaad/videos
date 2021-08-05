import { Dispatch } from "react";

export type ProfileUpdateForm = {
  email: string;
  nickname: string;
};

export type State = {
  formInfo: ProfileUpdateForm;
};

export type Action = { type: "EDIT_FORM"; formInfo: ProfileUpdateForm };

export type UpdateFormDispatch = Dispatch<Action>;
