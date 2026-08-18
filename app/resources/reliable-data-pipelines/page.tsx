import Navbar from "../../components/Navbar";
import styles from "./reliable-data-pipelines.module.css";

export default function ReliableDataPipelines() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.meta}>
            DATA ENGINEERING · DATA QUALITY · DATA FOUNDATIONS · RESOURCE
          </div>

          <h1>What Makes a Data Pipeline Reliable?</h1>

          <p>
            A pipeline that runs is not necessarily a reliable pipeline.
            Reliability means the business can trust what happens when the
            pipeline succeeds, fails, or changes.
          </p>

          <div className={styles.readTime}>9 MIN READ · CANONICA DATA</div>
        </div>
      </section>

      <article className={styles.article}>
        <div className={styles.summary}>
          <h3>Executive takeaway</h3>

          <p>
            A reliable data pipeline is more than code that executes on
            schedule. It produces the expected data, makes failures visible,
            handles changes predictably, and gives the people who depend on it
            confidence that the result can be trusted.
          </p>
        </div>

        <h2>The mistake most organizations make</h2>

        <p>
          A pipeline gets called reliable because it runs every morning.
        </p>

        <p>A job can finish successfully while loading incomplete data.</p>

        <p>
          A source can change its schema without anyone noticing. A failed
          upstream process can leave yesterday&apos;s data looking current. A
          pipeline can technically succeed while producing a number nobody
          should use.
        </p>

        <p>
          <strong>
            Reliability is not the absence of errors. It is the ability to
            know what happened and respond when something goes wrong.
          </strong>
        </p>

        <p>
          The strongest pipelines are designed around the business consequence
          of failure, not just the technical mechanics of moving data.
        </p>

        <h2>A simple example: the daily revenue pipeline</h2>

        <div className={styles.metricBox}>
          <p>
            <strong>Basic pipeline and you get:</strong> a scheduled job that
            extracts rows, transforms them, loads the table, and reports
            success when the process finishes.
          </p>

          <p>
            <strong>Reliable pipeline and you get:</strong> freshness checks,
            row-level or aggregate validation, visible failures, controlled
            schema changes, and enough history to understand what happened
            when the numbers change.
          </p>
        </div>

        <p>
          Both pipelines move data. Only one gives the business a reason to
          trust the result.
        </p>

        <ul>
          <li>
            Freshness tells you whether the data arrived when it should.
          </li>
          <li>
            Quality checks tell you whether the data looks reasonable.
          </li>
          <li>
            Observability tells you what happened when something changed.
          </li>
          <li>
            Idempotent processing helps prevent duplicate results when work is
            retried.
          </li>
          <li>
            Ownership makes it clear who responds when the pipeline breaks.
          </li>
        </ul>

        <p>The goal is not to eliminate every failure.</p>

        <p>
          <strong>
            The goal is to make failures detectable, understandable, and
            recoverable.
          </strong>
        </p>

        <h2>Why this distinction matters to leaders</h2>

        <p>
          When pipeline reliability gets reduced to uptime, organizations miss
          the failures that matter most.
        </p>

        <ul>
          <li>
            <strong>Silent failures become business decisions.</strong>{" "}
            Incorrect or stale data can reach dashboards without triggering an
            obvious technical error.
          </li>

          <li>
            <strong>Recovery becomes tribal knowledge.</strong> The pipeline
            works until the one person who knows how to fix it is unavailable.
          </li>

          <li>
            <strong>Changes become risky.</strong> A source system change can
            break downstream reporting without a clear impact path.
          </li>

          <li>
            <strong>Trust erodes slowly.</strong> A few unexplained
            discrepancies can make stakeholders question every number that
            follows.
          </li>
        </ul>

        <p>
          A pipeline earns trust by behaving predictably under normal
          conditions and making unusual conditions obvious.
        </p>

        <p>
          <strong>
            Reliability is a data quality problem, an engineering problem, and
            an ownership problem at the same time.
          </strong>
        </p>

        <div className={styles.questionsWrapper}>
          <h2>The questions every leader should ask</h2>

          <p>
            Not about buying another tool. About whether the business can trust
            the data underneath its decisions.
          </p>

          <div className={styles.questions}>
            <div className={styles.question}>
              <h3>How do we know the data is fresh?</h3>

              <p>
                Define what freshness means for each important dataset and make
                delays visible instead of leaving users to discover them.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                A dashboard is updated every morning, but nobody knows whether
                the underlying source actually arrived.
              </div>
            </div>

            <div className={styles.question}>
              <h3>How do we know the data is correct?</h3>

              <p>
                Use checks that reflect the business, not just whether a SQL
                statement completed successfully.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                The pipeline succeeds technically while loading zero rows or
                an unexpected volume of data.
              </div>
            </div>

            <div className={styles.question}>
              <h3>What happens when something changes?</h3>

              <p>
                Plan for schema changes, source behavior changes, and
                downstream dependencies instead of treating them as surprises.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                A source column changes and the impact is discovered only after
                a report breaks.
              </div>
            </div>

            <div className={styles.question}>
              <h3>Who owns recovery?</h3>

              <p>
                A reliable pipeline has clear ownership, documented failure
                modes, and a practical path back to a known good state.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                Everyone knows the pipeline is important, but nobody knows who
                is responsible when it fails.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canonicalSection}>
          <h2>What strong data foundations look like</h2>

          <p>
            The goal is not to add another tool or another layer of process. It
            is to create a shared, reliable understanding of the data the
            business actually depends on.
          </p>

          <div className={styles.canonicalList}>
            <div className={styles.canonicalItem}>
              <strong>Freshness expectations</strong>
              <br />
              Important datasets have explicit expectations for when data
              should arrive and what happens when it does not.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Quality checks</strong>
              <br />
              Validation rules test whether the data makes business sense, not
              just whether the job executed.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Observability</strong>
              <br />
              Logs, alerts, and metadata make pipeline behavior visible enough
              to diagnose problems quickly.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Recovery paths</strong>
              <br />
              Retries, idempotent processing, history, and documented ownership
              make failures recoverable.
            </div>
          </div>
        </div>

        <h2>The Canonica approach</h2>

        <p>
          Every engagement follows the same principle.{" "}
          <strong>Understand the problem before building the solution.</strong>
        </p>

        <div className={styles.process}>
          <div className={styles.step}>
            <span>01</span>
            <h3>Define</h3>
            <p>
              Identify what reliable means for each critical dataset, including
              freshness, quality, and business expectations.
            </p>
          </div>

          <div className={styles.step}>
            <span>02</span>
            <h3>Validate</h3>
            <p>
              Add checks that catch the failures that would actually affect
              downstream decisions.
            </p>
          </div>

          <div className={styles.step}>
            <span>03</span>
            <h3>Observe</h3>
            <p>
              Make pipeline behavior visible through logs, alerts, lineage,
              and useful operational metadata.
            </p>
          </div>

          <div className={styles.step}>
            <span>04</span>
            <h3>Recover</h3>
            <p>
              Design for retries, controlled changes, and clear ownership so
              failures do not become emergencies.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>The Canonica Principle</h2>

          <p>
            <strong>
              A reliable pipeline is not one that never fails. It is one that
              fails in ways you can detect, understand, and recover from.
            </strong>
          </p>

          <p>
            Build pipelines for the day something goes wrong, because that is
            when reliability actually matters.
          </p>

          <a href="#contact" className={styles.button}>
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