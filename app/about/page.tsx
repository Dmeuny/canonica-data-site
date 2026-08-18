import Navbar from "../components/Navbar";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <Navbar />

      <section className={styles.pageHero}>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            About Canonica Data
          </div>

          <h1>Six years in analytics. Built to engineering standard.</h1>

          <p className={styles.lede}>
            Canonica Data is led by Devin Meunier, an analytics professional
            turning messy reporting into systems people actually trust, now
            built on a foundation of formal data engineering training.
          </p>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.wrap}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <span className={styles.sectionEyebrow}>The practice</span>

              <h2
                style={{
                  fontSize: "32px",
                  marginBottom: "18px",
                  letterSpacing: "-0.015em",
                }}
              >
                Most "data problems" aren't dashboard problems
              </h2>

              <p>
                The practice exists because most reporting issues aren't really
                about the dashboard. They're about nobody agreeing on what the
                numbers mean in the first place: one team's "revenue" isn't
                another team's "revenue."
              </p>

              <p>
                Canonica Data closes that gap: aligning on shared definitions
                first, then building the pipelines, models, and reporting that
                make those definitions the default, not the exception.
              </p>

              <p>
                The work draws on six years of applied analytics, including
                operations reporting, project coordination, and AI model
                evaluation, paired with formal data engineering training so the
                systems built hold up past the first demo.
              </p>
            </div>

            <div className={styles.credentials}>
              <div className={styles.credential}>
                <div className={styles.credentialMark}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 2l7 3.5v5c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5v-5L10 2z"
                      stroke="#1E7E78"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div>
                  <h4>DataExpert.io certification</h4>
                  <p>
                    Production-grade data engineering training under Zach
                    Wilson, covering dimensional modeling, streaming
                    pipelines, and pipeline reliability practices used by top
                    tech companies.
                  </p>
                </div>
              </div>

              <div className={styles.credential}>
                <div className={styles.credentialMark}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="14"
                      height="14"
                      rx="2"
                      stroke="#1E7E78"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 10l3 3 5-6"
                      stroke="#1E7E78"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h4>Tableau Desktop Certified Professional</h4>
                  <p>
                    Formal certification in building dashboards that
                    communicate clearly to decision-makers, not just to other
                    analysts.
                  </p>
                </div>
              </div>

              <div className={styles.credential}>
                <div className={styles.credentialMark}>
                  <svg
                    width="17"
                    height="17"
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

                <div>
                  <h4>Six years of applied analytics</h4>
                  <p>
                    Experience spanning operations reporting, project
                    coordination, and AI model evaluation, including
                    eliminating over 10 hours of weekly manual reporting for a
                    prior client through automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="process">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>
              How Canonica works
            </span>

            <h2>Discovery before a single table gets built</h2>

            <p>
              Most data projects fail quietly, not from bad code, but from
              building the wrong thing because nobody asked the right
              questions first. Every engagement starts by surfacing those
              questions.
            </p>
          </div>

          <div className={styles.processTrack}>
            <div className={styles.processStep}>
              <div className={styles.processStepNum}>01</div>
              <h3>Discovery conversation</h3>
              <p>
                A structured conversation about how your business actually
                defines success, including revenue, growth, and engagement,
                before assuming anything.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processStepNum}>02</div>
              <h3>Align on definitions</h3>
              <p>
                Surface the gaps and disagreements hiding in plain sight: the
                kind that cause two departments to report two different
                numbers.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processStepNum}>03</div>
              <h3>Build the foundation</h3>
              <p>
                Pipelines, models, and dashboards built to those agreed
                definitions, tested, documented, and built to last past the
                first demo.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.processStepNum}>04</div>
              <h3>Hand off with confidence</h3>
              <p>
                Clear documentation and a system your team can maintain, not a
                black box only one person understands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.why} id="principle">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>
              The Canonica Principle
            </span>

            <h2>Canonical, by design</h2>

            <p>
              Every engagement is built around one idea: a single, trusted
              definition of the truth that every team and every model can rely
              on.
            </p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <span className={styles.whyNum}>01</span>
              <h3>Trusted source of truth</h3>
              <p>
                One definition of every metric, agreed on once and reused
                everywhere.
              </p>
            </div>

            <div className={styles.whyItem}>
              <span className={styles.whyNum}>02</span>
              <h3>Clean data models</h3>
              <p>
                Dimensional structures built for clarity, not just for
                today's dashboard.
              </p>
            </div>

            <div className={styles.whyItem}>
              <span className={styles.whyNum}>03</span>
              <h3>Scalable architecture</h3>
              <p>
                Systems designed to hold up as data volume and complexity grow.
              </p>
            </div>

            <div className={styles.whyItem}>
              <span className={styles.whyNum}>04</span>
              <h3>Better decisions</h3>
              <p>
                Leadership teams that trust the number stop debating the
                number.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.ctaBand}>
            <div>
              <h3>Let's build a foundation you can trust.</h3>
              <p>
                Tell us where your data lives today, and where it needs to go.
              </p>
            </div>

            <a href="/contact" className={styles.btnPrimary}>
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
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <a href="/" className={styles.brand}>
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
          </a>

          <p className={styles.tag}>
            canonicadata.com &nbsp;·&nbsp; © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}