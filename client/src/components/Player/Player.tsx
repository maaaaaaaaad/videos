import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { videosApiContext } from "../../api/video/VideoApi";
import { Comments } from "../../types/data/video/info";
import { VideoProps } from "../../types/data/video/props.interface";
import CommentForm from "./comment/CommentForm";
import CommentView from "./comment/CommentView";

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const api = useContext(videosApiContext);
  const selectedVideo = location.state! as VideoProps;

  const [getComments, setGetComments] = useState<Comments>();

  useEffect(() => {
    async function getUserComments() {
      const res = await api.getComments(selectedVideo.item._id!);
      const comments: Comments = res.data.result.comment;
      setGetComments(comments);
    }
    getUserComments();
  }, [api, selectedVideo.item._id]);

  return (
    <section>
      <video className="w-42" controls>
        <source
          src={`${process.env.REACT_APP_SERVER_URL}/${selectedVideo.item.videoUrl}`}
        />
      </video>
      <section>
        <h2>{selectedVideo.item.title}</h2>
        <article className="flex items-center">
          <img
            className="w-12 h-12 rounded-md"
            src={
              selectedVideo.item.owner?.avatarUrl
                ? `${process.env.REACT_APP_SERVER_URL}/${selectedVideo.item.owner.avatarUrl}`
                : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
            }
            alt="avatar"
          />
          <span className="ml-1 text-xl">
            {selectedVideo.item.owner?.nickname}
          </span>
        </article>

        <article>
          <p>Theme {selectedVideo.item.theme}</p>
          <p>{selectedVideo.item.date}</p>
          <p>Description: {selectedVideo.item.description}</p>
        </article>
      </section>

      <section>
        <article>
          <CommentForm _id={selectedVideo.item._id!} />
        </article>
        <article>
          <ul className="comment-list">
            {getComments?.map((comment, index) => (
              <CommentView key={index} comment={comment} />
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
};
export default Player;
