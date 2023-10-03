import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
  
      if (data.token) {
        localStorage.setItem('userToken', data.token);
        
        // Use window.location.href to navigate and refresh the page
        window.location.href = "/home";
      } else {
        throw new Error('Token not provided in response');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#6441a5',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="your-logo-url-here.png" 
          alt="ApexLocker Logo" 
          style={{ width: '50px', marginRight: '10px' }}
        />
        <h1 style={{ color: 'white', fontSize: '24px' }}>ApexLocker</h1>
      </div>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>Login</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          width: '300px',
        }}
      >
        <div style={{ marginBottom: '15px', width: '100%' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px', width: '100%' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#6441a5',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          {loading ? 'Logging In...' : 'Login'}
        </button>
        {error && (
          <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
