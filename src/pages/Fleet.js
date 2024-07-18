// Fleet.js

import React from "react";
import LineItem from "../components/lineItem/lineItem";
import HomeCarousel from "../components/carousel/carousel";

const Fleet = () => {
  const slides = [
    { src: "./toon.jpg", alt: "First slide" },
    { src: "./toonseats.jpg", alt: "Second slide" },
  ];

  return (
    <>
      <HomeCarousel
        slides={slides}
        title={"Our Fleet"}
        description={"Make Lasting Memories With Us!"}
        buttonTitle={"Book Your Adventure Today!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
      <LineItem
        title={"24ft Avalon Pontoon"}
        description={
          "Our rental fleet features a spacious 24ft Avalon pontoon, perfect for a relaxing day on the water. This pontoon comfortably seats up to 13 passengers (up to 1850 lbs) and comes equipped with a Bimini top to provide shade at the stern. Enjoy the convenience of a 5-inch Garmin Chartplotter/Fishfinder, making navigation and fishing easier. Powered by a quiet and efficient 90hp 2023 Yamaha 4-Stroke EFI outboard engine, this pontoon also includes a 25-gallon fuel tank, ensuring you have plenty of fuel for your adventures.</a>"
        }
        photo={"/toonseats.jpg"}
        buttonTitle={"Book Online Now!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
    </>
  );
};

export default Fleet;
