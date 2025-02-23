import React, { useEffect, useRef, useState, useId } from 'react';
import { ChatComponent } from './ChatComponent';
var nameList = [
  'Time',
  'Past',
  'Future',
  'Dev',
  'Fly',
  'Flying',
  'Soar',
  'Soaring',
  'Power',
  'Falling',
  'Fall',
  'Jump',
  'Cliff',
  'Mountain',
  'Rend',
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Gold',
  'Demon',
  'Demonic',
  'Panda',
  'Cat',
  'Kitty',
  'Kitten',
  'Zero',
  'Memory',
  'Trooper',
  'XX',
  'Bandit',
  'Fear',
  'Light',
  'Glow',
  'Tread',
  'Deep',
  'Deeper',
  'Deepest',
  'Mine',
  'Your',
  'Worst',
  'Enemy',
  'Hostile',
  'Force',
  'Video',
  'Game',
  'Donkey',
  'Mule',
  'Colt',
  'Cult',
  'Cultist',
  'Magnum',
  'Gun',
  'Assault',
  'Recon',
  'Trap',
  'Trapper',
  'Redeem',
  'Code',
  'Script',
  'Writer',
  'Near',
  'Close',
  'Open',
  'Cube',
  'Circle',
  'Geo',
  'Genome',
  'Germ',
  'Spaz',
  'Shot',
  'Echo',
  'Beta',
  'Alpha',
  'Gamma',
  'Omega',
  'Seal',
  'Squid',
  'Money',
  'Cash',
  'Lord',
  'King',
  'Duke',
  'Rest',
  'Fire',
  'Flame',
  'Morrow',
  'Break',
  'Breaker',
  'Numb',
  'Ice',
  'Cold',
  'Rotten',
  'Sick',
  'Sickly',
  'Janitor',
  'Camel',
  'Rooster',
  'Sand',
  'Desert',
  'Dessert',
  'Hurdle',
  'Racer',
  'Eraser',
  'Erase',
  'Big',
  'Small',
  'Short',
  'Tall',
  'Sith',
  'Bounty',
  'Hunter',
  'Cracked',
  'Broken',
  'Sad',
  'Happy',
  'Joy',
  'Joyful',
  'Crimson',
  'Destiny',
  'Deceit',
  'Lies',
  'Lie',
  'Honest',
  'Destined',
  'Bloxxer',
  'Hawk',
  'Eagle',
  'Hawker',
  'Walker',
  'Zombie',
  'Sarge',
  'Capt',
  'Captain',
  'Punch',
  'One',
  'Two',
  'Uno',
  'Slice',
  'Slash',
  'Melt',
  'Melted',
  'Melting',
  'Fell',
  'Wolf',
  'Hound',
  'Legacy',
  'Sharp',
  'Dead',
  'Mew',
  'Chuckle',
  'Bubba',
  'Bubble',
  'Sandwich',
  'Smasher',
  'Extreme',
  'Multi',
  'Universe',
  'Ultimate',
  'Death',
  'Ready',
  'Monkey',
  'Elevator',
  'Wrench',
  'Grease',
  'Head',
  'Theme',
  'Grand',
  'Cool',
  'Kid',
  'Boy',
  'Girl',
  'Vortex',
  'Paradox'
];

function generate() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

export const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [ownMessage, setOwnMessage] = useState('');
  const chatContainerRef = useRef(null);
  const pollChat = () => {
    const chatData = [
      {
        sender: generate(),
        message: `This is youtube chat live `
      }
    ];
    setChatMessages((prev) => {
      let newChats = [...chatData, ...prev];
      newChats = newChats.splice(0, 10);

      return newChats;
    });
  };
  const sendMessage = () => {
    setChatMessages((prev) => {
      const data = {
        sender: 'Arun',
        message: ownMessage
      };
      let newChats = [data, ...prev];
      newChats = newChats.splice(0, 10);

      return newChats;
    });
    setOwnMessage('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent newline in input
      sendMessage();
    }
  };
  useEffect(() => {
    setInterval(() => {
      pollChat();
    }, 2000);
    // return () => {
    //   second
    // }
  }, []);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight; // Auto-scroll to bottom
    }
  }, [chatMessages]); // Runs whenever chatMessages update

  return (
    <div className='chat-container'>
      <div
        className='chats'
        ref={chatContainerRef}
      >
        {chatMessages.map((chat, index) => {
          return (
            <ChatComponent
              key={index}
              chat={chat}
              message={`${chat.message + index}`}
            />
          );
        })}
      </div>
      <div className='chat-footer'>
        <input
          value={ownMessage}
          onChange={(e) => setOwnMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => sendMessage()}
          disabled={ownMessage.length <= 0}
        >
          Send
        </button>
      </div>
    </div>
  );
};
