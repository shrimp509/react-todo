import React, { useState, useEffect } from 'react';

const ToDoItem = ({task, deleteTask}) => {
  const [isComplete, setIsComplete] = useState(false);

  const classes = isComplete ? 'todo-item-complete todo-item' : 'todo-item';

  return (
    <div className={classes}>
      <span onClick={() => setIsComplete(!isComplete)}>{task}</span>
      <button onClick={() => deleteTask()}>Delete</button>
    </div>
  );
};

export default ToDoItem;
