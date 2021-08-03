import { Dispatch } from "react";

export type LoggedInUser = {
  userId: string;
  email: string;
  nickname: string;
};

export type State = {
  loggedInUser: LoggedInUser;
};

export type Action = {
  type: "SET_LOGGED_USER_DATA";
  loggedInUser: LoggedInUser;
};

export type UserLoggedInDispatch = Dispatch<Action>;
