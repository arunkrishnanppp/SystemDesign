import React, { useEffect } from 'react';

export const InteractiveComponent = ({ id }) => {
  const [count, setCount] = React.useState(0);
  const [classNames, setClassNames] = React.useState('box');
  const [currentState, setCurrentState] = React.useState('Static');

  useEffect(() => {
    console.log('Component has been hydrated!');
    setClassNames(classNames + ' ' + 'interactive');
    setCurrentState('Interactive');
  }, []); // Runs only once after hydration
  return (
    <div
      className={classNames}
      id={id}
    >
      <h1>SSR {currentState} Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
