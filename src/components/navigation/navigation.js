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

  // Header measurements, shared with CSS:
  //   --header-h:   full header height (pages pad their photo header by this)
  //   --nav-offset: what stays pinned once you scroll (sections land below it)
  // On phones the season message scrolls away, so only the menu bar stays.
  const bannerHeight = useRef(0);
  const isPhone = useRef(false);
  const FADE_DISTANCE = 160;

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;
    const root = document.documentElement.style;
    const phoneQuery = window.matchMedia("(max-width: 640px)");
    let frame = 0;

    // Clear over the photo at the very top, fading to solid over the first
    // FADE_DISTANCE pixels. Written to CSS variables so nothing re-renders.
    const onScrollFrame = () => {
      frame = 0;
      const y = window.scrollY;
      el.style.setProperty("--nav-solid", Math.min(Math.max(y / FADE_DISTANCE, 0), 1).toFixed(3));
      const shift = isPhone.current ? Math.min(Math.max(y, 0), bannerHeight.current) : 0;
      el.style.transform = shift ? `translateY(${-shift}px)` : "";
    };

    const measure = () => {
      const banner = el.querySelector(".season-banner");
      isPhone.current = phoneQuery.matches;
      bannerHeight.current = banner ? banner.offsetHeight : 0;
      const full = el.offsetHeight;
      root.setProperty("--header-h", `${full}px`);
      root.setProperty("--nav-offset", `${isPhone.current ? full - bannerHeight.current : full}px`);
      onScrollFrame();
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(onScrollFrame);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    phoneQuery.addEventListener("change", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      phoneQuery.removeEventListener("change", measure);
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const isSolid = isMenuOpen;

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
            <span className="season-long">{SEASON_BANNER.message}</span>
            <span className="season-short">{SEASON_BANNER.shortMessage}</span>
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
