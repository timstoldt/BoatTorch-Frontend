// DiscountForm.js
import React, { useEffect, useState } from 'react';
import "./priceDisplay.css"

const PriceDisplay = ({ priceList, depositList }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);

  useEffect(() => {
    let price = 0;
    for (let idx in priceList) {
        price += priceList[idx].price;
    }

    setTotalPrice(price)
  }, [priceList])

  useEffect(() => {
    let deposit = 0;
    for (let idx in depositList) {
        deposit += depositList[idx].deposit;
    }

    setTotalDeposit(deposit)
  }, [depositList])

  
  return (
    <div className='price-display-container'>
      <div className='cost-item'>
        {totalPrice}
      </div>
      <div className='cost-item'>
        {totalDeposit}
      </div>
    </div>
  );
};

export default PriceDisplay;
