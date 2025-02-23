import React from 'react';

export const ChatComponent = ({ chat, message }) => {
  return (
    <div className='chat'>
      <img src='https://yt4.ggpht.com/ytc/AIdro_lzmkFZKdsduMHw0_vSpto5KWMYa7ZxIRGx4t4br-L2yw3u=s64-c-k-c0x00ffffff-no-rj' />
      <p>{chat.sender}</p>
      <p>{message}</p>
    </div>
  );
};
