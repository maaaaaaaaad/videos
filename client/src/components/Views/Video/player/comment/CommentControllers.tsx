import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { ResUserDataContext } from "../../../../../App";
import { Comment } from "../../../../../types/data/metadata/comment.type";
import CommentForm from "./CommentForm";

const CommentControllers = () => {
  const isUser = useContext(ResUserDataContext);
  const commentUlRef = useRef<HTMLUListElement>(null);
  const [addComment, setAddComment] = useState<string>("");

  const saveComment = (addComment: string) => {
    const list = document.createElement("li");
    list.innerHTML = addComment;
    commentUlRef.current?.prepend(list);
  };

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (addComment === "") {
      return window.alert("Please send to fill the comment");
    }

    const comment: Comment = {
      userId: isUser?.userId!,
      comment: addComment,
    };

    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/metadata/create-comment`,
      comment,
      {
        withCredentials: true,
      }
    );
    saveComment(addComment);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddComment(e.currentTarget.value);
  };
  return (
    <section>
      <CommentForm
        handleSubmitBtn={handleSubmitBtn}
        handleChange={handleChange}
      />
      <ul ref={commentUlRef}></ul>
    </section>
  );
};

export default CommentControllers;
