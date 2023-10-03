import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext'; // Import your cart context

function ProductDetails({ productId }) {
  const { addToCart } = useCart(); // Access addToCart function from the cart context
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add the selected product to the cart
    }
  };

  useEffect(() => {
    // Fetch product details including the image URL
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description || 'No description available.'}</p>
      <img src={product.image} alt={product.title} />

      {/* Button to add the product to the cart */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
