import React from "react";
import { IComment } from "../../../../../types/data/metadata/comment.type";

const CommentView: React.FC<IComment> = ({ comments }) => {
  return (
    <li>
      <section className="mt-3 flex items-center">
        <article className="flex items-center mr-5">
          <img
            className="w-10 h-10 rounded-md"
            src={
              comments.owner?.avatarUrl
                ? `${process.env.REACT_APP_SERVER_URL}/${comments.owner.avatarUrl}`
                : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
            }
            alt="avatar"
          />
          <span className="ml-1">{comments.owner!.nickname}</span>
        </article>

        <article>
          <span className="mr-5">{comments.comment}</span>
          <span className="text-xs">{comments.date}</span>
        </article>
      </section>
    </li>
  );
};

export default CommentView;
