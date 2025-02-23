import React from 'react';

export const MouseTracker = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      style={{
        height: '400px'
      }}
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
};
