// About.jsx — minimal, same tokens and components as the hero (Main.jsx)
// Rows (12-col grid, cards in a row share height):
//   1. identity (4) | bio (8)
//   2. four competency cards (3 each), same style as the hero's focus cards
//   3. thesis (4) | tools (8)
//   4. availability + resume (12)

import { useEffect, useRef } from "react";

const COMPETENCIES = [
  { title: "UX & Product Design", desc: "Wireframing, interaction flows, design systems, UI polish", color: "var(--a-sky)" },
  { title: "User Research", desc: "Interviews, surveys, usability testing, mixed methods", color: "var(--a-purple)" },
  { title: "Prototyping", desc: "Lo-fi sketches through hi-fi Figma prototypes", color: "var(--a-orange)" },
  { title: "Front-End Awareness", desc: "React, Tailwind, dev handoff, accessibility (WCAG)", color: "var(--a-green)" },
];

const TOOLS = [
  "Figma", "Miro", "Wireframing", "Prototyping", "Design Systems",
  "Information Architecture", "Usability Testing", "Journey Mapping",
  "MAXQDA", "Mixed-Methods Research", "Accessibility (WCAG)",
  "React", "Tailwind CSS", "VS Code", "GitHub",
];

const LANGUAGES = [
  { lang: "Bengali", level: "Native" },
  { lang: "English", level: "Fluent" },
  { lang: "Swedish", level: "Professional" },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2.5v8M4.5 7.5 8 11l3.5-3.5M3 13.5h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l5-5M4 3.5h4.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Fades cards in once as they scroll into view */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll(".a-reveal");
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

const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="about" aria-labelledby="about-title" ref={ref}>
      <style>{css}</style>

      <div className="about__inner">
        <header className="about__header a-reveal">
          <p className="a-badge">About me</p>
          <h2 id="about-title" className="about__title">
            Designed for <span className="about__mark">people</span>, built for impact.
          </h2>
        </header>

        <div className="about__grid">
          {/* Row 1 */}
          <div className="a-card a-reveal span-4">
            <h3 className="about__name">Farjana Jahan Sathi</h3>
            <p className="about__role"> UX/UI Designer · Umeå, Sweden</p>

            <div className="a-foot">
              <p className="a-eyebrow">Languages</p>
              <ul className="about__langs">
                {LANGUAGES.map(({ lang, level }) => (
                  <li key={lang}>
                    <span>{lang}</span>
                    <span className="a-muted">{level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="a-card a-reveal span-8" style={{ "--d": "60ms" }}>
            <p className="a-eyebrow">Who I am</p>
            <p className="about__lead">
              I'm a UX/UI Designer with a Master's in Human–Computer Interaction
              &amp; User Experience from Umeå University.
            </p>
            <p className="about__body">
              I specialize in user-centered problem solving, qualitative research,
              usability testing and interaction design, with a focus on making complex
              systems feel simple and inclusive.
            </p>
            <p className="about__interests a-foot">
              <span className="a-eyebrow a-eyebrow--inline">Interests</span>
              SaaS UX · Inclusive design · Human–AI interaction
            </p>
          </div>

          {/* Row 2 */}
          {COMPETENCIES.map(({ title, desc, color }, i) => (
            <div key={title} className="a-card a-reveal span-3" style={{ "--d": `${i * 60}ms` }}>
              <span className="a-chip" style={{ background: color }} aria-hidden="true" />
              <h4 className="a-card-title">{title}</h4>
              <p className="a-card-text">{desc}</p>
            </div>
          ))}

          {/* Row 3 */}
          <div className="a-card a-reveal span-4">
            <p className="a-eyebrow">Master's thesis</p>
            <h3 className="about__thesis">Evaluating the International Usability of ULTRA</h3>
            <p className="a-card-text">Umeå University · 2023–2025</p>
            <a
              className="a-btn-utility a-foot"
              href="https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1977119&dswid=2404"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the thesis <ArrowUpRight />
            </a>
          </div>

          <div className="a-card a-reveal span-8" style={{ "--d": "60ms" }}>
            <p className="a-eyebrow">Tools &amp; skills</p>
            <ul className="about__tools">
              {TOOLS.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>

          {/* Row 4 */}
          <div className="about__bar a-reveal span-12">
            <p className="about__status">
              <span className="a-dot" aria-hidden="true" />
              Open to UX/UI roles, internships and collaborations · Remote or Umeå
            </p>
            <a
              className="a-btn"
              href="/Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf"
              download="Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf"
            >
              Download resume <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/* ───────────────────────────────────────────── */
/* Same tokens as Main.jsx */
const css = `
.about {
  --a-primary: #0075de;
  --a-primary-active: #005bab;
  --a-ink: #000000;
  --a-ink-2: #31302e;
  --a-muted: #615d59;
  --a-faint: #a39e98;
  --a-canvas: #ffffff;
  --a-paper: #f6f5f4;
  --a-line: #e6e6e6;
  --a-sky: #62aef0;
  --a-purple: #d6b6f6;
  --a-orange: #dd5b00;
  --a-green: #1aae39;

  background: var(--a-paper);
  color: var(--a-ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.about *, .about *::before, .about *::after { box-sizing: border-box; }

.about__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 24px;
}

/* Header — same badge + headline treatment as the hero */
.about__header { margin-bottom: 48px; }
.a-badge {
  display: inline-flex;
  margin: 0 0 24px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--a-canvas);
  border: 1px solid var(--a-line);
  color: var(--a-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
}
.about__title {
  margin: 0;
  max-width: 14em;
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.033em;
  text-wrap: balance;
}
.about__mark {
  background-image: linear-gradient(transparent 62%, rgba(98,174,240,0.35) 62%);
  padding: 0 2px;
}

/* Grid */
.about__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
}
.span-3  { grid-column: span 3; }
.span-4  { grid-column: span 4; }
.span-8  { grid-column: span 8; }
.span-12 { grid-column: 1 / -1; }

/* Cards — identical to the hero's focus cards */
.a-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  background: var(--a-canvas);
  border: 1px solid var(--a-line);
}
.a-foot { margin-top: auto; }
.a-chip {
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.a-card-title {
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
}
.a-card-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.43;
  color: var(--a-muted);
}
.a-muted { color: var(--a-muted); }

.a-eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--a-muted);
}
.a-eyebrow--inline { margin: 0 8px 0 0; }

/* Identity */
.about__name { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
.about__role { margin: 4px 0 24px; font-size: 14px; color: var(--a-muted); }
.about__langs { margin: 0; padding: 0; list-style: none; }
.about__langs li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid var(--a-line);
  font-size: 15px;
}

/* Bio */
.about__lead {
  margin: 0 0 12px;
  max-width: 38rem;
  font-size: 18px;
  line-height: 1.6;
  color: var(--a-ink-2);
}
.about__body {
  margin: 0 0 24px;
  max-width: 38rem;
  font-size: 16px;
  line-height: 1.6;
  color: var(--a-muted);
}
.about__interests {
  margin-bottom: 0;
  padding-top: 16px;
  border-top: 1px solid var(--a-line);
  font-size: 15px;
  color: var(--a-ink-2);
}

/* Thesis */
.about__thesis {
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

/* Tools */
.about__tools { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.about__tools li {
  padding: 5px 12px;
  border-radius: 8px;
  background: var(--a-paper);
  border: 1px solid var(--a-line);
  font-size: 14px;
  color: var(--a-ink-2);
}

/* Buttons — same as the hero */
.a-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  background: var(--a-primary);
  color: #fff;
  font: 500 16px/1.5 'Inter', system-ui, sans-serif;
  text-decoration: none;
  transition: background-color .15s ease;
}
.a-btn:hover { background: var(--a-primary-active); }
.a-btn-utility {
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  margin-top: auto;
  padding: 0 12px;
  border-radius: 8px;
  background: var(--a-canvas);
  border: 1px solid var(--a-line);
  color: var(--a-ink-2);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color .15s ease, color .15s ease;
}
.a-btn-utility:hover { border-color: var(--a-faint); color: var(--a-ink); }
.about__thesis + .a-card-text { margin-bottom: 20px; }
.a-btn:focus-visible, .a-btn-utility:focus-visible {
  outline: 2px solid var(--a-primary);
  outline-offset: 3px;
}

/* Availability + resume */
.about__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  padding: 16px 16px 16px 24px;
  border-radius: 9999px;
  background: var(--a-canvas);
  border: 1px solid var(--a-line);
}
.about__status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 15px;
  color: var(--a-ink-2);
}
.a-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--a-green);
  animation: about-ping 2.4s ease-out infinite;
}

/* Motion */
.a-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--d, 0ms);
}
.a-reveal.is-in { opacity: 1; transform: none; }
@keyframes about-ping {
  0%   { box-shadow: 0 0 0 0 rgba(26,174,57,0.35); }
  70%  { box-shadow: 0 0 0 7px rgba(26,174,57,0); }
  100% { box-shadow: 0 0 0 0 rgba(26,174,57,0); }
}
@media (prefers-reduced-motion: reduce) {
  .a-reveal { opacity: 1; transform: none; transition: none; }
  .a-dot { animation: none; }
  .a-btn, .a-btn-utility { transition: none; }
}

/* Tablet */
@media (max-width: 1023px) {
  .span-4, .span-8 { grid-column: 1 / -1; }
  .span-3 { grid-column: span 6; }
  .about__role { margin-bottom: 20px; }
  .about__langs { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 24px; }
  .a-foot { margin-top: 0; }
}

/* Mobile */
@media (max-width: 767px) {
  .about__inner { padding: 64px 16px; }
  .about__header { margin-bottom: 32px; }
  .about__grid { grid-template-columns: 1fr; }
  .span-3, .span-4, .span-8, .span-12 { grid-column: 1 / -1; }
  .about__langs { display: block; }
  .about__bar { flex-direction: column; align-items: stretch; padding: 20px; border-radius: 12px; }
  .about__status { align-items: flex-start; }
  .a-dot { margin-top: 7px; }
  .a-btn { width: 100%; }
}
`;