import { combineReducers } from "redux";
import { plReduxer } from "./Reducer";
export const rootReducer = combineReducers({
  pl: plReduxer,
});
