import axios from "axios";

export type Id = {
  userId: string;
};

export const idCheck = async (userId: string): Promise<string> => {
  const idFormat = /^[A-Za-z0-9]{5,15}$/;
  const checked: boolean = idFormat.test(userId);

  const body: Id = {
    userId,
  };
  if (checked) {
    const result = await axios.post(
      "http://localhost:5000/users/check-id",
      body,
      {
        withCredentials: true,
      }
    );
    const res = result.data.response;

    switch (res.message) {
      case "Already taken":
        return "ID has already taken";

      case "Successfully":
        return "Successfully";
    }
  }
  return "Please checking your id format";
};
