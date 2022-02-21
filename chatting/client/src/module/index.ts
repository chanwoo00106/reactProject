import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import nickname from "./nickname";
import socket from "./socket";

const rootReducer = combineReducers({
  nickname,
  socket,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof rootReducer>;
