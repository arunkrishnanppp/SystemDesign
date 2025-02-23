import React from 'react';
import { ComponentComposition } from './ComponentComposition';
import { HocDriver } from './HOC/HocDriver';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DashBoardWithAuth } from './HOC/WithAuthHoc.jsx/DashBoard';
import { Login } from './HOC/WithAuthHoc.jsx/Login';
import { MouseTracker } from './RenderProps/MouseTracker';
import { Driver } from './ControlledAndUncontrolled/Driver';
import { Toggle, ToggleButton, ToggleStatus } from './CompoundComponent/ToggleCompount';
import AccordionComposition from './CompoundComponent/Accordian/Accordion';
import './app.css';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/component-composition' />}
        ></Route>
        <Route
          path='/component-composition'
          element={<ComponentComposition />}
        ></Route>
        <Route
          path='/hoclogging'
          element={<HocDriver />}
        ></Route>
        <Route
          path='/dashboard'
          element={<DashBoardWithAuth name='dashboard' />}
        ></Route>
        <Route
          path='/login'
          element={<Login />}
        ></Route>
        <Route
          path='/render-props'
          element={
            <div>
              <MouseTracker
                render={(position) => {
                  return (
                    <h1>
                      X: {position.x}, Y: {position.y}
                    </h1>
                  );
                }}
              />
              <MouseTracker
                render={(position) => {
                  return (
                    <h6>
                      X: {position.x}, Y: {position.y}
                    </h6>
                  );
                }}
              />
            </div>
          }
        ></Route>
        <Route
          path='/controlled'
          element={<Driver />}
        ></Route>
        <Route
          path='/compound'
          element={
            <Toggle>
              <ToggleButton />
              <ToggleStatus />
            </Toggle>
          }
        ></Route>
        <Route
          path='/accordion'
          element={<AccordionComposition />}
        ></Route>
      </Routes>
    </div>
  );
};
