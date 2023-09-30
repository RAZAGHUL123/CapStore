import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]); // State to manage the cart

  // Function to fetch product information
  const fetchProductInfo = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSelectedProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setError(error);
        setLoading(false);
      });
  };

  // Function to add the selected product to the cart
  const addToCart = () => {
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };

  useEffect(() => {
    if (productId) {
      setError(null);
      setLoading(true);
      fetchProductInfo(productId);
    }
  }, [productId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : selectedProduct ? (
        <>
          <h2>Product Detail</h2>
          <h3>{selectedProduct.title}</h3>
          <p>Price: ${selectedProduct.price.toFixed(2)}</p>
          <p>Description: {selectedProduct.description}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default ProductDetail;
