import React from 'react';

function Logout() {
  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem('authToken');

    // Redirect the user to the login page (you can use React Router or similar)
    window.location.href = '/login';
  };

  return (
    <div style={{ textAlign: 'right', marginTop: '10px' }}>
      <button
        onClick={handleLogout}
        style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
