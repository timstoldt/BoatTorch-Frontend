// Fleet.js

import React from "react";
import LineItem from "../components/lineItem/lineItem";
import HomeCarousel from "../components/carousel/carousel";
import { useEffect } from "react";
import "./Fleet.css";

const Fleet = () => {
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
        title={"Our Fleet"}
      />
      <div className="fleet-container">
      <LineItem
        title={"26ft Tahoe Tritoon"}
        photo={"/blueTahoe26.JPG"}
        buttonTitle={"Check Availability!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      >
      <ul>
        <li>Capacity: 15 passengers</li>
        <li>175hp Yamaha VMAX outboard engine</li>
        <li>Bimini top</li>
        <li>35-gallon fuel capacity</li>
        <li>Ideal for larger groups</li>
        <li>Starts at $400/Day</li>
      </ul>
      </LineItem>
      <LineItem
        title={"23ft Avalon Tritoon"}
        description={
          "Perfect for an unforgettable day on the water, this spacious tritoon seats up to 12 passengers comfortably. Equipped with a Bimini top for shade at the stern, it offers the perfect blend of relaxation and adventure. The quiet yet powerful 140hp Suzuki 4-Stroke EFI outboard engine ensures a smooth and effortless ride, making it easy to explore the lake in style and comfort."
        }
        photo={"/blackAva24.JPG"}
        buttonTitle={"Check Availability!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      ><ul>
        <li>Capacity: 12 passengers</li>
        <li>140hp Suzuki outboard engine</li>
        <li>Bimini top</li>
        <li>38-gallon fuel capacity</li>
        <li>Starts at $350/Day</li>
      </ul>
      </LineItem>
      <LineItem
        title={"24ft Avalon Pontoon"}
        photo={"/blueAva24.JPG"}
        buttonTitle={"Check Availability!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      ><ul>
        <li>Capacity: 13 passengers</li>
        <li>90hp Yamaha outboard engine</li>
        <li>Bimini top</li>
        <li>25-gallon fuel capacity</li>
        <li>JL Audio Stereo</li>
        <li>Starts at $300/Day</li>
      </ul>
      </LineItem>
      </div>
    </>
  );
};

export default Fleet;
