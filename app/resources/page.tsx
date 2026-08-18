import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "./resources.module.css";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.heroLabel}>
              Knowledge Center · Data Strategy · Analytics Engineering
            </div>

            <h1>
              Building the foundation behind{" "}
              <span>trusted data.</span>
            </h1>

            <p>
              Practical guidance on data engineering, analytics, and AI
              readiness, designed to help organizations understand their data
              problems before investing in more tools.
            </p>
          </div>
        </section>

        {/* FEATURED RESOURCE */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>Featured Resource</div>

              <h2>Start with the problem behind the dashboard.</h2>

              <p>
                The most successful data initiatives begin by understanding why
                trust breaks down, not by immediately building another report.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div>
                <div className={styles.featureTag}>Data Foundations</div>

                <h3>Why Your Dashboard Isn&apos;t the Problem</h3>

                <p>
                  Most companies think they have a dashboard problem. Usually,
                  the real issue is that different teams are measuring the same
                  business concepts in different ways.
                </p>

                <p>
                  Learn why trusted analytics starts with shared definitions,
                  reliable models, and a single foundation everyone can use.
                </p>

                <Link
                  href="/resources/dashboard-isnt-the-problem"
                  className={styles.readLink}
                >
                  Read article →
                </Link>
              </div>

              <div className={styles.featureSide}>
                <strong>Key concepts</strong>

                <p>✓ Business definitions</p>
                <p>✓ Single source of truth</p>
                <p>✓ Data modeling</p>
                <p>✓ Analytics trust</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCE GRID */}
        <section className={`${styles.section} ${styles.resources}`}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>All Resources</div>

              <h2>Insights for building reliable data systems.</h2>

              <p>
                Explore practical explanations of the concepts that make
                analytics, reporting, and AI initiatives successful.
              </p>
            </div>

            <div className={styles.resourceGrid}>
              <ResourceCard
                category="Data Foundations"
                title='What "Canonical Data" Actually Means'
                description="Why organizations need shared definitions and trusted business logic before analytics can truly scale."
                href="/resources/canonical-data-explained"
              />

              <ResourceCard
                category="AI Readiness"
                title="Preparing Your Data for AI Before You Buy AI Tools"
                description="AI systems depend on reliable context. Learn what needs to exist before expecting accurate answers."
                href="/resources/preparing-data-for-ai"
              />

              <ResourceCard
                category="Data Strategy"
                title="Five Signs Your Company Doesn't Have a Single Source of Truth"
                description="The warning signs that reporting problems are actually foundation problems."
                href="/resources/signs-no-single-source-of-truth"
              />

              <ResourceCard
                category="Business Alignment"
                title="Why Data Engineering Is Really About Business Decisions"
                description="The goal of engineering data is not moving information. It is creating better decisions."
                href="/resources/data-engineering-business-decisions"
              />

              <ResourceCard
                category="Analytics Operations"
                title="The Hidden Cost of Spreadsheet Reporting"
                description="How manual reporting creates hidden risk, duplicated effort, and inconsistent business logic."
                href="/resources/hidden-cost-spreadsheet-reporting"
              />

              <ResourceCard
                category="Consulting Process"
                title="How We Run Discovery Before Writing Code"
                description="Why understanding the business comes before designing pipelines, models, or dashboards."
                href="/resources/discovery-before-code"
              />

              <ResourceCard
                category="Data Engineering"
                title="What Makes a Data Pipeline Reliable?"
                description="The principles behind pipelines that organizations can actually depend on."
                href="/resources/reliable-data-pipelines"
              />

              <ResourceCard
                category="Data Modeling"
                title="Dimensional Modeling Explained Without the Jargon"
                description="A practical explanation of how modern analytics models organize business information."
                href="/resources/dimensional-modeling-explained"
              />

              <ResourceCard
                category="Analytics Engineering"
                title="What Is a Semantic Layer, and Why Should You Care?"
                description="How semantic layers create consistency between dashboards, applications, and AI systems."
                href="/resources/semantic-layer-explained"
              />
            </div>
          </div>
        </section>

        {/* CANONICA PRINCIPLE */}
        <section className={styles.principle}>
          <div className={styles.wrap}>
            <div className={styles.principleContent}>
              <div className={styles.sectionLabel}>
                The Canonica Principle
              </div>

              <h2>
                Technology works better when the foundation is trusted.
              </h2>

              <p>
                Dashboards, pipelines, and AI systems all depend on the same
                thing: a shared understanding of the business.
              </p>

              <p>
                One definition.
                <br />
                One trusted foundation.
                <br />
                Better decisions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.cta}>
              <h2>Ready to build a stronger data foundation?</h2>

              <p>
                Start by understanding where trust breaks down today. Before
                another dashboard. Before another tool. Before another AI
                initiative.
              </p>

              <Link href="/contact" className={styles.navBtn}>
                Start a conversation →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <Link href="/" className={styles.brand}>
            Canonica Data
          </Link>

          <p>canonicadata.com · © 2026</p>
        </div>
      </footer>
    </>
  );
}

function ResourceCard({
  category,
  title,
  description,
  href,
}: {
  category: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article className={styles.resourceCard}>
      <div className={styles.resourceCategory}>{category}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <Link href={href}>Read article →</Link>
    </article>
  );
}