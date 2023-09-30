import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, removeFromCart, getTotalPrice, addToCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.name} width="50" />
          <h4>
            {item.name} <span className="item-count">x{item.count}</span>
          </h4>
          <p>Price: ${item.price.toFixed(2)}</p>
          <div className="item-actions">
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total Price: ${getTotalPrice()}</h3>
    </div>
  );
}

export default Cart;
