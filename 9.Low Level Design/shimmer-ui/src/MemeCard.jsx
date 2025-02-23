import React from 'react';

export const MemeCard = ({ meme }) => {
  return (
    <div
      style={{
        padding: '5px',
        margin: '10px',
        border: '1px solid black'
      }}
    >
      <img
        src={meme.preview[0]}
        style={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};
