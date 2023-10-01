import React from 'react';
import { useCart } from './CartContext';  // Adjust the path accordingly

function Checkout() {
    const { cart, getTotalPrice } = useCart();

    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <img src={item.imageUrl} alt={item.name} width="100" /> {/* You can adjust width or style as needed */}
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.count}</p>
                        <p>Total for item: ${(item.price * item.count).toFixed(2)}</p>
                        {/* Add more details as required */}
                    </li>
                ))}
            </ul>
            <h4>Total Price: ${getTotalPrice()}</h4>
        </div>
    );
}

export default Checkout;
