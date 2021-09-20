export type Comment = {
  readonly userId: string;
  readonly comment: string;
  readonly date?: string;
};

export interface IComment {
  comments: Comment;
}
