import React, { useState, useEffect } from 'react';
import { MemeCard } from './MemeCard';
import { MemeCardSkelton } from './MemeCard-Skelton';
import {
  Routes,
  Route,
  HashRouter,
  Link,
  BrowserRouter,
  Navigate,
  useNavigate
} from 'react-router-dom';
import { MemePage } from './Pages/Meme';
import { AboutPage } from './Pages/AboutPage';
import { LoginPage } from './Pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';

export const App = () => {
  const isAuthenticated = false;
  const navigate = useNavigate();
  return (
    <div>
      <header
        style={{
          height: '100px',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          justifyContent: 'space-between'
        }}
      >
        <h1 onClick={() => navigate('/')}>Shimmer UI -Router App</h1>
        <nav>
          <button
            onClick={() => {
              navigate('/about');
            }}
          >
            Go to about
          </button>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Go to Meme
          </button>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>

      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path='/meme-page'
            element={<MemePage />}
          />
        </Route>

        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/'
          element={
            <Navigate
              to='/meme-page'
              replace
            />
          }
        />
        <Route
          path='/about'
          element={<AboutPage />}
        />
      </Routes>
    </div>
  );
};

/*
Ways of implementing Protected Routes

  <Route
          path='/about'
          element={
            isAuthenticated ? (
              <AboutPage />
            ) : (
              <Navigate
                to='/login'
                replace
              />
            )
          }
        />

  Gives a fallback As navigate to login in ach Route , but this is not scalable

  Optimal Apporhc For doing Protected ROute
  1. Create a protected Route Component and handle the is autheticated logic therre
  isAuthenticated? <Outlet/> : <Navigate to='/login/>


  <Routes>
  <Route element={ProtectedRoute}>
  <Route path='/about' element={AboutPage}>
  </Route>
  </Routes>
*/
