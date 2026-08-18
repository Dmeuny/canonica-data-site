import Navbar from "../../components/Navbar";
import styles from "./canonical-data-explained.module.css";

export default function CanonicalDataExplained() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.meta}>
              DATA STRATEGY · DATA MODELING · RESOURCE
            </div>

            <h1>Canonical Data, Explained</h1>

            <p>
              "Canonical data" sounds technical. The idea behind it isn't.
              It simply means:{" "}
              <strong>one definition of the truth, used everywhere.</strong>
            </p>

            <div className={styles.readTime}>
              9 MIN READ · CANONICA DATA
            </div>
          </div>
        </section>

        {/* ARTICLE */}
        <article className={styles.article}>
          {/* EXECUTIVE SUMMARY */}
          <div className={styles.summary}>
            <h3>Executive takeaway</h3>

            <p>
              Canonical data is the single, governed version of a business
              fact, one definition of "customer," "revenue," or "active user"
              that every team, every report, and every AI system pulls from.
              Without it, every dashboard and every model is just a different
              guess at the truth.
            </p>
          </div>

          {/* WHAT DOES CANONICAL MEAN */}
          <h2>What does "canonical" actually mean?</h2>

          <p>
            In publishing, a "canonical" text is the authoritative version. It
            is the one everyone agrees to treat as correct. In data, the
            meaning is identical.
          </p>

          <p>
            <strong>
              A canonical data model is the one agreed-upon version of a
              business concept, built once and reused everywhere
            </strong>
            , instead of being redefined by every team, every tool, and every
            spreadsheet that touches it.
          </p>

          {/* CUSTOMER EXAMPLE */}
          <h2>A simple example: "customer"</h2>

          <div className={styles.metricBox}>
            <p>
              <strong>CRM stores:</strong> full_name, email, signup_date
            </p>

            <p>
              <strong>Billing system stores:</strong> customer_name,
              email_address, contract_start
            </p>

            <p>
              <strong>Product analytics stores:</strong> user_name,
              contact_email, first_login
            </p>
          </div>

          <p>
            Same person, three systems, three different field names for the
            same three facts. No dashboard problem yet, just three teams who
            built their own schema without ever agreeing on a shared one.
          </p>

          <ul>
            <li>Every system captured the right information.</li>

            <li>Nobody agreed on what to call it.</li>

            <li>
              Every integration between these systems now needs custom mapping
              logic, maintained by hand.
            </li>
          </ul>

          <p>
            A canonical customer model fixes this once. It defines a single{" "}
            <strong>name</strong>, a single <strong>email</strong>, and a
            single <strong>signup date</strong> field, then maps every source
            system to that shared definition. New integrations plug into one
            standard instead of three.
          </p>

          {/* WHY LEADERS SHOULD CARE */}
          <h2>Why leaders should care</h2>

          <p>
            Canonical data isn't a technical nicety. It's the difference
            between an organization that can trust its own numbers and one
            that debates them in every meeting.
          </p>

          <ul>
            <li>
              <strong>Faster decisions.</strong> Leadership reviews stop being
              spent reconciling numbers and start being spent acting on them.
            </li>

            <li>
              <strong>Cheaper reporting.</strong> Analysts stop rebuilding the
              same metric five different ways for five different teams.
            </li>

            <li>
              <strong>Reliable AI.</strong> AI and machine learning models
              inherit whatever definitions sit underneath them. Ungoverned
              inputs produce confidently wrong outputs.
            </li>

            <li>
              <strong>Audit-ready reporting.</strong> One documented
              definition, one owner, one source system, instead of a
              spreadsheet nobody can trace back to its origin.
            </li>
          </ul>

          {/* LEADERS QUESTIONS */}
          <div className={styles.questionsWrapper}>
            <h2>Canonical data: the questions leaders actually ask</h2>

            <p>
              Straight answers to the questions that come up most often when
              this topic reaches the executive level.
            </p>

            <div className={styles.questions}>
              <div className={styles.question}>
                <h3>Who should own a canonical data model?</h3>

                <p>
                  Usually data engineering or analytics engineering builds it,
                  but ownership of each definition belongs to the business. A
                  finance leader should own the definition of revenue. A sales
                  leader should own the definition of a qualified lead.
                  Engineering builds the model. The business defines what it
                  means.
                </p>

                <div className={styles.problem}>
                  <strong>Common mix-up:</strong>
                  <br />
                  Handing definition ownership entirely to engineering, then
                  wondering why the business doesn't trust a model it never
                  agreed to.
                </div>
              </div>

              <div className={styles.question}>
                <h3>
                  Do we need to rebuild all our systems to get there?
                </h3>

                <p>
                  No. Canonical modeling happens in the data layer, typically
                  a warehouse plus a transformation tool like dbt, sitting
                  between your source systems and your reports. Source systems
                  stay exactly as they are.
                </p>

                <div className={styles.problem}>
                  <strong>Common mix-up:</strong>
                  <br />
                  Assuming this requires replacing the CRM, ERP, or billing
                  platform. It doesn't.
                </div>
              </div>

              <div className={styles.question}>
                <h3>How long does building one actually take?</h3>

                <p>
                  For a single high-priority metric like revenue or active
                  users, a working canonical model typically takes a few weeks,
                  most of which is spent aligning stakeholders on the
                  definition, not writing code. Modeling the full business
                  takes longer, but you don't need to do it all at once.
                </p>

                <div className={styles.problem}>
                  <strong>Common mix-up:</strong>
                  <br />
                  Treating this as a multi-quarter platform project instead of
                  starting with the one or two metrics causing the most pain
                  today.
                </div>
              </div>

              <div className={styles.question}>
                <h3>Where should we start?</h3>

                <p>
                  With the two or three metrics your leadership team argues
                  about most, usually revenue, customers, or active usage.
                  Canonical modeling pays off fastest on the numbers everyone
                  already depends on.
                </p>

                <div className={styles.problem}>
                  <strong>Common mix-up:</strong>
                  <br />
                  Trying to model the entire business at once instead of the
                  metrics that actually drive decisions.
                </div>
              </div>
            </div>
          </div>

          {/* CANONICAL DATA SECTION */}
          <div className={styles.canonicalSection}>
            <h2>What a canonical data model gives you</h2>

            <p>
              The output isn't a document. It's an operating foundation that
              every report, model, and team can build on with confidence.
            </p>

            <div className={styles.canonicalList}>
              <div className={styles.canonicalItem}>
                <strong>One definition</strong>
                <br />
                Every team references the same meaning for the metrics that
                matter.
              </div>

              <div className={styles.canonicalItem}>
                <strong>One owner per metric</strong>
                <br />
                Each definition has a named owner and a documented source
                system.
              </div>

              <div className={styles.canonicalItem}>
                <strong>One reusable model</strong>
                <br />
                Built once in the data layer, consumed by every dashboard,
                report, and AI tool downstream.
              </div>

              <div className={styles.canonicalItem}>
                <strong>One trusted answer</strong>
                <br />
                Leadership gets a number once, and it holds up under scrutiny.
              </div>
            </div>
          </div>

          {/* HOW CANONICA BUILDS IT */}
          <h2>How Canonica builds it</h2>

          <p>
            Every engagement follows the same principle:{" "}
            <strong>understand first, define second, build third.</strong>
          </p>

          <div className={styles.process}>
            <div className={styles.step}>
              <span>01</span>

              <h3>Discover</h3>

              <p>
                Map the systems, teams, and metrics where definitions
                currently disagree.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>

              <h3>Define</h3>

              <p>
                Align stakeholders on one definition per metric, with a named
                owner.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>

              <h3>Model</h3>

              <p>
                Build the canonical model once, in the data layer, using
                dimensional modeling and SCD-aware design.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>

              <h3>Deliver</h3>

              <p>
                Connect dashboards, reports, and AI tools to the same governed
                foundation.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <h2>The Canonica Principle</h2>

            <p>
              <strong>One definition. One trusted foundation.</strong>
            </p>

            <p>
              Canonical data isn't about having more reports. It's about every
              team starting from the same understanding of what's true.
            </p>

            <a href="/contact" className={styles.button}>
              Start a conversation →
            </a>
          </div>
        </article>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <div className={styles.brand}>Canonica Data</div>

          <p>canonicadata.com · © 2026</p>
        </div>
      </footer>
    </>
  );
}