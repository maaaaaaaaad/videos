import React from "react";
import { VideoProps } from "../../types/Video/edit.type";

const VideosView: React.FC<VideoProps> = ({ item }) => {
  return (
    <li>
      <video controls width={400} height={300}>
        <source src={`http://localhost:5000/${item.videoUrl}`} />
      </video>
      <h2>{item.title}</h2>
      <span>
        <img
          src={
            item.owner.avatarUrl
              ? `http://localhost:5000/${item.owner.avatarUrl}`
              : `http://localhost:5000/assets/images/defaultImg.png`
          }
          alt="avatar"
          width={55}
          height={40}
        />
        {item.owner.nickname}
      </span>
      <p>Theme {item.theme}</p>
      <p>{item.date}</p>
      <p>{item.description}</p>
    </li>
  );
};

export default VideosView;
