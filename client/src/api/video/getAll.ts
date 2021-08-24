export type VideoInfo = {
  videoUrl: string;
  title: string;
  description: string;
  theme: string;
  date: Date;
  owner: {
    userId: string;
    nickname: string;
    avatarUrl: string | null;
  };
};

export type AllVideos = Array<VideoInfo>;

export interface VideoProps {
  item: VideoInfo;
}
