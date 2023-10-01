import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, removeFromCart, getTotalPrice, addToCart } = useCart();
  const [productData, setProductData] = useState([]); // Store product data

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductData(data); // Store the fetched product data in state
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []); // Fetch data once when the component mounts

  const countSameProducts = (productId) => {
    return cart.reduce((count, cartItem) => {
      if (cartItem.id === productId) {
        return count + cartItem.count;
      }
      return count;
    }, 0);
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.map((cartItem) => {
        const product = productData.find((product) => product.id === cartItem.id);
        if (!product) return null; // Skip if product not found

        const sameProductCount = countSameProducts(product.id);

        return (
          <div key={product.id} className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img img-fluid custom-small-size"
                />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h4 className="card-title">
                    {product.title}{' '}
                    {sameProductCount > 1 && ( // Add purple badge if more than 1 of the same product
                      <span className="badge badge-purple">x{sameProductCount}</span>
                    )}
                  </h4>
                  <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                  <div className="item-actions">
                    <button
                      className="btn btn-success btn-sm mr-2"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h3 className="mt-3">Total Price: ${getTotalPrice()}</h3>
    </div>
  );
}

export default Cart;
