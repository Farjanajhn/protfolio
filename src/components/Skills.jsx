// Skills.jsx — Experience + Design process
// Minimal, same tokens and components as Main.jsx and About.jsx
// Layout: 12-col grid. Experience card uses the same 4 | 8 split as About.

import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    role: "UX/UI Designer",
    type: "Internship",
    current: true,
    company: "Intraction",
    location: "Stockholm, Sweden · Remote",
    dates: "Sep 2026 – Present",
    summary:
      "Improving a digital platform that uses interactive, game-based activities and data-driven insights to help teams collaborate and communicate better.",
    bullets: [
      "Design and refine interfaces that are intuitive, accessible and engaging.",
      "Improve user journeys across game sessions, dashboards and post-session experiences so they're smoother and easier to navigate.",
      "Explore clear ways to visualize team performance, behavioural insights and feedback.",
      "Contribute to redesigning key parts of the platform, including dashboards, upcoming activities, loading screens and website pages.",
      "Build wireframes, high-fidelity designs and interactive prototypes in Figma, iterating with the developer and CPO based on feedback.",
      "Run QA on the product, catching functional and usability issues and reporting them to the team.",
    ],
    tools: ["Figma", "Interaction Design", "Prototyping", "Data Visualization", "User Research", "QA Testing", "Cross-functional Collaboration"],
  },
  {
    role: "Software Tester",
    type: "Internship",
    company: "Vitec Software Group",
    location: "Umeå, Sweden",
    dates: "Nov 2021 – Mar 2022",
    bullets: [
      "Ran functional and regression testing in Azure DevOps (TFS) to improve application performance and reliability.",
      "Validated data with SQL queries to ensure data integrity and smooth system integration.",
      "Worked with developers and product owners in agile sprints to improve usability and user experience.",
      "Supported release documentation and took part in sprint retrospectives to streamline QA workflows.",
    ],
    tools: ["Azure DevOps", "TFS", "SQL", "Agile / Scrum", "QA Documentation"],
  },
];

const PROCESS = [
  {
    title: "Research",
    color: "var(--s-sky)",
    desc: "Understand users, goals, constraints and context through interviews, surveys and mixed-method studies.",
    methods: ["User interviews", "Surveys", "Competitive analysis", "MAXQDA"],
  },
  {
    title: "Ideation",
    color: "var(--s-purple)",
    desc: "Explore solutions, map user flows and prioritize ideas by user value and technical feasibility.",
    methods: ["User flows", "Journey maps", "MoSCoW", "Affinity mapping"],
  },
  {
    title: "Prototyping",
    color: "var(--s-orange)",
    desc: "Turn concepts into wireframes and high-fidelity interfaces using design systems in Figma.",
    methods: ["Lo-fi wireframes", "Hi-fi prototypes", "Design systems", "Figma"],
  },
  {
    title: "Testing",
    color: "var(--s-green)",
    desc: "Evaluate usability, accessibility and interaction quality through moderated testing and fast iteration.",
    methods: ["Usability testing", "Think-aloud", "WCAG checks", "Iteration"],
  },
];

/* Fades cards in once as they scroll into view */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll(".s-reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const Skills = () => {
  const ref = useReveal();

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title" ref={ref}>
      <style>{css}</style>

      <div className="skills__inner">
        {/* ── Experience ── */}
        <header className="skills__header s-reveal">
          <p className="s-badge">Experience</p>
          <h2 id="skills-title" className="skills__title">
            Professional <span className="skills__mark">experience</span>
          </h2>
          <p className="skills__intro">
            UX/UI design and QA on a live product today, backed by hands-on
            experience in software testing and agile teams.
          </p>
        </header>

        <ol className="skills__jobs">
          {EXPERIENCE.map((job) => (
            <li key={job.company + job.role} className="s-card s-job s-reveal">
              <div className="s-job__meta">
                <div className="s-job__tags">
                  {job.current && (
                    <span className="s-tag s-tag--current">
                      <span className="s-dot" aria-hidden="true" />
                      Current
                    </span>
                  )}
                  <span className="s-tag">{job.type}</span>
                </div>
                <h3 className="s-job__role">{job.role}</h3>
                <p className="s-job__company">{job.company}</p>
                <p className="s-job__detail">{job.location}</p>
                <p className="s-job__detail">{job.dates}</p>
              </div>

              <div className="s-job__body">
                {job.summary && <p className="s-job__summary">{job.summary}</p>}
                <ul className="s-job__bullets">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="s-job__tools">
                  <span className="s-eyebrow s-eyebrow--inline">Skills &amp; tools</span>
                  <ul className="s-chips">
                    {job.tools.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* ── Design process ── */}
        <header className="skills__header skills__header--second s-reveal">
          <p className="s-badge">Design process</p>
          <h2 className="skills__title">
            A structured, <span className="skills__mark">repeatable</span> process.
          </h2>
          <p className="skills__intro">
            A UX workflow grounded in Human–Computer Interaction, with usability,
            accessibility and user-validated decisions at every stage.
          </p>
        </header>

        <ol className="skills__process">
          {PROCESS.map(({ title, color, desc, methods }, i) => (
            <li key={title} className="s-card s-reveal" style={{ "--d": `${i * 60}ms` }}>
              <div className="s-step__head">
                <span className="s-chip" style={{ background: color }} aria-hidden="true" />
                <span className="s-step__num">0{i + 1}</span>
              </div>
              <h3 className="s-card-title">{title}</h3>
              <p className="s-card-text">{desc}</p>
              <ul className="s-chips s-chips--small s-foot">
                {methods.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Skills;

/* ───────────────────────────────────────────── */
/* Same tokens as Main.jsx */
const css = `
.skills {
  --s-primary: #0075de;
  --s-ink: #000000;
  --s-ink-2: #31302e;
  --s-muted: #615d59;
  --s-canvas: #ffffff;
  --s-paper: #f6f5f4;
  --s-line: #e6e6e6;
  --s-sky: #62aef0;
  --s-purple: #d6b6f6;
  --s-orange: #dd5b00;
  --s-green: #1aae39;

  background: var(--s-paper);
  color: var(--s-ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.skills *, .skills *::before, .skills *::after { box-sizing: border-box; }

.skills__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 24px;
}

/* Section headers — same as About */
.skills__header { margin-bottom: 40px; }
.skills__header--second { margin-top: 96px; }
.s-badge {
  display: inline-flex;
  margin: 0 0 24px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--s-canvas);
  border: 1px solid var(--s-line);
  color: var(--s-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
}
.skills__title {
  margin: 0;
  max-width: 16em;
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.033em;
  text-wrap: balance;
}
.skills__mark {
  background-image: linear-gradient(transparent 62%, rgba(98,174,240,0.35) 62%);
  padding: 0 2px;
}
.skills__intro {
  margin: 16px 0 0;
  max-width: 34rem;
  font-size: 18px;
  line-height: 1.6;
  color: var(--s-muted);
}

/* Cards */
.s-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  background: var(--s-canvas);
  border: 1px solid var(--s-line);
}
.s-card > .s-foot { margin-top: auto; }
.s-eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--s-muted);
}
.s-eyebrow--inline { margin: 0 8px 0 0; }
.s-card-title {
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
}
.s-card-text {
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--s-muted);
}

/* Chips — same as About's tools */
.s-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.s-chips li {
  padding: 5px 12px;
  border-radius: 8px;
  background: var(--s-paper);
  border: 1px solid var(--s-line);
  font-size: 14px;
  color: var(--s-ink-2);
}
.s-chips--small { gap: 6px; }
.s-chips--small li { padding: 3px 10px; font-size: 13px; }

.s-job__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
.s-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 9999px;
  background: rgba(0,117,222,0.08);
  color: var(--s-primary);
  font-size: 13px;
  font-weight: 500;
}

.s-tag--current { background: rgba(26,174,57,0.10); color: #137a2a; }
.s-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--s-green);
  animation: s-ping 2.4s ease-out infinite;
}
@keyframes s-ping {
  0%   { box-shadow: 0 0 0 0 rgba(26,174,57,0.35); }
  70%  { box-shadow: 0 0 0 6px rgba(26,174,57,0); }
  100% { box-shadow: 0 0 0 0 rgba(26,174,57,0); }
}

/* Experience — 4 | 8 split, same as About */
.skills__jobs { display: flex; flex-direction: column; gap: 16px; margin: 0; padding: 0; list-style: none; }
.s-job {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
  padding: 0;
}
.s-job__meta {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-right: 1px solid var(--s-line);
}
.s-job__role { margin: 0 0 4px; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
.s-job__company { margin: 0 0 12px; font-size: 15px; color: var(--s-ink-2); }
.s-job__detail { margin: 0; font-size: 14px; line-height: 1.6; color: var(--s-muted); }
.s-job__body {
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 24px 8px;
}
.s-job__summary {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--s-ink);
}
.s-job__bullets {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
}
.s-job__bullets li {
  position: relative;
  padding-left: 18px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--s-ink-2);
}
.s-job__bullets li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background: var(--s-sky);
}
.s-job__tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--s-line);
}

/* Process — same card as the hero's focus cards */
.skills__process {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.s-step__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.s-chip { display: block; width: 28px; height: 28px; border-radius: 8px; }
.s-step__num { font-size: 13px; font-weight: 600; color: var(--s-muted); }

/* Motion */
.s-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--d, 0ms);
}
.s-reveal.is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .s-reveal { opacity: 1; transform: none; transition: none; }
  .s-dot { animation: none; }
}

/* Tablet */
@media (max-width: 1023px) {
  .skills__process { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* Mobile */
@media (max-width: 767px) {
  .skills__inner { padding: 64px 16px; }
  .skills__header { margin-bottom: 32px; }
  .skills__header--second { margin-top: 64px; }
  .skills__intro { font-size: 16px; }
  .s-job { display: flex; flex-direction: column; gap: 0; }
  .s-job__meta { border-right: 0; border-bottom: 1px solid var(--s-line); padding-bottom: 20px; }
  .s-job__body { padding: 20px 24px 24px; }
  .skills__process { grid-template-columns: 1fr; }
}
`;