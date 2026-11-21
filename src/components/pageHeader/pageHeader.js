// pageHeader.js
// Photo header band used at the top of FAQ, Contact and Contract.

import React from "react";
import "./pageHeader.css";
import Photo from "../photo/photo";

const PageHeader = ({ title, children }) => {
  return (
    <header className="page-header" id="top">
      <Photo name="hero" small className="page-header-img" alt="" />
      <div className="page-header-shade" aria-hidden="true" />
      <div className="page-header-content">
        <h1 className="display display--xl">{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </header>
  );
};

export default PageHeader;
