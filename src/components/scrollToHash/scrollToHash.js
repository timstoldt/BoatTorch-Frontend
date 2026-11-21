// scrollToHash.js
// Scrolls to the section named in the URL hash (e.g. /#fleet) after every
// navigation, so menu links reach their section in one click from any page.
// With no hash, a page change scrolls back to the top.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let frame;

    // The target may not exist until the new page renders, so retry briefly.
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
      } else if (tries < 30) {
        tries += 1;
        frame = window.requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToHash;
