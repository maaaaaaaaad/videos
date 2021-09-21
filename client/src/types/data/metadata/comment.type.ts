import { ResponseUserData } from "../../user/LoggedIn";

export type Comment = {
  readonly userId: string;
  readonly comment: string;
  readonly date: string;
};

export interface IComment {
  comments: {
    userId: string;
    comment: string;
    date: string;
    owner?: ResponseUserData;
  };
}
