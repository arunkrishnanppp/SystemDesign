import React, { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import './pagination.css';
// fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1&select=key2&select=key3');
const PER_PAGE = 10;
export const OffSetPagination = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const fetchData = async () => {
    try {
      const rsp = await fetch(
        `https://dummyjson.com/products?limit=${PER_PAGE}&skip=${PER_PAGE * page}`
      );
      const response = await rsp.json();
      console.log(response);
      console.log(response.total / PER_PAGE);
      setTotal(response.total);
      setProducts(response.products);
      setNumberOfPages(Math.ceil(response.total / PER_PAGE));
      console.log(total / PER_PAGE);
      console.log(numberOfPages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className='main'>
      <ProductList products={products} />
      <div className='pagination'>
        {page > 0 && <button onClick={() => setPage((prev) => prev - 1)}>Dec Page</button>}
        <div className='page-numbers'></div>
        {Array(numberOfPages)
          .fill(0)
          .map((_, index) => (
            <span
              onClick={() => setPage(index)}
              style={{
                textDecoration: page == index && 'underline',
                fontWeight: page == index ? 'bold' : '',
                cursor: 'pointer'
              }}
            >
              {index}
            </span>
          ))}
        {page < numberOfPages - 1 && (
          <button onClick={() => setPage((prev) => prev + 1)}>Inc Page</button>
        )}
      </div>
    </div>
  );
};
