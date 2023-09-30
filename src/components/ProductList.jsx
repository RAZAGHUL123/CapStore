import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

function ProductList() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div>
      {/* Display your list of products here */}
      <ul>
        <li onClick={() => handleProductClick(1)}>Product 1</li>
        <li onClick={() => handleProductClick(2)}>Product 2</li>
        {/* Add more products */}
      </ul>

      {/* Display the selected product details */}
      {selectedProductId && <ProductDetail productId={selectedProductId} />}
    </div>
  );
}

export default ProductList;
