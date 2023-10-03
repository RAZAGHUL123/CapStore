import React from 'react';

function About() {
  const pageStyle = {
    color: '#007bff',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center',
  };

  return (
    <div style={pageStyle}>
      <h1>What’s Good at Apex Store?</h1>
      <p>
        Welcome to the vibe, family! Apex Store ain’t just a store - it’s a journey. A stroll through lush aisles of quality, choice, and mad deals that's just too icy to pass up.
      </p>
      <p>
        Now, whether you're just chillin’ or on a mission to cop some exclusive items, we got you. With us, it's more than shopping; it’s an experience, it’s a vibe, it’s where your wants meet our stash.
      </p>
      <p>
        Kick back, scroll through, and let’s make it rain with some top-tier shopping adventures, shall we?
      </p>
    </div>
  );
}

export default About;
