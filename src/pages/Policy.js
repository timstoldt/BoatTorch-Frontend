// Policy.js

import React from "react";
import AccordionSmall from "../components/accordion/accordion";
import LineItem from "../components/lineItem/lineItem";
import * as helpers from "../utils";
import "./Policy.css";
import HomeCarousel from "../components/carousel/carousel";

const Policy = () => {
  const FAQs = [
    {
      title: "How do I reserve a pontoon?",
      body: "You can reserve online here or give us a text or call!",
      buttonTitle: "Book Now!",
      buttonUrl: `${process.env.REACT_APP_BOOKING_URL}`,
    },
    {
      title: "What is your cancellation policy?",
      body: "Our cancellation policy for weather is that the pontoon goes out as long as it can safely do so. It will not go out at times where there are thunderstorms, strong winds, or heavy rain. If there is bad weather for part of the day, we will pro-rate your rent and give you a refund for the time you couldn't be out on the water safely. If severe weather occurs and forces a full day cancellation, you would receive a full refund or the option to reschedule for a different day if available. Weather can be unpredictable in northern Michigan, so the determination will be made by BoatTorch LLC staff either the evening before or the morning of the rental. In addition, our general cancellation policy allows you to cancel up to 14 days prior to your rental for a full refund. If you cancel after that, we will do our best to find a new renter. If we are able to do so, you will receive a full refund and if not, we will keep only the deposit amount.",
    },
    {
      title: "How much does it cost to reserve the pontoon?",
      body: `To officially reserve the pontoon we require a $200 deposit that is payable via credit card or cash. The remainder will be paid when you pick up the pontoon. If you would like to proceed and reserve your spot, please click <a href='${process.env.REACT_APP_BOOKING_URL}'>here</a> to book now and see daily pricing.`,
      buttonTitle: "Book Now!",
      buttonUrl: `${process.env.REACT_APP_BOOKING_URL}`,
    },
    {
      title: "Where can I find the rental contract?",
      body: "Please find our rental contract here. If you booked online we will have it printed out for you with the information you provided. Otherwise, we prefer that you return it to us via email before the day of your rental. You may also fill it out, print, and bring it with you if that works better for you.",
      buttonTitle: "Rental Contract",
      buttonUrl: `/contract.pdf`,
    },
    {
      title: "What are the pontoon specifications?",
      body: "The pontoon is a 24ft Avalon that offers plenty of seating for up to 13 passengers (1850 lbs) and has a Bimini top for shade at the stern of the vessel. It also features a 5inch Garmin Chartplotter/Fishfinder, a quiet 90hp 2023 Yamaha 4-Stroke EFI outboard, and a 25-gallon fuel tank. Lifejackets (13), throw-cushions (2), anchors (2), dock lines, fenders, fire-extinguishers, and a first aid kit are provided.",
    },
    {
      title: "Where is the pick-up location?",
      body: "The boat can be picked up at 6132 Crystal Beach Rd. NW, Rapid City, MI 49676.",
      buttonTitle: "Directions",
      buttonUrl: "https://maps.app.goo.gl/pwSS7a3TfxqpPTuF7",
    },
    {
      title: "Is parking available?",
      body: "Parking is located across the street from the pick-up location. There is a private drive sign, underneath which it says BoatTorch Parking. There is room for up to 4 cars.",
    },
    {
      title: "What are the pick-up and drop-off times?",
      body: "This is an 8-hour rental that begins at 9:00 am and ends at 5:00 pm. We are flexible with the pick-up time in the morning. Please communicate your plans to us in advance so that we can have the pontoon ready and a staff member available upon your arrival. The latest return time of 5:00 pm is not flexible. If you would like to stay out longer, please inquire about our evening rate. If you are interested in a multi-day rental, please contact us.",
    },
    {
      title: "How is gas pricing handled?",
      body: "You will receive the pontoon with a full tank of gas. We will charge you for the amount of gas you use at the current gas dock rate ($6/gallon). You do not have to fill up the tank yourself. Most customers use between 2 and 10 gallons throughout the day, depending on the speed and distance covered.",
    },
    {
      title: "How can I contact you?",
      body: `You can reach Boat Torch, LLC at <a href='tel:${process.env.REACT_APP_PHONE}'>${helpers.formatPhoneNumber(process.env.REACT_APP_PHONE)}</a> or <a href='mailto:${process.env.REACT_APP_EMAIL}'>${process.env.REACT_APP_EMAIL}</a>`,
      buttonTitle: "Contact Us!",
      buttonUrl: `/contact`,
    },
  ];

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
        title={"FAQs"}
        description={"Make Lasting Memories With Us!"}
        buttonTitle={"Book Your Adventure Today!"}
        buttonUrl={process.env.REACT_APP_BOOKING_URL}
      />
      {FAQs.map((item) => (
        <LineItem
          title={item.title}
          description={item.body}
          buttonTitle={item.buttonTitle}
          buttonUrl={item.buttonUrl}
        />
      ))}
    </>
  );
};

export default Policy;
