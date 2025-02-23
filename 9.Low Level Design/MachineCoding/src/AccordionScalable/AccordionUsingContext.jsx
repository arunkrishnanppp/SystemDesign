import React, { createContext, useContext, useEffect, useId, useRef, useState } from 'react';
const AccordionContext = createContext();
const AccordionItemContext = createContext();

const Accordion = ({ isOneOpen, children }) => {
  console.log('Accordion Props', isOneOpen);
  console.log(children);
  //State for managing active accordion
  const [openPlate, setOpenPlate] = useState(null);
  const [openPlates, setOpenPlates] = useState([]);

  const firstPlat = useRef();
  const togglePlate = (id) => {
    console.log('called');
    if (isOneOpen) {
      setOpenPlate((prev) => (prev == id ? null : id));
    } else {
      setOpenPlates((prev) => {
        const index = prev.indexOf(id);
        console.log(index);
        if (index != -1) {
          return prev.filter((item) => item !== id);
        } else {
          return [...prev, id];
        }
      });
    }
  };
  useEffect(() => {
    if (firstPlat.current) {
      setOpenPlate(firstPlat.current);
    }
  }, [firstPlat]);

  return (
    <AccordionContext.Provider value={{ openPlate, togglePlate, firstPlat, isOneOpen, openPlates }}>
      <div className='accordion'>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children }) => {
  const { openPlate, togglePlate, firstPlat, isOneOpen, openPlates } = useContext(AccordionContext);
  const id = useId();
  console.log('openPlates', openPlates);
  const isOpen = isOneOpen ? id == openPlate : openPlates.indexOf(id) != -1;
  console.log(isOpen);
  if (!firstPlat.current) {
    firstPlat.current = id;
  }
  /*
 {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, { openPlate, togglePlate, id })
          : child;
      })}
  */
  return (
    <AccordionItemContext.Provider value={{ id, isOpen }}>
      <div className='accordion-item'>{children}</div>
    </AccordionItemContext.Provider>
  );
};

const AccordionHeader = ({ title }) => {
  const { togglePlate } = useContext(AccordionContext);
  const { id, isOpen } = useContext(AccordionItemContext);

  /*
 {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, { openPlate, togglePlate, id })
          : child;
      })}
  */
  return (
    <div className='accordion-header'>
      <div>{title}</div>
      <button onClick={() => togglePlate(id)}>{isOpen ? '>' : '<'}</button>
    </div>
  );
};
const AccordionBody = ({ children }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <div
      className='accordion-body'
      style={{
        display: isOpen ? 'flex' : 'none'
      }}
    >
      {children}
    </div>
  );
};
const AccordionFooter = ({ children }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <div
      className='accordion-footer'
      style={{
        display: isOpen ? 'block' : 'none'
      }}
    >
      {children}
    </div>
  );
};
const AccordionContent = ({ children }) => {
  return <div className='accordion-content'>{children}</div>;
};
export const AccordionComponent = () => {
  return (
    <Accordion isOneOpen={false}>
      <AccordionItem>
        <AccordionHeader title='Accordion 1' />
        <AccordionBody>
          <AccordionContent>
            <h1>Hello</h1>
          </AccordionContent>
          <AccordionFooter>Footer</AccordionFooter>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader title='Accordion 2' />
        <AccordionBody>
          <AccordionContent>
            <h1>Hello</h1>
          </AccordionContent>
          <AccordionFooter>Footer</AccordionFooter>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader title='Accordion 3' />
        <AccordionBody>
          <AccordionContent>
            <h1>Hello</h1>
          </AccordionContent>
          <AccordionFooter>Footer</AccordionFooter>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};
