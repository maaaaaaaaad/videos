import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { VideoProps } from "../../../../types/data/video/props.interface";

const Player: React.FC<RouteComponentProps> = ({ location }) => {
  const selectedVideo = location.state! as VideoProps;
  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);
  const muteRef = useRef<HTMLButtonElement>(null);
  const videoHandler = videoRef.current;
  const [pause, setPause] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const handlePlayBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPause((prev) => !prev);
    if (pause) {
      videoHandler!.pause();
    } else {
      videoHandler!.play();
    }
    e.currentTarget.textContent = pause ? "Play" : "Pause";
  };

  const handleMuteBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMute((prev) => !prev);
    if (mute) {
      videoHandler!.muted = false;
    } else {
      videoHandler!.muted = true;
    }
    e.currentTarget.textContent = mute ? "Mute" : "Unmute";
    volumeRef.current!.value = mute ? String(volume) : "0";
  };

  const handleVolume = (e: React.FormEvent<HTMLInputElement>) => {
    const volumeControl = Number(e.currentTarget.value);
    setVolume(volumeControl);
    videoHandler!.volume = volume;
    if (volumeControl === 0) {
      videoHandler!.muted = true;
      muteRef.current!.textContent = "Unmute";
    } else {
      videoHandler!.muted = false;
      muteRef.current!.textContent = "Mute";
    }
  };

  return (
    <section>
      <video ref={videoRef} width={400} height={300}>
        <source
          src={`${process.env.REACT_APP_SERVER_URL}/${selectedVideo.item.videoUrl}`}
        />
      </video>
      <button onClick={handlePlayBtn}>Play</button>
      <button ref={muteRef} onClick={handleMuteBtn}>
        Mute
      </button>
      <input
        ref={volumeRef}
        onInput={handleVolume}
        type="range"
        name="volum"
        step={0.1}
        min={0}
        max={1}
        defaultValue={0.5}
      />
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
