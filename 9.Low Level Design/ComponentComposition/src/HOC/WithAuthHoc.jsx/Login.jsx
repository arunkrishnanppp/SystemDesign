import React, { useState } from 'react';

export const Login = () => {
  const [user, setuser] = useState('');

  return (
    <div>
      <input
        value={user}
        onChange={(e) => setuser(e.target.value)}
      />
      <button onClick={() => localStorage.setItem('user', user)}>Login</button>
    </div>
  );
};
