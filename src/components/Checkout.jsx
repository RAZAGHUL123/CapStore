import React from 'react';
import { useCart } from './CartContext';

function Checkout() {
  const { cart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    // Perform any necessary actions for the checkout process
    // For example, you can send the cart items to a server, calculate the total, and proceed with the payment.
    // After successful checkout, you can clear the cart or perform any other required actions.

    // For demonstration, let's just log a message for now.
    console.log('Checkout process initiated');
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.count}</p>
            <p>Total for item: ${(item.price * item.count).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <h4>Total Price: ${getTotalPrice()}</h4>
      <button onClick={handleCheckout} className="btn btn-primary">
        Checkout
      </button>
    </div>
  );
}

export default Checkout;
