import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "./styles";

export default function Rooms() {
  const [value, setValue] = useState<string>("");

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
          <S.Room>
            <S.RoomName>졸리다</S.RoomName>
            <S.RoomPeople>8명</S.RoomPeople>
          </S.Room>
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
