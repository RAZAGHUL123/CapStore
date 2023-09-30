import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(null); // Store the token
  const [userName, setUserName] = useState(null); // Store the user's name

  const handleLogin = () => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Login failed');
        }
        return res.json();
      })
      .then((json) => {
        // Assuming the API returns a token and username upon successful login
        setToken(json.token); // Set the token
        setUserName(json.username); // Set the user's name
        console.log('Login Successful. Token:', json.token);
      })
      .catch((err) => {
        setError('Login failed. Please check your credentials.');
        console.error('Error:', err);
      });
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h2>Login</h2>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Login
      </button>
      {error && <p style={{ color: '#ff0000', marginTop: '10px' }}>{error}</p>}
      {token && <p style={{ textAlign: 'right', fontSize: '14px' }}>Welcome, {userName}!</p>} {/* Display the welcome message */}
    </div>
  );
}

export default Login;
