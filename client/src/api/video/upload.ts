import axios from "axios";
export const videoUploader = async (formData: FormData) => {
  return await axios.post("http://localhost:5000/videos/upload", formData, {
    withCredentials: true,
  });
};
