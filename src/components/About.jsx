import React from 'react';

function About() {
  const pageStyle = {
    backgroundColor: '#3b3b3b', // Vintage dark background
    color: '#ffcd75', // Edgy golden text
    fontFamily: 'Cinzel Decorative, cursive', // Vintage font
    padding: '2rem', // Comfortable spacing
    textAlign: 'center', // Centered content
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to the Abyss</h1>
      <p style={{ fontSize: '1.2rem' }}>
        In the dimly lit corners of our existence, where shadows dance and secrets whisper,
        <br /> you've found your way to a place where reality blurs with nightmares.
      </p>
      <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
        We're here to explore the depths of fear, the beauty of darkness, and the mysteries
        <br /> that lurk in the eerie stillness of the night.
      </p>
      <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
        Stay with us, if you dare, as we journey through the haunted corridors of the unknown.
      </p>
      <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
        Keep an eye on the shadows - for here, they have eyes of their own.
      </p>
    </div>
  );
}

export default About;
