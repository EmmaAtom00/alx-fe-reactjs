import { useState, useEffect } from 'react';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth') === 'true');

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    setIsLoggedIn(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Home Page</h2>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  );
}

export default Home;
