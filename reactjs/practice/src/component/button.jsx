import React from 'react';
function PlayButton({ songTitle, onClick }) {
  return (
    <button 
      onClick={() => console.log(`Now playing: ${songTitle}`)}
      style={{
        backgroundColor: '#1db954', // Spotify green!
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer'
      }}
    >
      ▶️ Play {songTitle}
    </button>
  );
}

export default PlayButton;


// Test it in your App component
