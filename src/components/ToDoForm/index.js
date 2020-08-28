import React, { useState, useEffect } from 'react';

const ToDoForm = ({addTask}) => {
  const [value, setValue] = useState('new task');
  const dirtyWords = ["fuck", "shit", "damn"]

  const handleForm = (e) => {
    e.preventDefault();
    addTask(value);
  }

  const onChangeListener = (e) => {
    setValue(e.target.value)
  }

  // 正確解法：useEffect
  // useEffect(()=> {
  //   if (value)
  // }, [dirtyWords])

  return (
    <form onSubmit={handleForm}>
      <input type="text" onChange={onChangeListener}/>
      {(()=>{
        if (dirtyWords.includes(value.toLowerCase())) {
          return <input type="submit" value="新增" disabled/>
        } else {
          return <input type="submit" value="新增"/>
        }
      })()}

    </form>
  );
};

export default ToDoForm;
