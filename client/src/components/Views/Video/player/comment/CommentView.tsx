import React from "react";
import { IComment } from "../../../../../types/data/metadata/comment.type";

const CommentView: React.FC<IComment> = ({ comments }) => {
  return (
    <li className="mt-3">
      <div>User: {comments.userId}</div>
      <div>Comment: {comments.comment}</div>
      <div>Date: {comments.date}</div>
    </li>
  );
};

export default CommentView;
