import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../../module/nickname";

import * as S from "./styles";

export default function Nickname() {
  const [nickname, setNickname] = useState<string>("");
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("nickname", nickname);
    dispatch(change(nickname));
  };

  return (
    <S.Nickname>
      <S.Contents onSubmit={onSubmit}>
        <S.Title>닉네임 입력</S.Title>
        <S.Input
          placeholder="Type your nickname"
          value={nickname}
          onChange={onChange}
        />
      </S.Contents>
    </S.Nickname>
  );
}
