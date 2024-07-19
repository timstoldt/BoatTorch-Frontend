// Home.js

import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeCarousel from "../components/carousel/carousel";
import LineItem from "../components/lineItem/lineItem";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
      src: "./torch1.jpeg",
      alt: "First slide",
    },
    {
      src: "./torch3.jpeg",
      alt: "Second slide",
    },
    {
      src: "./torch2.jpeg",
      alt: "Third slide",
    },
  ];

  return (
    <>
      <HomeCarousel
        slides={slides}
        title={"BoatTorch, LLC"}
        description={"Make Lasting Memories With Us!"}
        buttonTitle={"Book Your Adventure Today!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
      <LineItem
        title={"Off Season Pricing Starting at $300/Day!"}
        description="Enjoy early and late season rates starting at just $300 per day. Click here to book now and view daily pricing and availability."
        photo={"/toon1.jpeg"}
        buttonTitle={"Book Online Now"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
      <LineItem
        title={"Our Story"}
        description={
          "Hi, I'm Nils, and welcome to my pontoon rental business on the beautiful Torch Lake! Boating is my passion, and I'm excited to share it with you. As a small, locally-owned business, I am dedicated to providing you with exceptional, personalized experiences on the water. Whether you're looking to relax, explore, or enjoy a fun day out with family and friends, I'm here to ensure your time on Torch Lake is unforgettable. Come join us and create lasting memories!"
        }
        photo={"/nils.jpeg"}
        right={true}
      />

      {/* <BookingCalendar /> */}
    </>
  );
}

export default Home;
