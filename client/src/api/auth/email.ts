import axios from "axios";
import { Email } from "../../types/auth/email.type";

export const authUserEmail = async (body: Email) => {
  return await axios.post(
    "http://localhost:5000/users/email-authentication",
    body,
    { withCredentials: true }
  );
};
