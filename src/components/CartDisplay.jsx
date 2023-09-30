import React, { useState, useEffect } from 'react';

function CartDisplay() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Assuming you have the user's ID saved somewhere after login
    const userId = 'user1';

    fetch(`https://fakestoreapi.com/carts/user/${userId}`)
      .then(res => res.json())
      .then(json => setCartItems(json.products));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.productId}>{item.quantity}x Product ID: {item.productId}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartDisplay;
