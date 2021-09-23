import React from "react";
import { IComment } from "../../../types/data/metadata/comment.type";
import "./css/comment-view.css";

const CommentView: React.FC<IComment> = ({ comment }) => {
  return (
    <li className="comment-view item">
      <img
        className="comment-view avatar"
        src={
          comment?.avatarUrl
            ? `${process.env.REACT_APP_SERVER_URL}/${comment.avatarUrl}`
            : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
        }
        alt="avatar"
      />
      <section className="comment-view main">
        <article className="comment-view owner">
          <span className="comment-view nickname">{comment.nickname}</span>
          <span className="comment-view date">{comment.date}</span>
        </article>

        <article className="comment-view content">
          <span className="comment-view comment">{comment.comment}</span>
        </article>
      </section>
    </li>
  );
};

export default CommentView;
