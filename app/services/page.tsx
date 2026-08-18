import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "./services.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* ---------- NAV ---------- */}
      <Navbar />

      {/* ---------- PAGE HERO ---------- */}
      <section className={styles.pageHero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            What Canonica Data builds
          </div>

          <h1>Four problems, one root cause.</h1>

          <p className={styles.lede}>
            Slow reporting, conflicting numbers, teams that do not trust the
            dashboard, and AI tools that hallucinate usually all trace back to
            the same thing: the data underneath was never built to be relied
            on.
          </p>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className={styles.section} id="services">
        <div className={styles.wrap}>
          {/* Data Engineering */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceBlockHead}>
              <div className={styles.serviceIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5h16M2 10h16M2 15h10"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h3>Data engineering</h3>
                <p className={styles.tagline}>
                  Pipelines that run themselves
                </p>
              </div>
            </div>

            <div className={styles.serviceBlockBody}>
              <p>
                The plumbing that gets information from your tools and systems
                into one reliable place automatically, so nobody is exporting
                spreadsheets by hand every Monday morning.
              </p>

              <p>
                Built on production-grade patterns: idempotent ingestion,
                tracked history, and workflows that alert you the moment
                something breaks instead of failing silently for a week.
              </p>

              <ul className={styles.serviceIncludes}>
                <ServiceItem>
                  Automated ingestion from APIs, databases, and internal tools
                </ServiceItem>
                <ServiceItem>
                  Scheduled and monitored workflows with failure alerting
                </ServiceItem>
                <ServiceItem>
                  Historical tracking so nothing gets silently overwritten
                </ServiceItem>
              </ul>
            </div>
          </div>

          {/* Analytics Engineering */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceBlockHead}>
              <div className={styles.serviceIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
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

              <div>
                <h3>Analytics engineering</h3>
                <p className={styles.tagline}>
                  One definition, used everywhere
                </p>
              </div>
            </div>

            <div className={styles.serviceBlockBody}>
              <p>
                Turning raw data into agreed-upon business definitions. One
                version of "revenue," one version of "active customer," used
                consistently across every dashboard and every team.
              </p>

              <p>
                Modeled with tested, documented transformations so the numbers
                hold up under scrutiny instead of breaking the first time
                someone asks how they were calculated.
              </p>

              <ul className={styles.serviceIncludes}>
                <ServiceItem>
                  Dimensional data models built for clarity and reuse
                </ServiceItem>
                <ServiceItem>
                  Documented, tested business logic anyone can audit
                </ServiceItem>
                <ServiceItem>
                  Metrics that match, no matter which dashboard you open
                </ServiceItem>
              </ul>
            </div>
          </div>

          {/* Data Strategy */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceBlockHead}>
              <div className={styles.serviceIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 16V9M10 16V4M16 16v-6"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h3>Data strategy</h3>
                <p className={styles.tagline}>
                  Discovery before a single table gets built
                </p>
              </div>
            </div>

            <div className={styles.serviceBlockBody}>
              <p>
                Working with your team before any building starts, to surface
                the gaps and disagreements that cause bad numbers later.
                Cheaper to catch during a conversation than after launch.
              </p>

              <p>
                This is the same discovery-first approach behind every
                Canonica engagement: understand how your business actually
                defines success before writing any code.
              </p>

              <ul className={styles.serviceIncludes}>
                <ServiceItem>
                  Structured discovery conversations with stakeholders
                </ServiceItem>
                <ServiceItem>
                  A clear roadmap before any technical work begins
                </ServiceItem>
                <ServiceItem>
                  Alignment across teams on what the numbers mean
                </ServiceItem>
              </ul>
            </div>
          </div>

          {/* AI-Ready Data */}
          <div className={styles.serviceBlock}>
            <div className={styles.serviceBlockHead}>
              <div className={styles.serviceIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
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

              <div>
                <h3>AI-ready data</h3>
                <p className={styles.tagline}>
                  Grounded answers, not confident guesses
                </p>
              </div>
            </div>

            <div className={styles.serviceBlockBody}>
              <p>
                Preparing your company's data so AI tools and assistants give
                accurate, grounded answers instead of confidently making
                things up.
              </p>

              <p>
                AI can accelerate an organization that already has reliable
                data foundations. It cannot fix unclear definitions or
                inconsistent business logic, so that groundwork comes first.
              </p>

              <ul className={styles.serviceIncludes}>
                <ServiceItem>
                  Vector search and retrieval-ready data structures
                </ServiceItem>
                <ServiceItem>
                  Clean, well-documented context for AI agents to reason over
                </ServiceItem>
                <ServiceItem>
                  Grounded outputs your team can actually verify
                </ServiceItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY ---------- */}
      <section className={styles.why} id="why">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>
              Why Canonica Data
            </span>

            <h2>Canonical, by design</h2>

            <p>
              Every engagement is built around one idea: a single, trusted
              definition of the truth that every team and every model can rely
              on.
            </p>
          </div>

          <div className={styles.whyGrid}>
            <WhyItem
              number="01"
              title="Trusted source of truth"
            >
              One definition of every metric, agreed on once and reused
              everywhere.
            </WhyItem>

            <WhyItem
              number="02"
              title="Clean data models"
            >
              Dimensional structures built for clarity, not just for today's
              dashboard.
            </WhyItem>

            <WhyItem
              number="03"
              title="Scalable architecture"
            >
              Systems designed to hold up as data volume and complexity grow.
            </WhyItem>

            <WhyItem
              number="04"
              title="Better decisions"
            >
              Leadership teams that trust the number stop debating the number.
            </WhyItem>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>
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

          <div className={styles.faqContainer}>
            <details className={styles.faqItem}>
              <summary>
                Do we need new tools to fix our data problems?
              </summary>

              <div className={styles.faqAnswer}>
                <p>
                  Not always. Many organizations purchase new platforms hoping
                  technology will solve the issue, but the underlying challenge
                  is often inconsistent data definitions or unclear ownership.
                </p>

                <br />

                <p>
                  The first step is understanding your current systems,
                  processes, and business logic before deciding what needs to
                  change.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Can AI solve our data problems?</summary>

              <div className={styles.faqAnswer}>
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

            <details className={styles.faqItem}>
              <summary>
                Can you work with our existing dashboards and tools?
              </summary>

              <div className={styles.faqAnswer}>
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

            <details className={styles.faqItem}>
              <summary>
                How do these services fit together?
              </summary>

              <div className={styles.faqAnswer}>
                <p>
                  Most engagements start with data strategy to align on
                  definitions, move into data engineering and analytics
                  engineering to build the foundation, and finish with
                  AI-ready data once the underlying structure is solid.
                </p>

                <br />

                <p>
                  <strong>
                    You do not need all four to start. Most clients begin with
                    one and expand from there.
                  </strong>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.ctaBand}>
            <div>
              <h3>Not sure which service fits?</h3>
              <p>
                Tell us where things stand today, and we will point you to the
                right starting place.
              </p>
            </div>

            <Link href="/contact" className={styles.btnPrimary}>
              Start a conversation

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
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
            canonicadata.com&nbsp;&nbsp;·&nbsp;&nbsp;© 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- SMALL REUSABLE COMPONENTS ---------- */

function ServiceItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8l3.5 3.5L13 5"
          stroke="#1E7E78"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {children}
    </li>
  );
}

function WhyItem({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.whyItem}>
      <span className={styles.whyNum}>{number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}