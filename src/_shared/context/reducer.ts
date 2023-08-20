/* eslint-disable @typescript-eslint/no-explicit-any */
import K from "../constants";
import { Action } from "./@types";
import { State } from "./AppContext";

export const appReducer = (state: State, action: Action<any>) => {
  switch (action.type) {
    case K.ACTION_TYPE.ADD_USER:
      return { ...state };
    default:
      return { ...state };
  }
};
