import React from 'react';
import { NavLink } from './NavLink';

export const NavBar = (props) => {
  console.log('NavBaar', props);
  const { links, css } = props.config;
  console.log(links);
  return (
    <div style={css}>
      {links.map((link) => (
        <NavLink
          text={link.label}
          link={link.href}
        />
      ))}
    </div>
  );
};
