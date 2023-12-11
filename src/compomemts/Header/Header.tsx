import styles from "./header.module.css";

import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks/NavLinks";



function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavLinks />
    </header>
  );
}

export default Header;
