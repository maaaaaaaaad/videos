export type VideoInfo = {
  readonly _id?: string;
  readonly videoUrl?: string;
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
  readonly metadata?: {
    views_count: number;
    comment: {
      author: string | null;
      content: string | null;
      date: Date | null;
    };
  };
};

export type AllVideos = Array<VideoInfo>;
