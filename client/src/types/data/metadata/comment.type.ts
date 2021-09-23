export type Comment = {
  readonly userId: string;
  readonly email: string;
  readonly nickname: string;
  readonly avatarUrl: string | null;
  readonly comment: string;
  readonly date: string;
};

export interface IComment {
  readonly comment: {
    _id?: string;
    comment: string;
    userId: string;
    email: string;
    avatarUrl: string | null;
    nickname: string;
    date: string;
  };
}
