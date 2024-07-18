// AccordionSmall.js

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./accordion.css";

const AccordionSmall = ( {content}) => {
  return (
      <Accordion className={"accordion-main"} defaultActiveKey="0">
        {content.map((item, idx) => (
            <Accordion.Item eventKey={idx}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                    {item.body}
                </Accordion.Body>
            </Accordion.Item>
        ))}
      </Accordion>
  );
};

export default AccordionSmall;
