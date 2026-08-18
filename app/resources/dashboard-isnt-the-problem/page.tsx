import Navbar from "../../components/Navbar";
import styles from "./dashboard-isnt-the-problem.module.css";

export default function DashboardIsntTheProblem() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.meta}>
            DATA STRATEGY · ANALYTICS ENGINEERING · RESOURCE
          </div>

          <h1>Why Your Dashboard Isn't the Problem</h1>

          <p>
            Most companies think they have a <strong>dashboard problem.</strong>{" "}
            The reality is usually different: they have a{" "}
            <strong>definition problem.</strong>
          </p>

          <div className={styles.readTime}>
            12 MIN READ · CANONICA DATA
          </div>
        </div>
      </section>

      <article className={styles.article}>
        <div className={styles.summary}>
          <h3>Executive takeaway</h3>

          <p>
            A dashboard does not create trust. It reveals whether trust
            already exists. Without agreed definitions and consistent{" "}
            <strong>business logic</strong>, even advanced analytics tools will
            produce conflicting answers.
          </p>
        </div>

        <h2>
          The symptom: <strong>Nobody trusts the dashboard</strong>
        </h2>

        <p>
          Organizations often respond by buying another BI tool, rebuilding
          dashboards, or adding more reports.
        </p>

        <p>
          But the issue usually appears much earlier:{" "}
          <strong>
            the business never created a shared definition of the metrics
            everyone depends on.
          </strong>
        </p>

        <h2>A simple example: revenue</h2>

        <div className={styles.metricBox}>
          <p>
            <strong>Finance says:</strong> $4.8 million
          </p>
          <p>
            <strong>Sales says:</strong> $5.3 million
          </p>
          <p>
            <strong>Marketing says:</strong> $5.0 million
          </p>
        </div>

        <p>Nobody is necessarily wrong. They are answering different questions.</p>

        <ul>
          <li>One team excludes refunds.</li>
          <li>One team counts booked contracts.</li>
          <li>One team follows accounting recognition rules.</li>
        </ul>

        <p>
          The dashboard is not creating disagreement.{" "}
          <strong>
            It is exposing a lack of alignment that already existed.
          </strong>
        </p>

        <h2>The hidden cost of unreliable data</h2>

        <p>
          When teams stop trusting the numbers, the impact goes far beyond
          reporting. Organizations begin creating workarounds around problems
          that should have been solved at the foundation.
        </p>

        <ul>
          <li>
            <strong>Meetings become debates instead of decisions.</strong>{" "}
            Teams spend time debating numbers instead of acting on them.
          </li>

          <li>
            <strong>Analysts rebuild the same reports repeatedly.</strong>{" "}
            Different groups create different versions of reality.
          </li>

          <li>
            <strong>Spreadsheets become unofficial systems.</strong> Important
            business logic exists outside governed models.
          </li>

          <li>
            <strong>AI initiatives struggle.</strong> AI cannot provide
            reliable answers from unreliable definitions.
          </li>
        </ul>

        <div className={styles.questionsWrapper}>
          <h2>The questions every organization should answer first</h2>

          <p>
            Before investing in another dashboard, analytics platform, or AI
            initiative:{" "}
            <strong>
              do we actually agree on the meaning behind our metrics?
            </strong>
          </p>

          <div className={styles.questions}>
            <div className={styles.question}>
              <h3>What exactly defines a customer?</h3>

              <p>
                A customer could mean someone who created an account, completed
                a purchase, signed a contract, or currently generates revenue.
              </p>

              <div className={styles.problem}>
                <strong>Common problem:</strong> Sales counts prospects, Finance
                counts paying accounts, and Product counts active users.
              </div>
            </div>

            <div className={styles.question}>
              <h3>When is revenue recognized?</h3>

              <p>
                Revenue may be based on booked deals, invoices, payments
                received, subscriptions activated, or accounting rules.
              </p>

              <div className={styles.problem}>
                <strong>Common problem:</strong> Sales dashboards show one
                number while Finance reports another.
              </div>
            </div>

            <div className={styles.question}>
              <h3>What makes a user active?</h3>

              <p>
                Active could mean logging in, completing a key action, using a
                feature, or returning within a specific timeframe.
              </p>

              <div className={styles.problem}>
                <strong>Common problem:</strong> Teams optimize growth metrics
                that were never formally defined.
              </div>
            </div>

            <div className={styles.question}>
              <h3>Which system owns each metric?</h3>

              <p>
                Important metrics need ownership, a trusted source system, and
                documented business logic.
              </p>

              <div className={styles.problem}>
                <strong>Common problem:</strong> Multiple applications and
                spreadsheets claim to be the source of truth.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canonicalSection}>
          <h2>The foundation: canonical data models</h2>

          <p>
            Reliable analytics does not begin with visualization. It begins
            with a <strong>trusted data foundation.</strong>
          </p>

          <p>
            That means creating consistent definitions, reliable pipelines,
            and models built around how the business actually operates.
          </p>

          <div className={styles.canonicalList}>
            <div className={styles.canonicalItem}>
              <strong>One definition</strong>
              <br />
              Every team uses the same meaning behind important metrics.
            </div>

            <div className={styles.canonicalItem}>
              <strong>One foundation</strong>
              <br />
              Reports, dashboards, and AI applications rely on the same trusted
              data.
            </div>

            <div className={styles.canonicalItem}>
              <strong>One language</strong>
              <br />
              Business teams and technical teams understand the same numbers.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Better decisions</strong>
              <br />
              Leadership spends less time questioning data and more time acting
              on it.
            </div>
          </div>
        </div>

        <h2>The Canonica approach</h2>

        <p>
          Every engagement follows the same principle:{" "}
          <strong>understand first, define second, build third.</strong>
        </p>

        <div className={styles.process}>
          <div className={styles.step}>
            <span>01</span>

            <h3>Discover</h3>

            <p>
              Understand systems, workflows, reporting challenges, and where
              trust breaks down.
            </p>
          </div>

          <div className={styles.step}>
            <span>02</span>

            <h3>Define</h3>

            <p>
              Align stakeholders around business definitions and metric
              ownership.
            </p>
          </div>

          <div className={styles.step}>
            <span>03</span>

            <h3>Model</h3>

            <p>
              Build scalable pipelines, dimensional models, and analytics
              foundations.
            </p>
          </div>

          <div className={styles.step}>
            <span>04</span>

            <h3>Deliver</h3>

            <p>
              Create reporting and AI-ready systems built on reliable data.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>The Canonica Principle</h2>

          <p>
            <strong>One definition. One trusted foundation.</strong>
          </p>

          <p>
            The most valuable data systems are not the ones with the most
            dashboards. They are the ones where every team starts from the same
            understanding of the truth.
          </p>

          <a href="/contact" className={styles.button}>
            Start a conversation →
          </a>
        </div>
      </article>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <div className={styles.brand}>Canonica Data</div>

          <p>canonicadata.com · © 2026</p>
        </div>
      </footer>
    </>
  );
}