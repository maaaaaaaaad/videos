import axios from "axios";
import { SignInData } from "../../../SignTypes/SignInData.type";

export const PostLogin = async (signInData: SignInData) => {
  return await axios.post("http://localhost:5000/users/login", signInData);
};
