// Main.jsx — Hero
// Style: quiet, warm minimalism built around the portrait.
// - Warm paper canvas and near-black ink around the photo; the site's blue stays the one accent
// - Two typefaces with clear jobs: Inter for everything, Instrument Serif italic for one accent word
// - Text column and portrait share one top and bottom line on desktop
// - Single <h1>, AA contrast, visible focus, reduced-motion support
// - Class names are prefixed (home-hero / hh-) so daisyUI's .hero/.btn/.badge can't override them

import main2 from "./../assets/image/farjana-portrait.jpg";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farjanajhn/" },
  { label: "GitHub", href: "https://github.com/Farjanajhn" },
  { label: "Dribbble", href: "https://dribbble.com/farjanajhn" },
];

const FOCUS = [
  { title: "User research", text: "Interviews, usability tests, synthesis" },
  { title: "Interaction design", text: "Flows, wireframes, information architecture" },
  { title: "Prototyping", text: "Figma prototypes you can click and test" },
  { title: "Accessibility", text: "Inclusive, WCAG-minded interfaces" },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l5-5M4 3.5h4.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Main = () => (
  <section id="main" className="home-hero" aria-labelledby="hero-title">
    <style>{css}</style>

    <div className="home-hero__inner">
      <div className="home-hero__grid">
        {/* ── Copy ── */}
        <div className="home-hero__copy">
          <p className="hh-status reveal" style={{ "--d": "0ms" }}>
            <span className="hh-status__dot" aria-hidden="true" />
            Open to UX/UI roles · Umeå, Sweden
          </p>

          <h1 id="hero-title" className="home-hero__title reveal" style={{ "--d": "80ms" }}>
            I design products that feel <em className="home-hero__accent">obvious</em> to use.
          </h1>

          <p className="home-hero__lede reveal" style={{ "--d": "160ms" }}>
            I'm Farjana, a UX/UI designer with a master's in HCI. From research and
            wireframes to polished, accessible interfaces, I turn messy problems into
            clear flows, then test them with real people.
          </p>

          <div className="home-hero__actions reveal" style={{ "--d": "240ms" }}>
            <a href="#projects" className="hh-btn hh-btn--primary">
              See selected work <Arrow />
            </a>
            <a href="#message" className="hh-btn hh-btn--ghost">
              Get in touch
            </a>
          </div>

          <nav className="home-hero__social reveal" style={{ "--d": "300ms" }} aria-label="Social profiles">
            {LINKS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="hh-link">
                {label} <ArrowUpRight />
              </a>
            ))}
          </nav>
        </div>

        {/* ── Portrait ── */}
        <figure className="home-hero__visual reveal" style={{ "--d": "120ms" }}>
          <div className="portrait">
            <img src={main2} alt="Portrait of Farjana" loading="eager" decoding="async" fetchpriority="high" />
          </div>
          <figcaption className="portrait__caption">
            <span>Farjana Jahan Sathi</span>
            <span className="portrait__now">Currently · UX/UI intern at Intraction</span>
          </figcaption>
        </figure>
      </div>

      {/* ── What I do ── */}
      <ul className="focus reveal" style={{ "--d": "380ms" }} aria-label="What I do">
        {FOCUS.map(({ title, text }, i) => (
          <li key={title} className="focus__item">
            <span className="focus__num" aria-hidden="true">0{i + 1}</span>
            <h2 className="focus__title">{title}</h2>
            <p className="focus__text">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Main;

/* ───────────────────────────────────────────── */
/* Styles — for faster loading, move the @import into index.html <head> */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@1&display=swap');

.home-hero {
  /* Tokens — the site's blue accent, warm neutrals around the portrait */
  --ink: #1c1b19;
  --ink-secondary: #3b3935;
  --ink-muted: #6b675f;
  --canvas: #ffffff;
  --paper: #f6f5f4;
  --hairline: #e4e0d8;
  --primary: #0075de;
  --primary-active: #005bab;
  --live: #1aae39;

  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.home-hero__inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 72px;
}

/* Text and portrait share the same top and bottom line */
.home-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 80px;
  align-items: stretch;
}
.home-hero__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Availability */
.hh-status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-secondary);
}
.hh-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--live);
  animation: hero-ping 2.4s ease-out infinite;
}

/* Headline */
.home-hero__title {
  margin: 0;
  max-width: 13ch;
  font-size: clamp(44px, 6.4vw, 84px);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: var(--ink);
  text-wrap: balance;
}
.home-hero__accent {
  font-family: 'Instrument Serif', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.1em;
  letter-spacing: -0.01em;
  color: var(--primary);
}

.home-hero__lede {
  margin: 28px 0 0;
  max-width: 32rem;
  font-size: 18px;
  line-height: 1.65;
  color: var(--ink-muted);
  text-wrap: pretty;
}

/* Buttons */
.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
}
.hh-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  font: 500 15px/1.5 'Inter', system-ui, sans-serif;
  text-decoration: none;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease;
}
.hh-btn--primary { background: var(--primary); color: #fff; }
.hh-btn--primary svg { transition: transform .2s ease; }
.hh-btn--primary:hover { background: var(--primary-active); color: #fff; }
.hh-btn--primary:hover svg { transform: translateX(3px); }
.hh-btn--ghost { color: var(--ink); border: 1px solid var(--hairline); background: transparent; }
.hh-btn--ghost:hover { border-color: var(--ink); color: var(--ink); background: transparent; }

/* Social — quiet text links */
.home-hero__social {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 36px;
}
.hh-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-muted);
  text-decoration: none;
  transition: color .2s ease;
}
.hh-link:hover { color: var(--ink); }

.hh-btn:focus-visible,
.hh-link:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

/* Portrait */
.home-hero__visual {
  margin: 0;
  display: flex;
  flex-direction: column;
}
.portrait {
  flex: 1;
  min-height: 0;
  aspect-ratio: 4 / 5;
  border-radius: 20px;
  overflow: hidden;
  background: #ebe6de;
}
.portrait img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  transition: transform 1.2s cubic-bezier(.2,.7,.2,1);
}
.home-hero__visual:hover .portrait img { transform: scale(1.02); }
.portrait__caption {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 14px;
  font-size: 13px;
  color: var(--ink-muted);
}
.portrait__caption span:first-child { color: var(--ink); font-weight: 500; }

/* What I do — one quiet row, hairlines instead of boxes */
.focus {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 96px 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--hairline);
}
.focus__item { padding: 24px 24px 0 0; }
.focus__item + .focus__item { padding-left: 24px; border-left: 1px solid var(--hairline); }
.focus__num {
  display: block;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--primary);
}
.focus__title {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.focus__text {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-muted);
}

/* Entrance + motion */
.reveal {
  opacity: 0;
  transform: translateY(14px);
  animation: hero-in .9s cubic-bezier(.2, .7, .2, 1) forwards;
  animation-delay: var(--d, 0ms);
}
@keyframes hero-in { to { opacity: 1; transform: none; } }
@keyframes hero-ping {
  0%   { box-shadow: 0 0 0 0 rgba(26, 174, 57, 0.35); }
  70%  { box-shadow: 0 0 0 7px rgba(26, 174, 57, 0); }
  100% { box-shadow: 0 0 0 0 rgba(26, 174, 57, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .reveal { animation: none; opacity: 1; transform: none; }
  .hh-status__dot { animation: none; }
  .hh-btn, .hh-btn svg, .hh-link, .portrait img { transition: none; }
}

/* Tablet */
@media (max-width: 1023px) {
  .home-hero__grid { grid-template-columns: 1fr; gap: 56px; }
  .home-hero__visual { max-width: 460px; }
  .focus { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 24px; }
  .focus__item:nth-child(3) { padding-left: 0; border-left: 0; }
}

/* Mobile */
@media (max-width: 767px) {
  .home-hero__inner { padding: 88px 16px 48px; }
  .home-hero__actions .hh-btn { flex: 1 1 100%; }
  .home-hero__visual { max-width: none; }
  .portrait__caption { flex-direction: column; gap: 2px; }
  .focus { grid-template-columns: 1fr; margin-top: 64px; }
  .focus__item, .focus__item + .focus__item { padding: 20px 0; border-left: 0; border-bottom: 1px solid var(--hairline); }
}
`;
