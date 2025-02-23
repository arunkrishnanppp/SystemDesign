import React, { useContext } from 'react';
import { useTheme } from './ThemeProvider';

export const FunctionalComponent = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  const themeStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: theme == 'light' ? 'grey' : 'black',
    color: theme == 'light' ? 'black' : 'white'
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>FunctionalComponent</div>
    </>
  );
};
