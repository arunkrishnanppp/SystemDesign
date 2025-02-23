import React, { useEffect, useState } from 'react';
import { MemeCard } from './MemeCard';
import './infinite-scroll.css';
import { Shimmer } from './Shimmer';
// const apiResponse = await fetch('https://meme-api.com/gimme/wholesomememes/50');
export const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(true);
  const fetchMemes = async () => {
    setShowShimmer(true);

    const apiResponse = await fetch('https://meme-api.com/gimme/wholesomememes/50');
    const response = await apiResponse.json();
    console.log(response);
    setTimeout(() => {
      setShowShimmer(false);
      setMemes((prev) => [...prev, ...response.memes]);
    }, 2000);
  };
  const handleScroll = () => {
    console.log('scroll');
    console.log(window.screenY);
    console.log(window.innerHeight);
    console.log(document.body.scrollHeight);
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      console.log('Fetch');
      fetchMemes();
    }
  };
  useEffect(() => {
    fetchMemes();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // return (
  //   <>
  //     {' '}
  //     {memes.length == 0 ? (
  //       <Shimmer />
  //     ) : (
  //       <div className='memes'>
  //         {memes.map((meme) => (
  //           <MemeCard meme={meme} />
  //         ))}
  //       </div>
  //     )}
  //   </>
  // );
  return (
    <>
      <div className='memes'>
        {memes.length > 0 && memes.map((meme) => <MemeCard meme={meme} />)}

        {showShimmer && <Shimmer />}
      </div>
    </>
  );
};
