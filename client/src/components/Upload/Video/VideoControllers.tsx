import React, { useRef, useState } from "react";
import { useContext } from "react";
import { videosApiContext } from "../../../api/video/VideoApi";
import {
  VideoDispatchContext,
  VideoStateContext,
} from "../../../contexts/VideoContexts";
import { VideoFormState } from "../../../types/data/video/form.type";
import VideoForm from "./VideoForm";

const VideoControllers = () => {
  const api = useContext(videosApiContext);
  const state = useContext(VideoStateContext);
  const dispatch = useContext(VideoDispatchContext);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("video", state!.uploadForm!.video!);
    formData.append("title", state!.uploadForm!.title!);
    formData.append("description", state!.uploadForm!.description!);
    formData.append("theme", state!.uploadForm!.theme!);
    formData.append(
      "age_verification",
      String(state!.uploadForm!.age_verification!)
    );

    await api.upload(formData);
    window.location.href = "/videos";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.currentTarget;

    files && setVideoFile(files[0]);

    dispatch!({
      type: "VIDEO_UPLOAD",

      uploadForm: {
        ...state!.uploadForm,
        [name]: files ? files[0] : value,
      } as VideoFormState,
    });
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch!({
      type: "VIDEO_UPLOAD",

      uploadForm: {
        ...state!.uploadForm,
        description: e.currentTarget.value,
      } as VideoFormState,
    });
  };

  const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch!({
      type: "VIDEO_UPLOAD",

      uploadForm: {
        ...state!.uploadForm,
        theme: e.currentTarget.value,
      } as VideoFormState,
    });
  };

  const handleAgeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch!({
      type: "VIDEO_UPLOAD",

      uploadForm: {
        ...state!.uploadForm,
        age_verification: e.currentTarget.checked,
      } as VideoFormState,
    });
  };

  const handleCaptureThumbnail = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current!.width;
    canvas.height = videoRef.current!.height;

    canvas
      .getContext("2d")
      ?.drawImage(
        videoRef.current!,
        0,
        0,
        videoRef.current!.width,
        videoRef.current!.height
      );
  };

  console.log(videoFile);

  return (
    <>
      {videoFile ? (
        <article>
          <video
            width="300"
            height="100"
            ref={videoRef}
            src={URL.createObjectURL(videoFile)}
            controls
          ></video>
          <button onClick={handleCaptureThumbnail}>Capture Thumbnail</button>
        </article>
      ) : (
        ""
      )}
      <VideoForm
        handleSelectedChange={handleSelectedChange}
        handleChange={handleChange}
        handleSubmitBtn={handleSubmitBtn}
        handleChangeTextArea={handleChangeTextArea}
        handleAgeCheck={handleAgeCheck}
      />
    </>
  );
};

export default VideoControllers;
