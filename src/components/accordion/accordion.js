// accordion.js
// Tap-to-open question cards. One answer is open at a time.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./accordion.css";

const isInternal = (url) => url.startsWith("/") && !url.endsWith(".pdf");

const Accordion = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {content.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        return (
          <div className="faq-item" key={item.title}>
            <h2 className="faq-question">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <span>{item.title}</span>
                <span className="faq-sign" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h2>
            {isOpen && (
              <div className="faq-answer" id={panelId}>
                <p>{item.body}</p>
                {item.buttonTitle &&
                  item.buttonUrl &&
                  (isInternal(item.buttonUrl) ? (
                    <Link className="pill pill--dark" to={item.buttonUrl}>
                      {item.buttonTitle}
                    </Link>
                  ) : (
                    <a className="pill pill--dark" href={item.buttonUrl}>
                      {item.buttonTitle}
                    </a>
                  ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
