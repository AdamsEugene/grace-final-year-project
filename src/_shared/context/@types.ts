// import SHARED_CONSTANTS from "../constants";

// type ValueOf<T> = T[keyof T];

export type Action<T> = {
  type: string;
  payload?: T;
};
