// Contact.js

import React from "react";
import "./Contract.css";
import Header from "../components/header/header";
import HomeCarousel from "../components/carousel/carousel";
import * as helpers from "../utils";
import { useEffect } from "react";

const Contract = () => {
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
      {/* <HomeCarousel
        slides={slides}
        title={"Contact Us"}
        // description={"Make Lasting Memories With Us!"}
        // buttonTitle={"Book Your Adventure Today!"}
        // buttonUrl={process.env.REACT_APP_BOOKING_URL}
      /> */}
      <div className="contract-container">
        <iframe title="contract" src="/contract.pdf"></iframe>
      </div>
    </>
  );
};

export default Contract;
