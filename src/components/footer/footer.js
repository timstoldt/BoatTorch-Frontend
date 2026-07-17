import React from "react";
import "./footer.css";
import * as helpers from "../../utils.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <strong>BoatTorch, LLC</strong>
          <span>Torch Lake, MI</span>
        </div>
        <div className="footer-links">
          <a href={"tel:" + process.env.REACT_APP_PHONE}>
            {helpers.formatPhoneNumber(process.env.REACT_APP_PHONE)}
          </a>
          <a href={"mailto:" + process.env.REACT_APP_EMAIL}>
            {process.env.REACT_APP_EMAIL}
          </a>
          <a href="/contract.pdf" target="_blank" rel="noreferrer">
            Contract
          </a>
          <a href="/policy">Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} BoatTorch, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
