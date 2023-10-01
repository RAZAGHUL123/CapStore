import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext'; // Import your cart context

function SelectedProduct() {
  // State to hold the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart(); // Access addToCart function from the cart context

  // Effect to retrieve the selected product from local storage
  useEffect(() => {
    // Retrieve the selected product from local storage
    const storedProduct = localStorage.getItem('selectedProduct');

    if (storedProduct) {
      // If a selected product exists in local storage, set it in the state
      setSelectedProduct(JSON.parse(storedProduct));
    }
  }, []);

  // Function to handle adding the selected product to the cart
  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // Add the selected product to the cart
    }
  };

  return (
    <div>
      <h2>Selected Product</h2>
      {selectedProduct ? (
        <div>
          {/* Display the selected product details */}
          <h3>{selectedProduct.name}</h3>
          <p>Price: ${selectedProduct.price}</p>
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
          
          {/* Additional product details */}
          <p>Description: {selectedProduct.description || 'No description available.'}</p>
          
          {/* Add to Cart Button */}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        // If no product is selected, display a message
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default SelectedProduct;
