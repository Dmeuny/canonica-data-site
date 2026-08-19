import HeroVisual from "./components/HeroVisual";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import ContactForm from "./components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canonica Data | Trusted data foundations for analytics and AI",
};

export default function Home() {
  return (
    <>
      <style>{`
  :root {
    --navy-950: #071427;
    --navy-900: #0B1E3D;
    --navy-800: #123059;
    --navy-700: #1B3A6B;
    --blue-500: #004182;
    --blue-400: #316FF6;
    --gray-50: #F6F8FA;
    --gray-100: #EEF1F5;
    --gray-200: #E1E6EC;
    --gray-400: #9AA6B4;
    --gray-600: #5C6B7A;
    --white: #FFFFFF;
    --radius: 14px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--navy-900);
    background: var(--white);
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--navy-950);
  }

  .mono {
    font-family: 'IBM Plex Mono', monospace;
  }

  .wrap {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 40px;
  }

  /* ---------- NAV ---------- */
  nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: #2b61adeb;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--gray-200);
  }

  nav .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 76px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    font-size: 19px;
    color: var(--blue-500);
    text-decoration: none;
  }

  .brand-mark {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 36px;
  }

  nav ul a {
    text-decoration: none;
    color: var(--blue-500);
    font-size: 14.5px;
    font-weight: 500;
    transition: color 0.15s ease;
  }

  nav ul a:hover {
    color: var(--blue-500);
  }

  .nav-cta {
    background: var(--navy-900);
    color: var(--white);
    padding: 10px 22px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.15s ease;
  }

  .nav-cta:hover {
    background: var(--navy-800);
  }

  /* ---------- HERO ---------- */
  .hero {
    position: relative;
    overflow: hidden;
    padding: 0 0 64px;
    background: linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%);
  }

  .hero-visual-bleed {
    position: relative;
    width: 100%;
    height: min(72vh, 640px);
    margin-bottom: 36px;
  }

  .hero-image-wrap {
    position: absolute;
    inset: -60px 0 0 0;
    overflow: hidden;
  }

  .hero-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;

    transform:
      translate3d(0, var(--parallax-y, 0px), 0)
      scale(var(--parallax-scale, 1.08));

    will-change: transform;
    opacity: 0;
    animation: hero-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes hero-reveal {
    from {
      opacity: 0;
      transform: translate3d(0, 24px, 0) scale(1.12);
    }

    to {
      opacity: 1;
      transform:
        translate3d(0, var(--parallax-y, 0px), 0)
        scale(var(--parallax-scale, 1.08));
    }
  }

  .hero .wrap.hero-copy {
    position: relative;
    z-index: 2;
    display: block;
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12.5px;
    font-weight: 500;
    color: var(--blue-400);
    background: rgba(49,111,246,0.09);
    border: 1px solid rgba(49,111,246,0.25);
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 28px;
    letter-spacing: 0.02em;
  }

  .hero h1 {
    font-size: 52px;
    line-height: 1.09;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
  }

  .hero h1 span {
    background: linear-gradient(100deg, var(--navy-800), var(--blue-400));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hero p.lede {
    font-size: 18px;
    color: var(--gray-600);
    max-width: 470px;
    margin: 0 auto 36px;
  }

  .hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--navy-900);
    color: var(--white);
    text-decoration: none;
    padding: 15px 28px;
    border-radius: 9px;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 0 8px 20px -8px rgba(11,30,61,0.45);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px -8px rgba(56, 131, 252, 0.86);
  }

  .btn-secondary-link {
    color: var(--navy-800);
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-bottom: 1px solid var(--gray-400);
    padding-bottom: 2px;
    transition: border-color 0.15s ease, color 0.15s ease;
  }

  .btn-secondary-link:hover {
    color: var(--blue-500);
    border-color: var(--blue-500);
  }

  /* ---------- SERVICES ---------- */
  .section {
    padding: 72px 0;
  }

  .section-alt {
    background: var(--gray-50);
  }

  .section-head {
    max-width: 620px;
    margin-bottom: 40px;
  }

  .section-eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12.5px;
    font-weight: 500;
    color: var(--blue-500);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 14px;
    display: block;
  }

  .section-head h2 {
    font-size: 34px;
    margin-bottom: 14px;
    letter-spacing: -0.015em;
  }

  .section-head p {
    color: var(--gray-600);
    font-size: 16.5px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .service-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 32px 26px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .service-card:hover {
    border-color: var(--blue-400);
    box-shadow: 0 16px 32px -16px rgba(11,30,61,0.18);
    transform: translateY(-3px);
  }

  .service-icon {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--navy-800), var(--blue-500));
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
  }

  .service-card h3 {
    font-size: 17px;
    margin-bottom: 10px;
    letter-spacing: -0.005em;
  }

  .service-card p {
    font-size: 14.5px;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* ---------- LIGHT BLUE SECTION VARIANT ---------- */
  .section-blue {
    background: linear-gradient(135deg, var(--blue-500), var(--blue-400));
    color: var(--white);
  }

  .section-blue .section-eyebrow {
    color: rgba(255,255,255,0.85);
  }

  .section-blue .section-head h2 {
    color: var(--white);
  }

  .section-blue .section-head p {
    color: rgba(255,255,255,0.75);
  }

  .section-blue .process-step-num {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.5);
    color: var(--white);
  }

  .section-blue .process-step h3 {
    color: var(--white);
  }

  .section-blue .process-step p {
    color: rgba(255,255,255,0.72);
  }

  .section-blue .process-track::before {
    background: rgba(255,255,255,0.25);
  }

  /* ---------- WHY (dark band) ---------- */
  .why {
    background: var(--navy-950);
    background-image:
      radial-gradient(circle at 15% 20%, rgba(49,111,246,0.14), transparent 45%),
      radial-gradient(circle at 85% 80%, rgba(59,110,165,0.16), transparent 45%);
    color: var(--white);
    padding: 72px 0;
  }

  .why .section-head p {
    color: rgba(255,255,255,0.62);
  }

  .why .section-head h2 {
    color: var(--white);
  }

  .why .section-eyebrow {
    color: var(--white);
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: rgba(255,255,255,0.1);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .why-item {
    background: var(--navy-950);
    padding: 34px 26px;
  }

  .why-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    color: var(--white);
    margin-bottom: 18px;
    display: block;
  }

  .why-item h3 {
    color: var(--white);
    font-size: 16.5px;
    margin-bottom: 10px;
  }

  .why-item p {
    color: rgba(255,255,255,0.58);
    font-size: 14px;
    line-height: 1.6;
  }

  /* ---------- STACK ---------- */
  .stack-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .stack-badge {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--navy-800);
    background: var(--white);
    border: 1px solid var(--gray-200);
    padding: 12px 20px;
    border-radius: 9px;
    transition: border-color 0.15s ease, background 0.15s ease;
  }

  .stack-badge:hover {
    border-color: var(--blue-400);
    background: rgba(49,111,246,0.06);
  }

  /* ---------- RESOURCES ---------- */
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }

  .resource-card {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 30px 26px;
    text-decoration: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .resource-card:hover {
    border-color: var(--blue-400);
    box-shadow: 0 16px 32px -16px rgba(11,30,61,0.18);
    transform: translateY(-3px);
  }

  .resource-category {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    font-weight: 500;
    color: var(--blue-500);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 14px;
  }

  .resource-card h3 {
    font-size: 17.5px;
    letter-spacing: -0.01em;
    margin-bottom: 10px;
    color: var(--navy-900);
  }

  .resource-card p {
    font-size: 14.5px;
    color: var(--gray-600);
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 18px;
  }

  .resource-read {
    font-size: 14px;
    font-weight: 500;
    color: var(--navy-800);
  }

  .resources-footer {
    display: flex;
    justify-content: center;
  }

  /* ---------- FAQ ---------- */
  .faq-section {
    background: var(--gray-50);
  }

  .faq-container {
    max-width: 850px;
  }

  .faq-item {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
    margin-bottom: 14px;
    overflow: hidden;
    transition: border-color .2s ease;
  }

  .faq-item:hover {
    border-color: var(--blue-400);
  }

  .faq-item summary {
    cursor: pointer;
    list-style: none;
    padding: 24px 28px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--navy-900);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-item summary::-webkit-details-marker {
    display: none;
  }

  .faq-item summary::after {
    content: "+";
    font-family: 'IBM Plex Mono', monospace;
    color: var(--blue-500);
    font-size: 20px;
  }

  .faq-item[open] summary::after {
    content: "−";
  }

  .faq-answer {
    padding: 0 28px 24px;
    color: var(--gray-600);
    font-size: 16px;
    line-height: 1.7;
  }

  .faq-answer strong {
    color: var(--navy-900);
  }

  /* ---------- CONTACT ---------- */
  .contact-grid {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 60px;
    align-items: start;
  }

  .contact-copy h2 {
    font-size: 32px;
    margin-bottom: 18px;
    letter-spacing: -0.015em;
  }

  .contact-copy p {
    color: var(--gray-600);
    font-size: 16px;
    margin-bottom: 28px;
    max-width: 380px;
  }

  .contact-detail {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14.5px;
    color: var(--navy-800);
    margin-bottom: 14px;
  }

  .contact-detail .mono {
    color: var(--gray-600);
  }

  .contact-form {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 40px;
    box-shadow: 0 24px 48px -24px rgba(11,30,61,0.16);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .field.full {
    grid-column: 1 / -1;
  }

  .field label {
    font-size: 13px;
    font-weight: 500;
    color: var(--navy-800);
  }

  .field input,
  .field textarea {
    font-family: 'Inter', sans-serif;
    font-size: 14.5px;
    padding: 12px 14px;
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    background: var(--gray-50);
    color: var(--navy-900);
    outline: none;
    transition: border-color 0.15s ease, background 0.15s ease;
  }

  .field input:focus,
  .field textarea:focus {
    border-color: var(--blue-400);
    background: var(--white);
  }

  .field textarea {
    resize: vertical;
    min-height: 96px;
  }

  .form-submit {
    width: 100%;
    margin-top: 6px;
    background: var(--navy-900);
    color: var(--white);
    border: none;
    padding: 15px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .form-submit:hover {
    background: var(--navy-800);
  }

  /* ---------- FOOTER ---------- */
  footer {
    border-top: 1px solid var(--gray-200);
    padding: 36px 0;
  }

  footer .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer .brand {
    font-size: 15px;
  }

  footer .brand-mark {
    width: 22px;
    height: 22px;
  }

  footer p.tag {
    color: var(--gray-600);
    font-size: 13.5px;
  }

  /* ---------- ABOUT ---------- */
  .about-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 64px;
    align-items: start;
  }

  .about-copy p {
    color: var(--gray-600);
    font-size: 16px;
    margin-bottom: 18px;
    max-width: 440px;
  }

  .credentials {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .credential {
    display: flex;
    gap: 16px;
    padding: 20px 0;
    border-top: 1px solid var(--gray-200);
  }

  .credential:first-child {
    border-top: none;
    padding-top: 0;
  }

  .credential-mark {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(49,111,246,0.09);
    border: 1px solid rgba(49,111,246,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .credential h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: var(--blue-400);
    margin-bottom: 4px;
  }

  .credential p {
    font-size: 14px;
    color: var(--gray-600);
    line-height: 1.55;
  }

  /* ---------- PROCESS ---------- */
  .process-track {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    position: relative;
  }

  .process-track::before {
    content: "";
    position: absolute;
    top: 21px;
    left: 6%;
    right: 6%;
    height: 1px;
    background: var(--gray-200);
    z-index: 0;
  }

  .process-step {
    position: relative;
    z-index: 1;
  }

  .process-step-num {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--white);
    border: 1.5px solid var(--navy-900);
    color: var(--navy-900);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .process-step h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .process-step p {
    font-size: 14px;
    color: var(--gray-600);
    line-height: 1.6;
  }

  /* ---------- CASE STUDY ---------- */
  .case-study {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 20px;
    padding: 52px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
  }

  .case-tag {
    display: inline-block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    font-weight: 500;
    color: var(--blue-500);
    background: rgba(49,111,246,0.09);
    padding: 5px 12px;
    border-radius: 100px;
    margin-bottom: 18px;
  }

  .case-study h3 {
    font-size: 26px;
    margin-bottom: 14px;
    letter-spacing: -0.015em;
  }

  .case-study p.desc {
    color: var(--gray-600);
    font-size: 15.5px;
    margin-bottom: 26px;
  }

  .case-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .case-stat-num {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 600;
    color: var(--navy-900);
  }

  .case-stat-label {
    font-size: 12.5px;
    color: var(--gray-600);
    margin-top: 2px;
  }

  .case-diagram {
    background: var(--gray-50);
    border-radius: 14px;
    padding: 32px 24px;
  }

  .flow-step {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12.5px;
    color: var(--blue-500);
    background: var(--white);
    border: 1px solid var(--gray-200);
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .flow-arrow {
    text-align: center;
    color: var(--gray-400);
    font-size: 13px;
    margin: 2px 0 2px 20px;
  }

  /* ---------- STACK (expanded) ---------- */
  .stack-category {
    margin-bottom: 36px;
  }

  .section-head h2 {
  color: var(--blue-400);
}

  .stack-category:last-child {
    margin-bottom: 0;
  }

  .stack-category-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 16px;
    display: block;
  }

  .stack-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .stack-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 10px;
    padding: 18px 20px;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .stack-card:hover {
    border-color: var(--blue-400);
    box-shadow: 0 12px 24px -14px rgba(11,30,61,0.16);
  }

  .stack-card-name {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--blue-500);
    margin-bottom: 6px;
  }

  .stack-card-desc {
    font-size: 12.5px;
    color: var(--gray-600);
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .hero .wrap {
      grid-template-columns: 1fr;
    }

    .hero-visual {
      height: 300px;
      order: -1;
    }

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .resources-grid {
      grid-template-columns: 1fr;
    }

    .why-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .contact-grid {
      grid-template-columns: 1fr;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    nav ul {
      display: none;
    }

    .hero h1 {
      font-size: 38px;
    }

    .about-grid {
      grid-template-columns: 1fr;
    }

    .process-track {
      grid-template-columns: repeat(2, 1fr);
    }

    .process-track::before {
      display: none;
    }

    .case-study {
      grid-template-columns: 1fr;
      padding: 32px;
    }

    .case-stats {
      grid-template-columns: repeat(3, 1fr);
    }

    .stack-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .stack-cards {
      grid-template-columns: 1fr;
    }
  }
      `}</style>

      <Navbar />

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero-visual-bleed">
          <HeroVisual />
        </div>

        <div className="wrap hero-copy">
          <h1>
            One number. <span>Everyone trusts it.</span>
          </h1>

          <p className="lede">
            Canonica Data builds the pipelines, models, and reporting foundations
            that make your company&apos;s numbers reliable, so your team spends
            meetings making decisions, not debating whose spreadsheet is right.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start a conversation →
            </a>

            <a href="#services" className="btn-secondary-link">
              See services
            </a>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="section section-blue" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Services</span>

            <h2>Four problems, one root cause</h2>

            <p>
              Slow reporting, conflicting numbers, teams that don&apos;t trust the
              dashboard, and AI tools that hallucinate, they usually all trace
              back to the same thing: the data underneath was never built to be
              relied on. Here&apos;s how that gets fixed.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 5h16M2 10h16M2 15h10"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3>Data engineering</h3>

              <p>
                The plumbing that gets information from your tools and systems
                into one reliable place automatically, no more manual
                spreadsheet exports.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="2.5"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="14"
                    cy="14"
                    r="2.5"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 8l4 4"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>

              <h3>Analytics engineering</h3>

              <p>
                Turning raw data into agreed-upon business definitions, one
                version of &quot;revenue,&quot; one version of &quot;active
                customer,&quot; used consistently everywhere.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 16V9M10 16V4M16 16v-6"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3>Data strategy</h3>

              <p>
                Working with your team before any building starts, to surface
                the gaps and disagreements that cause bad numbers later,
                cheaper to catch now than after launch.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="6"
                    height="6"
                    rx="1.5"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="11"
                    y="11"
                    width="6"
                    height="6"
                    rx="1.5"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 6h5v5"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>

              <h3>AI-ready data</h3>

              <p>
                Preparing your company&apos;s data so AI tools and assistants
                give accurate, grounded answers, instead of confidently making
                things up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Me ===== */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-copy">
              <span className="section-eyebrow">About</span>

              <h2
                style={{
                  fontSize: "32px",
                  marginBottom: "18px",
                  letterSpacing: "-0.015em",
                }}
              >
                You work directly with the person building your system.
              </h2>

              <p>
                Canonica Data is led by Devin Meunier, a data professional who
                spent years working with the realities of business reporting
                before moving deeper into data engineering. That experience
                shapes how Canonica approaches every project:{" "}
                <b>
                  understand the business first, then build the technology
                  around it.
                </b>
              </p>

              <p>
                Every engagement is hands-on from start to finish. No account
                manager between you and the work, no junior team learning on
                your project, no handoffs.
              </p>
            </div>

            <div className="credentials">
              <div className="credential">
                <div className="credential-mark">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4 16V9M10 16V4M16 16v-6"
                      stroke="#316FF6"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h4>
                    Automates the reporting nobody wants to do by hand
                  </h4>

                  <p>
                    Eliminated over 10 hours of weekly manual reporting for a
                    prior client by replacing spreadsheet exports with an
                    automated pipeline, freeing that time for actual analysis
                    instead of copy-paste.
                  </p>
                </div>
              </div>

              <div className="credential">
                <div className="credential-mark">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="14"
                      height="14"
                      rx="2"
                      stroke="#316FF6"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 10l3 3 5-6"
                      stroke="#316FF6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h4>
                    Builds systems that hold up after the handoff
                  </h4>

                  <p>
                    Every pipeline is built to run unattended, tested, and
                    documented, so your team can maintain it without needing
                    the person who built it on call.
                  </p>
                </div>
              </div>

              <div className="credential">
                <div className="credential-mark">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="6"
                      cy="6"
                      r="2.5"
                      stroke="#316FF6"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="14"
                      cy="14"
                      r="2.5"
                      stroke="#316FF6"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 8l4 4"
                      stroke="#316FF6"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>

                <div>
                  <h4>
                    Translates between the business and the data
                  </h4>

                  <p>
                    Sits in the room for the &quot;what does revenue actually
                    mean&quot; conversation, then builds the model that
                    reflects the answer, so nothing gets lost between the
                    meeting and the dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Resources / Insights ===== */}
      <section className="section" id="insights">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Insights</span>

            <h2>Start with the problem, not the dashboard</h2>

            <p>
              A few short reads on why data trust breaks down, and what it
              actually takes to fix it.
            </p>
          </div>

          <div className="resources-grid">
            <Link
              href="/resources/dashboard-isnt-the-problem"
              className="resource-card"
            >
              <div className="resource-category">
                Data Foundations
              </div>

              <h3>
                Why Your Dashboard Isn&apos;t the Problem
              </h3>

              <p>
                Most companies think they have a dashboard problem. Usually,
                the real issue is that different teams are measuring the same
                business concepts in different ways.
              </p>

              <span className="resource-read">
                Read article →
              </span>
            </Link>

            <Link
              href="/resources/signs-no-single-source-of-truth"
              className="resource-card"
            >
              <div className="resource-category">
                Data Strategy
              </div>

              <h3>
                Five Signs Your Company Doesn&apos;t Have a Single Source of
                Truth
              </h3>

              <p>
                The warning signs that reporting problems are actually
                foundation problems.
              </p>

              <span className="resource-read">
                Read article →
              </span>
            </Link>

            <Link
              href="/resources/preparing-data-for-ai"
              className="resource-card"
            >
              <div className="resource-category">
                AI Readiness
              </div>

              <h3>
                Preparing Your Data for AI Before You Buy AI Tools
              </h3>

              <p>
                AI systems depend on reliable context. Learn what needs to
                exist before expecting accurate answers.
              </p>

              <span className="resource-read">
                Read article →
              </span>
            </Link>
          </div>

          <div className="resources-footer">
            <Link href="/resources" className="btn-secondary-link">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="section section-blue" id="process">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Process</span>

            <h2>Discovery before a single table gets built</h2>

            <p>
              Most data projects fail quietly, not from bad code, but from
              building the wrong thing because nobody asked the right
              questions first. Every engagement starts by surfacing those
              questions.
            </p>
          </div>

          <div className="process-track">
            <div className="process-step">
              <div className="process-step-num">01</div>

              <h3>Discovery conversation</h3>

              <p>
                A structured conversation about how your business actually
                defines success, revenue, growth, engagement, before assuming
                anything.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step-num">02</div>

              <h3>Align on definitions</h3>

              <p>
                Surface the gaps and disagreements hiding in plain sight, the
                kind that cause two departments to report two different
                numbers.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step-num">03</div>

              <h3>Build the foundation</h3>

              <p>
                Pipelines, models, and dashboards built to those agreed
                definitions, tested, documented, and built to last past the
                first demo.
              </p>
            </div>

            <div className="process-step">
              <div className="process-step-num">04</div>

              <h3>Hand off with confidence</h3>

              <p>
                Clear documentation and a system your team can maintain, not a
                black box only one person understands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Canonica Data ===== */}
      <section className="why" id="why">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">
              Why Canonica Data
            </span>

            <h2>Canonical, by design</h2>

            <p>
              Every engagement is built around one idea, a single, trusted
              definition of the truth that every team and every model can
              rely on.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-item">
              <span className="why-num">01</span>

              <h3>Trusted source of truth</h3>

              <p>
                One definition of every metric, agreed on once and reused
                everywhere.
              </p>
            </div>

            <div className="why-item">
              <span className="why-num">02</span>

              <h3>Clean data models</h3>

              <p>
                Dimensional structures built for clarity, not just for
                today&apos;s dashboard.
              </p>
            </div>

            <div className="why-item">
              <span className="why-num">03</span>

              <h3>Scalable architecture</h3>

              <p>
                Systems designed to hold up as data volume and complexity
                grow.
              </p>
            </div>

            <div className="why-item">
              <span className="why-num">04</span>

              <h3>Better decisions</h3>

              <p>
                Leadership teams that trust the number stop debating the
                number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Tech Stack ===== */}
      <section className="section section-alt" id="stack">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">
              Technology
            </span>

            <h2>The right stack for the problem</h2>

            <p>
              You don&apos;t need to know what any of this means. We translate
              the technology into practical solutions for your business.
              We&apos;re stack-agnostic and choose the tools that fit your
              existing environment, business needs, and goals. Here&apos;s
              what each tool actually does for your business, in plain terms.
            </p>
          </div>

          <div className="stack-category">
            <span className="stack-category-label">
              Moving and transforming data
            </span>

            <div className="stack-cards">
              <div className="stack-card">
                <div className="stack-card-name">
                  Python
                </div>

                <div className="stack-card-desc">
                  General-purpose programming used to automate tasks and
                  connect different systems together.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  SQL
                </div>

                <div className="stack-card-desc">
                  The standard language for asking questions of business data,
                  the foundation everything else is built on.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  dbt
                </div>

                <div className="stack-card-desc">
                  Turns raw data into clean, tested, reusable business
                  definitions everyone can rely on.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Prefect
                </div>

                <div className="stack-card-desc">
                  Runs and monitors data workflows automatically, and flags it
                  immediately if something breaks.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Apache Airflow
                </div>

                <div className="stack-card-desc">
                  Orchestrates complex data workflows, scheduling jobs and
                  managing dependencies so pipelines run reliably.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Apache Spark
                </div>

                <div className="stack-card-desc">
                  Processes very large volumes of data quickly, even at a
                  scale a spreadsheet couldn&apos;t handle.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Databricks
                </div>

                <div className="stack-card-desc">
                  A cloud platform for running large-scale data and analytics
                  work reliably.
                </div>
              </div>
            </div>
          </div>

          <div className="stack-category">
            <span className="stack-category-label">
              Real-time data
            </span>

            <div className="stack-cards">
              <div className="stack-card">
                <div className="stack-card-name">
                  Apache Kafka
                </div>

                <div className="stack-card-desc">
                  Streams data the moment it happens, instead of waiting for
                  an overnight batch update.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Apache Flink
                </div>

                <div className="stack-card-desc">
                  Processes streaming data continuously, enabling up-to-the-
                  second dashboards and alerts.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Apache Iceberg &amp; Trino
                </div>

                <div className="stack-card-desc">
                  A modern data format that lets multiple tools safely read
                  and write the same data without conflicts.
                </div>
              </div>
            </div>
          </div>

          <div className="stack-category">
            <span className="stack-category-label">
              Storage and infrastructure
            </span>

            <div className="stack-cards">
              <div className="stack-card">
                <div className="stack-card-name">
                  AWS (S3, Glue, Athena)
                </div>

                <div className="stack-card-desc">
                  Secure, scalable cloud storage and infrastructure your data
                  lives on.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Snowflake
                </div>

                <div className="stack-card-desc">
                  A cloud data platform built for storing, transforming, and
                  analyzing business data at scale.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  PostgreSQL &amp; Supabase
                </div>

                <div className="stack-card-desc">
                  Reliable, well-tested database infrastructure for storing
                  business data.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Docker
                </div>

                <div className="stack-card-desc">
                  Packages software so it runs consistently, whether on a
                  laptop or in the cloud.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Git &amp; GitHub
                </div>

                <div className="stack-card-desc">
                  Tracks every change safely, so nothing is ever lost and
                  every update can be reviewed.
                </div>
              </div>
            </div>
          </div>

          <div className="stack-category">
            <span className="stack-category-label">
              Reporting and visibility
            </span>

            <div className="stack-cards">
              <div className="stack-card">
                <div className="stack-card-name">
                  Tableau{" "}
                  <span style={{ color: "var(--blue-500)" }}>
                    certified
                  </span>
                </div>

                <div className="stack-card-desc">
                  Turns data into clear visual dashboards built for
                  decision-makers, not just analysts.
                </div>
              </div>

              <div className="stack-card">
                <div className="stack-card-name">
                  Streamlit
                </div>

                <div className="stack-card-desc">
                  Quickly builds simple, interactive internal tools and
                  dashboards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section faq-section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">
              Common Questions
            </span>

            <h2>
              Questions organizations ask before fixing their data foundation
            </h2>

            <p>
              Most data challenges are not caused by a lack of tools. They
              come from unclear definitions, disconnected systems, and
              processes that were never designed to scale.
            </p>
          </div>

          <div className="faq-container">
            <details className="faq-item">
              <summary>
                Why don&apos;t our dashboards match?
              </summary>

              <div className="faq-answer">
                <p>
                  Usually, the dashboard is not the problem. Different teams
                  often create different definitions for the same metric over
                  time.
                </p>

                <br />

                <p>
                  <strong>Common examples:</strong> Finance recognizes revenue
                  one way, Sales tracks booked contracts another way, and
                  Marketing measures pipeline differently.
                </p>

                <br />

                <p>
                  Canonica helps organizations establish shared definitions
                  so every team starts from the same trusted foundation.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Do we need new tools to fix our data problems?
              </summary>

              <div className="faq-answer">
                <p>
                  Not always. Many organizations purchase new platforms
                  hoping technology will solve the issue, but the underlying
                  challenge is often inconsistent data definitions or unclear
                  ownership.
                </p>

                <br />

                <p>
                  The first step is understanding your current systems,
                  processes, and business logic before deciding what needs to
                  change.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Can AI solve our data problems?
              </summary>

              <div className="faq-answer">
                <p>
                  AI can accelerate organizations that already have reliable
                  data foundations. It cannot fix unclear definitions or
                  inconsistent business logic.
                </p>

                <br />

                <p>
                  If your teams cannot agree on what a customer, revenue
                  number, or business metric means, AI will inherit those same
                  problems.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                What does &quot;canonical data&quot; actually mean?
              </summary>

              <div className="faq-answer">
                <p>
                  Canonical data means creating a trusted, shared version of
                  important business information.
                </p>

                <br />

                <p>
                  Instead of every department maintaining its own definition
                  of revenue, customers, or performance, everyone works from
                  the same agreed-upon foundation.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                Can you work with our existing dashboards and tools?
              </summary>

              <div className="faq-answer">
                <p>
                  Yes. The goal is not replacing technology for the sake of
                  replacing technology.
                </p>

                <br />

                <p>
                  Canonica focuses on improving the foundation behind your
                  existing reporting, analytics, and AI initiatives so your
                  tools become more reliable.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>
                What happens during a discovery engagement?
              </summary>

              <div className="faq-answer">
                <p>
                  Before writing code, Canonica works to understand your
                  business, systems, reporting workflows, and where trust
                  breaks down today.
                </p>

                <br />

                <p>
                  The goal is simple:{" "}
                  <strong>
                    build the right solution before building the technical
                    solution.
                  </strong>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <a href="/" className="brand">
            <svg
              className="brand-mark"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M50 6 L88 27 V73 L50 94 L12 73 V27 Z"
                stroke="#0B1E3D"
                strokeWidth="4"
                fill="none"
              />

              <circle
                cx="50"
                cy="50"
                r="7"
                fill="#316FF6"
              />
            </svg>

            Canonica Data
          </a>

          <p className="tag">
            canonicadata.com &nbsp;&middot;&nbsp; &copy; 2026
          </p>
        </div>
      </footer>
    </>
  );
}