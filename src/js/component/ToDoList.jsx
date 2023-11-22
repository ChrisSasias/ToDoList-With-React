import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [highlightedTask, setHighlightedTask] = useState(null);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim() !== '') {
      addTask();
    }
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
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="Button btn btn-success " onClick={addTask}>
        Add
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
  
            onMouseOver={() => setHighlightedTask(index)}

          >
            {task}
            {(highlightedTask === index || highlightedTask === 'delete') && (
              <span className="delete" onClick={() => clear(task)}>
                🗑️{" "}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
