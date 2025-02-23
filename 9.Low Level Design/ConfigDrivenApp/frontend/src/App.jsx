import React, { useState } from 'react';
import { config } from './config';
import { HeaderComponent } from './Components/HeaderComponent';
import { ELEMENT_TYPES } from './Constants/AppConstants';
export const App = () => {
  const [elements] = useState(config.elements);
  console.log(elements);
  return (
    <div>
      {elements.map((element, index) => {
        if (element.type == ELEMENT_TYPES.HEADER_COMPONENT) {
          return <HeaderComponent config={element} />;
        }
      })}
    </div>
  );
};
