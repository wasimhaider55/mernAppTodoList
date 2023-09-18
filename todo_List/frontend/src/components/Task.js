import React, { useState } from "react";
import { FaCheckDouble, FaEdit, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ task, index, deleteTask, getSingleTask, }) => {
  const [completed, setToComplete] = useState(task.completed);

  return (
    <div className={completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1} . </b>
        {task.name}
      </p>
      <div className="task-icons">
        <FaCheckDouble
          color="green"
          onClick={() => {
            setToComplete(!completed);

          }}
        />
        <FaEdit color="purple" onClick={() => getSingleTask(task)} />
        <FaRegTrashAlt color="red" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;
