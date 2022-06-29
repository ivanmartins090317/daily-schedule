import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handletaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClick={handleTaskClick}
          handletaskDeletion={handletaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
