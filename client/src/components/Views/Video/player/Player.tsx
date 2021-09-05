import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { VideoProps } from "../../../../types/data/video/props.interface";

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const selectedVideo = location.state! as VideoProps;

  return (
    <section>
      <video controls width={400} height={300}>
        <source src={`http://localhost:5000/${selectedVideo.item.videoUrl}`} />
      </video>
      <h2>{selectedVideo.item.title}</h2>
      <span>
        <img
          src={
            selectedVideo.item.owner?.avatarUrl
              ? `http://localhost:5000/${selectedVideo.item.owner.avatarUrl}`
              : `http://localhost:5000/assets/images/defaultImg.png`
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
