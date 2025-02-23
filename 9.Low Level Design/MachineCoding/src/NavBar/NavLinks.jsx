import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
const LINKS = [
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/home',
    name: 'Home'
  },
  {
    path: '/theme',
    name: 'theme'
  },
  {
    path: '/infinite-scroll',
    name: 'InfiniteScroll'
  },
  {
    path: '/infinite-scroll2',
    name: 'InfiniteScroll2'
  },
  {
    path: '/accordion',
    name: 'Accordion'
  },
  {
    path: '/slider',
    name: 'Image Slider'
  }
];
export const NavLinks = () => {
  return (
    <div className='nav-links'>
      {LINKS.map((link) => {
        return <Link to={link.path}>{link.name}</Link>;
      })}
    </div>
  );
};
