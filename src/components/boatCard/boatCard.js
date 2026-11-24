// boatCard.js
// A whole-card link to the booking site for one boat.

import React from "react";
import { RxArrowRight } from "react-icons/rx";
import "./boatCard.css";
import Photo from "../photo/photo";
import { BOOKING_URL } from "../../config";

const BoatCard = ({ boat }) => {
  return (
    <a className="boat-card" href={BOOKING_URL} aria-label={`Book the ${boat.name}`}>
      <div className="boat-card-photo">
        <Photo name={boat.photo} alt={boat.alt} />
      </div>
      <div className="boat-card-body">
        <h3>{boat.name}</h3>
        <p className="boat-card-capacity">Capacity: up to {boat.capacity} passengers</p>
        <p className="boat-card-specs">{boat.specs}</p>
        <span className="boat-card-cta">
          Book this boat <RxArrowRight aria-hidden="true" />
        </span>
      </div>
    </a>
  );
};

export default BoatCard;
