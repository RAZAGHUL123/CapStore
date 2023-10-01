import React, { useState } from 'react';

function CheckoutPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isStep1Complete, setIsStep1Complete] = useState(false);
  const [isStep2Complete, setIsStep2Complete] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
  };

  const handleStep1Submit = () => {
    if (shippingAddress.trim() !== '') {
      setIsStep1Complete(true);
    }
  };

  const handleStep2Submit = () => {
    if (paymentMethod.trim() !== '') {
      setIsStep2Complete(true);
    }
  };

  return (
    <div className="checkout-container">
      {!isLoggedIn && (
        <section className="login-section">
          <h2>Login</h2>
          <button onClick={handleLogin}>Login</button>
        </section>
      )}

      {isLoggedIn && !isStep1Complete && (
        <section className="shipping-section">
          <h2>Shipping address</h2>
          <input
            type="text"
            placeholder="Enter shipping address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
          <button onClick={handleStep1Submit}>Submit</button>
        </section>
      )}

      {isLoggedIn && isStep1Complete && !isStep2Complete && (
        <section className="payment-section">
          <h2>Payment method</h2>
          <input
            type="text"
            placeholder="Enter payment method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <button onClick={handleStep2Submit}>Submit</button>
        </section>
      )}

      {isLoggedIn && isStep1Complete && isStep2Complete && (
        <section className="review-section">
          {/* Display review items and order summary */}
          {/* Add a button to place the order */}
        </section>
      )}
    </div>
  );
}

export default CheckoutPage;
