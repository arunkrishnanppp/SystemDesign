import React, { useState, useId, useEffect, useRef } from 'react';

const AccordionContext = React.createContext();
export const Accordion = ({ children }) => {
  const [openPlate, setOpenPlate] = useState();
  const firstItemRef = useRef(null);
  const togglePlate = (id) => {
    setOpenPlate((prev) => (prev == id ? null : id));
  };

  useEffect(() => {
    if (firstItemRef.current) {
      setTimeout(() => {
        console.log(firstItemRef.current);
        setOpenPlate(firstItemRef.current);
      }, 2000);
    }
  }, []);
  return (
    <AccordionContext.Provider value={{ openPlate, togglePlate, firstItemRef }}>
      <div className='accordion'>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children }) => {
  const { openPlate, togglePlate, firstItemRef } = React.useContext(AccordionContext);
  const id = useId();
  const isOpen = id == openPlate;
  console.log(children);
  useEffect(() => {
    if (!firstItemRef.current) {
      firstItemRef.current = id;
    }
  }, []);
  return (
    <div className='accordion-item'>
      {React.Children.map(children, (child) => {
        console.log(child);
        return React.cloneElement(child, { isOpen, togglePlate, id });
      })}
    </div>
  );
};

export const AccordionHeader = (props) => {
  console.log(props);
  const { isOpen, id, togglePlate, children } = props;
  return (
    <div className='accordion-header'>
      <div>{children}</div>

      <div
        role='button'
        onClick={() => togglePlate(id)}
        className='header-toggle'
      >
        {isOpen ? '^' : '>'}
      </div>
    </div>
  );
};

export const AccordionBody = (props) => {
  console.log(props);
  const { isOpen, id, togglePlate, children } = props;
  return (
    <div
      style={{ display: isOpen ? 'block' : 'none' }}
      aria-expanded={isOpen ? 'true' : 'false'}
      className='accordion-body'
    >
      <div>{children}</div>
    </div>
  );
};
