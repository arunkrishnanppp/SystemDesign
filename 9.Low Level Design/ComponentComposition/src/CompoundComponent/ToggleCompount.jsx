import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const ToggleContext = React.createContext({});

export const Toggle = ({ children }) => {
  const [on, settoggle] = useState(false);
  const toggle = () => settoggle(!on);

  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>;
};

export const ToggleButton = () => {
  const { on, toggle } = React.useContext(ToggleContext);
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
};

export const ToggleStatus = () => {
  const { on } = React.useContext(ToggleContext);
  return <p>The toggle is {on ? 'ON' : 'OFF'}</p>;
};
