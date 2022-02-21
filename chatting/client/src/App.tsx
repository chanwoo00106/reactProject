import { useSelector } from "react-redux";
import Chatting from "./components/Chatting";
import Nickname from "./components/Nickname";
import Rooms from "./components/Rooms";
import { RootState } from "./module";

function App() {
  const { nickname, key } = useSelector(
    ({ nickname, myRoom: { key } }: RootState) => ({
      nickname,
      key,
    })
  );

  return <>{!nickname ? <Nickname /> : key ? <Chatting /> : <Rooms />}</>;
}

export default App;
