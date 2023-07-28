import React from 'react';
import './App.css';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <h3
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </h3>
      <button onClick={() => onDelete(task.id)}>Usuń</button>
    </div>
  );
};

export default Task;