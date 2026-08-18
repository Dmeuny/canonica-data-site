import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
        <Navbar />

      {/* HERO */}
      <section className={styles.pageHero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot}></span>
            Get in touch
          </div>

          <h1>Let&apos;s build a data foundation you can trust.</h1>

          <p className={styles.lede}>
            Tell us a little about what you&apos;re working with, where your
            data lives today, and where you need it to go.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.sectionEyebrow}>Start a conversation</span>

              <h2>Tell us what&apos;s going on.</h2>

              <p>
                You don&apos;t need to have the technical details figured out
                before reaching out. Tell us what isn&apos;t working, what
                you&apos;re trying to build, or where your team is running into
                problems.
              </p>

              <div className={styles.contactDetail}>
                <div className={styles.iconCircle}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 5.5C3 4.67 3.67 4 4.5 4h11c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-11C3.67 16 3 15.33 3 14.5v-9Z"
                      stroke="#1E7E78"
                      strokeWidth="1.5"
                    />
                    <path
                      d="m4 5 6 5 6-5"
                      stroke="#1E7E78"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span className={styles.mono}>
                  We&apos;ll respond within one business day.
                </span>
              </div>

              <div className={styles.contactDetail}>
                <div className={styles.iconCircle}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                      stroke="#1E7E78"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 6v4l3 2"
                      stroke="#1E7E78"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <span className={styles.mono}>
                  No sales pitch. Just a conversation.
                </span>
              </div>
            </div>

            {/* Formspree form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <Link href="/" className={styles.brand}>
            <svg
              className={styles.brandMark}
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M50 6 L88 27 V73 L50 94 L12 73 V27 Z"
                stroke="#0B1E3D"
                strokeWidth="4"
                fill="none"
              />
              <circle cx="50" cy="50" r="7" fill="#2FA8A0" />
            </svg>

            Canonica Data
          </Link>

          <p className={styles.footerTag}>
            canonicadata.com &nbsp;&middot;&nbsp; &copy; 2026
          </p>
        </div>
      </footer>
    </>
  );
}