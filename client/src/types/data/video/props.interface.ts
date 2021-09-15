import { VideoInfo } from "./info";

export interface VideoProps {
  readonly item: VideoInfo;
}

export type VideoMetadata = Pick<VideoInfo, "metadata">;
