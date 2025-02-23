// App.js
import React from 'react';
import { StaticComponent } from './StaticComponent';
import { InteractiveComponent } from './InteractiveComponent';
import './App.css';
const App = () => {
  return (
    <div>
      <StaticComponent />
      <div id='interactive-part'>
        <InteractiveComponent />
      </div>
      <div id='progressive'>
        <InteractiveComponent id='interactive-part1' />
        <InteractiveComponent id='interactive-part2' />
        <InteractiveComponent id='interactive-part3' />
        <InteractiveComponent id='interactive-part4' />
        <InteractiveComponent id='interactive-part5' />
        <InteractiveComponent id='interactive-part6' />
        <InteractiveComponent id='interactive-part7' />
        <InteractiveComponent id='interactive-part8' />
      </div>
      ;
    </div>
  );
};

export default App;
