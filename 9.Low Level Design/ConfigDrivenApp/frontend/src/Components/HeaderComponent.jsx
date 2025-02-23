import React from 'react';
import { Logo } from './Logo';
import { ELEMENT_TYPES } from '../Constants/AppConstants';
import { NavBar } from './NavBar';
export const HeaderComponent = ({ config }) => {
  return (
    <header style={config.css}>
      {config.content.map((element, index) => {
        console.log(element);
        if (ELEMENT_TYPES.LOGO == element.type) {
          return (
            <Logo
              css={element.css}
              src={element.src}
            />
          );
        }
        if (ELEMENT_TYPES.NAVBAR == element.type) {
          return <NavBar config={element} />;
        }
      })}
    </header>
  );
};
