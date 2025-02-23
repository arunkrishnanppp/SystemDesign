import React, { useState, useEffect } from 'react';
import './autocomplete.css';
const cache = {};
export const Autocomplete = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState([]);
  const [showResult, setShowResult] = useState([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [search]);

  const fetchResults = async () => {
    console.log('cache>>', cache);
    if (cache[search]) {
      return setResults(cache[search]);
    }
    const res = await fetch(`https://www.google.com/complete/search?q=${search}&client=firefox`);
    const response = await res.json();
    cache[search] = response[1];
    console.log(response);
    setResults(response[1]);

    console.log(cache);
  };
  return (
    <div className='autocomplete-container'>
      <div className='autocomplete'>
        <h1 className='autocomplete-heading'>Google</h1>
        <div className={`input-container ${showResult && results.length > 0 ? 'showResult' : ''}`}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
          />
          <div
            onClick={() => setSearch('')}
            className='close-btn'
          >
            X
          </div>
        </div>
        {results.length > 0 && showResult && (
          <div className='search-result'>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
