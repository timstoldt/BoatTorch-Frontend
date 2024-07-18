import React, { useEffect, useRef, useState } from "react";

import "./bookingCalendar.css";
function BookingCalendar() {

  return (
    <div className="calendar-container">
    <iframe title="google booking Calendar" src="https://calendar.google.com/calendar/embed?src=335119b273e1ad92e9b9d8544470628951eca0fd795c41cb10f499d58f14b210%40group.calendar.google.com&ctz=America%2FDetroit" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  );
}

export default BookingCalendar;
