import React, { useContext, useState } from "react";
import { commentApiContext } from "../../../api/metadata/CommentApi";
import { ResUserDataContext } from "../../../App";
import { Comment } from "../../../types/data/metadata/comment.type";
import { VideoInfo } from "../../../types/data/video/info.type";
import "./css/comment-view.css";

const CommentForm: React.FC<Pick<VideoInfo, "_id">> = ({ _id }) => {
  const api = useContext(commentApiContext);
  const isUser = useContext(ResUserDataContext);
  const [commentData, setCommentData] = useState<string>("");

  const appendComment = (data: Comment) => {
    const ul = document.querySelector(".comment-list");

    const li = document.createElement("li");
    li.classList.add("item");

    ul!.appendChild(li);

    const img = document.createElement("img");
    img.src = data.avatarUrl
      ? `${process.env.REACT_APP_SERVER_URL}/${data.avatarUrl}`
      : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`;
    img.alt = "avatar";
    img.classList.add("avatar");

    li!.appendChild(img);

    const section = document.createElement("section");
    section.classList.add("main");

    li!.appendChild(section);

    const article_owner = document.createElement("article");
    const article_content = document.createElement("article");

    article_owner.classList.add("owner");
    article_content.classList.add("content");

    section.appendChild(article_owner);
    section.appendChild(article_content);

    const span_nickname = document.createElement("span");
    const span_date = document.createElement("span");
    const span_comment = document.createElement("span");

    span_nickname.innerHTML = data.nickname;
    span_date.innerHTML = data.date;
    span_comment.innerHTML = data.comment;

    span_nickname.classList.add("nickname");
    span_date.classList.add("date");
    span_comment.classList.add("comment");

    article_owner.appendChild(span_nickname);
    article_owner.appendChild(span_date);

    article_content.appendChild(span_comment);

    const all = document.querySelectorAll("li");
    const index = all[all.length - 1];
    index.scrollIntoView({
      behavior: "auto",
      block: "nearest",
      inline: "nearest",
    });
  };

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
      appendComment(data);
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
