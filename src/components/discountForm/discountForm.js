// DiscountForm.js
import React, { useEffect, useState } from 'react';
import "./discountForm.css"

const DiscountForm = () => {
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    console.log('discountCode', discountCode)
  }, [discountCode])

  async function handleFormSubmit(e) {
    e.preventDefault();
    // check discount codes with request
  }

  function handleInputChange(event) {
    setDiscountCode(event.target.value);
  }
  
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className='form-row'>
        <label className='col-form-label col-sm-4'>Discount Code</label>
        <div className='form-group col-sm-6'>
          
          <input
            type="text"
            name="discountCode"
            value={discountCode || ""}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <button className="btn form-group col-sm-2" type="submit">Apply</button>
      </div>
    </form>
  );
};

export default DiscountForm;
