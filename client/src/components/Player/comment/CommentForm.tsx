import axios from "axios";
import React, { useContext, useState } from "react";
import { ResUserDataContext } from "../../../App";

interface Props {
  videoId: string | undefined;
}

const CommentForm: React.FC<Props> = ({ videoId }) => {
  const isUser = useContext(ResUserDataContext);
  const [commentData, setCommentData] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentData !== "") {
      const date = {
        nickname: isUser!.nickname,
        comment: commentData,
        date: new Date().toLocaleString(),
      };

      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/metadata/create-comment/${videoId}`,
        date,
        { withCredentials: true }
      );
      console.log(res.data.result);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentData(e.currentTarget.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        placeholder="...Please you enter comment"
        autoComplete="off"
        name="comment"
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default CommentForm;
