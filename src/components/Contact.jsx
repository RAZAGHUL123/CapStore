import React from 'react';

function Contact() {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
    textAlign: 'center',
  };

  const labelStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form>
        <div>
          <label style={labelStyle} htmlFor="name">
            Name:
          </label>
          <input style={inputStyle} type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="email">
            Email:
          </label>
          <input style={inputStyle} type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="message">
            Message:
          </label>
          <textarea style={inputStyle} id="message" name="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" style={buttonStyle}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
