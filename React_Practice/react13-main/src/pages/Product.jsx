import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  let [query, setQuery] = useSearchParams();
  console.log(
    '쿼리값',
    query.get('page')
  ); 
  return (
    <div>
      <h1>상품페이지</h1>
    </div>
  );
};

export default Product;