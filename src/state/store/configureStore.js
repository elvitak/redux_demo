import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import initialState from "./initialState";
import thunk from "redux-thunk";

const configureStore = () => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default configureStore;
