const CHANGE = "nickname/CHANGE" as const;

export const change = (value: string) => ({
  type: CHANGE,
  value,
});

type ActionType = ReturnType<typeof change>;

const initialState: string = "";

export default function nickname(
  state: string = initialState,
  action: ActionType
) {
  switch (action.type) {
    case CHANGE:
      return action.value;
    default:
      return state;
  }
}
