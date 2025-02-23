import React, { useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = (fetchMemes) => {
  const observerRef = useRef(null);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchMemes();
      console.log(response);
      console.log(isLoading);
      setData((prev) => [...prev, ...response]);
      if (response.length == 0) setHasMore(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!hasMore) return;
    console.log(fetchMemes);
    fetchData();
    console.log('hello');
  }, [page]);

  useEffect(() => {
    const callback = (entries) => {
      console.log(entries);
      if (entries[0].isIntersecting && hasMore && !isLoading) {
        setIsLoading(true);
        setPage((prev) => prev + 1);
      }
    };
    const options = { threshold: 1.0 };
    const observer = new IntersectionObserver(callback, options);
    console.log(observer);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, isLoading]);

  return { data, isLoading, observerRef };
};
