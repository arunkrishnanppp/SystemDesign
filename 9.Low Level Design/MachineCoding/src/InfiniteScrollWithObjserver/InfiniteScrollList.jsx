import React from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';
import { MemeCard } from '../InfiniteScroll/MemeCard';
import { Shimmer } from '../InfiniteScroll/Shimmer';
const fetchMemes = async () => {
  const apiResponse = await fetch('https://meme-api.com/gimme/wholesomememes/50');
  const res = await apiResponse.json();
  console.log(res);
  return res.memes;
};
export const InfiniteScrollList = () => {
  const { data, isLoading, observerRef } = useInfiniteScroll(fetchMemes);
  console.log(isLoading);
  return (
    <div className='memes'>
      {data.length > 0 && data.map((meme) => <MemeCard meme={meme} />)}

      {isLoading && <Shimmer />}
      <div
        style={{ width: '100%', background: 'transparent' }}
        ref={observerRef}
      ></div>
    </div>
  );
};
