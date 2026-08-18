import Navbar from "../../components/Navbar";
import React from 'react';

const SignsNoSingleSourceOfTruth: React.FC = () => {
  return (
    <>
      <style>{`
        :root {
          --navy-950:#071427;
          --navy-900:#0B1E3D;
          --navy-800:#123059;
          --blue-700:#1B3A6B;
          --teal-500:#2FA8A0;
          --teal-600:#1E7E78;

          --gray-50:#F6F8FA;
          --gray-100:#EEF1F5;
          --gray-200:#E1E6EC;
          --gray-600:#5C6B7A;

          --white:#FFFFFF;
        }

        * {
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body {
          font-family:'Inter',sans-serif;
          color:var(--navy-900);
          line-height:1.7;
          background:white;
        }

        h1,h2,h3 {
          font-family:'Manrope',sans-serif;
          font-weight:600;
          letter-spacing:-0.025em;
          line-height:1.15;
        }

        .wrap {
          max-width:1180px;
          margin:auto;
          padding:0 40px;
        }

        nav {
          height:76px;
          border-bottom:1px solid var(--gray-200);
          background:white;
          position:sticky;
          top:0;
          z-index:20;
        }

        .nav-inner {
          height:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .brand {
          font-family:'Manrope',sans-serif;
          font-weight:700;
          font-size:20px;
          color:var(--navy-900);
        }

        .nav-links {
          display:flex;
          gap:35px;
        }

        .nav-links a {
          color:var(--navy-800);
          text-decoration:none;
          font-size:14px;
        }

        .nav-btn {
          display:inline-flex;
          align-items:center;
          background:var(--navy-900);
          color:white;
          padding:12px 25px;
          border-radius:9px;
          text-decoration:none;
          font-size:14px;
          font-weight:600;
          box-shadow:0 10px 25px -12px rgba(11,30,61,.45);
          transition:.2s;
        }

        .nav-btn:hover {
          background:var(--navy-800);
          transform:translateY(-2px);
        }

        .hero {
          background:linear-gradient(
            180deg,
            var(--gray-50),
            white
          );
          padding:95px 0 90px;
        }

        .meta {
          font-family:'IBM Plex Mono',monospace;
          font-size:12px;
          color:var(--teal-600);
          letter-spacing:.08em;
          text-transform:uppercase;
          margin-bottom:30px;
        }

        .hero h1 {
          font-size:58px;
          max-width:900px;
        }

        .hero p {
          margin-top:30px;
          max-width:760px;
          font-size:21px;
          color:var(--gray-600);
        }

        .read-time {
          margin-top:30px;
          font-family:'IBM Plex Mono',monospace;
          font-size:13px;
          color:var(--gray-600);
        }

        .article {
          max-width:1180px;
          margin:auto;
          padding:80px 40px;
        }

        .summary {
          background:linear-gradient(
            135deg,
            var(--navy-900),
            var(--navy-800)
          );
          color:white;
          padding:40px;
          border-radius:18px;
          margin-bottom:70px;
          box-shadow:0 20px 50px -25px rgba(11,30,61,.4);
        }

        .summary h3 {
          color:white;
          font-size:23px;
          margin-bottom:15px;
        }

        .summary p {
          color:rgba(255,255,255,.82);
        }

        .article h2 {
          font-size:36px;
          margin:75px 0 25px;
        }

        .article p {
          font-size:18px;
          margin-bottom:24px;
          max-width:900px;
        }

        .article strong {
          font-weight:700;
        }

        .article ul {
          margin:25px 0 35px 25px;
          font-size:18px;
          max-width:900px;
        }

        .article li {
          margin-bottom:12px;
        }

        .metric-box {
          background:var(--gray-50);
          border:1px solid var(--gray-200);
          border-radius:16px;
          padding:35px;
          margin:40px 0;
          max-width:900px;
        }

        .metric-box p {
          margin:10px 0;
        }

        .questions-wrapper {
          background:var(--navy-950);
          margin-left:-40px;
          margin-right:-40px;
          padding:60px 40px;
          border-radius:22px;
        }

        .questions-wrapper h2 {
          color:white;
          margin-top:0;
        }

        .questions-wrapper > p {
          color:rgba(255,255,255,.75);
        }

        .questions {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:24px;
          margin-top:40px;
        }

        .question {
          background:white;
          border-radius:16px;
          padding:28px;
          border:1px solid rgba(255,255,255,.15);
        }

        .question h3 {
          font-size:20px;
          margin-bottom:15px;
        }

        .question p {
          font-size:15px;
          color:var(--gray-600);
        }

        .problem {
          margin-top:15px;
          background:var(--gray-50);
          border-left:3px solid var(--teal-500);
          padding:14px;
          border-radius:8px;
          font-size:14px;
          color:var(--navy-800);
        }

        .canonical-section {
          background:var(--gray-50);
          margin-top:80px;
          padding:70px 60px;
          border-radius:22px;
        }

        .canonical-section h2 {
          margin-top:0;
        }

        .canonical-section strong {
          color:var(--teal-600);
        }

        .canonical-list {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
          margin-top:35px;
        }

        .canonical-item {
          background:white;
          border:1px solid var(--gray-200);
          border-radius:14px;
          padding:22px;
          font-size:16px;
        }

        .process {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
          margin-top:45px;
        }

        .step {
          border:1px solid var(--gray-200);
          border-radius:16px;
          padding:28px;
          background:white;
        }

        .step span {
          display:inline-flex;
          width:38px;
          height:38px;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          background:var(--navy-900);
          color:white;
          font-family:'IBM Plex Mono',monospace;
          font-size:13px;
          margin-bottom:18px;
        }

        .step h3 {
          font-size:19px;
          margin-bottom:12px;
        }

        .step p {
          font-size:15px;
          color:var(--gray-600);
        }

        .cta {
          margin-top:80px;
          background:linear-gradient(
            135deg,
            var(--navy-950),
            var(--blue-700)
          );
          color:white;
          border-radius:22px;
          padding:60px;
          text-align:center;
        }

        .cta h2 {
          color:white;
          margin-top:0;
          font-size:40px;
        }

        .cta p {
          color:rgba(255,255,255,.8);
          max-width:650px;
          margin:20px auto;
        }

        .cta strong {
          color:white;
        }

        .button {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          margin-top:30px;
          background:white;
          color:var(--navy-900);
          padding:15px 30px;
          border-radius:10px;
          text-decoration:none;
          font-weight:600;
          transition:.2s;
        }

        .button:hover {
          transform:translateY(-2px);
        }

        footer {
          border-top:1px solid var(--gray-200);
          padding:35px 0;
        }

        footer .wrap {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        footer p {
          color:var(--gray-600);
          font-size:14px;
        }

        @media(max-width:900px) {
          .hero h1 {
            font-size:42px;
          }

          .nav-links {
            display:none;
          }

          .questions,
          .canonical-list,
          .process {
            grid-template-columns:1fr;
          }

          .article {
            padding:60px 25px;
          }

          .questions-wrapper {
            margin-left:-25px;
            margin-right:-25px;
            padding:45px 25px;
          }

          .cta {
            padding:40px 25px;
          }
        }
      `}</style>

      <Navbar />

      <section className="hero">
        <div className="wrap">
          <div className="meta">
            DATA STRATEGY · DATA GOVERNANCE · SINGLE SOURCE OF TRUTH · RESOURCE
          </div>

          <h1>
            Five Signs Your Company Doesn&apos;t Have a Single Source of Truth
          </h1>

          <p>
            A single source of truth is not one magical database. It is a
            shared, trusted foundation where important business data and
            definitions have an agreed home.
          </p>

          <div className="read-time">
            9 MIN READ · CANONICA DATA
          </div>
        </div>
      </section>

      <article className="article">

        <div className="summary">
          <h3>Executive takeaway</h3>

          <p>
            If people regularly ask which spreadsheet, dashboard, database,
            or report is correct, the organization does not have a single
            source of truth for that information. A single source of truth is
            created through consistent data, shared definitions, clear
            ownership, and trust in the systems underneath the reporting.
          </p>
        </div>

        <h2>The mistake most organizations make</h2>

        <p>
          Companies often assume they have a single source of truth because
          they have a CRM, ERP, warehouse, or BI platform.
        </p>

        <p>
          Having a central system does not automatically create a single
          source of truth.
        </p>

        <p>
          The real test is what happens when two people ask the same business
          question.
        </p>

        <p>
          If the answer is, &quot;It depends which report you are looking at,&quot;
          the organization has a trust problem.
        </p>

        <p>
          <strong>
            A single source of truth is not a product. It is an agreement
            about which data and definitions the business trusts.
          </strong>
        </p>

        <p>
          The technology matters, but the harder work is deciding what is
          authoritative, how it is defined, and who is responsible for
          keeping it trustworthy.
        </p>

        <h2>A simple example: the monthly revenue number</h2>

        <div className="metric-box">
          <p>
            <strong>Without a single source of truth:</strong> Finance has
            one number, Sales has another, and the executive dashboard shows
            a third because each source uses different filters and timing.
          </p>

          <p>
            <strong>With a shared source of truth:</strong> the business has
            an agreed definition, an authoritative data foundation, and a
            reporting path that consistently applies the same logic.
          </p>
        </div>

        <p>
          The organization does not need every system to contain identical
          data.
        </p>

        <p>
          It needs to know which source should answer which question and
          which definition should be used.
        </p>

        <ul>
          <li>People know where authoritative information lives.</li>
          <li>Business terms have shared definitions.</li>
          <li>Reports are built from trusted, reusable data.</li>
          <li>Ownership exists for important datasets and metrics.</li>
          <li>
            Differences between systems are understood instead of ignored.
          </li>
        </ul>

        <p>
          <strong>
            The goal is not one database for everything. The goal is one
            trusted answer for the questions that matter.
          </strong>
        </p>

        <h2>Why this distinction matters to leaders</h2>

        <p>
          When there is no clear source of truth, the organization pays for
          the same problem repeatedly.
        </p>

        <ul>
          <li>
            <strong>Meetings become reconciliation exercises.</strong> People
            spend time explaining why numbers differ instead of deciding what
            to do about them.
          </li>

          <li>
            <strong>Reporting gets duplicated.</strong> Teams build their own
            datasets because they do not trust the shared ones.
          </li>

          <li>
            <strong>AI becomes harder to trust.</strong> An AI system cannot
            create organizational agreement where the underlying data has
            none.
          </li>

          <li>
            <strong>Decision making slows down.</strong> Leaders wait for
            someone to determine which number is correct before acting on it.
          </li>
        </ul>

        <p>
          The hidden cost is not only inconsistent data.
        </p>

        <p>
          <strong>
            It is the organizational time spent debating which data deserves
            to be believed.
          </strong>
        </p>

        <div className="questions-wrapper">
          <h2>The questions every leader should ask</h2>

          <p>
            Not about buying another tool. About whether the business can
            trust the data underneath its decisions.
          </p>

          <div className="questions">

            <div className="question">
              <h3>Do people ask which report is correct?</h3>

              <p>
                Frequent questions about which dashboard, spreadsheet, or
                export should be trusted are one of the clearest signs that
                authority has not been established.
              </p>

              <div className="problem">
                Common problem:
                <br />
                Several reports are labeled as the official version and each
                has a different owner.
              </div>
            </div>

            <div className="question">
              <h3>Do teams maintain their own copies of the same data?</h3>

              <p>
                Duplicate datasets are often created because teams need a
                version they can understand or trust.
              </p>

              <div className="problem">
                Common problem:
                <br />
                Every department has its own customer, revenue, or product
                table because the shared version is considered unreliable.
              </div>
            </div>

            <div className="question">
              <h3>Can the business explain why numbers differ?</h3>

              <p>
                Different systems can legitimately contain different
                information, but the relationship between them should be
                understood.
              </p>

              <div className="problem">
                Common problem:
                <br />
                Two numbers disagree and nobody can explain whether the
                difference is intentional or an error.
              </div>
            </div>

            <div className="question">
              <h3>Are definitions owned?</h3>

              <p>
                A source of truth requires more than technical ownership.
                Someone needs to be accountable for the meaning of important
                business data.
              </p>

              <div className="problem">
                Common problem:
                <br />
                The database has an administrator, but nobody owns what
                customer, revenue, or active actually means.
              </div>
            </div>

          </div>
        </div>

        <div className="canonical-section">
          <h2>What strong data foundations look like</h2>

          <p>
            The goal is not to add another tool or another layer of process.
            It is to create a shared, reliable understanding of the data the
            business actually depends on.
          </p>

          <div className="canonical-list">

            <div className="canonical-item">
              <strong>Authoritative sources</strong>
              <br />
              The organization knows which systems should be trusted for
              specific business facts and why.
            </div>

            <div className="canonical-item">
              <strong>Shared definitions</strong>
              <br />
              Important business concepts have consistent meanings across
              teams and reporting experiences.
            </div>

            <div className="canonical-item">
              <strong>Clear ownership</strong>
              <br />
              Data and metric owners are accountable for quality, meaning,
              and changes over time.
            </div>

            <div className="canonical-item">
              <strong>Trusted consumption</strong>
              <br />
              Dashboards, reports, and analytical tools use reusable
              foundations instead of creating competing versions.
            </div>

          </div>
        </div>

        <h2>The Canonica approach</h2>

        <p>
          Every engagement follows the same principle.{' '}
          <strong>Understand the problem before building the solution.</strong>
        </p>

        <div className="process">

          <div className="step">
            <span>01</span>
            <h3>Inventory</h3>
            <p>
              Identify the important datasets, reports, spreadsheets, and
              systems people currently use to answer business questions.
            </p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Decide</h3>
            <p>
              Determine which sources and definitions should be authoritative
              for the questions that matter.
            </p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Standardize</h3>
            <p>
              Create consistent models, definitions, and reusable data
              foundations around those decisions.
            </p>
          </div>

          <div className="step">
            <span>04</span>
            <h3>Govern</h3>
            <p>
              Maintain ownership, documentation, and visibility so the source
              of truth stays trustworthy as the business changes.
            </p>
          </div>

        </div>

        <div className="cta">
          <h2>The Canonica Principle</h2>

          <p>
            <strong>
              A single source of truth is not about putting everything in one
              place. It is about making the right place trustworthy.
            </strong>
          </p>

          <p>
            When people stop asking which number is correct, the data
            foundation is finally doing its job.
          </p>

          <a href="#contact" className="button">
            Start a conversation →
          </a>
        </div>

      </article>

      <footer>
        <div className="wrap">
          <div className="brand">
            Canonica Data
          </div>

          <p>
            canonicadata.com · © 2026
          </p>
        </div>
      </footer>
    </>
  );
};

export default SignsNoSingleSourceOfTruth;