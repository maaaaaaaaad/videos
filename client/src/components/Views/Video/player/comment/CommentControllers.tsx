import axios from "axios";
import React, { useContext, useState } from "react";
import { ResUserDataContext } from "../../../../../App";
import { Comment } from "../../../../../types/data/metadata/comment.type";
import CommentView from "./CommentView";

const CommentControllers = () => {
  const isUser = useContext(ResUserDataContext);
  const [addComment, setAddComment] = useState<string>("");

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (addComment === "") {
      return window.alert("Please send to fill the comment");
    }

    const comment: Comment = {
      userId: isUser?.userId!,
      comment: addComment,
    };

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/metadata/create-comment`,
      comment,
      {
        withCredentials: true,
      }
    );
    console.log(res.data.result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddComment(e.currentTarget.value);
  };
  return (
    <CommentView
      handleSubmitBtn={handleSubmitBtn}
      handleChange={handleChange}
    />
  );
};

export default CommentControllers;
