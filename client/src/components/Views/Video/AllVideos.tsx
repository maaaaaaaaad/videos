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

  const ageVerification = () => {};

  return (
    <li className="mb-10">
      {item.age_verification === "false" ? (
        <Link to={goToPlayer} className="text-green-500 hover:text-blue-500">
          {item.title}
        </Link>
      ) : (
        <span className="text-red-500" onClick={ageVerification}>
          {item.title} ⚠️ Please you checking age verification
        </span>
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
      <p>Theme: {item.theme}</p>
      <p>Date: {item.date}</p>
      <p>Description: {item.description}</p>
      <p>views: {item.metadata!.views_count}</p>
    </li>
  );
};

export default VideosView;
