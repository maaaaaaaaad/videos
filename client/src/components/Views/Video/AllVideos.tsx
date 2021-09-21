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

      <article className="flex items-center">
        <img
          src={
            item.owner?.avatarUrl
              ? `${process.env.REACT_APP_SERVER_URL}/${item.owner.avatarUrl}`
              : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
          }
          alt="avatar"
          className="w-9 h-9 rounded-md"
        />
        <span className="ml-1">{item.owner?.nickname}</span>
      </article>
      <p>Theme: {item.theme}</p>
      <p>Date: {item.date}</p>
      <p>Description: {item.description}</p>
    </li>
  );
};

export default VideosView;
