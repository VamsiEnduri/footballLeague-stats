import { data } from "../../data";

export const plReduxer = (state = { ...data }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
