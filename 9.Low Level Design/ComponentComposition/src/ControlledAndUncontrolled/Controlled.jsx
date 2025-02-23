import React, { useState } from 'react';

export const Controlled = () => {
  const [value, setValue] = useState('test');
  const onFormSubmit = (e) => {
    console.log(value);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Controlled</h1>
      <p>
        Controlled components are in which state is controlled by developer within the component and
        is controlled by passing props, Components are controlled when important infos are driven by
        propsed rather that own local state, Let the parent component fully specify the bahaviour
      </p>
      <form onSubmit={onFormSubmit}>
        <label for='input'>Enter input</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
