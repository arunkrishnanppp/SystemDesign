import React, { useMemo } from 'react';
import './component.css';
export const Pagination = (PaginationProps) => {
  const { totalItem, itemsPerPage, currentPage, onPageChange } = PaginationProps;
  console.log(PaginationProps);
  const totalPages = Math.ceil(totalItem / itemsPerPage);
  const maxVisiblePages = 5;
  const getVisiblePages = useMemo(() => {
    console.log(totalPages);
    const pages = [];
    const halfRange = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - halfRange);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages]);
  return (
    <nav className='pagination-container'>
      <button
        className='pagination-button'
        onClick={() => onPageChange(1)}
      >
        First
      </button>
      <button
        className='pagination-button'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage == 1}
      >
        Prev
      </button>
      {getVisiblePages.map((page, i) => {
        return (
          <button
            key={page}
            className={`pagination-button ${page == currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className='pagination-button'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage == totalPages}
      >
        Next
      </button>
      <button
        className='pagination-button'
        onClick={() => onPageChange(totalPages)}
      >
        Last
      </button>
    </nav>
  );
};
