import React from "react";
import { IComment } from "../../../types/data/metadata/comment.type";
import "./css/comment-view.css";

const CommentView: React.FC<IComment> = ({ comment }) => {
  return (
    <li className="item">
      <img
        className="avatar"
        src={
          comment?.avatarUrl
            ? `${process.env.REACT_APP_SERVER_URL}/${comment.avatarUrl}`
            : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
        }
        alt="avatar"
      />
      <section className="main">
        <article className="owner">
          <span className="nickname">{comment.nickname}</span>
          <span className="date">{comment.date}</span>
        </article>

        <article className="content">
          <span className="comment">{comment.comment}</span>
        </article>
      </section>
    </li>
  );
};

export default CommentView;
