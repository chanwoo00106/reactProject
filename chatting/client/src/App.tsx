import { useSelector } from "react-redux";
import io from "socket.io-client";
import Nickname from "./components/Nickname";
import { RootState } from "./module";

const socket = io("http://localhost:4000");

function App() {
  const { nickname } = useSelector(({ nickname }: RootState) => ({
    nickname,
  }));

  return <div className="App">{!nickname && <Nickname />}</div>;
}

export default App;
