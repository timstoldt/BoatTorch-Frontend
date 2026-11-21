// navigation.js
// Sticky header: seasonal banner, logo, menu links and an always-visible
// Book now button. Under 820px the links fold into a menu button.

import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import "./navigation.css";
import BookButton from "../bookButton/bookButton";
import ScrollToHash from "../scrollToHash/scrollToHash";
import { SEASON_BANNER } from "../../config";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const links = [
    { label: "Fleet", to: "/#fleet" },
    { label: "The Sandbar", to: "/#sandbar" },
    { label: "Our Story", to: "/#story" },
    { label: "FAQ", to: "/faq" },
    // Contact scrolls to the footer on whichever page you're on.
    { label: "Contact", to: { pathname, hash: "#visit" } },
  ];

  // Keep --nav-offset equal to the header height so sections land below it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;
    const update = () =>
      document.documentElement.style.setProperty("--nav-offset", `${el.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Clear over the photo at the very top, solid once you start scrolling.
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const isSolid = isScrolled || isMenuOpen;

  return (
    <>
      <ScrollToHash />
      <header className={`site-header${isSolid ? " is-solid" : ""}`} ref={headerRef}>
        {SEASON_BANNER.show && (
          <div className="season-banner" role="status">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 18a5 5 0 0 0-10 0" />
              <path d="M12 9V5M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1" />
            </svg>
            <span>{SEASON_BANNER.message}</span>
          </div>
        )}

        <nav className="nav-bar" aria-label="Main">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <img src="/img/logo-96.png" alt="" width="48" height="48" />
            <span>BoatTorch</span>
          </Link>

          <div className="nav-right">
            <div className="nav-links">
              {links.map((link) => (
                <Link key={link.label} className="nav-link-item" to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
            <BookButton />
            <button
              type="button"
              className="nav-menu-btn"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <RxCross2 size={20} /> : <RxHamburgerMenu size={20} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="nav-mobile" id="mobile-menu">
            {links.map((link) => (
              <Link key={link.label} className="nav-link-item" to={link.to} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
