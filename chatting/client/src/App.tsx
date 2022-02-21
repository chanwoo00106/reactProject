import { useSelector } from "react-redux";
import io from "socket.io-client";
import Nickname from "./components/Nickname";
import Rooms from "./components/Rooms";
import { RootState } from "./module";

const socket = io("http://localhost:4000");

function App() {
  const { nickname } = useSelector(({ nickname }: RootState) => ({
    nickname,
  }));

  return <div>{!nickname ? <Nickname /> : <Rooms />}</div>;
}

export default App;
