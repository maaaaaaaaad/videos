import { Dispatch } from "react";

export type ProfileUpdateForm = {
  nickname: string;
  email: string;
  avatar?: File;
};

export type State = {
  formInfo: ProfileUpdateForm;
};

export type Action = { type: "EDIT_FORM"; formInfo: ProfileUpdateForm };

export type UpdateFormDispatch = Dispatch<Action>;
