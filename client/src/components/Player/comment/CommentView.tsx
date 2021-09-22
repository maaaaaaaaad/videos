import React from "react";
import { Comments } from "../../../types/data/video/info";

interface Props {
  comments: Comments | undefined;
}

const CommentView: React.FC<Props> = ({ comments }) => {
  return (
    <ul>
      {comments?.map((comment, index) => {
        return (
          <li key={index} className="mb-5">
            <p>{comment.nickname}</p>
            <p>{comment.comment}</p>
            <p>{comment.date}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentView;
