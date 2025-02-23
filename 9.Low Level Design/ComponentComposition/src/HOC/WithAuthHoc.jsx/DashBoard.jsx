import React from 'react';
import { WithAuthHoc } from './WithAuthHoc';

export const DashBoard = () => {
  return <div>DashBoard</div>;
};

export const DashBoardWithAuth = WithAuthHoc(DashBoard);
