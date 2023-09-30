import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navbar';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; // Import the CartContext and CartProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './components/ProductDetail';

export default function App() {
  return (
    <CartProvider> {/* Wrap your app with the CartProvider */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} /> {/* Add a route for the Cart component */}
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
