import Navbar from "../../components/Navbar";
import styles from "./dimensional-modeling-explained.module.css";

export default function DimensionalModelingExplained() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.meta}>
            DATA MODELING · DATA ENGINEERING · RESOURCE
          </div>

          <h1>Dimensional Modeling Explained</h1>

          <p>
            The goal of dimensional modeling is not organizing tables. It is
            making the truth fast to find and impossible to misread.
          </p>

          <div className={styles.readTime}>
            9 MIN READ · CANONICA DATA
          </div>
        </div>
      </section>

      <article className={styles.article}>
        <div className={styles.summary}>
          <h3>Executive takeaway</h3>

          <p>
            A normalized database is built to avoid duplicating data. A
            dimensional model is built to answer business questions quickly
            and consistently, every time someone asks. The measure of a
            dimensional model is not how elegant the schema looks. It is
            whether two different analysts get the same number when they ask
            the same question.
          </p>
        </div>

        <h2>The mistake most organizations make</h2>

        <p>
          Most teams treat dimensional modeling as a denormalization exercise:
          take the transactional tables, flatten them, ship a wide table, call
          it done.
        </p>

        <p>
          That produces a table. It does not produce a model.{" "}
          <strong>A dimensional model starts with a decision about grain</strong>
          , the exact statement of what one row represents, before a single
          column gets built. Skip that step and every downstream number becomes
          a guess about what got counted.
        </p>

        <h2>A simple example: order fulfillment</h2>

        <div className={styles.metricBox}>
          <p>
            <strong>Undefined grain delivers:</strong> an &quot;orders&quot;
            table where nobody can say if a row is an order, a line item, or a
            shipment, so total revenue depends on who wrote the query.
          </p>

          <p>
            <strong>Defined grain delivers:</strong> one fact row per order
            line item per fulfillment event, with a documented statement:
            <em>&quot;one row = one unit shipped.&quot;</em>
          </p>
        </div>

        <p>
          Both tables can contain the same underlying data. Only one of them
          lets finance, ops, and product agree on what &quot;total orders&quot;
          means without a meeting.
        </p>

        <ul>
          <li>
            The undefined table answers different questions depending on who
            joins it.
          </li>

          <li>
            The grain-defined fact table answers the same question the same way
            every time.
          </li>

          <li>
            Every dimension (customer, product, warehouse, date) attaches
            cleanly once the grain is fixed.
          </li>
        </ul>

        <p>
          Good dimensional modeling does not start with the tables that already
          exist. It starts with the business process being measured, then
          builds the fact and dimension tables that process requires.
        </p>

        <h2>Why this distinction matters to leaders</h2>

        <p>
          When dimensional modeling is treated as a technical formality, the
          organization inherits its side effects without ever deciding to
          accept them.
        </p>

        <ul>
          <li>
            <strong>Metrics drift apart across teams.</strong> Finance&apos;s
            &quot;active customers&quot; and product&apos;s &quot;active
            customers&quot; quietly diverge because nobody agreed on grain or
            a conformed dimension.
          </li>

          <li>
            <strong>History gets overwritten.</strong> Without slowly changing
            dimensions, a customer&apos;s address, tier, or sales rep changes
            today and erases what was true when last quarter&apos;s deal
            closed.
          </li>

          <li>
            <strong>Dashboards get rebuilt instead of reused.</strong> Every
            new report starts from raw tables because there is no shared,
            trusted dimensional layer to build on.
          </li>

          <li>
            <strong>
              AI and analytics initiatives inherit the same instability.
            </strong>{" "}
            A model trained on a fact table with shifting grain produces
            predictions nobody can audit.
          </li>
        </ul>

        <div className={styles.questionsWrapper}>
          <h2>The questions every leader should ask their data team</h2>

          <p>
            Not about table counts or schema diagrams. About grain, history,
            and trust.
          </p>

          <div className={styles.questions}>
            <div className={styles.question}>
              <h3>What is the grain of this fact table?</h3>

              <p>
                Every fact table needs a one-sentence answer to &quot;what does
                one row represent?&quot; If the team can&apos;t state it in one
                sentence, the table doesn&apos;t have a grain yet - it has
                data.
              </p>

              <div className={styles.problem}>
                Common problem: Teams can describe the columns in a fact table
                but can&apos;t state the grain in one sentence.
              </div>
            </div>

            <div className={styles.question}>
              <h3>Are dimensions conformed across the business?</h3>

              <p>
                A conformed dimension means &quot;customer&quot; or
                &quot;date&quot; means the exact same thing in every fact table
                it touches. Without that, every report is quietly answering a
                slightly different question.
              </p>

              <div className={styles.problem}>
                Common problem: Marketing&apos;s customer dimension and
                finance&apos;s customer dimension don&apos;t share the same
                keys.
              </div>
            </div>

            <div className={styles.question}>
              <h3>Does this model preserve history, or overwrite it?</h3>

              <p>
                A Slowly Changing Dimension (Type 2) keeps a row for every
                version of an attribute over time, with effective dates.
                Without it, &quot;what was true then&quot; silently becomes
                &quot;what is true now.&quot;
              </p>

              <div className={styles.problem}>
                Common problem: A customer&apos;s tier or region updates in
                place, and every historical report changes retroactively.
              </div>
            </div>

            <div className={styles.question}>
              <h3>Is this a star schema, or does it need to be?</h3>

              <p>
                A star schema - one fact table surrounded by denormalized
                dimension tables - is built for query speed and analyst
                comprehension, not storage efficiency. Snowflaking dimensions
                trades both away.
              </p>

              <div className={styles.problem}>
                Common problem: Dimensions get normalized into multiple joins
                &quot;for cleanliness,&quot; and every query slows down.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canonicalSection}>
          <h2>What a well-built dimensional model looks like</h2>

          <p>
            The output is not a wide table. It is a fact and dimension layer
            that lets any analyst ask a business question and trust the answer
            without checking with the engineering team.
          </p>

          <div className={styles.canonicalList}>
            <div className={styles.canonicalItem}>
              <strong>Named grain</strong>
              <br />
              Every fact table has a one-sentence grain statement, documented
              and enforced.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Conformed dimensions</strong>
              <br />
              Shared dimensions like customer, date, and product mean the same
              thing everywhere they&apos;re used.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Tracked history</strong>
              <br />
              Slowly Changing Dimension logic (typically Type 2) preserves
              what was true at the time, not just what&apos;s true now.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Cumulative design where it fits</strong>
              <br />
              State that changes gradually, like customer status over time, is
              modeled as a cumulative table, not recomputed from scratch daily.
            </div>
          </div>
        </div>

        <h2>The Canonica approach</h2>

        <p>
          Every engagement follows the same principle.{" "}
          <strong>
            Define the grain first, then build only what that grain requires.
          </strong>
        </p>

        <div className={styles.process}>
          <div className={styles.step}>
            <span>01</span>

            <h3>Discover</h3>

            <p>
              Identify the business process being measured and the questions
              leadership actually asks about it.
            </p>
          </div>

          <div className={styles.step}>
            <span>02</span>

            <h3>Define</h3>

            <p>
              Agree on the grain of each fact table and which dimensions need
              to be conformed across teams.
            </p>
          </div>

          <div className={styles.step}>
            <span>03</span>

            <h3>Model</h3>

            <p>
              Build fact and dimension tables backward from the grain, with SCD
              Type 2 wherever history matters.
            </p>
          </div>

          <div className={styles.step}>
            <span>04</span>

            <h3>Deliver</h3>

            <p>
              Hand analysts a star schema they can query directly, with
              documentation on what every row means.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>The Canonica Principle</h2>

          <p>
            <strong>
              Dimensional modeling exists to make data trustworthy and fast,
              not to organize tables for their own sake.
            </strong>
          </p>

          <p>
            The schema is a means. Two people getting the same answer to the
            same question is the point. Define the grain before you build
            anything.
          </p>

          <a href="#contact" className={styles.button}>
            Start a conversation →
          </a>
        </div>
      </article>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerWrap}`}>
          <div className={styles.brand}>Canonica Data</div>

          <p>canonicadata.com · © 2026</p>
        </div>
      </footer>
    </>
  );
}