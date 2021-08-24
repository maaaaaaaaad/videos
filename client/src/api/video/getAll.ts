export type GetAllVideos = {
  videoUrl: string;
  title: string;
  description: string;
  theme: string;
  date: Date;
  owner: {
    nickname: string;
    avatarUrl: string | null;
  };
};
