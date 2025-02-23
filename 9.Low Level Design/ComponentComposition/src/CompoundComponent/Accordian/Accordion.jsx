import React from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from './AccordionComponent';

export default function AccordionComposition() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader>
          <h1>ABC</h1>
        </AccordionHeader>
        <AccordionBody>
          <h1>Body</h1>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <h1>ABC</h1>
        </AccordionHeader>
        <AccordionBody>
          <h1>Body</h1>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <h1>ABC</h1>
        </AccordionHeader>
        <AccordionBody>
          <h1>Body</h1>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <h1>ABC</h1>
        </AccordionHeader>
        <AccordionBody>
          <h1>Body</h1>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}
