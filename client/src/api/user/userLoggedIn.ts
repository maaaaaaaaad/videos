import axios from "axios";

export const UserLoggedIn = async () => {
  return await axios.get("http://localhost:5000/users", {
    withCredentials: true,
  });
};
