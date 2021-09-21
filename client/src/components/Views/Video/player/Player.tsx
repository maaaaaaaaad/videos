import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { VideoProps } from "../../../../types/data/video/props.interface";
import CommentControllers from "./comment/CommentControllers";

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const selectedVideo = location.state! as VideoProps;

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
        <CommentControllers />
      </section>
    </section>
  );
};
export default Player;
