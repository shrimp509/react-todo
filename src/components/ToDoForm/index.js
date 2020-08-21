import React, { useState, useEffect } from 'react';

const ToDoForm = ({addTask}) => {
  const [value, setValue] = useState('new task');

  const handleForm = (e) => {
    e.preventDefault();
    addTask(value);
  }

  return (
    <form onSubmit={handleForm}>
      <input type="text" onChange={(e) => {setValue(e.target.value)}}/>
      <input type="submit" />
    </form>
  );
};

export default ToDoForm;
