import axios from "axios";
import { State } from "../../types/Sign/SignUpForm.type";

export const PostSignUp = async (signUpData: State) => {
  return await axios.post(
    "http://localhost:5000/users/signup",
    signUpData.formInfo
  );
};
