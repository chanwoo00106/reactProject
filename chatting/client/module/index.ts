import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import nickname from "./nickname";

const rootReducer = combineReducers({
  nickname,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

export type RootState = ReturnType<typeof rootReducer>;
