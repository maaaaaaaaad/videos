import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { Action, State, UpdateFormDispatch } from "../types/User/ProfileUpdate";

export const ProfileUpdateStateContext = createContext<State | null>(null);
export const ProfileUpdateDispatchContext =
  createContext<UpdateFormDispatch | null>(null);

function profileUpdateReducer(state: State, action: Action) {
  switch (action.type) {
    case "EDIT_FORM":
      return {
        ...state,
        formInfo: action.formInfo,
      };
  }
}

const UpdateUserContext: React.FC = ({ children }) => {
  //

  const initCurrentUser: State = {
    formInfo: {
      email: "",
      nickname: "",
    },
  };

  const [state, dispatch] = useReducer(profileUpdateReducer, initCurrentUser);

  return (
    <ProfileUpdateStateContext.Provider value={state}>
      <ProfileUpdateDispatchContext.Provider value={dispatch}>
        {children}
      </ProfileUpdateDispatchContext.Provider>
    </ProfileUpdateStateContext.Provider>
  );
};

export default UpdateUserContext;
