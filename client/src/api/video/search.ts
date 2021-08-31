import axios from "axios";

export const search = async (keyword: string) => {
  return await axios.get(
    `http://localhost:5000/videos/search?keyword=${keyword}`,
    {
      withCredentials: true,
    }
  );
};
