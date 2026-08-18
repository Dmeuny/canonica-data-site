"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.wrap} ${styles.navInner}`}>
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          Canonica Data
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <Link href="/contact" className={styles.navCta}>
          Start a conversation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/resources" onClick={closeMenu}>
            Resources
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            href="/contact"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Start a conversation →
          </Link>
        </div>
      )}
    </nav>
  );
}