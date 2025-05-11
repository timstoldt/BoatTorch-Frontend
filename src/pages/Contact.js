// Contact.js

import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";
import Header from "../components/header/header";
import HomeCarousel from "../components/carousel/carousel";
import * as helpers from "../utils";
import { BsGeoAlt, BsGeoAltFill } from "react-icons/bs";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
      src: "./topView.JPG",
      alt: "First slide",
    },
    {
      src: "./sandbarColors.JPG",
      alt: "Second slide",
    },
    {
      src: "./sideView.JPG",
      alt: "Third slide",
    },
  ];

  return (
    <>
      <HomeCarousel
        slides={slides}
        title={"Contact Us"}
        // description={"Make Lasting Memories With Us!"}
        // buttonTitle={"Book Your Adventure Today!"}
        // buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
      <div className="contact-container">
        <div className="contact-btns">
          <div className="contact-item">
            <a
              className="btn btn-outline-primary contact-btn"
              href={"tel:" + process.env.REACT_APP_PHONE}
            >
              <FaPhone className="icon" />
            </a>
            <div className="contact-name">
              <h2>Phone</h2>
              <p>{helpers.formatPhoneNumber(process.env.REACT_APP_PHONE)}</p>
            </div>
          </div>
          <div className="contact-item">
            <a
              className="btn btn-outline-primary contact-btn"
              href={"mailto:" + process.env.REACT_APP_EMAIL}
            >
              <FaEnvelope className="icon" />
            </a>

            <div className="contact-name">
              <h2>Email</h2>
              <p>{process.env.REACT_APP_EMAIL}</p>
            </div>
          </div>

          <div className="contact-item">
            <a
              className="btn btn-outline-primary contact-btn"
              href={"https://maps.app.goo.gl/pwSS7a3TfxqpPTuF7"}
            >
              <BsGeoAltFill className="icon" />
            </a>

            <div className="contact-name">
              <h2>Location</h2>
              <p>6132 Crystal Beach Rd NW, Rapid City, MI 49676</p>
            </div>
          </div>
        </div>
        {/* <div className="social-media">
          <a href="https://www.facebook.com/yourpage" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/yourpage" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/yourpage" className="social-icon">
            <FaInstagram />
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
