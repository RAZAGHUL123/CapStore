import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar({ token, setToken }) {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.count, 0);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setToken(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart ({cartCount})</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store">Store</Link> {/* Store link appears for everyone */}
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link> {/* Dashboard link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
