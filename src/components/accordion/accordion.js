// AccordionSmall.js

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./accordion.css";
import LineItem from "../lineItem/lineItem";

const AccordionSmall = ( {content}) => {
  return (
      <Accordion className={"accordion-main"} defaultActiveKey="0">
        {content.map((item, idx) => (
            <Accordion.Item eventKey={idx}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                    <LineItem
                        title={item.title}
                        description={item.body}
                        buttonTitle={item.buttonTitle}
                        buttonUrl={item.buttonUrl}
                        photo={item.photo}
                    />
                </Accordion.Body>
            </Accordion.Item>
        ))}
      </Accordion>
  );
};

export default AccordionSmall;
