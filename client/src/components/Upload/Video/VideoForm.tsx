import React, { useRef } from "react";
import { ChangeHandler } from "../../../types/changeHandler/change.interface";

const VideoForm: React.FC<ChangeHandler> = ({
  handleSubmitBtn,
  handleChange,
  handleSelectedChange,
  handleChangeTextArea,
  handleAgeCheck,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileRef.current!.click();
  };

  return (
    <form
      className="flex flex-col items-center"
      id="video-uploader"
      method="POST"
      encType="multipart/form-data"
      onSubmit={(e) => handleSubmitBtn(e)}
    >
      <input
        className="hidden"
        ref={fileRef}
        name="video"
        type="file"
        accept="video/*"
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={handleFileClick}
        className="w-32 h-32 bg-gray-900 text-white rounded-md outline-none"
      >
        File
      </button>
      <input
        className="border-b-2 mt-5 outline-none"
        name="title"
        type="text"
        autoComplete="off"
        placeholder="Title"
        onChange={(e) => handleChange(e)}
      />
      <textarea
        className="border-b-2 mt-5 outline-none"
        name="description"
        autoComplete="off"
        placeholder="Description"
        onChange={(e) => handleChangeTextArea!(e)}
      />
      <select
        className="w-24 border-b-2 mt-5 cursor-pointer outline-none"
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
          className="mt-5"
          type="checkbox"
          name="age_verification"
          id="age_verification"
          onChange={(e) => handleAgeCheck!(e)}
        />
        Age verification
      </label>
      <input
        className="mt-5 p-1 w-16 rounded-md bg-black text-white cursor-pointer outline-none"
        type="submit"
        autoComplete="off"
        value="Upload"
      />
    </form>
  );
};

export default VideoForm;
