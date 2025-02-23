import React, { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { ProductList } from '../Pagination/ProductList';
const ITEMS_PER_PAGE = 10;
export const PaginatedList = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const rsp = await fetch(
        `https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${ITEMS_PER_PAGE * (page - 1)}`
      );
      const response = await rsp.json();

      setTotal(response.total);
      setProducts(response.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <ProductList products={products} />
      <Pagination
        totalItem={total}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={page}
        onPageChange={(pageNumber) => setPage(pageNumber)}
      />
    </div>
  );
};
