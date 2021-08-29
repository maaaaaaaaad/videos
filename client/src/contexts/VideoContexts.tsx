import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import {
  Action,
  State,
  VideoFormDispatch,
  VideoFormState,
} from "../types/data/video/form.type";

export const VideoStateContext = createContext<State | null>(null);
export const VideoDispatchContext = createContext<VideoFormDispatch | null>(
  null
);

function videoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "VIDEO_UPLOAD":
      return {
        ...(state.uploadForm! as VideoFormState),
        uploadForm: action.uploadForm,
      };

    case "VIDEO_UPDATE":
      return {
        ...(state.updateForm! as Omit<VideoFormState, "video">),
        updateForm: action.updateForm,
      };

    default:
      throw new Error("Unhandle actions");
  }
}

const initVideoForm: State = {
  uploadForm: {
    video: null,
    title: "",
    description: "",
    theme: "",
  },
};

const VideoContexts: React.FC = ({ children }) => {
  //
  const [state, dispatch] = useReducer(videoReducer, initVideoForm);

  return (
    <VideoStateContext.Provider value={state}>
      <VideoDispatchContext.Provider value={dispatch}>
        {children}
      </VideoDispatchContext.Provider>
    </VideoStateContext.Provider>
  );
};

export default VideoContexts;
