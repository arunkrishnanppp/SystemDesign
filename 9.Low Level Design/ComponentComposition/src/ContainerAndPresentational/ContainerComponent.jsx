import React, { useState } from 'react';
import { Presentational } from './Presentational';

export const ContainerComponent = () => {
  const [todos, setTodos] = useState([
    {
      name: 'Wake Up'
    }
  ]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <Presentational
        todos={todos}
        addTodo={addTodo}
      />
    </div>
  );
};
