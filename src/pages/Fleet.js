// Fleet.js

import React from "react";
import LineItem from "../components/lineItem/lineItem";
import HomeCarousel from "../components/carousel/carousel";
import { useEffect } from "react";

const Fleet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    { src: "./blackberry_interior.jpeg", alt: "first slide" },
    { src: "./toonseats.jpg", alt: "Second slide" },
  ];

  return (
    <>
      {/* <HomeCarousel
        slides={slides}
        title={"Our Fleet"}
        description={"Make Lasting Memories With Us!"}
        buttonTitle={"Book Your Adventure Today!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      /> */}
      <LineItem
        title={"26ft Tahoe Tritoon"}
        description={
          "Perfect for larger groups or families looking for a fun day on the water. This tritoon comfortably seats up to 15 passengers and offers a stable and smooth ride, ideal for both relaxation and adventure. Powered by a 175hp Yamaha VMAX outboard engine, it delivers plenty of power for cruising. The boat also includes a Bimini top for shade at the stern. With a 35 gallon fuel capacity, you'll have everything you need for an unforgettable day on the lake.</a>"
        }
        photo={"/bertha.jpeg"}
        buttonTitle={"Book Online Now!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
      <LineItem
        title={"24ft Avalon Tritoon"}
        description={
          "Perfect for an unforgettable day on the water, this spacious tritoon seats up to 12 passengers comfortably. Equipped with a Bimini top for shade at the stern, it offers the perfect blend of relaxation and adventure. The quiet yet powerful 140hp Suzuki 4-Stroke EFI outboard engine ensures a smooth and effortless ride, making it easy to explore the lake in style and comfort."
        }
        photo={"/blackberry_trailer.jpg"}
        buttonTitle={"Book Online Now!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
      <LineItem
        title={"24ft Avalon Pontoon"}
        description={
          "Perfect for a relaxing day on the water. This pontoon comfortably seats up to 13 passengers (up to 1850 lbs) and comes equipped with a Bimini top to provide shade at the stern. Enjoy the convenience of a 5-inch Garmin Chartplotter/Fishfinder, making navigation and fishing easier. Powered by a quiet and efficient 90hp 2023 Yamaha 4-Stroke EFI outboard engine, this pontoon also includes a 25-gallon fuel tank, ensuring you have plenty of fuel for your adventures.</a>"
        }
        photo={"/toon.jpg"}
        buttonTitle={"Book Online Now!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
    </>
  );
};

export default Fleet;
