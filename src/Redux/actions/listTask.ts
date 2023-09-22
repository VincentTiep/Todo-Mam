import { Object } from "../../types/type";
//AddTask
export const addTaskAction = (payload: Object) => ({
  type: "task/addTask",
  payload: payload,
});

export const updateTaskAction = (payload: Object) => ({
  type: "task/updateTask",
  payload: payload,
});

//NotYets
export const sortByDeadlineTaskAction = (payload: Object) => ({
  type: "task/sortByDeadlineTask",
  payload: payload,
});

export const sortByImportanceTaskAction = (payload: Object) => ({
  type: "task/sortByImportanceTask",
  payload: payload,
});

export const DoneAllTaskAction = (payload: Object) => ({
  type: "task/doneAllTask",
  payload: payload,
});

export const editTaskAction = (payload: Object) => ({
  type: "task/editTask",
  payload: payload,
});

export const setImportanceTaskAction = (payload: Object) => ({
  type: "task/setImportanceTask",
  payload: payload,
});

export const cancelImportanceTaskAction = (payload: Object) => ({
  type: "task/cancelImportanceTask",
  payload: payload,
});

export const doneTaskAction = (payload: Object) => ({
  type: "task/doneTask",
  payload: payload,
});

//Task Done
export const deleteAllTaskAction = (payload: Object) => ({
  type: "task/deleteAllTask",
  payload: payload,
});

export const deleteTaskAction = (payload: Object) => ({
  type: "task/deleteTask",
  payload: payload,
});

export const restoreTaskAction = (payload: Object) => ({
  type: "task/restoreTask",
  payload: payload,
});
