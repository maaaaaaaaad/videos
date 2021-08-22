import axios from "axios";

export type Nick = {
  nickname: string;
};

export const nickCheck = async (nickname: string): Promise<string> => {
  const nickFormat = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,8}$/;
  const checked: boolean = nickFormat.test(nickname);

  const body: Nick = {
    nickname,
  };
  if (checked) {
    const result = await axios.post(
      "http://localhost:5000/users/check-nick",
      body,
      {
        withCredentials: true,
      }
    );
    const res = result.data.response;

    switch (res.message) {
      case "Already taken":
        return "Nickname has already taken";

      case "Successfully":
        return "Successfully";
    }
  }
  return "Please checking your nickname format";
};
