import { useSelector } from "react-redux";
import Nickname from "./components/Nickname";
import Rooms from "./components/Rooms";
import { RootState } from "./module";

function App() {
  const { nickname } = useSelector(({ nickname }: RootState) => ({
    nickname,
  }));

  return <>{!nickname ? <Nickname /> : <Rooms />}</>;
}

export default App;
