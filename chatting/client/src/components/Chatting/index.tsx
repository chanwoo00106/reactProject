import { GrNext } from "react-icons/gr";
import * as S from "./styles";
import * as RoomS from "../Rooms/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../module";
import { leave_room } from "../../module/myRoom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Chatting() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const { roomName, socket, key } = useSelector(
    ({ myRoom: { roomName, key }, socket }: RootState) => ({
      roomName,
      socket,
      key,
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("SUCCESS_LEAVE", () => {
      dispatch(leave_room());
    });
    socket?.on("SEND_MESSAGE", ({ message }) => {
      setMessages([...messages, message]);
    });
  });

  const onClick = () => {
    socket?.emit("LEAVE_ROOM");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket?.emit("SEND_MESSAGE", { message, key });
    setMessage("");
    setMessages([...messages, message]);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  return (
    <RoomS.Wrapper>
      <RoomS.Contents>
        <S.Top>
          <GrNext size="2rem" onClick={onClick} />
          <S.RoomName>{roomName.toUpperCase()}</S.RoomName>
        </S.Top>
        <RoomS.Center>
          {messages.map((message, i) => (
            <li key={i}>{message}</li>
          ))}
        </RoomS.Center>
        <RoomS.Bottom onSubmit={onSubmit}>
          <RoomS.Input
            value={message}
            onChange={onChange}
            placeholder="Type your message"
          />
          <RoomS.SubmitButton>SEND</RoomS.SubmitButton>
        </RoomS.Bottom>
      </RoomS.Contents>
    </RoomS.Wrapper>
  );
}
