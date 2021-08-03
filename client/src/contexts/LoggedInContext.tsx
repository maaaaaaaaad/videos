import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { Action, State, UserLoggedInDispatch } from "../types/User/LoggedIn";

export const LoggedStateContext = createContext<State | null>(null);
export const LoggedDispatchContext = createContext<UserLoggedInDispatch | null>(
  null
);

function loggedReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_LOGGED_USER_DATA":
      return {
        ...state,
        loggedInUser: action.loggedInUser,
      };
    default:
      throw new Error("Unhandle actions");
  }
}

const initState: State = {
  loggedInUser: {
    userId: "",
    email: "",
    nickname: "",
  },
};

const LoggedInContext: React.FC = ({ children }) => {
  //
  const [state, dispatch] = useReducer(loggedReducer, initState);

  return (
    <LoggedStateContext.Provider value={state}>
      <LoggedDispatchContext.Provider value={dispatch}>
        {children}
      </LoggedDispatchContext.Provider>
    </LoggedStateContext.Provider>
  );
};

export default LoggedInContext;
