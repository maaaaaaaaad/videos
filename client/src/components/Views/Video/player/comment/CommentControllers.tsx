import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { ResUserDataContext } from "../../../../../App";
import { Comment } from "../../../../../types/data/metadata/comment.type";
import CommentForm from "./CommentForm";

const CommentControllers = () => {
  const isUser = useContext(ResUserDataContext);
  const commentUlRef = useRef<HTMLUListElement>(null);
  const [addComment, setAddComment] = useState<string>("");

  const saveComment = (userComment: Comment) => {
    const commentItems = document.createElement("li");
    const userId = document.createElement("div");
    const comment = document.createElement("div");
    const date = document.createElement("div");

    userId.innerHTML = userComment.userId;
    comment.innerHTML = userComment.comment;
    date.innerHTML = userComment.date! as string;

    commentItems.appendChild(userId);
    commentItems.appendChild(comment);
    commentItems.appendChild(date);

    return commentUlRef.current?.prepend(commentItems);
  };

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (addComment === "") {
      return window.alert("Please send to fill the comment");
    }

    const comment: Comment = {
      userId: isUser?.userId!,
      comment: addComment,
      date: new Date().toLocaleDateString(),
    };

    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/metadata/create-comment`,
      comment,
      {
        withCredentials: true,
      }
    );
    saveComment(comment);
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
