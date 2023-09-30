import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    address: {
      city: '',
      street: '',
      number: '',
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    },
    phone: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.includes('.')) {
      const [section, key] = name.split('.');
      setFormData(prevState => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [key]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Sign up failed');
      }

      const data = await response.json();
      if (data.status) {
        setSuccess(true);
      } else {
        throw new Error(data.message || 'Sign up failed');
      }

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Sign Up Page</h1>
      {success ? (
        <p>Successful sign up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* This is just an example, you'll want to create more structured and styled form fields. */}
          <input name="email" placeholder="Email" onChange={handleInputChange} />
          <input name="username" placeholder="Username" onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
          {/* ... more form fields for other properties ... */}
          <button type="submit">Sign Up</button>
        </form>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignupPage;
