import React from "react";
import { ChangeHandler } from "../../../types/changeHandler/change.interface";

const VideoForm: React.FC<ChangeHandler> = ({
  handleSubmitBtn,
  handleChange,
  handleSelectedChange,
  handleChangeTextArea,
  handleAgeCheck,
}) => {
  return (
    <form
      id="video-uploader"
      method="POST"
      encType="multipart/form-data"
      onSubmit={(e) => handleSubmitBtn(e)}
    >
      <input
        name="video"
        type="file"
        accept="video/*"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="title"
        type="text"
        autoComplete="off"
        placeholder="Title"
        onChange={(e) => handleChange(e)}
      />
      <textarea
        name="description"
        autoComplete="off"
        placeholder="Description"
        onChange={(e) => handleChangeTextArea!(e)}
      />
      <select
        name="theme"
        onChange={(e) => handleSelectedChange!(e)}
        form="video-uploader"
      >
        <option value="default">Default</option>
        <option value="education">Education</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
      </select>

      <label htmlFor="age_verification">
        <input
          type="checkbox"
          name="age_verification"
          id="age_verification"
          onChange={(e) => handleAgeCheck(e)}
        />
        Age verification
      </label>
      <input type="submit" autoComplete="off" value="Upload" />
    </form>
  );
};

export default VideoForm;
