import axios from "axios";
import { ChangePasswordForm } from "../../types/Sign/SignUpForm.type";

export const ChangePass = async (password: ChangePasswordForm) => {
  return await axios.patch(
    "http://localhost:5000/users/change-password",
    password,
    {
      withCredentials: true,
    }
  );
};
