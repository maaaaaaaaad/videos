import React, { useContext, useState } from "react";
import { commentApiContext } from "../../../api/metadata/CommentApi";
import { ResUserDataContext } from "../../../App";
import { Comment } from "../../../types/data/metadata/comment.type";

interface Props {
  videoId: string;
}

const CommentForm: React.FC<Props> = ({ videoId }) => {
  const api = useContext(commentApiContext);
  const isUser = useContext(ResUserDataContext);
  const [commentData, setCommentData] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentData !== "") {
      const data: Comment = {
        nickname: isUser!.nickname!,
        comment: commentData,
        date: new Date().toLocaleString(),
      };

      await api.upload(data, videoId!);
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
