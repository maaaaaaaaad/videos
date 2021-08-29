export type VideoInfo = {
  readonly _id?: string;
  readonly videoUrl?: string;
  readonly title?: string;
  readonly description?: string;
  readonly theme?: string;
  readonly date?: Date;
  readonly owner?: {
    userId: string;
    nickname: string;
    avatarUrl: string | null;
  };
};

export type AllVideos = Array<VideoInfo>;
