import axios from "axios";

export const ChangePass = async (password: FormData) => {
  return await axios.patch(
    "http://localhost:5000/users/change-password",
    password,
    {
      withCredentials: true,
    }
  );
};
