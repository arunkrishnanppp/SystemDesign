import React from 'react';
import './app.css';

export const MemeCardSkelton = ({ meme }) => {
  console.log(Array(20).fill(0));
  return Array(20)
    .fill(0)
    .map((mem) => {
      return (
        <div
          style={{
            padding: '5px',
            margin: '10px',
            border: '1px solid black'
          }}
        >
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'grey',
              animation: 'fadeInOut 2s ease-in-out'
            }}
          />
        </div>
      );
    });
};
