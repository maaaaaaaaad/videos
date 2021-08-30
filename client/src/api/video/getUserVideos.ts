import axios from "axios";

export const get = async () => {
  return await axios.get("http://localhost:5000/videos/get-videos", {
    withCredentials: true,
  });
};
