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
      </ul>
      </LineItem>
      <LineItem
        title={"27ft Avalon Tritoon"}
        photo={"/blueAva27.JPG"}
        buttonTitle={"Check Availability!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      ><ul>
        <li>Capacity: 17 passengers</li>
        <li>150hp Mercury outboard engine</li>
        <li>Bimini top</li>
        <li>58-gallon fuel capacity</li>
      </ul>
      </LineItem>
      <LineItem
        title={"23ft Avalon Tritoon"}
        photo={"/blackAva24.JPG"}
        buttonTitle={"Check Availability!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      ><ul>
        <li>Capacity: 12 passengers</li>
        <li>140hp Suzuki outboard engine</li>
        <li>Bimini top</li>
        <li>38-gallon fuel capacity</li>
      </ul>
      </LineItem>
      </div>
    </>
  );
};

export default Fleet;
