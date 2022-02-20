import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../module";

import * as S from "./styles";

export default function Nickname() {
  const { nickname } = useSelector(({ nickname }: RootState) => ({
    nickname,
  }));
  const dispatch = useDispatch();

  return (
    <S.Nickname>
      <S.Contents>
        <S.Title>닉네임 입력</S.Title>
        <S.Input placeholder="닉네임 입력" />
      </S.Contents>
    </S.Nickname>
  );
}
