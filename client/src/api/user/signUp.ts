import axios from "axios";

export const PostSignUp = async (signUpFormData: FormData) => {
  return await axios.post(
    "http://localhost:5000/users/signup",
    signUpFormData,
    {
      withCredentials: true,
    }
  );
};
