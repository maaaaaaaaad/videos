import React from "react";
import { GetAllVideos } from "../../../api/video/getAll";

interface Props {
  item: GetAllVideos;
}

const VideoViewTemplate: React.FC<Props> = ({ item }) => {
  return (
    <li>
      <video controls>
        <source src={"http://localhost:5000/" + item.videoUrl}></source>
      </video>
      <p>
        <img
          src={
            item.owner.avatarUrl
              ? `http://localhost:5000/${item.owner.avatarUrl}`
              : "http://localhost:5000/assets/images/defaultImg.png"
          }
          alt="avatar"
          width={30}
          height={30}
        />
        <span>{item.owner.nickname}</span>
      </p>
      <h1>Title: {item.title}</h1>
      <p>Description: {item.description}</p>
      <p>Theme: {item.theme}</p>
    </li>
  );
};

export default VideoViewTemplate;
