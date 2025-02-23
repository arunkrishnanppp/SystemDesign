import React from 'react';

export const MemeCard = ({ meme }) => {
  // console.log(meme);
  return (
    <div className='meme-card'>
      <img src={meme.preview[0]} />
      <p>{meme.title}</p>
    </div>
  );
};
