import { Edit, ExportCircle, Star1 } from "iconsax-react";
import { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import icStar32 from "../../assets/icStar32.png";
import { ChangeEvent } from "react";
import "../../App.css";
import { IRootState, Object } from "../../types/type";
import {
  DoneAllTaskAction,
  cancelImportanceTaskAction,
  doneTaskAction,
  editTaskAction,
  setImportanceTaskAction,
  sortByDeadlineTaskAction,
  sortByImportanceTaskAction,
} from "../../Redux/actions/listTask";
import { getDateTime, getTime } from "../../Unitities/getTime";

const Notyets = () => {
  //Thư viện
  const listTaskRedux = useSelector((store: IRootState) => store.listTask);
  const dispatch = useDispatch();
  let arrlistTaskRedux = listTaskRedux.filter(
    (task1: Object) => task1.isComplete === false
  );

  //Hook State
  const [searchTask, setSearchTask] = useState("");

  let arrSearch = arrlistTaskRedux.filter((search: Object) =>
    search.text.toLowerCase().match(searchTask)
  );

  //Function
  const handleSearchTask = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTask(e.target.value);
  };

  const handleDoneAllTask = () => {
    dispatch(DoneAllTaskAction(listTaskRedux));
  };

  const handleSetImportanceTaskAction = (item: Object) => {
    dispatch(setImportanceTaskAction(item));
  };

  const handleCancelImportanceTaskAction = (item: Object) => {
    dispatch(cancelImportanceTaskAction(item));
  };

  const handleSortByDeadlineTask = () => {
    dispatch(sortByDeadlineTaskAction(listTaskRedux));
  };

  const handleSortByImportanceTask = () => {
    dispatch(sortByImportanceTaskAction(listTaskRedux));
  };

  const handleEditTask = (item: Object) => {
    dispatch(editTaskAction({ ...item, edit: true }));
  };

  const handleDoneTask = (item: Object) => {
    dispatch(doneTaskAction({ ...item, isComplete: true }));
  };

  //useEffect
  useEffect(() => {
    handleSearchTask;
  }, [searchTask]);

  return (
    <div className="bg-body-secondary todo-list text-start">
      <div className="p-3 mb-1 bg-body-secondary">
        <div className="mb-2">
          <label className="badge bg-primary text-wrap p-1 mb-1">Search</label>
          <br />
          <input
            onChange={handleSearchTask}
            type="text"
            className="form-control"
            placeholder="🔍 Search your todo..."
          />
        </div>
        <div className="d-flex flex-row mb-3">
          <Button
            variant="success"
            className="me-2 text-white"
            onClick={handleDoneAllTask}
            title="Make all as done"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-check-all me-2"
              viewBox="0 0 16 16"
            >
              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
            </svg>
            Done All
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-filter-left me-2"
                viewBox="0 0 16 16"
              >
                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleSortByDeadlineTask}>
                DeadLine
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSortByImportanceTask}>
                Importance
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <>
          {arrSearch.map((task: any, index: number) => (
            <div
              key={index}
              className="mb-1 p-3 border border-primary d-flex flex-row justify-content-between"
            >
              <div
                key={index}
                className="d-flex flex-column justify-content-start"
              >
                <div className="d-flex flex-sm-row">
                  <p className="me-3">{getTime(task.dateCreate)}</p>

                  {task.isShowStar ? (
                    <Star1
                      size="22"
                      color="#000"
                      className="ms-2 btn p-0"
                      onClick={() => handleSetImportanceTaskAction(task)}
                    />
                  ) : (
                    <img
                      src={icStar32}
                      style={{ height: "32px" }}
                      className="mt-n2 btn p-0"
                      onClick={() => handleCancelImportanceTaskAction(task)}
                    />
                  )}
                </div>
                <p>{task.text}</p>
                <p>Deadline: {getDateTime(task.deadline)}</p>
              </div>

              <div className="d-flex flex-column justify-content-end align-items-center">
                <Edit
                  size="30"
                  color="#FF8A65"
                  className="m-3 btn p-0"
                  onClick={() => handleEditTask(task)}
                />
                <ExportCircle
                  size="30"
                  color="#FF8A65"
                  className="m-3 m-3 btn p-0"
                  onClick={() => handleDoneTask(task)}
                />
              </div>
            </div>
          ))}
        </>
      </div>
      <div className="p-1 bg-info text-dark">
        {arrSearch.length}{" "}
        {arrSearch.length === 0 || arrSearch.length === 1 ? "Item" : "Items"}{" "}
        Left
      </div>
    </div>
  );
};

export default Notyets;
