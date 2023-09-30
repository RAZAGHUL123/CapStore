import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navbar';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Logout from './components/Logout';
import SignupPage from './components/SignupPage'; // Add this line for the SignupPage import

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') || null);

  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation token={token} setToken={setToken} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<SignupPage />} /> {/* Add this line for the SignupPage route */}
          <Route path="/" element={<Home />} />
          {token && <Route path="/logout" element={<Logout setToken={setToken} />} />}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
