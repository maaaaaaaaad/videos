import React from "react";
import { useContext } from "react";
import { videoUploader } from "../../../api/video/upload";
import {
  VideoDispatchContext,
  VideoStateContext,
} from "../../../contexts/VideoContexts";
import VideoForm from "./VideoForm";

const VideoControllers = () => {
  const state = useContext(VideoStateContext);
  const dispatch = useContext(VideoDispatchContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("video", state!.uploadForm.video!);
    formData.append("title", state!.uploadForm.title!);
    formData.append("description", state!.uploadForm.description!);
    formData.append("theme", state!.uploadForm.theme!);

    const res = await videoUploader(formData);

    console.log(res.data);
    window.location.href = "/videos";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.currentTarget;

    dispatch!({
      type: "VIDEO_UPLOAD",

      uploadForm: {
        ...state!.uploadForm,
        [name]: files ? files[0] : value,
      },
    });
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch!({
      type: "VIDEO_UPLOAD",

      uploadForm: {
        ...state!.uploadForm,
        description: e.currentTarget.value,
      },
    });
  };

  const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch!({
      type: "VIDEO_UPLOAD",

      uploadForm: {
        ...state!.uploadForm,
        theme: e.currentTarget.value,
      },
    });
  };

  return (
    <VideoForm
      handleSelectedChange={handleSelectedChange}
      handleChange={handleChange}
      handleSubmitBtn={handleSubmitBtn}
      handleChangeTextArea={handleChangeTextArea}
    />
  );
};

export default VideoControllers;
