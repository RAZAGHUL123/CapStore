import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

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

        fetch('https://fakestoreapi.com/users/1')
          .then((res) => {
            if (!res.ok) throw new Error('Failed to fetch user details');
            return res.json();
          })
          .then((json) => {
            setUser(json);
            console.log(json);
          })
          .catch((err) => {
            console.error('Error fetching user details:', err);
          });

        navigate('/dashboard');
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
        backgroundColor: '#6441a5', // Purple background color
      }}
    >
      <h1 style={{ color: 'white' }}>Login Page</h1>
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
        }}
      >
        <div>
          <label style={{ marginBottom: '5px' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label style={{ marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#6441a5', // Purple button color
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
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
