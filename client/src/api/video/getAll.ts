import axios from "axios";

export const getAll = async () => {
  return await axios.get("http://localhost:5000/videos", {
    withCredentials: true,
  });
};
