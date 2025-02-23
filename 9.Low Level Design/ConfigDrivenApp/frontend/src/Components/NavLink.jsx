import React from 'react';

export const NavLink = (props) => {
  return (
    <div>
      <a href={props.link}>{props.text}</a>
    </div>
  );
};
