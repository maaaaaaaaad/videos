import React, { useContext, useState } from "react";
import { commentApiContext } from "../../../api/metadata/CommentApi";
import { ResUserDataContext } from "../../../App";
import { Comment } from "../../../types/data/metadata/comment.type";
import { VideoInfo } from "../../../types/data/video/info";

const CommentForm: React.FC<Pick<VideoInfo, "_id">> = ({ _id }) => {
  const api = useContext(commentApiContext);
  const isUser = useContext(ResUserDataContext);
  const [commentData, setCommentData] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentData !== "") {
      const data: Comment = {
        userId: isUser!.userId!,
        email: isUser!.email!,
        nickname: isUser!.nickname!,
        avatarUrl: isUser!.avatarUrl! ?? null,
        comment: commentData,
        date: new Date().toLocaleString(),
      };

      console.log(data);

      await api.upload(data, _id!);
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
