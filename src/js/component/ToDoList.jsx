import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };
  const clear = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>List Of Tasks</h1>

      <input
        type="text"
        value={task}
        onChange={(element) => setTask(element.target.value)}
      />

      <button className="Button btn btn-success " onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span className="delete" onClick={() => clear(task)}>
              🗑️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
