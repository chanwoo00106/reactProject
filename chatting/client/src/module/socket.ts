import { Socket } from "socket.io-client";

const GET_SOCKET = "socket/GET_SOCKET" as const;

export const get_socket = (socket: Socket) => ({
  type: GET_SOCKET,
  socket,
});

type ActionType = ReturnType<typeof get_socket>;

const initialState: Socket | null = null;

export default function socket(
  state: Socket | null = initialState,
  action: ActionType
) {
  switch (action.type) {
    case GET_SOCKET:
      return action.socket;
    default:
      return state;
  }
}
