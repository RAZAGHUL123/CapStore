import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update its count
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, count: item.count + 1 } // Increment count for existing product
          : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it as a new entry with count 1
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    // Decrement the count for the specified item
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );

    // Remove items with count <= 0
    setCart(updatedCart.filter((item) => item.count > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
