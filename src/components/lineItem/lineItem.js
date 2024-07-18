// lineItem.js

import React from "react";
import "./lineItem.css";

const LineItem = ({ title, description, photo, buttonTitle, buttonUrl, right }) => {
  return (
    <div className={"item-container d-flex align-items-center p-3" + (right ? " right" : "")}>
        {photo && (<div className="item-photo me-3">
            <img src={photo} alt="boating on Torch Lake" className="img-fluid" />
        </div>)}
        <div className="item-description">
            <div className="item-description-center">
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                {(buttonTitle && buttonUrl) && <a className="btn btn-outline-primary" href={buttonUrl}>{buttonTitle}</a>}
            </div>
        </div>
      
    </div>
  );
};

export default LineItem;
