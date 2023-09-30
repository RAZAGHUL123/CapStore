import React from 'react';
import { createRoot } from 'react-dom'; // Correct import statement
import App from './App.jsx';
import './App.css';
import './index.css';
import { CartProvider } from './components/CartContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
