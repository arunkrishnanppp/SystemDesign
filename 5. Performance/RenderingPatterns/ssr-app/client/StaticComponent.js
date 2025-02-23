import React, { useEffect } from 'react';

export const StaticComponent = () => {
  const [count, setCount] = React.useState(0);
  const [classNames, setClassNames] = React.useState('box');

  useEffect(() => {
    console.log('Component has been hydrated!');
    setClassNames(classNames + ' ' + 'interactive');
  }, []); // Runs only once after hydration
  return (
    <div className={classNames}>
      <h1>SSR StaticComponent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
