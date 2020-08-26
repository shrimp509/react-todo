import React, { useState, useEffect } from 'react';

const ToDoForm = ({addTask}) => {
  const [value, setValue] = useState('new task');
  const dirty_words = ["fuck", "shit", "damn"]

  const handleForm = (e) => {
    e.preventDefault();
    addTask(value);
  }

  const onChangeListener = (e) => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={handleForm}>
      <input type="text" onChange={onChangeListener}/>
      {(()=>{
        if (dirty_words.includes(value.toLowerCase())) {
          return <input type="submit" value="新增" disabled/>
        } else {
          return <input type="submit" value="新增"/>
        }
      })()}

    </form>
  );
};

export default ToDoForm;
