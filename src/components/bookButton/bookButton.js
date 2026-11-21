// bookButton.js
// Links out to the external booking site.

import React from "react";
import { BOOKING_URL } from "../../config";

const BookButton = ({ children = "Book now", size, className = "" }) => {
  const sizeClass = size === "lg" ? " pill--lg" : "";
  return (
    <a className={`pill pill--gold${sizeClass} ${className}`.trim()} href={BOOKING_URL}>
      {children}
    </a>
  );
};

export default BookButton;
