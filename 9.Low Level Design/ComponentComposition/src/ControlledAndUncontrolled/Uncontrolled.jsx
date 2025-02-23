import React, { useRef } from 'react';

export const Uncontrolled = () => {
  const inputRef = useRef();
  const onFormSubmit = (e) => {
    console.log(inputRef.current.value);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Uncontrolled</h1>
      <p>
        Uncontrolled components are in which state is not controlled by developer within the
        component and bvrowser controll it with its default behaviour Component bahv is drivn by
        local state rather than props are called uncontrolled, with local state
      </p>
      <form onSubmit={onFormSubmit}>
        <label for='input'>Enter input</label>
        <input ref={inputRef} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
