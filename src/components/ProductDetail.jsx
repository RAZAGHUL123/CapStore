import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

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
        <div>
          <h2>Product Detail</h2>
          <h3>{selectedProduct.title}</h3>
          <p>Price: ${selectedProduct.price.toFixed(2)}</p>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
          <p>Description: {selectedProduct.description}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
}

export default ProductDetail;
