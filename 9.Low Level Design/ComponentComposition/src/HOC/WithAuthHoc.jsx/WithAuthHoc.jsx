import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const WithAuthHoc = (WrapperComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    useEffect(() => {
      if (!user) {
        navigate('/login'); // Redirect to login if the user isn't authenticated.
      }
    }, [user, navigate]);
    console.log(props);
    return (
      <div>
        <WrapperComponent
          {...props}
          user={user}
        />
        <h2>Logged in user {user}</h2>
      </div>
    );
  };
};
