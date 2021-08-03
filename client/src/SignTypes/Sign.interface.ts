import { NicknameState } from "./User.type";

export interface ChangeHandler {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBtn: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface UserNickname {
  readonly loggedInUserNickname: NicknameState;
}
