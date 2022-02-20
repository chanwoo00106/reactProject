import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  useEffect(() => {
    socket.on("test", (data: string) => {
      console.log(data);
    });
  }, []);

  const onClick = () => {
    socket.emit("test", "hello world");
    console.log("send");
  };
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={onClick}>SEND</button>
    </div>
  );
}

export default App;
