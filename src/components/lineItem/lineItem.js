// lineItem.js

import React from "react";
import "./lineItem.css";

const LineItem = ({
  title,
  description,
  photo,
  buttonTitle,
  buttonUrl,
  right,
  children,
}) => {
  return (
    <div className={"item-container" + (right ? " right" : "")}>
      {photo && (
        <div className="item-photo">
          <img src={photo} alt="boating on Torch Lake" className="img-fluid" />
        </div>
      )}
      <div className="item-description">
        <div className="item-description-center">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          <div className="child-container">{children}</div>
          {buttonTitle && buttonUrl && (
            <a className="btn btn-outline-primary" href={buttonUrl}>
              {buttonTitle}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineItem;
