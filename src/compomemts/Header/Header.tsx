import styles from "./header.module.scss";

import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";
import { useEffect, useRef, useState } from "react";
// import SocialNav from "../SocialNav/SocialNav";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function Header({toggleTheme, isLightTheme}) {
  const headerRef = useRef<HTMLElement>(null);
  const [forceHeader, set_forceHeader] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (
        prevScrollPos < currentScrollPos ||
        currentScrollPos < headerElement.clientHeight * 2
      ) {
        set_forceHeader(false);
      } else {
        set_forceHeader(true);
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={forceHeader ? styles.sticky : styles.header}
      ref={headerRef}
    >
      <div className={styles.container + " container"}>
        <Logo />
        {/* <SocialNav /> */}
        <ThemeSwitch  toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;
