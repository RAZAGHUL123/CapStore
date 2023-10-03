import React, { createContext, useContext, useState } from 'react';

// Create a context for the shopping cart
export const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap your application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      // If the product is already in the cart, update its count
      const updatedCart = [...cart];
      updatedCart[index].count++;
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it as a new entry with count 1
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    // Decrement the count for the specified item
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );

    // Remove items with count <= 0
    setCart(updatedCart.filter((item) => item.count > 0));
  };

  // Function to calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  // Create a context value object with cart-related functions and data
  const value = {
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };

  // Provide the context value to the wrapped components
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
