import React, { useEffect, useState } from "react";
import * as helpers from "../../functions.js";
import UnitTile from "../unitTile/unitTile.js";
import "./unitTileList.css"

function UnitTileList({ date, units, selectionChange }) {
  const handleUnitSelectionChange = (e, unit) => {
    if (e.target.checked) {
      selectionChange(true, { ...unit, date: date });
    } else {
      selectionChange(false, { ...unit, date: date });
    }
  };

  return (
    <div className="selectable-units">
      <div className="units-date">{date}</div>
      <div className="flex-container">
      {units.map((unit) => (
        <label key={unit.unit_id} className="unit-tile-container">
          <input
            type="checkbox"
            name="unit-tile-checkbox"
            onChange={(e) => handleUnitSelectionChange(e, unit)}
          />
          <UnitTile className="selectable-unit-tile" unit={unit}></UnitTile>
        </label>
      ))}
      </div>
    </div>
  );
}

export default UnitTileList;
