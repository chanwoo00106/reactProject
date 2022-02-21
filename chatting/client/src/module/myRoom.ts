const JOINEDROOM = "myRoom/JOINEDROOM" as const;
const LEAVEROOM = "myRoom/LEAVEROOM" as const;

export const joined_room = (key: string, roomName: string) => ({
  type: JOINEDROOM,
  payload: {
    key,
    roomName,
  },
});

export const leave_room = () => ({
  type: LEAVEROOM,
});

type ActionType =
  | ReturnType<typeof joined_room>
  | ReturnType<typeof leave_room>;

interface initialStateI {
  roomName: string;
  key: string;
}

const initialState: initialStateI = { roomName: "", key: "" };

export default function myRoom(
  state: initialStateI = initialState,
  action: ActionType
): initialStateI {
  switch (action.type) {
    case JOINEDROOM:
      return action.payload;

    case LEAVEROOM:
      return { roomName: "", key: "" };

    default:
      return state;
  }
}
