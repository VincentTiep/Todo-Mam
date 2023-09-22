import { AddCircle } from "iconsax-react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import {
  DesktopDateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { IRootState, iniValue, Object } from "../../types/type";
import { addTaskAction, updateTaskAction } from "../../Redux/actions/listTask";

const Tasks = () => {
  //Library
  const lisTaskRedux = useSelector((store: IRootState) => store.taskTemporal);
  const dispatch = useDispatch();

  //useState
  const [isEditing, setIsEditing] = useState(false); //Hide/show add task
  const [todo, setTodo] = useState<Object>(iniValue); //add task
  const [currentTodo, setCurrentTodo] = useState<Object>(iniValue); //Edit todo

  //Function
  const handleAddTask = () => {
    dispatch(
      addTaskAction({
        ...todo,
        id: new Date(),
        dateCreate: new Date(),
        edit: false,
        isComplete: false,
        isImportance: 0,
        isShowStar: true,
      })
    );
    setTodo({ ...todo, text: "" });
  };

  const handleUpdateTask = () => {
    dispatch(
      updateTaskAction({
        ...lisTaskRedux,
        text: currentTodo.text,
        deadline: currentTodo.deadline,
        edit: false,
      })
    );
    setIsEditing(false);
  };

  //useEffect
  useEffect(() => {
    setIsEditing(lisTaskRedux.edit);
    setCurrentTodo(lisTaskRedux);
  }, [lisTaskRedux]);

  return (
    <>
      {isEditing ? (
        <div className="p-3 mb-3 bg-body-secondary todo-list text-start">
          <h2 className="text-center">Todo Task</h2>
          <label className="badge bg-primary text-wrap p-1 mb-1">
            Todo Tasks
          </label>
          <br />

          <textarea
            className="form-control mb-2"
            style={{ height: "100px" }}
            value={currentTodo.text}
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, text: e.target.value })
            }
          />
          <label className="badge bg-warning text-wrap p-1 mt-2 mb-1">
            Deadline
          </label>
          <br />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDateTimePicker
              defaultValue={dayjs(new Date())}
              ampm={false}
              className="form-control mb-3"
              value={currentTodo.deadline}
              onChange={(e: any) =>
                setCurrentTodo({ ...currentTodo, deadline: e.$d })
              }
              format="YYYY-MM-DD HH:mm:ss"
            />
          </LocalizationProvider>

          <Button
            variant="primary"
            className="mb-1 p-1"
            onClick={handleUpdateTask}
            title="Update Task"
          >
            <AddCircle size="25" color="#fff" className="me-2" />
            Update
          </Button>
        </div>
      ) : (
        <div className="p-3 mb-3 bg-body-secondary todo-list text-start">
          <h2 className="text-center">Todo Task</h2>
          <label className="badge bg-primary text-wrap p-1 mb-1">
            Todo Tasks
          </label>
          <br />

          <textarea
            value={todo.text}
            onChange={(e) => setTodo({ ...todo, text: e.target.value })}
            className="form-control mb-2"
            style={{ height: "100px" }}
            placeholder="📝 Add Todo..."
          />
          <label className="badge bg-warning text-black text-wrap p-1 mt-2 mb-1">
            Deadline
          </label>
          <br />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDateTimePicker
              defaultValue={dayjs(new Date())}
              ampm={false}
              className="form-control mb-3"
              value={currentTodo.deadline}
              onChange={(e: any) => setTodo({ ...todo, deadline: e.$d })}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </LocalizationProvider>

          <Button
            variant="primary"
            className="mb-1 p-1 add-btn-hover"
            onClick={handleAddTask}
            title="Add Task Action"
          >
            <AddCircle size="25" color="#fff" className="me-2" />
            Add todo
          </Button>
        </div>
      )}
    </>
  );
};

export default Tasks;
