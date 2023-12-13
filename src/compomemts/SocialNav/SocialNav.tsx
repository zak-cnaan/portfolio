import styles from "./nav.module.scss";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function SocialNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list + " list-reset"}>
        <li>
          <a href="" className={styles.link}>
            <FaGithub />
          </a>
        </li>
        <li>
        <a href="" className={styles.link}>
            <FaLinkedinIn />
          </a>
        </li>
        <li>
        <a href="" className={styles.link}>
            <FaFacebookSquare />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialNav;
