import React from "react";
import "./bookButton.css";
import { RxOpenInNewWindow } from "react-icons/rx";

const BookButton = () => {
  return (
    <a className="btn book-btn" href={process.env.REACT_APP_BOOKING_URL}>
      <span>Book Now!</span>
      <RxOpenInNewWindow />
    </a>
  );
};

export default BookButton;
