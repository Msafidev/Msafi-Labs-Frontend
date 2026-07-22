import { useState, useEffect, useRef } from 'react';

const TOP_THRESHOLD = 80; // px — "close enough to top" zone

export default function useNavScroll() {
  const [topBarHidden, setTopBarHidden] = useState(false);
  const [NavbarHidden, setNavbarHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;

      if (y <= TOP_THRESHOLD) {
        // At the very top — show everything
        setTopBarHidden(false);
        setNavbarHidden(false);
      } else if (goingDown) {
        // Scrolling down — hide top bar first, then main nav
        setTopBarHidden(true);
        if (y > 160) setNavbarHidden(true);
      } else {
        // Scrolling up — show main nav immediately, top bar only at top
        setNavbarHidden(false);
        setTopBarHidden(true); // top bar stays hidden until truly at top
      }

      lastScrollY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { topBarHidden, NavbarHidden, topBarVisible: !topBarHidden };
}