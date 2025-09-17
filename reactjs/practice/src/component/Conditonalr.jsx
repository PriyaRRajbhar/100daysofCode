import React, { useState } from 'react';

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Please log in</h1>
      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
    </div>
  );
}

export default UserDashboard;