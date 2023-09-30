// ViewedProductsContext.js
import React, { createContext, useContext, useState } from 'react';

const ViewedProductsContext = createContext();

export const useViewedProducts = () => {
  return useContext(ViewedProductsContext);
};

export const ViewedProductsProvider = ({ children }) => {
  const [viewedProducts, setViewedProducts] = useState([]);

  const addViewedProduct = (product) => {
    setViewedProducts(prev => [product, ...prev]);
  };

  return (
    <ViewedProductsContext.Provider value={{ viewedProducts, addViewedProduct }}>
      {children}
    </ViewedProductsContext.Provider>
  );
};