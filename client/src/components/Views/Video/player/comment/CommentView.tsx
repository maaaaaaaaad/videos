import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Comment } from "../../../../../types/data/metadata/comment.type";

const CommentView = () => {
  const [get, setGet] = useState<Comment[]>([]);

  const getComments = useCallback(async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/metadata/get-comments`,
      {
        withCredentials: true,
      }
    );
    setGet(res.data.result);
  }, []);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <ul>
      {get.map((comment, index) => (
        <li key={index}>
          <article>
            <span className="mr-5">{comment.userId}</span>
            <span className="mr-5">{comment.comment}</span>
            <span className="mr-5">{comment.date}</span>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default CommentView;
