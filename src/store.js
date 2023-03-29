import { createStore } from "redux";
import { rootReducer } from "./state/reducers/index";

export const store = createStore(rootReducer);
