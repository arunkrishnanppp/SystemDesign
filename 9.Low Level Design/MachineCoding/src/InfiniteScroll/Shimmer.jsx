import React from 'react';

export const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((meme) => (
      <div className='meme-card shimmer-card'>
        <div className='img'></div>
      </div>
    ));
};
