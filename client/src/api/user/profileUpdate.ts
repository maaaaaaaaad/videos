import axios from "axios";
import { ProfileUpdateForm } from "../../types/User/ProfileUpdate";

export const UpdateProfile = async (profileUpdateForm: ProfileUpdateForm) => {
  return await axios.patch(
    "http://localhost:5000/users/update",
    profileUpdateForm,
    {
      withCredentials: true,
    }
  );
};
