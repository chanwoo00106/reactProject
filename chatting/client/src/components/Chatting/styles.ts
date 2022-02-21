import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 8%;
  background: #218fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  font-size: 1.5rem;
  font-weight: bold;

  svg {
    transform: rotate(180deg);
    cursor: pointer;

    polyline {
      stroke: #fff;
    }
  }
`;

export const RoomName = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
`;
