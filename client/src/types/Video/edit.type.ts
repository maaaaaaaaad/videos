import { VideoInfo } from "./getAll.type";

export interface VideoProps {
  readonly item: VideoInfo;
  handleVideoEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleVideoDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
