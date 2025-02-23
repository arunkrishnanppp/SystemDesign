import React, { useState } from 'react';

export const Presentational = ({ todos, addTodo }) => {
  const [val, setVal] = useState('');
  return (
    <div>
      {todos.map((todo) => {
        return <li>{todo.name}</li>;
      })}
      <input
        value={val}
        placeholder='Type new Todo'
        onInput={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo({
            name: val
          });
          setVal('');
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
