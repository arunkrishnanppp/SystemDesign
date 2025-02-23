// client.js
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.js';
import { InteractiveComponent } from './InteractiveComponent.js';

// Hydrate the server-rendered HTML
hydrateRoot(document.getElementById('root'), <App />);

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

// hydrateRoot(document.getElementById('interactive-part'), <InteractiveComponent />);
