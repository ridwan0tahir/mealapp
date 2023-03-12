import { useEffect, useState } from "react";

const useShowNavbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY;

      if (currScrollPos > scrollPos) {
        setShow(false);
      } else {
        setShow(true);
      }

      setScrollPos(currScrollPos);
    };

    if (typeof window !== "undefined")
      window.addEventListener("scroll", handleScroll, true);

    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [scrollPos]);

  return show;
};

export default useShowNavbar;
