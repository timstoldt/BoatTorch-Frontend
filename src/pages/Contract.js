import React from "react";
import "./Contract.css";
import { useEffect } from "react";

const Contract = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contract-container">
        <iframe title="contract" src="/contract.pdf"></iframe>
      </div>
    </>
  );
};

export default Contract;
