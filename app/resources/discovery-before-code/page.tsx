import Navbar from "../../components/Navbar";
import styles from "./discovery-before-code.module.css";

export default function DiscoveryBeforeCode() {
  return (
    <>
      <Navbar />


      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.meta}>
            CONSULTING APPROACH · DATA STRATEGY · RESOURCE
          </div>

          <h1>Discovery Before Code</h1>

          <p>
            Most failed data projects were never a coding problem. They were a
            discovery problem that got skipped.
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
            Writing the pipeline is the fast part. Understanding the business
            well enough to know what pipeline to write is the part that
            actually determines whether the project succeeds. The teams that
            skip discovery do not save time, they just move the delay to the
            end of the project, where it costs more to fix.
          </p>
        </div>

        <h2>The mistake most organizations make</h2>

        <p>
          Most engagements start with a kickoff call and a data model by the
          following week. That feels like momentum. It is usually the
          opposite.
        </p>

        <p>
          <strong>
            A model built before the business is understood is a guess wearing
            a schema.
          </strong>{" "}
          It will run. It will load data on schedule. And it will quietly
          encode a wrong assumption about the business that surfaces three
          months later as a number nobody trusts.
        </p>

        <h2>A simple example: what counts as a customer</h2>

        <div className={styles.metricBox}>
          <p>
            <strong>Skip discovery and you get:</strong> a customers table
            built from the CRM, on schedule, in a week, that counts every
            contact record as a customer.
          </p>

          <p>
            <strong>Do discovery first and you learn:</strong> the business
            defines a customer as an account with a signed contract, and half
            the CRM contacts are prospects, vendors, or duplicates.
          </p>
        </div>

        <p>
          Both paths produce a customers table. Only one of them produces a
          number finance will actually use in a board deck.
        </p>

        <ul>
          <li>
            The rushed model has to be rebuilt once the wrong definition
            surfaces.
          </li>
          <li>
            The rebuild costs more than the discovery would have.
          </li>
          <li>
            Trust in the whole project takes the hit, not just that one table.
          </li>
        </ul>

        <p>
          Good discovery does not slow the project down. It moves the expensive
          mistakes to the cheapest possible moment to catch them, which is
          before anything gets built.
        </p>

        <h2>Why this distinction matters to leaders</h2>

        <p>
          When discovery gets treated as a formality instead of real work, the
          cost does not disappear, it just relocates to a worse point in the
          timeline.
        </p>

        <ul>
          <li>
            <strong>Rework replaces progress.</strong> Weeks of engineering
            get spent rebuilding a model around a definition that should have
            been settled on day one.
          </li>

          <li>
            <strong>Domain knowledge lives in one person's head.</strong>{" "}
            Without discovery, the model reflects whatever the engineer
            assumed, not what the business actually operates on.
          </li>

          <li>
            <strong>Stakeholders stop trusting the numbers.</strong> One wrong
            definition in an early report makes every later report harder to
            sell, even after it gets fixed.
          </li>

          <li>
            <strong>Scope grows instead of shrinking.</strong> Without a clear
            picture of what the business actually needs, projects default to
            building everything instead of the right thing.
          </li>
        </ul>

        <div className={styles.questionsWrapper}>
          <h2>The questions every leader should ask before a project starts</h2>

          <p>
            Not about timelines or tools. About whether the business has
            actually been understood yet.
          </p>

          <div className={styles.questions}>
            <div className={styles.question}>
              <h3>What does this term actually mean here?</h3>

              <p>
                Words like customer, active, or revenue rarely mean the same
                thing across two departments. Discovery means writing that
                definition down before it gets encoded into a table.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                Two teams use the same word in a meeting and mean two different
                things by it.
              </div>
            </div>

            <div className={styles.question}>
              <h3>Who actually owns this process today?</h3>

              <p>
                Every business process has an owner, even if the org chart does
                not say so directly. Discovery finds that person and asks them
                how the process really works, not how it is documented.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                The documented process and the actual process have not matched
                in years.
              </div>
            </div>

            <div className={styles.question}>
              <h3>What decisions is this project supposed to change?</h3>

              <p>
                If discovery cannot name the decisions a project is meant to
                inform, the project does not have a clear target yet, no matter
                how detailed the technical plan looks.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                The technical requirements are detailed, but nobody can name
                the decision behind them.
              </div>
            </div>

            <div className={styles.question}>
              <h3>What happens if we get this wrong?</h3>

              <p>
                Discovery should surface the cost of a wrong assumption before
                it becomes one. If nobody can say what breaks downstream, the
                risk has not actually been found yet.
              </p>

              <div className={styles.problem}>
                Common problem:
                <br />
                A definition gets assumed rather than confirmed, and nobody
                notices until a report looks off.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canonicalSection}>
          <h2>What real discovery looks like</h2>

          <p>
            The output is not a longer timeline. It is a shared, written
            understanding of the business that the entire project gets built
            on, instead of built around.
          </p>

          <div className={styles.canonicalList}>
            <div className={styles.canonicalItem}>
              <strong>Written definitions</strong>
              <br />
              Key business terms are documented in plain language before any
              table gets designed.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Named process owners</strong>
              <br />
              Every business process in scope has a person who confirmed how it
              actually works.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Decisions on record</strong>
              <br />
              The project can point to the specific decisions it is meant to
              inform, not just the data it moves.
            </div>

            <div className={styles.canonicalItem}>
              <strong>Assumptions surfaced early</strong>
              <br />
              Anything uncertain gets confirmed with a stakeholder before it
              gets built into the model.
            </div>
          </div>
        </div>

        <h2>The Canonica approach</h2>

        <p>
          Every engagement follows the same principle.{" "}
          <strong>
            Understand the business before a single table gets designed.
          </strong>
        </p>

        <div className={styles.process}>
          <div className={styles.step}>
            <span>01</span>

            <h3>Listen</h3>

            <p>
              Sit with the people who run the process daily and learn how it
              actually works, not how it is documented.
            </p>
          </div>

          <div className={styles.step}>
            <span>02</span>

            <h3>Define</h3>

            <p>
              Write down what key terms mean in this business, in language
              everyone agrees on.
            </p>
          </div>

          <div className={styles.step}>
            <span>03</span>

            <h3>Confirm</h3>

            <p>
              Take those definitions back to stakeholders and get explicit
              agreement before any modeling starts.
            </p>
          </div>

          <div className={styles.step}>
            <span>04</span>

            <h3>Build</h3>

            <p>
              Design the model on top of a shared understanding, so it holds
              up under scrutiny later.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>The Canonica Principle</h2>

          <p>
            <strong>
              Discovery exists to make the build fast and right, not to slow
              it down.
            </strong>
          </p>

          <p>
            Code is cheap to write and expensive to rebuild. Understand the
            business first, then build only what that understanding requires.
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