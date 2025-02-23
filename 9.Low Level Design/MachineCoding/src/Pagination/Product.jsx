import React, { useEffect, useState } from 'react';

export const Product = ({ product }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div
      className='product'
      key={product.id}
    >
      <h2>{product.title}</h2>
      {isLoading && (
        <div
          style={{
            width: '200px',
            height: '200px',

            background: '#f3f3f3'
          }}
        ></div>
      )}
      <img
        onLoad={() => setLoading(false)}
        width={'200px'}
        height={'200px'}
        src={product.images[0]}
      />
    </div>
  );
};
