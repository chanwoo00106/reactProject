import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  width: 30rem;
  height: 40rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px #218fff;
`;

export const Top = styled.div`
  width: 100%;
  height: 8%;
  background: #218fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Center = styled.ul`
  width: 100%;
  height: 83%;
  overflow: auto;
  margin: 0;
`;

export const Room = styled.li`
  margin: 1rem 0;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;

  :hover {
    text-decoration: underline;
  }
`;

export const RoomName = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const RoomPeople = styled.div`
  font-size: 1.1rem;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 9.1%;
  display: grid;
  grid-template-columns: 8fr 2fr;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid rgba(33, 143, 255, 0.2);
  box-shadow: 0 -5px 10px rgba(33, 143, 255, 0.2);
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0 10px;
  border-bottom-left-radius: 20px;
  color: inherit;
`;

export const SubmitButton = styled.button`
  border-bottom-right-radius: 20px;
  border: none;
  font-weight: bold;
  color: #fff;
  background-color: #47a2ff;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    background-color: #218fff;
  }
`;
