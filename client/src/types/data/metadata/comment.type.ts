export type Comment = {
  readonly nickname: string;
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
