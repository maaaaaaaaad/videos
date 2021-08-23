import { Dispatch } from "react";
export type VideoFormState = {
  video: File | null;
  title: string;
  description: string;
  theme: string;
};

export type State = {
  uploadForm: VideoFormState;
};

export type Action = { type: "VIDEO_UPLOAD"; uploadForm: VideoFormState };

export type VideoFormDispatch = Dispatch<Action>;
