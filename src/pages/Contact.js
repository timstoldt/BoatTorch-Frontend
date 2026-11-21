// Contact.js

import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { BsGeoAltFill } from "react-icons/bs";
import "./Contact.css";
import PageHeader from "../components/pageHeader/pageHeader";
import * as helpers from "../utils";
import { PHONE, EMAIL } from "../config";

const Contact = () => {
  const items = [
    {
      label: "Phone",
      value: helpers.formatPhoneNumber(PHONE),
      href: "tel:" + PHONE,
      icon: <FaPhone />,
    },
    {
      label: "Email",
      value: EMAIL,
      href: "mailto:" + EMAIL,
      icon: <FaEnvelope />,
    },
    {
      label: "Location",
      value: "6132 Crystal Beach Rd NW, Rapid City, MI 49676",
      href: "https://maps.app.goo.gl/pwSS7a3TfxqpPTuF7",
      icon: <BsGeoAltFill />,
    },
  ];

  return (
    <>
      <PageHeader title="Contact">Give us a call, text or email. We're happy to help.</PageHeader>
      <main className="contact-container">
        {items.map((item) => (
          <a className="contact-card" href={item.href} key={item.label}>
            <span className="contact-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.value}</span>
          </a>
        ))}
      </main>
    </>
  );
};

export default Contact;
