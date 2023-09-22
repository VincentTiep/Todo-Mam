import { Button } from "react-bootstrap";
import { CloseSquare, ArrowRotateLeft } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState, Object } from "../../types/type";
import {
  deleteAllTaskAction,
  deleteTaskAction,
  restoreTaskAction,
} from "../../Redux/actions/listTask";
import { getDateTime, getTime } from "../../Unitities/getTime";

const Done = () => {
  //Thư viện
  const tasksCompleteRedux = useSelector((store: IRootState) => store.listTask);
  const dispatch = useDispatch();

  const cloneTasksCompleteRedux = tasksCompleteRedux.filter(
    (task: Object) => task.isComplete === true
  );

  //useState

  //Function
  const handleRestoreTask = (item: any) => {
    dispatch(restoreTaskAction(item));
  };
  const handleDeleteTask = (item: any) => {
    dispatch(deleteTaskAction(item));
  };
  const handleDeleteAllTask = () => {
    dispatch(deleteAllTaskAction(tasksCompleteRedux));
  };

  //useEffect

  return (
    <div className="p-3 mb-2 bg-body-secondary todo-list">
      <h2>Already Done</h2>
      <div className="text-start">
        <Button
          variant="danger"
          className="m-2"
          onClick={handleDeleteAllTask}
          title="Delete all tasks done"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-trash me-2"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg>
          Delete All
        </Button>

        {cloneTasksCompleteRedux.map((taskrender: any, index: number) => (
          <div key={index} className="border-bottom border-dark mb-2 mt-2">
            <div key={index}>
              <p>
                <del>{getTime(taskrender.dateCreate)}</del>
              </p>
              <p>
                <del>{taskrender.text}</del>
              </p>
              <p>
                <del>Deadline: {getDateTime(taskrender.deadline)}</del>
              </p>
            </div>
            <div className="m-2 d-flex flex-row justify-content-end">
              <CloseSquare
                size="35"
                color="#fff"
                className=" p-1 mb-1 me-2 btn btn-danger"
                onClick={() => handleDeleteTask(taskrender)}
              />
              <ArrowRotateLeft
                size="35"
                color="#fff"
                className="p-1 mb-1 ms-2 btn btn-primary"
                onClick={() => handleRestoreTask(taskrender)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Done;
