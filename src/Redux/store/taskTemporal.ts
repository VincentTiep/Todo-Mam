import { TAction } from "./listTask";

const initialState: any = [];

// Use the initialState as a default value
export default function appReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case "task/editTask": {
      state = action.payload;
      return state;
    }

    default:
      return state;
  }
}
