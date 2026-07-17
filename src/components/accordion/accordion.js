// AccordionSmall.js

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./accordion.css";

const AccordionSmall = ({ content }) => {
  return (
    <Accordion className={"accordion-main"} defaultActiveKey="0">
      {content.map((item, idx) => (
        <Accordion.Item eventKey={String(idx)} key={item.title}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <p>{item.body}</p>
            {item.buttonTitle && item.buttonUrl && (
              <a className="btn btn-outline-primary" href={item.buttonUrl}>
                {item.buttonTitle}
              </a>
            )}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionSmall;
