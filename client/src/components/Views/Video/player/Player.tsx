import axios from "axios";
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ResUserDataContext } from "../../../../App";
import { VideoProps } from "../../../../types/data/video/props.interface";

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const selectedVideo = location.state! as VideoProps;
  const isUser = useContext(ResUserDataContext);

  const handleAddComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <section>
      <video className="w-42" controls>
        <source
          src={`${process.env.REACT_APP_SERVER_URL}/${selectedVideo.item.videoUrl}`}
        />
      </video>
      <article>
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
        <p>Description: {selectedVideo.item.description}</p>
      </article>

      <article>
        <div>comments : 0</div>
        <div>
          <form onSubmit={handleAddComment}>
            <input
              type="text"
              placeholder="Please you enter comment"
              autoComplete="off"
              name="comment"
              onChange={handleChangeComment}
            />
            <input type="submit" value="OK" />
          </form>
        </div>
        <ul>{/*comment items*/}</ul>
      </article>
    </section>
  );
};
export default Player;
