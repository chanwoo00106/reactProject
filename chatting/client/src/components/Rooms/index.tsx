import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import api from "../../lib/api";
import RoomsType from "../../types/RoomsType";
import * as S from "./styles";

export default function Rooms() {
  const [value, setValue] = useState<string>("");
  const [rooms, setRooms] = useState<RoomsType>({});

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/rooms");
      setRooms(data);
    })();
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value.trim());

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <S.Wrapper>
      <S.Contents>
        <S.Top>Chatting | Rooms</S.Top>
        <S.Center>
          {Object.keys(rooms).map((key) => (
            <S.Room key={key}>
              <S.RoomName>{rooms[key].name}</S.RoomName>
              <S.RoomPeople>{rooms[key].people}명</S.RoomPeople>
            </S.Room>
          ))}
        </S.Center>
        <S.Bottom onSubmit={onSubmit}>
          <S.Input
            placeholder="방 이름 입력 (최대 10글자)"
            value={value}
            onChange={onChange}
            maxLength={10}
          />
          <S.SubmitButton>CREATE</S.SubmitButton>
        </S.Bottom>
      </S.Contents>
    </S.Wrapper>
  );
}
