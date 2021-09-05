import React from "react";
import { Link } from "react-router-dom";
import { VideoProps } from "../../../types/data/video/props.interface";

const VideosView: React.FC<VideoProps> = ({ item }) => {
  const location = {
    pathname: "/player",
    search: `?vod=${item._id}`,
    state: {
      item,
    },
  };

  return (
    <li>
      <Link to={location}>{item.title}</Link>
      <h2>{item.title}</h2>
      <span>
        <img
          src={
            item.owner?.avatarUrl
              ? `http://localhost:5000/${item.owner.avatarUrl}`
              : `http://localhost:5000/assets/images/defaultImg.png`
          }
          alt="avatar"
          width={55}
          height={40}
        />
        {item.owner?.nickname}
      </span>
      <p>Theme {item.theme}</p>
      <p>{item.date}</p>
      <p>{item.description}</p>
    </li>
  );
};

export default VideosView;
