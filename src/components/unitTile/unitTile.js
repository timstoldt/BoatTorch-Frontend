import React, { useEffect, useState } from "react";
import * as helpers from "../../functions.js";

// tile that shows unit information
function UnitTile({ unit }) {
  const [unitInfo, setUnitInfo] = useState({});

  useEffect(() => {
    const getUnitInfo = async () => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${helpers.url}/units?id=${unit["unit_id"]}`,
          requestOptions,
        );
        let unitInfoResponse = await response.json();

        unitInfoResponse[0]["price"] = unit["price"];
        unitInfoResponse[0]["deposit"] = unit["deposit"];

        setUnitInfo(unitInfoResponse[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getUnitInfo();
  }, [unit]);

  return (
    <div className="unit-tile-content">
      <div className="unit-tile-image">
        <img src={unitInfo["pic"]} alt={unitInfo["name"]} />
      </div>
      <div className="unit-tile-text">
        <p className="unit-tile-name">{unitInfo["name"]}</p>
        <p className="unit-tile-cost">${unitInfo["price"]}/DAY</p>
      </div>
    </div>
  );
}

export default UnitTile;
