import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import nickname from "./nickname";
import socket from "./socket";
import myRoom from "./myRoom";

const rootReducer = combineReducers({
  nickname,
  socket,
  myRoom,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof rootReducer>;
