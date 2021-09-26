export type VideoInfo = {
  readonly _id?: string;
  readonly videoUrl?: string;
  readonly thumbnail?: string;
  readonly title?: string;
  readonly description?: string;
  readonly theme?: string;
  readonly date?: Date;
  readonly age_verification?: string;
  readonly owner?: {
    userId: string;
    nickname: string;
    avatarUrl: string | null;
  };
  readonly comment?: Comments;
};

export type Comments = [
  {
    _id?: string;
    comment: string;
    userId: string;
    email: string;
    avatarUrl: string | null;
    nickname: string;
    date: string;
  }
];

export type AllVideos = Array<VideoInfo>;
