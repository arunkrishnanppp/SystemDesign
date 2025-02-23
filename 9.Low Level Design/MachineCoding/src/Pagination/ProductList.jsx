import React from 'react';
import { Product } from './Product';

export const ProductList = ({ products }) => {
  return (
    <div className='product-list'>
      {products?.map((product) => {
        console.log(product);
        return (
          <Product
            product={product}
            key={product.id}
          />
        );
      })}
    </div>
  );
};
