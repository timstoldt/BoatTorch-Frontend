import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.css";
import BookButton from "../bookButton/bookButton";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-container">

        {/* To be used for important notifications */}
        <div className="nav-banner">
          We are closed for the season, bookings for summer of 2025 will open up in January of 2025. See you next year!
        </div>

        <nav className="nav-bar">
          <a href="/" className="nav-btn nav-image">
            <img height="80" src="./logo.png" alt="BoatTorch" />
            <div className="company-name">
              <h5>BoatTorch, LLC</h5>
              <p>Torch Lake, MI</p>
            </div>
          </a>
          <div className={`nav-options`}>
            <Link className="nav-btn nav-item" to="/">
              Home
            </Link>
            <Link className="nav-btn nav-item" to="/contact">
              Contact Us
            </Link>
            <Link className="nav-btn nav-item" to="/fleet">
              Our Fleet
            </Link>
            <Link className="nav-btn nav-item" to="/policy">
              FAQs
            </Link>
            <a className="nav-btn nav-item" href="/contract.pdf">
              Contract
            </a>
          </div>
          <div className="nav-button">
            <BookButton />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="menu-options">
            <Link
              className="nav-btn menu-item"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="nav-btn menu-item"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              className="nav-btn menu-item"
              to="/fleet"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Fleet
            </Link>
            <Link
              className="nav-btn menu-item"
              to="/policy"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <a
              className="nav-btn menu-item"
              href="/contract.pdf"
              onClick={() => setIsMenuOpen(false)}
            >
              Contract
            </a>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
