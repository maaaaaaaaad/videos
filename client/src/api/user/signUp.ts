import axios from "axios";
import { SignUpForm } from "../../types/Sign/SignUpForm.type";

export const PostSignUp = async (signUpFormData: SignUpForm) => {
  return await axios.post(
    "http://localhost:5000/users/signup",
    signUpFormData,
    {
      withCredentials: true,
    }
  );
};
