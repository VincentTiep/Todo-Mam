import { Object } from "../../types/type";
export type TTask = {
  id: "";
  dateCreate: "";
  edit: false;
  isComplete: false;
  isImportance: 0;
  isShowStar: false;
  text: "";
  deadline: "";
};
export type TAction = { type: string; payload: Object };

let data: Array<TTask> = JSON.parse(localStorage.getItem("data") as string);
let initialState = data ? data : [];

// Use the initialState as a default value
export default function appReducer(state = initialState, action: TAction) {
  switch (action.type) {
    //Add new Task
    case "task/addTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      state = [...cloneState, action.payload];

      localStorage.setItem("data", JSON.stringify(state));
      return state;
    }

    //Update task
    case "task/updateTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      const cloneActionPayload = JSON.parse(JSON.stringify(action.payload));

      localStorage.setItem("data", JSON.stringify(cloneActionPayload));
      return cloneState.map((todo: Object) =>
        todo.id === cloneActionPayload.id
          ? {
              ...todo,
              text: action.payload.text,
              deadline: action.payload.deadline,
            }
          : todo
      );
    }

    //Done All Task
    case "task/doneAllTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      state = cloneState.map(
        (task: Object) => (task = { ...task, isComplete: true })
      );

      localStorage.setItem("data", JSON.stringify(state));
      return state;
    }

    //Sort by Deadline

    case "task/sortByDeadlineTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      state = cloneState.sort((a: Object, b: Object) => {
        return new Date(a.deadline).valueOf() - new Date(b.deadline).valueOf();
      });

      localStorage.setItem("data", JSON.stringify(state));
      return state;
    }

    //Sort by Importance
    case "task/sortByImportanceTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      state = cloneState.sort((a: Object, b: Object) => {
        return b.isImportance - a.isImportance;
      });

      localStorage.setItem("data", JSON.stringify(state));
      return state;
    }

    //Set-Cancel Importance Task
    case "task/setImportanceTask": {
      const cloneState = JSON.parse(JSON.stringify(state));

      localStorage.setItem("data", JSON.stringify(cloneState));
      return cloneState.map((todo: Object) =>
        todo.id === action.payload.id
          ? { ...todo, isImportance: 1, isShowStar: false }
          : todo
      );
    }

    case "task/cancelImportanceTask": {
      const cloneState = JSON.parse(JSON.stringify(state));

      localStorage.setItem("data", JSON.stringify(cloneState));
      return cloneState.map((todo: Object) =>
        todo.id === action.payload.id
          ? { ...todo, isImportance: 0, isShowStar: true }
          : todo
      );
    }

    //DoneTask
    case "task/doneTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      console.log("id", action.payload.id);

      localStorage.setItem("data", JSON.stringify(cloneState));
      return cloneState.map((todo: Object) =>
        todo.id === action.payload.id ? { ...todo, isComplete: true } : todo
      );
    }

    //DeleteAllTask
    case "task/deleteAllTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      state = cloneState.filter((cs: Object) => cs.isComplete === false);
      localStorage.setItem("data", JSON.stringify(state));
      return state;
    }

    //DeleteTask
    case "task/deleteTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      state = cloneState.filter((cs: Object) => cs.id !== action.payload.id);

      localStorage.setItem("data", JSON.stringify(state));
      return state;
    }

    //RestoreTask
    case "task/restoreTask": {
      const cloneState = JSON.parse(JSON.stringify(state));

      localStorage.setItem("data", JSON.stringify(cloneState));
      return cloneState.map((todo: Object) =>
        todo.id === action.payload.id ? { ...todo, isComplete: false } : todo
      );
    }

    default:
      return state;
  }
}
