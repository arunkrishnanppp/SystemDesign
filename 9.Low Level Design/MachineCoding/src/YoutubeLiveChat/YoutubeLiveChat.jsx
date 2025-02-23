import React from 'react';
import { YoutubeVideo } from './YoutubeVideo';
import './youtube.css';
import { Chat } from './Chat';

export const YoutubeLiveChat = () => {
  return (
    <div className='youtube'>
      <YoutubeVideo />
      <Chat />
    </div>
  );
};
