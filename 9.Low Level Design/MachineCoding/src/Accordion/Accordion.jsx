import React, { useState } from 'react';
import './accordion.css';
const data = [
  {
    name: 'Accordion 1',
    content: 'Content 1'
  },
  {
    name: 'Accordion 2',
    content: 'Content 2'
  },
  {
    name: 'Accordion 3',
    content: 'Content 3'
  },
  {
    name: 'Accordion 4',
    content: 'Content 4'
  }
];

const AccordionItem = ({ itemData, isOpen, toggle, id }) => {
  return (
    <div className='accordion-item'>
      <div className='accordion-header'>
        <h3>{itemData.name}</h3>
        <button onClick={() => toggle(id)}>{isOpen ? '<' : '>'}</button>
      </div>
      {isOpen && <div className='accordion-body'>{itemData.content}</div>}
    </div>
  );
};
export const Accordion = () => {
  const [openItem, setOpenItem] = useState(0);
  const toggleAccordion = (id) => {
    console.log('toggle', id);
    setOpenItem((prev) => (prev == id ? null : id));
  };
  return (
    <div className='accordion'>
      {data.map((Item, index) => {
        return (
          <AccordionItem
            itemData={Item}
            isOpen={openItem == index}
            id={index}
            toggle={toggleAccordion}
          />
        );
      })}
    </div>
  );
};
