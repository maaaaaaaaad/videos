import axios from "axios";

export const userLogout = async () => {
  await axios.get("http://localhost:5000/users/logout", {
    withCredentials: true,
  });
};
