import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Zrobić zakupy', completed: false },
    { id: 2, text: 'Napisać raport', completed: true },
    { id: 3, text: 'Sprzątnąć pokój', completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = { id: tasks.length + 1, text: newTaskText, completed: false };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Aplikacja do zarządzania zadaniami</h1>
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          name="task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button type="submit">Dodaj zadanie</button>
      </form>
    </div>
  );
};

export default App;