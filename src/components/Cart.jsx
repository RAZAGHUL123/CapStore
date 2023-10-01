import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Cart() {
  const { cart, removeFromCart, getTotalPrice, addToCart } = useCart();
  const [productData, setProductData] = useState([]); // Store product data
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); // State to track user login status
  const [checkoutInitiated, setCheckoutInitiated] = useState(false); // State to track checkout initiation

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

    // Check user login status (you should implement your own logic here)
    // For demonstration, I'm using a simple condition
    // You should replace this with your actual user authentication logic
    setUserIsLoggedIn(localStorage.getItem('userToken') !== null);
  }, []); // Fetch data once when the component mounts

  const countSameProducts = (productId) => {
    return cart.reduce((count, cartItem) => {
      if (cartItem.id === productId) {
        return count + cartItem.count;
      }
      return count;
    }, 0);
  };

  // Function to handle the checkout initiation
  const handleInitiateCheckout = () => {
    setCheckoutInitiated(true); // Set checkout initiation to true
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Perform any necessary actions for the checkout process
    // For example, you can send the cart items to a server, calculate the total, and proceed with the payment.
    // After successful checkout, you can clear the cart or perform any other required actions.

    // For demonstration, let's just log a message for now.
    console.log('Checkout process initiated');
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.map((cartItem) => {
        const product = productData.find((product) => product.id === cartItem.id);
        if (!product) return null; // Skip if the product is not found

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
                    {sameProductCount > 1 && (
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
      {cart.length > 0 && !checkoutInitiated && ( // Show Checkout button when the cart is not empty and checkout hasn't been initiated
        <button onClick={handleInitiateCheckout} className="btn btn-primary">
          {userIsLoggedIn ? 'Checkout' : 'Checkout as Guest User'}
        </button>
      )}
      {cart.length === 0 && !userIsLoggedIn && ( // Show the message for guest users when the cart is empty
        <p>Checkout as a guest user when you have items in your cart.</p>
      )}
      {checkoutInitiated && <CheckoutWindow />} {/* Render CheckoutWindow when checkout is initiated */}
    </div>
  );
}

export default Cart;
