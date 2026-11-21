// footer.js

import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import * as helpers from "../../utils.js";
import { PHONE, EMAIL } from "../../config";

const Footer = () => {
  return (
    <footer className="footer" id="visit">
      <div className="container-wide footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/img/logo-192.png" alt="BoatTorch, LLC logo" width="96" height="96" />
            <p>Premium tritoon rentals on Torch Lake, Michigan. Family owned and operated.</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-heading">Contact</span>
              <a href={"tel:" + PHONE}>{helpers.formatPhoneNumber(PHONE)}</a>
              <a href={"mailto:" + EMAIL}>{EMAIL}</a>
            </div>
            <div className="footer-col">
              <span className="footer-heading">Visit</span>
              <a href="https://maps.app.goo.gl/pwSS7a3TfxqpPTuF7" target="_blank" rel="noreferrer">
                6132 Crystal Beach Rd NW
                <br />
                Rapid City, MI 49676
              </a>
            </div>
            <div className="footer-col">
              <span className="footer-heading">Explore</span>
              <Link to="/#fleet">Fleet</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact page</Link>
              <Link to="/contract">Rental contract</Link>
              <a href="/terms.pdf" target="_blank" rel="noreferrer">
                Terms and conditions
              </a>
            </div>
          </div>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} BoatTorch, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
