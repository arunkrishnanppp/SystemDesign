import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';
export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = false;

  /* useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
  }, []);*/
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};
