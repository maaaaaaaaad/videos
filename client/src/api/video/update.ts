import axios from "axios";
import { VideoInfo } from "../../types/data/video/info";

export const update = async (formData: VideoInfo) => {
  return await axios.patch("http://localhost:5000/videos/update", formData, {
    withCredentials: true,
  });
};
