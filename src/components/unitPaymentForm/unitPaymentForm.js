import React, { useEffect, useState } from "react";
import * as helpers from "../../functions.js";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

// tile that shows unit information
function UnitPaymentForm({ getPaymentSubmitted, deposit }) {
  const createPayment = async (token, amount) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        token: token.token,
        amount: amount,
      }),
    };

    fetch(`${helpers.url}/payment`, requestOptions)
      .then((response) => response)
      .then((result) => {
        console.log(result);
        if (result.statusText === "OK") {
          getPaymentSubmitted(true);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <PaymentForm
      applicationId="sandbox-sq0idb-VJRw3fsbLnl9pieyHixr2Q"
      cardTokenizeResponseReceived={(token, verifiedBuyer) => {
        createPayment(token, deposit);
      }}
      locationId="LTA3P3HJBFK8A"
    >
      <CreditCard />
    </PaymentForm>
  );
}

export default UnitPaymentForm;
