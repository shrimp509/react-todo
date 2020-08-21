import React, { useState, useEffect } from 'react';

import ToDoItem from '../ToDoItem'
import ToDoForm from '../ToDoForm'

const ToDoList = () => {

  const initState = [
    '吃飯',
    '睡覺',
    '打東東',
    '我要 pixel 4a',
    '吃吃吃'
  ]

  const [tasks, setTasks] = useState(initState);

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const addTask = (value) => {
    const newTasks = [...tasks];
    newTasks.push(value);
    setTasks(newTasks);
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <ToDoItem key={task+index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
      <ToDoForm addTask={(value) => addTask(value)}/>
    </div>
  );
};

export default ToDoList;
