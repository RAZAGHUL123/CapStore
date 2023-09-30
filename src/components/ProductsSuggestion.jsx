import React from 'react';
import { useViewedProducts } from './ViewedProductsContext';

function ProductSuggestions() {
  const { viewedProducts } = useViewedProducts();

  return (
    <div>
      <h3>You might also like</h3>
      <ul>
        {viewedProducts.map(product => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSuggestions;
