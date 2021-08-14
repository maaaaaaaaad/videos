import axios from "axios";

export const UpdateProfile = async (profileUpdateForm: FormData) => {
  return await axios.patch(
    "http://localhost:5000/users/update",
    profileUpdateForm,
    {
      withCredentials: true,
    }
  );
};
