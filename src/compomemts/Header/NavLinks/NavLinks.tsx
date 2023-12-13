import styles from './navLinks.module.scss'

function NavLinks() {
  return (
      <nav className={styles.nav}>
        <ul className={styles.list + ' list-reset'}>
            <li><a className={styles.link} href="/">About</a></li>
            <li><a className={styles.link} href="/">Skills</a></li>
            <li><a className={styles.link} href="/">Projects</a></li>
            <li><a className={styles.link} href="/">About</a></li>
            <li><a className={styles.link} href="/">Skills</a></li>
            <li><a className={styles.link} href="/">Projects</a></li>
        </ul>
      </nav>
  )
}

export default NavLinks;
