import React from 'react';
import { useViewedProducts } from './ViewedProductsContext';

function ProductDetails({ product }) {
  // Access the addViewedProduct function from the context
  const { addViewedProduct } = useViewedProducts();

  // Function to handle viewing a product
  const handleViewProduct = () => {
    // Call addViewedProduct and pass the product data
    addViewedProduct(product);
  };

  return (
    <div>
      {/* Display product details */}
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      {/* ... other product details ... */}
      {/* Button to view the product */}
      <button onClick={handleViewProduct}>View Product</button>
    </div>
  );
}

export default ProductDetails;
