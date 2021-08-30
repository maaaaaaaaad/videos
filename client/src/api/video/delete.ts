import axios from "axios";
import { VideoInfo } from "../../types/data/video/info";

export const deleted = async (videoId: Pick<VideoInfo, "_id">) => {
  return await axios.post("http://localhost:5000/videos/delete", videoId, {
    withCredentials: true,
  });
};
