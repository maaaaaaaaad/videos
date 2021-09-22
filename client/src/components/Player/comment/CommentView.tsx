import React from "react";
import { IComment } from "../../../types/data/metadata/comment.type";

const CommentView: React.FC<IComment> = ({ comment }) => {
  return (
    <li>
      <p>{comment.nickname}</p>
      <p>{comment.comment}</p>
      <p>{comment.date}</p>
    </li>
  );
};

export default CommentView;
