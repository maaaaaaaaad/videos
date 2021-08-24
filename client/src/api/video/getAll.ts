export type GetAllVideos = {
  videoUrl: string;
  title: string;
  description: string;
  theme: string;
  owner: {
    nickname: string;
    avatarUrl: string | null;
  };
};
