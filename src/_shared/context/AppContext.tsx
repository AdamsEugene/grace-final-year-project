/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren, createContext, useReducer } from "react";
import { appReducer } from "./reducer";
import { Action } from "./@types";

const defaultValue = {
  user: null,
};

type Dispatch = { dispatch?: React.Dispatch<Action<any>> };

export type State = typeof defaultValue;

export const DefaultContext = createContext<State & Dispatch>(defaultValue);

export default function AppContext(props: PropsWithChildren) {
  const { children } = props;

  const [state, dispatch] = useReducer(appReducer, defaultValue);
  return (
    <DefaultContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DefaultContext.Provider>
  );
}
