import styles from "./logo.module.scss";

import { GiBlackHoleBolas } from "react-icons/gi";

function Logo() {
  return (
    <a href="/" className={styles.logoLink}>
      <span className={styles.icon}>
        <GiBlackHoleBolas style={{ "fontSize": "32px" }} />
      </span>
      <span className={styles.title}>zak cnaan</span>
    </a>
  );
}

export default Logo;
