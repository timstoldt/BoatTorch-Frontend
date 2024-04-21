import React, { useEffect, useState } from "react";
import "./renterInfoForm.css"

// tile that shows unit information
function RenterInfoForm({ getFormSubmitted }) {
  const [inputs, setInputs] = useState({});

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    getFormSubmitted(inputs);
    // upload data to server and return confirmation???
  };

  return (
    <>
      <form className="renter-form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={inputs.firstName || ""}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={inputs.lastName || ""}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Phone</label>
            <input
              className="form-control"
              type="tel"
              name="phone"
              value={inputs.phone || ""}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              name="address"
              value={inputs.address || ""}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              name="city"
              value={inputs.city || ""}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label>State</label>
            <input
              className="form-control"
              type="text"
              name="state"
              value={inputs.state || ""}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group col-md-2">
            <label>Zip</label>
            <input
              className="form-control"
              type="text"
              name="zip"
              value={inputs.zip || ""}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <button className="btn" type="submit">Continue To Payment</button>
      </form>
    </>
  );
}

export default RenterInfoForm;
