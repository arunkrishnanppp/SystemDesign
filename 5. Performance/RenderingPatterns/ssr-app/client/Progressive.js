// client.js
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.js';
import { InteractiveComponent } from './InteractiveComponent.js';

// Hydrate the server-rendered HTML
// hydrateRoot(document.getElementById('root'), <App />);

// if (typeof window !== 'undefined') {
//   const interactivePart = document.getElementById('interactive-part');
//   if (interactivePart) {
//     console.log(interactivePart, 'interactivePart');
//     import('./InteractiveComponent').then((InteractiveComponent) => {
//       console.log(InteractiveComponent);
//       hydrateRoot(interactivePart, <InteractiveComponent />);
//     });
//   }
// }
let id = 1;
const interval = setInterval(() => {
  hydrateRoot(document.getElementById(`interactive-part${id++}`), <InteractiveComponent />);
  if (id == 7) {
    clearInterval(interval);
  }
}, 2000);
// hydrateRoot(document.getElementById('interactive-part'), <InteractiveComponent />);
