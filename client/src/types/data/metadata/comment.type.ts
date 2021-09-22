export type Comment = {
  readonly userId: string;
  readonly comment: string;
  readonly date: string;
};

export interface IComment {
  readonly comment: {
    _id?: string | undefined;
    comment: string;
    date: string;
    nickname: string;
  };
}
