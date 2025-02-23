import React, { useState, useEffect } from 'react';
import { MemeCard } from '../MemeCard';
import { MemeCardSkelton } from '../MemeCard-Skelton';
import { useNavigate } from 'react-router-dom';
export const MemePage = () => {
  const navigate = useNavigate();
  const [memes, setMemes] = useState(null);
  const fetchMems = async () => {
    const apiResponse = await fetch('https://meme-api.com/gimme/wholesomememes/50');
    const mems = await apiResponse.json();
    setMemes(mems.memes);
  };
  useEffect(() => {
    console.log('Use Effect');
    fetchMems();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        Go to about
      </button>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start'
        }}
      >
        {memes &&
          memes.map((mem) => {
            return <MemeCard meme={mem} />;
          })}
        {!memes && <MemeCardSkelton />}
      </div>
    </div>
  );
};
