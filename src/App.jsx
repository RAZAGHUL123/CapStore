import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navbar';
import Cart from './components/Cart';
import Store from './components/Store';
import { CartProvider } from './components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Logout from './components/Logout';
import SignupPage from './components/SignupPage';
import UserDashboard from './components/UserDashboard';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage'; // Import the new CheckoutPage component

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') || null);

  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation token={token} setToken={setToken} />
        
          <div className="app-content">
            <Routes>
              {/* Routes available for everyone */}
              <Route path="/checkout" element={<CheckoutPage />} /> {/* Use the new CheckoutPage component */}

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:productId" element={<ProductDetail />} />

              {token ? (
                <>
                  {/* Routes available only when logged in */}
                  <Route path="/dashboard" element={<UserDashboard username="John" />} />
                  <Route path="/logout" element={<Logout setToken={setToken} />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </>
              ) : (
                <>
                  {/* Routes available only when not logged in */}
                  <Route path="/login" element={<Login setToken={setToken} />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </>
              )}
            </Routes>
          </div>
          <Footer />
        
      </BrowserRouter>
    </CartProvider>
  );
}
