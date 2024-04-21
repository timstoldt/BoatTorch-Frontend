// Home.js

import React, { useEffect, useState } from "react";
import "./Home.css";
import * as helpers from "../utils/utils.js";
import RenterInfoForm from "../components/renterInfoForm/renterInfoForm.js";
import UnitPaymentForm from "../components/unitPaymentForm/unitPaymentForm.js";
import UnitTileList from "../components/unitTileList/unitTileList.js";
import DiscountForm from "../components/discountForm/discountForm.js";
import PriceDisplay from "../components/priceDisplay/priceDisplay.js";
import BookingCalendar from "../components/bookingCalendar/bookingCalendar.js";

function Home() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [renterInfo, setRenterInfo] = useState(null);
  const [cost, setCost] = useState({});
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  useEffect(() => {
    console.log("selected Units", selectedUnits);
    let totalDeposit = 0;
    let totalPrice = 0;
    for (let idx in selectedUnits) {
      totalDeposit = totalDeposit + selectedUnits[idx]["deposit"];
      totalPrice = totalPrice + selectedUnits[idx]["price"];
    }
    setCost({
      price: totalPrice,
      deposit: totalDeposit,
    });
  }, [selectedUnits]);

  const createBooking = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      client_id: helpers.client_id,
      user: { ...renterInfo },
      totalPrice: cost["price"],
      totalDeposit: cost["deposit"],
      dates: [...selectedUnits],
    });

    helpers.put('/book_units', body);
  };

  const getSelectedDates = (unitsForDate) => {
    if (unitsForDate) {
      const sortedDates = Object.keys(unitsForDate).sort((a, b) => {
        const dateA = helpers.formattedStringToDate(a);
        const dateB = helpers.formattedStringToDate(b);

        if (dateA > dateB) {
          return 1;
        } else {
          return -1;
        }
      });

      let updatedDates = [];
      let updatedUnits = selectedUnits;

      for (let i in sortedDates) {
        const dateString = sortedDates[i];
        updatedDates.push({
          [dateString]: unitsForDate[dateString],
        });

        updatedUnits = updatedUnits.filter(unit => unit.date !== dateString);
      }
      updatedUnits = selectedUnits.filter(unit => !updatedUnits.includes(unit))
      console.log("updated Units", updatedUnits)

      // setSelectedUnits(updatedUnits);
      

      setSelectedDates(updatedDates);
      
    }
  };

  const getFormSubmitted = (info) => {
    if (info) {
      setRenterInfo(info);
    }
  };

  const getPaymentSubmitted = (submitted) => {
    if (submitted) {
      createBooking();
      setPaymentSubmitted(true);
    }
  };

  // update selectedUnits
  const onUnitSelection = (addUnit, unit) => {
    if (addUnit) {
      setSelectedUnits([
        ...selectedUnits, // copy old fields
        unit,
      ]);
    } else {
      let updatedSelectedUnits = [...selectedUnits];
      setSelectedUnits(
        updatedSelectedUnits.filter(
          (item) => !(item.unit_id === unit.unit_id && item.date === unit.date),
        )
      );
    }
  };

  if (!paymentSubmitted) {
    return (
      <>
        <BookingCalendar getSelectedDates={getSelectedDates} />

        <div className="selected-dates">
          {selectedDates.map((day) => {
            const date_str = Object.keys(day)[0];

            return (
              <div key={date_str} className="selected-dates-date">
                <UnitTileList
                  selectionChange={onUnitSelection}
                  date={date_str}
                  units={day[date_str]}
                />
              </div>
            );
          })}
        </div>


        <DiscountForm/>

        <PriceDisplay depositList={[{"deposit": cost.deposit}]} priceList={[{"price": cost.price}]} />

        {!renterInfo ? (
          <RenterInfoForm getFormSubmitted={getFormSubmitted} />
        ) : (
          <UnitPaymentForm
            deposit={String(cost["deposit"] * 100)} // convert to cents and string
            getPaymentSubmitted={getPaymentSubmitted}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        <p>SUCCESS PAGE</p>
      </>
    );
  }
}

export default Home;
