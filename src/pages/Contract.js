import React from "react";
import "./Contract.css";
import PageHeader from "../components/pageHeader/pageHeader";

const Contract = () => {
  return (
    <>
      <PageHeader title="Rental contract">
        Fill it out ahead of time, or we'll have it printed for you if you booked online.
      </PageHeader>
      <main className="contract-container">
        <div className="contract-actions">
          <a className="pill pill--dark" href="/contract.pdf" target="_blank" rel="noreferrer">
            Open the PDF
          </a>
          <a className="pill pill--dark" href="/terms.pdf" target="_blank" rel="noreferrer">
            Terms and conditions
          </a>
        </div>
        <iframe title="BoatTorch rental contract" src="/contract.pdf"></iframe>
      </main>
    </>
  );
};

export default Contract;
