import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import * as helpers from "../../functions.js";
import "./bookingCalendar.css";


function BookingCalendar({ getSelectedDates }) {
  const [today, setToday] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState({});
  const [availbility, setAvailability] = useState({});

  const legendItems = ["available", "selected", "booked", "blocked"];

  const callbackRef = useRef(getSelectedDates);

  useEffect(() => {
    callbackRef.current(selectedDates)
  }, [selectedDates]);

  const handleClickDay = (value) => {
    const dateString = helpers.dateToFormattedString(value);
    const unitsForDate = availbility[dateString];

    console.log("dateString", dateString);

    if (Object.keys(selectedDates).includes(dateString)) {
      let updatedDates = { ...selectedDates };
      delete updatedDates[dateString];
      setSelectedDates(updatedDates);
    } else if (value > today) {
      let units = [];
      for (let idx in unitsForDate) {
        const unit = unitsForDate[idx];
        if (unit["price"] > 0) {
          units.push(unit);
        }
      }

      if (units.length > 0) {
        setSelectedDates({
          ...selectedDates,
          [dateString]: units,
        });
      }
    }
  };

  // const isTileDisabled = (e) => {
  //   if ()
  //   const isAvailable = classList.contains("available");

  //   if (isAvailable) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  /**
   * determines which classname to add to a tile depending on
   * availability of the date
   * @param {Date} date date of the tile
   * @returns {string} name of the class to be added
   */
  const updateCalenderTiles = ({ date }) => {
    const dateString = helpers.dateToFormattedString(date);
    const unitsForDate = availbility[dateString];
    const todayDate = new Date();

    let classes = "";

    if (Object.keys(selectedDates).includes(dateString)) {
      classes = "selected ";
    }

    if (todayDate > date) {
      classes = "past ";
    }

    if (unitsForDate?.length < 1) {
      return classes + "booked";
    } else {
      for (let unit in unitsForDate) {
        if (unitsForDate[unit]["price"] > 0) {
          return classes + "available";
        }
      }
      return classes + "blocked";
    }
  };

  const handleViewChange = ({ activeStartDate }) => {
    getAvailability(activeStartDate);
  };

  /**
   * gets availability from the server and fills availability
   * state variable with the availbility for the given month
   * based on the start date
   * @param {Date} activeStartDate
   */
  const getAvailability = async (activeStartDate) => {
    const startDate = helpers.addDays(activeStartDate, -7);
    startDate.setHours(0);
    startDate.setMinutes(0);
    const startDate_str = helpers.dateToFormattedString(startDate);
    const endDate_str = helpers.dateToFormattedString(
      helpers.addDays(startDate, 42),
    );

    console.log("start date: ", startDate_str);
    console.log("end date: ", endDate_str);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await fetch(
        `${helpers.url}/available_units?client_id=${helpers.client_id}&start_date=${startDate_str}&end_date=${endDate_str}`,
        requestOptions,
      );

      const result = await response.json();

      setAvailability(result);
    } catch (error) {
      console.error("unable to get availability:", error);
    }
  };

  useEffect(() => {
    const d = new Date();
    d.setDate(1);
    getAvailability(d);
  }, []);

  return (
    <div className="calendar-container">
      <Calendar
        tileClassName={updateCalenderTiles}
        onClickDay={handleClickDay}
        onActiveStartDateChange={handleViewChange}
      />
      <div className="calendar-legend">
        {legendItems.map((item) => (
          <div className={`calendar-legend-item ${item}`}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default BookingCalendar;
