import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./module";

import io from "socket.io-client";
import { get_socket } from "./module/socket";

store.dispatch(get_socket(io("http://localhost:4000")));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
