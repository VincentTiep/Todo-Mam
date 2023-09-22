import { combineReducers } from "redux";
import listTask from "./listTask";
import taskTemporal from "./taskTemporal";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  listTask: listTask,
  taskTemporal: taskTemporal,
});

export default rootReducer;
