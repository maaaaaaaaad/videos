import axios from "axios";
import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ResUserDataContext } from "../../../../App";
import {
  VideoMetadata,
  VideoProps,
} from "../../../../types/data/video/props.interface";

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const selectedVideo = location.state! as VideoProps;
  const isUser = useContext(ResUserDataContext);
  const [value, setValue] = useState<VideoMetadata | null>(null);
  const [comments, setComments] = useState<[] | null>(null); // comment items

  const handleAddComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/videos/comment/${selectedVideo.item._id}`,
      value,
      { withCredentials: true }
    );
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userComment: VideoMetadata = {
      metadata: {
        comment: {
          author: isUser?._id!,
          content: e.currentTarget.value,
          date: new Date().toLocaleDateString(),
        },
      },
    };
    setValue(userComment);
  };

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
        <p>Views: {selectedVideo.item.metadata!.views_count}</p>
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
