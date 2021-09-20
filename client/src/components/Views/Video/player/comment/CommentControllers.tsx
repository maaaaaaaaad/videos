import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ResUserDataContext } from "../../../../../App";
import { Comment } from "../../../../../types/data/metadata/comment.type";
import CommentForm from "./CommentForm";
import CommentView from "./CommentView";

const CommentControllers = () => {
  const isUser = useContext(ResUserDataContext);
  const commentUlRef = useRef<HTMLUListElement>(null);
  const [addComment, setAddComment] = useState<string>("");
  const [getUserCommens, setGetUserComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function getComments() {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/metadata/get-comments`,
        {
          withCredentials: true,
        }
      );
      setGetUserComments(res.data.result);
      console.log(res.data.result);
    }
    getComments();
  }, []);

  const saveComment = (userComment: Comment) => {
    const commentItems = document.createElement("li");
    const userId = document.createElement("div");
    const comment = document.createElement("div");
    const date = document.createElement("div");

    userId.innerHTML = `User: ${userComment.userId}`;
    comment.innerHTML = `Comment: ${userComment.comment}`;
    date.innerHTML = `Date: ${userComment.date}`;

    commentItems.appendChild(userId);
    commentItems.appendChild(comment);
    commentItems.appendChild(date);

    commentItems.classList.add("mt-3");
    commentUlRef.current?.appendChild(commentItems);
  };

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (addComment === "") {
      return window.alert("Please send to fill the comment");
    }
    const comment: Comment = {
      userId: isUser?.userId!,
      comment: addComment,
      date: new Date().toLocaleString(),
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
      <ul ref={commentUlRef}>
        {getUserCommens.map((comment, index) => (
          <CommentView key={index} comments={comment} />
        ))}
      </ul>
    </section>
  );
};

export default CommentControllers;
