import React, { useState, useEffect } from 'react';

function SelectedProduct() {
  // State to hold the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    // Implement your logic here to add the selected product to the cart
    // You can use a similar approach as in the ProductDetail component
    // Example: addToCart(selectedProduct);
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
