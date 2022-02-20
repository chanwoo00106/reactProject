import { useEffect } from "react";
import io from "socket.io-client";
import Nickname from "./components/Nickname";

const socket = io("http://localhost:4000");

function App() {
  return (
    <div className="App">
      <Nickname />
    </div>
  );
}

export default App;
