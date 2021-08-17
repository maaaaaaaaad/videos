import axios from "axios";
import { SignInForm } from "../../types/Sign/SignUpForm.type";

export const PostLogin = async (signInData: SignInForm) => {
  return await axios.post("http://localhost:5000/users/login", signInData, {
    withCredentials: true,
  });
};
