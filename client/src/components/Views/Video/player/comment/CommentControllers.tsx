import React, { useContext, useEffect, useRef, useState } from "react";
import { commentApiContext } from "../../../../../api/metadata/CommentApi";
import { ResUserDataContext } from "../../../../../App";
import { Comment } from "../../../../../types/data/metadata/comment.type";
import CommentForm from "./CommentForm";
import CommentView from "./CommentView";
import "./css/comment_preview.css";

const CommentControllers = () => {
  const api = useContext(commentApiContext);
  const isUser = useContext(ResUserDataContext);
  const commentUlRef = useRef<HTMLUListElement>(null);
  const [addComment, setAddComment] = useState<string>("");
  const [getUserCommens, setGetUserComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function getComments() {
      const res = await api.getAll();
      setGetUserComments(res.data.result);
    }
    getComments();
  }, [api]);

  const saveComment = (userComment: Comment) => {
    const commentItems = document.createElement("li");
    const section = document.createElement("section");
    const article_user = document.createElement("article");
    const article_content = document.createElement("article");
    const img = document.createElement("img");
    const span_user = document.createElement("span");
    const span_comment = document.createElement("span");
    const span_date = document.createElement("span");

    img.src = isUser?.avatarUrl
      ? `${process.env.REACT_APP_SERVER_URL}/${isUser.avatarUrl}`
      : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`;
    img.alt = "avatar";
    img.classList.add("img");

    span_user.innerHTML = `${isUser!.nickname}`;
    span_user.classList.add("span_user");

    article_user.appendChild(img);
    article_user.appendChild(span_user);
    article_user.classList.add("article_user");

    span_comment.innerHTML = `${userComment.comment}`;
    span_date.innerHTML = `${userComment.date}`;
    span_comment.classList.add("span_comment");
    span_date.classList.add("span_date");

    article_content.appendChild(span_comment);
    article_content.appendChild(span_date);

    section.appendChild(article_user);
    section.appendChild(article_content);
    section.classList.add("section");
    commentItems.appendChild(section);
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
    await api.upload(comment);
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
