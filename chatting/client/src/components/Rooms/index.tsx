import * as S from "./styles";

export default function Rooms() {
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
        <S.Bottom>
          <S.Input placeholder="방 이름 입력" />
          <S.SubmitButton>CREATE</S.SubmitButton>
        </S.Bottom>
      </S.Contents>
    </S.Wrapper>
  );
}
