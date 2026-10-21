// Projects.jsx — minimal, same tokens and components as Main/About/Skills/Contact
// Featured case study as a wide card, the other three in a row below.
// Each whole card is one link, so the hit area is large and there are no nested links.

import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import final from "../assets/image/UX1st/happy2.png";
import Mockup3 from "../assets/image/UX3RD/Mockup3.png";
import hero2 from "../assets/image/UX2nd/hero2.png";
import COVER from "../assets/image/UX4TH/Artboard.png";

const PROJECTS = [
  {
    id: "ultra",
    title: "Ultra",
    subtitle: "Public transportation app redesign",
    description:
      "Master's thesis research and redesign of Ultra, focusing on usability, inclusivity and seamless commuting for international users in Umeå.",
    link: "/projects/four",
    image: COVER,
    tags: ["Thesis", "Mobile", "Usability"],
    color: "var(--p-sky)",
  },
  {
    id: "mygov",
    title: "MyGov BD",
    subtitle: "Government services UX redesign",
    description:
      "Clearer navigation, consistent language switching and better task feedback to reduce confusion in Bangladesh's digital government platform.",
    link: "/projects/Third",
    image: Mockup3,
    tags: ["Accessibility", "Mobile", "Research"],
    color: "var(--p-green)",
  },
  {
    id: "trubble",
    title: "Trubble Buddy",
    subtitle: "Co-designed youth mental health tool",
    description:
      "A participatory design project: a wearable calming locket and personalizable app created with young people for discreet anxiety support.",
    link: "/projects/second",
    image: hero2,
    tags: ["Co-design", "Wearable", "Mental health"],
    color: "var(--p-purple)",
  },
  {
    id: "blossom",
    title: "Blossom Buddy",
    subtitle: "Tangible self-growth companion",
    description:
      "A hybrid system pairing a real plant with a digital twin. Completing daily self-care tasks grants plant resources and unlocks rewards.",
    link: "/projects/first",
    image: final,
    tags: ["Tangible UX", "Gamification", "Wellbeing"],
    color: "var(--p-orange)",
  },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Fades cards in once as they scroll into view */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll(".p-reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const ProjectCard = ({ project, index, featured = false }) => {
  const { title, subtitle, description, link, image, tags, color } = project;
  return (
    <li
      className={`p-reveal ${featured ? "p-span-full" : "p-span-4"}`}
      style={{ "--d": `${index * 60}ms` }}
    >
      <Link to={link} className={`p-card${featured ? " p-card--featured" : ""}`}>
        <div className="p-card__media">
          <img src={image} alt="" loading="lazy" decoding="async" />
        </div>

        <div className="p-card__body">
          <div className="p-card__meta">
            <span className="p-chip" style={{ background: color }} aria-hidden="true" />
            <span className="p-num">0{index + 1}</span>
            {featured && <span className="p-tag">Featured · Master's thesis</span>}
          </div>

          <h3 className="p-card__title">{title}</h3>
          <p className="p-card__subtitle">{subtitle}</p>
          <p className="p-card__text">{description}</p>

          <div className="p-card__foot">
            <ul className="p-chips" aria-label="Topics">
              {tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <span className="p-card__cta">
              Read case study <Arrow />
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

const Projects = () => {
  const ref = useReveal();

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title" ref={ref}>
      <style>{css}</style>

      <div className="projects__inner">
        <header className="projects__header p-reveal">
          <p className="p-badge">Case studies</p>
          <h2 id="projects-title" className="projects__title">
            Selected <span className="projects__mark">work</span>
          </h2>
          <p className="projects__intro">
            UX case studies focused on user research, interaction design and
            building clear, accessible experiences.
          </p>
        </header>

        <ul className="projects__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} featured={i === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

/* ───────────────────────────────────────────── */
/* Same tokens as Main.jsx */
const css = `
.projects {
  --p-primary: #0075de;
  --p-ink: #000000;
  --p-ink-2: #31302e;
  --p-muted: #615d59;
  --p-canvas: #ffffff;
  --p-paper: #f6f5f4;
  --p-line: #e6e6e6;
  --p-sky: #62aef0;
  --p-purple: #d6b6f6;
  --p-orange: #dd5b00;
  --p-green: #1aae39;
  --p-shadow:
    0 1px 1px rgba(0,0,0,0.03),
    0 2px 4px rgba(0,0,0,0.03),
    0 6px 12px rgba(0,0,0,0.035),
    0 16px 32px rgba(0,0,0,0.04);

  background: var(--p-paper);
  color: var(--p-ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.projects *, .projects *::before, .projects *::after { box-sizing: border-box; }

.projects__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 24px;
}

/* Header — same as the other sections */
.projects__header { margin-bottom: 40px; }
.p-badge {
  display: inline-flex;
  margin: 0 0 24px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--p-canvas);
  border: 1px solid var(--p-line);
  color: var(--p-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
}
.projects__title {
  margin: 0;
  font-size: clamp(32px, 4.4vw, 48px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.033em;
}
.projects__mark {
  background-image: linear-gradient(transparent 62%, rgba(98,174,240,0.35) 62%);
  padding: 0 2px;
}
.projects__intro {
  margin: 16px 0 0;
  max-width: 34rem;
  font-size: 18px;
  line-height: 1.6;
  color: var(--p-muted);
}

/* Grid */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.p-span-full { grid-column: 1 / -1; }
.p-span-4 { grid-column: span 4; }

/* Card — the whole card is one link */
.p-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: var(--p-canvas);
  border: 1px solid var(--p-line);
  color: inherit;
  text-decoration: none;
  transition: box-shadow .2s ease, transform .2s ease, border-color .2s ease;
}
.p-card:hover { box-shadow: var(--p-shadow); transform: translateY(-3px); border-color: #dcd8d3; }
.p-card:focus-visible { outline: 2px solid var(--p-primary); outline-offset: 3px; }

.p-card__media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--p-paper);
  border-bottom: 1px solid var(--p-line);
}
.p-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s cubic-bezier(.2,.7,.2,1);
}
.p-card:hover .p-card__media img { transform: scale(1.03); }

.p-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
}
.p-card__meta { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.p-chip { width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0; }
.p-num { font-size: 13px; font-weight: 600; color: var(--p-muted); }
.p-tag {
  margin-left: auto;
  padding: 3px 10px;
  border-radius: 9999px;
  background: rgba(0,117,222,0.08);
  color: var(--p-primary);
  font-size: 13px;
  font-weight: 500;
}

.p-card__title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.p-card__subtitle { margin: 4px 0 12px; font-size: 15px; color: var(--p-ink-2); }
.p-card__text { margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: var(--p-muted); }

.p-chips { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 24px; padding: 0; list-style: none; }
.p-chips li {
  padding: 3px 10px;
  border-radius: 8px;
  background: var(--p-paper);
  border: 1px solid var(--p-line);
  font-size: 13px;
  color: var(--p-ink-2);
}

.p-card__foot { margin-top: auto; }
.p-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--p-primary);
}
.p-card__cta svg { transition: transform .15s ease; }
.p-card:hover .p-card__cta svg { transform: translateX(3px); }

/* Featured — image left, text right (7 | 5) */
.p-card--featured {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
}
.p-card--featured .p-card__media {
  aspect-ratio: auto;
  min-height: 360px;
  border-bottom: 0;
  border-right: 1px solid var(--p-line);
}
.p-card--featured .p-card__body { padding: 32px; }
.p-card--featured .p-card__title { font-size: clamp(26px, 2.6vw, 32px); }
.p-card--featured .p-card__text { font-size: 16px; }

/* Motion */
.p-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--d, 0ms);
}
.p-reveal.is-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .p-reveal { opacity: 1; transform: none; transition: none; }
  .p-card, .p-card__media img, .p-card__cta svg { transition: none; }
  .p-card:hover, .p-card:hover .p-card__media img { transform: none; }
}

/* Tablet: featured stacks, others 2 per row */
@media (max-width: 1023px) {
  .p-span-4 { grid-column: span 6; }
  .p-card--featured { display: flex; }
  .p-card--featured .p-card__media {
    aspect-ratio: 16 / 9;
    min-height: 0;
    border-right: 0;
    border-bottom: 1px solid var(--p-line);
  }
  .p-card--featured .p-card__body { padding: 24px; }
}

/* Mobile */
@media (max-width: 767px) {
  .projects__inner { padding: 64px 16px; }
  .projects__header { margin-bottom: 32px; }
  .projects__intro { font-size: 16px; }
  .projects__grid { grid-template-columns: 1fr; }
  .p-span-4, .p-span-full { grid-column: 1 / -1; }
  .p-tag { margin-left: 0; }
  .p-card__meta { flex-wrap: wrap; }
}
`;