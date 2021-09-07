import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { VideoProps } from "../../../../types/data/video/props.interface";

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const selectedVideo = location.state! as VideoProps;

  return (
    <section>
      <video width={800} height={600} controls>
        <source
          src={`${process.env.REACT_APP_SERVER_URL}/${selectedVideo.item.videoUrl}`}
        />
      </video>

      <h2>{selectedVideo.item.title}</h2>
      <span>
        <img
          src={
            selectedVideo.item.owner?.avatarUrl
              ? `${process.env.REACT_APP_SERVER_URL}/${selectedVideo.item.owner.avatarUrl}`
              : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
          }
          alt="avatar"
          width={55}
          height={40}
        />
        {selectedVideo.item.owner?.nickname}
      </span>
      <p>Theme {selectedVideo.item.theme}</p>
      <p>{selectedVideo.item.date}</p>
      <p>{selectedVideo.item.description}</p>
    </section>
  );
};
export default Player;
