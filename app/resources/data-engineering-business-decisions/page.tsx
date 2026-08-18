import Navbar from "../../components/Navbar";
import styles from "./data-engineering-business-decisions.module.css";

export default function DataEngineeringBusinessDecisions() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.meta}>
            DATA STRATEGY · DATA ENGINEERING · RESOURCE
          </div>

          <h1>Why Data Engineering Is Really About Business Decisions</h1>

          <p>
            The goal of engineering data is not moving information. It is
            creating better decisions.
          </p>

          <div className={styles.readTime}>
            10 MIN READ · CANONICA DATA
          </div>
        </div>
      </section>

      <article className={styles.article}>
        <div className={styles.summary}>
          <h3>Executive takeaway</h3>

          <p>
            A pipeline that moves data reliably is doing its job. A pipeline
            that changes how leadership decides is doing something more
            valuable. The measure of a data engineering function is not uptime
            or volume. It is whether the people making decisions can act on
            what it produces.
          </p>
        </div>

        <h2>The mistake most organizations make</h2>

        <p>
          Most companies evaluate their data engineering team on
          infrastructure. Is the pipeline running. Is the warehouse fast. Is
          the dashboard loading on time.
        </p>

        <p>
          Those are real questions. They are also the wrong ones to lead with.
          <strong>
            {" "}
            A pipeline can run perfectly and still fail the business
          </strong>{" "}
          if nobody uses what it produces to make a different decision than
          they would have made without it.
        </p>

        <h2>A simple example: churn</h2>

        <div className={styles.metricBox}>
          <p>
            <strong>The pipeline delivers:</strong> a daily churn rate,
            refreshed on schedule, accurate to the source system.
          </p>

          <p>
            <strong>Leadership needs:</strong> which customers are at risk this
            week, and what to do about them before they leave.
          </p>
        </div>

        <p>
          Both statements can be true at once. The pipeline is working. The
          business is still flying blind.
        </p>

        <ul>
          <li>The churn rate tells you what already happened.</li>
          <li>It does not tell you which account to call.</li>
          <li>It does not tell you which action moves the number.</li>
        </ul>

        <p>
          Good data engineering closes that gap. It is not satisfied with an
          accurate number. It asks what decision that number is supposed to
          change, then builds backward from there.
        </p>

        <h2>Why this distinction matters to leaders</h2>

        <p>
          When data engineering is treated as infrastructure, it gets
          evaluated like infrastructure. Budget conversations become questions
          about servers and licenses instead of outcomes.
        </p>

        <ul>
          <li>
            <strong>Teams optimize for throughput, not impact.</strong>{" "}
            Pipelines get faster while the decisions they support stay exactly
            as slow.
          </li>

          <li>
            <strong>Dashboards multiply without changing behavior.</strong>{" "}
            More reports get built even though nobody can point to a decision
            the last one changed.
          </li>

          <li>
            <strong>Engineers get measured on the wrong things.</strong> Uptime
            and freshness matter, but they are not the same as business value.
          </li>

          <li>
            <strong>AI initiatives inherit the same problem.</strong> A model
            built on data nobody uses to decide anything just automates the
            same disconnect.
          </li>
        </ul>

        <div className={styles.questionsWrapper}>
          <h2>The questions every leader should ask their data team</h2>

          <p>Not about servers or schemas. About decisions.</p>

          <div className={styles.questions}>
            <div className={styles.question}>
              <h3>What decision does this pipeline support?</h3>

              <p>
                Every pipeline should trace back to a decision someone makes on
                a regular basis. If nobody can name that decision, the
                pipeline is moving data for its own sake.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                Engineering teams can describe the data flow in detail but
                cannot name the decision it informs.
              </div>
            </div>

            <div className={styles.question}>
              <h3>Who acts on this, and how often?</h3>

              <p>
                A report nobody opens is not adding value, regardless of how
                well it was built. The right question is not whether the data
                exists. It is whether someone is using it.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                Dashboards get built, presented once, then quietly ignored.
              </div>
            </div>

            <div className={styles.question}>
              <h3>What would change if this data were wrong?</h3>

              <p>
                If the honest answer is nothing, the data is not connected to a
                real decision yet. If the answer is a shipment gets delayed or
                a customer gets called, the pipeline matters.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                Teams cannot say what would actually happen downstream if a
                number were off by ten percent.
              </div>
            </div>

            <div className={styles.question}>
              <h3>How fast does insight need to be, really?</h3>

              <p>
                Real time sounds impressive. Most decisions do not need it. The
                right speed is set by how often the decision gets made, not by
                what is technically possible.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                Teams invest in real time infrastructure for decisions made
                once a quarter.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canonicalSection}>
          <h2>What decision driven engineering looks like</h2>

          <p>
            The output is not a faster pipeline. It is a team that builds
            backward from the decision, then engineers only what that decision
            requires.
          </p>

          <div className={styles.canonicalList}>
            <div className={styles.canonicalItem}>
              <strong>Named decisions</strong>
              <br />
              Every pipeline ties back to a specific, recurring decision
              someone owns.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Matched speed</strong>
              <br />
              Data arrives as fast as the decision actually requires, and no
              faster.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Clear ownership</strong>
              <br />
              Someone is accountable for acting on the data, not just
              receiving it.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Measurable impact</strong>
              <br />
              The team can point to a decision that changed because of what
              they built.
            </div>
          </div>
        </div>

        <h2>The Canonica approach</h2>

        <p>
          Every engagement follows the same principle.{" "}
          <strong>
            Start with the decision, then build only what it requires.
          </strong>
        </p>

        <div className={styles.process}>
          <div className={styles.step}>
            <span>01</span>

            <h3>Discover</h3>

            <p>
              Identify the recurring decisions leadership actually makes and
              what currently informs them.
            </p>
          </div>

          <div className={styles.step}>
            <span>02</span>

            <h3>Define</h3>

            <p>
              Agree on what data each decision needs, at what speed, and who
              owns acting on it.
            </p>
          </div>

          <div className={styles.step}>
            <span>03</span>

            <h3>Model</h3>

            <p>
              Build the pipeline backward from the decision, not forward from
              whatever data exists.
            </p>
          </div>

          <div className={styles.step}>
            <span>04</span>

            <h3>Deliver</h3>

            <p>
              Put the answer in front of the person who acts on it, on the
              schedule the decision runs on.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>The Canonica Principle</h2>

          <p>
            <strong>
              Data engineering exists to change decisions, not just move data.
            </strong>
          </p>

          <p>
            The pipeline is a means. The decision is the point. Build backward
            from what leadership actually needs to decide.
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