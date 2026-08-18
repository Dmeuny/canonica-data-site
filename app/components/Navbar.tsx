import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.wrap} ${styles.navInner}`}>
        
        <Link href="/" className={styles.brand}>
          Canonica Data
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <Link href="/contact" className={styles.navCta}>
          Start a conversation
        </Link>

      </div>
    </nav>
  );
}