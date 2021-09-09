import React from "react";
import { Link } from "react-router-dom";
import { VideoProps } from "../../../types/data/video/props.interface";

const VideosView: React.FC<VideoProps> = ({ item }) => {
  const goToPlayer = {
    pathname: "/player",
    search: `?vod=${item._id}`,
    state: {
      item,
    },
  };

  return (
    <li>
      {item.age_verification === "false" ? (
        <Link to={goToPlayer}>{item.title}</Link>
      ) : (
        "Please you checking age verification" // create verification button with api
      )}

      <span>
        <img
          src={
            item.owner?.avatarUrl
              ? `${process.env.REACT_APP_SERVER_URL}/${item.owner.avatarUrl}`
              : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
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
