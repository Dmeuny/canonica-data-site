"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meajryvz");

  if (state.succeeded) {
    return (
      <div className={styles.contactForm}>
        <h3 className={styles.successTitle}>Message sent.</h3>
        <p className={styles.successText}>
          Thanks for reaching out. We&apos;ll follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder=""
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder=""
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder=""
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={`${styles.field} ${styles.full}`}>
          <label htmlFor="message">What are you working on?</label>
          <textarea
            id="message"
            name="message"
            placeholder="A short description of your data challenge."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>

      <input
        type="hidden"
        name="_subject"
        value="New message from canonicadata.com"
      />

      <button
        type="submit"
        className={styles.formSubmit}
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send message"}
      </button>

      <p className={styles.formNote}>
        We&apos;ll never share your information. No spam, ever.
      </p>
    </form>
  );
}