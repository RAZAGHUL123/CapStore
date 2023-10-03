import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Navbar, Nav } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar({ token, setToken }) {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.count, 0);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setToken(null);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart ({cartCount})</Nav.Link>
          <Nav.Link as={Link} to="/store">Store</Nav.Link>

          {token ? (
            <>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/logout" onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
