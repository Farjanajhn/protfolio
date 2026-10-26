// Main.jsx — Hero
// Style: warm minimalism (inspired by the "Notion" DESIGN.md in awesome-claude-design)
// - Warm paper canvas, near-black Inter type, one confident blue for actions
// - White cards with hairline borders, soft layered shadows, pill CTAs
// - Playful "sticker" accents carry personality while the layout stays quiet
// - Single <h1>, AA contrast, visible focus, reduced-motion support
// - Class names are prefixed (home-hero / hh-) so daisyUI's .hero/.btn/.badge can't override them

import main2 from "./../assets/image/final2image.png";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farjanajhn/" },
  { label: "GitHub", href: "https://github.com/Farjanajhn" },
  { label: "Dribbble", href: "https://dribbble.com/farjanajhn" },
];

const FOCUS = [
  { title: "User research", text: "Interviews, usability tests, synthesis", color: "var(--sky)" },
  { title: "Interaction design", text: "Flows, wireframes, information architecture", color: "var(--purple)" },
  { title: "Prototyping", text: "Figma prototypes you can click and test", color: "var(--orange)" },
  { title: "Accessibility", text: "Inclusive, WCAG-minded interfaces", color: "var(--green)" },
];

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l5-5M4 3.5h4.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Main = () => (
  <section id="main" className="home-hero" aria-labelledby="hero-title">
    <style>{css}</style>

    <div className="home-hero__inner">
      <div className="home-hero__grid">
        {/* ── Copy ── */}
        <div className="home-hero__copy">
          <p className="hh-badge reveal" style={{ "--d": "0ms" }}>
            <span className="hh-badge__dot" aria-hidden="true" />
            Open to UX/UI roles · Umeå, Sweden
          </p>

          <p className="eyebrow reveal" style={{ "--d": "60ms" }}>
            Farjana — UX/UI Designer
          </p>

          <h1 id="hero-title" className="home-hero__title reveal" style={{ "--d": "120ms" }}>
            I design products that feel{" "}
            <span className="home-hero__mark">obvious</span> to use.
          </h1>

          <p className="home-hero__lede reveal" style={{ "--d": "200ms" }}>
            From research and wireframes to polished, accessible interfaces. I turn
            messy problems into clear flows, then test them with real people.
          </p>

          <div className="home-hero__actions reveal" style={{ "--d": "280ms" }}>
            <a href="#projects" className="hh-btn hh-btn--primary">
              See selected work <Arrow />
            </a>
            <a href="#message" className="hh-btn hh-btn--secondary">
              Get in touch
            </a>
          </div>

          <nav className="home-hero__social reveal" style={{ "--d": "340ms" }} aria-label="Social profiles">
            {LINKS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="hh-utility">
                {label} <ArrowUpRight />
              </a>
            ))}
          </nav>
        </div>

        {/* ── Portrait card ── */}
        <div className="home-hero__visual reveal" style={{ "--d": "160ms" }}>
          <span className="sticker sticker--sky" aria-hidden="true" />
          <span className="sticker sticker--pink" aria-hidden="true" />
          <span className="sticker sticker--orange" aria-hidden="true" />

          <figure className="portrait">
            <img src={main2} alt="Portrait of Farjana" loading="eager" decoding="async" />
          </figure>

          <div className="now-card">
            <span className="eyebrow eyebrow--small">Currently</span>
            <p>UX/UI design intern at Intraction, redesigning their homepage</p>
          </div>
        </div>
      </div>

      {/* ── Focus cards ── */}
      <ul className="focus reveal" style={{ "--d": "420ms" }} aria-label="What I do">
        {FOCUS.map(({ title, text, color }) => (
          <li key={title} className="focus__card">
            <span className="focus__chip" style={{ background: color }} aria-hidden="true" />
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.home-hero {
  /* Color tokens */
  --primary: #0075de;
  --primary-active: #005bab;
  --ink: #000000;
  --ink-secondary: #31302e;
  --ink-muted: #615d59;
  --ink-faint: #a39e98;
  --canvas: #ffffff;
  --canvas-soft: #f6f5f4;
  --hairline: #e6e6e6;

  /* Sticker accents (decorative only) */
  --sky: #62aef0;
  --purple: #d6b6f6;
  --pink: #ff64c8;
  --orange: #dd5b00;
  --teal: #2a9d99;
  --green: #1aae39;

  /* Elevation: many near-transparent stops, never a hard shadow */
  --shadow-soft:
    0 1px 1px rgba(0,0,0,0.03),
    0 2px 4px rgba(0,0,0,0.03),
    0 6px 12px rgba(0,0,0,0.035),
    0 16px 32px rgba(0,0,0,0.04);

  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--canvas-soft);
  color: var(--ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}

.home-hero__inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px 56px;
}

.home-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 64px;
  align-items: center;
}

/* Badge pill */
.hh-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 24px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--canvas);
  border: 1px solid var(--hairline);
  color: var(--primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
}
.hh-badge__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  animation: hero-ping 2.4s ease-out infinite;
}

/* Eyebrow */
.eyebrow {
  display: block;
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--ink-muted);
}
.eyebrow--small { margin: 0 0 4px; }

/* Headline */
.home-hero__title {
  margin: 0;
  font-size: clamp(40px, 5.6vw, 64px);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.033em;
  color: var(--ink);
  text-wrap: balance;
}
.home-hero__mark {
  position: relative;
  white-space: nowrap;
  background-image: linear-gradient(transparent 62%, rgba(98, 174, 240, 0.35) 62%);
  padding: 0 2px;
}

.home-hero__lede {
  margin: 24px 0 0;
  max-width: 34rem;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--ink-muted);
  text-wrap: pretty;
}

/* Buttons */
.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}
.hh-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  font: 500 16px/1.5 'Inter', system-ui, sans-serif;
  text-decoration: none;
  transition: background-color .15s ease, box-shadow .15s ease, transform .15s ease;
}
.hh-btn--primary {
  background: var(--primary);
  color: #fff;
}
.hh-btn--primary svg { transition: transform .15s ease; }
.hh-btn--primary:hover svg { transform: translateX(3px); }
.hh-btn--primary:hover { background: var(--primary-active); color: #fff; }
.hh-btn--primary:active { background: var(--primary-active); color: #fff; }
.hh-btn--secondary {
  background: var(--canvas);
  color: var(--ink);
  box-shadow: var(--shadow-soft), 0 0 0 1px rgba(0,0,0,0.05);
}
.hh-btn--secondary:hover {
  background: var(--canvas);
  color: var(--ink);
  transform: translateY(-1px);
}
.hh-btn--secondary:active { background: var(--canvas-soft); color: var(--ink); }

/* Utility buttons (social) */
.home-hero__social {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}
.hh-utility {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  background: var(--canvas);
  border: 1px solid var(--hairline);
  color: var(--ink-secondary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color .15s ease, color .15s ease;
}
.hh-utility:hover {
  border-color: var(--ink-faint);
  color: var(--ink);
}

.hh-btn:focus-visible,
.hh-utility:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}

/* Portrait + stickers */
.home-hero__visual {
  position: relative;
  padding: 24px;
}
.portrait {
  position: relative;
  z-index: 1;
  margin: 0;
  aspect-ratio: 4 / 5;
  border-radius: 16px;
  overflow: hidden;
  background: var(--canvas);
  border: 1px solid var(--hairline);
  box-shadow: var(--shadow-soft);
}
.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.sticker {
  position: absolute;
  z-index: 0;
  display: block;
}
.sticker--sky {
  top: 0;
  right: 0;
  width: 96px;
  height: 96px;
  border-radius: 24px;
  background: var(--sky);
  transform: rotate(12deg);
}
.sticker--pink {
  bottom: 72px;
  left: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--pink);
}
.sticker--orange {
  top: 38%;
  right: -4px;
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--orange);
  transform: rotate(-14deg);
  box-shadow: var(--shadow-soft);
}

.now-card {
  position: absolute;
  z-index: 3;
  left: 0;
  bottom: 0;
  max-width: 280px;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--canvas);
  border: 1px solid var(--hairline);
  box-shadow: var(--shadow-soft);
}
.now-card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.4;
  color: var(--ink-secondary);
}

/* Focus cards */
.focus {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 64px 0 0;
  padding: 0;
  list-style: none;
}
.focus__card {
  padding: 24px;
  border-radius: 12px;
  background: var(--canvas);
  border: 1px solid var(--hairline);
}
.focus__chip {
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.focus__title {
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.focus__text {
  margin: 0;
  font-size: 14px;
  line-height: 1.43;
  color: var(--ink-muted);
}

/* Entrance + motion */
.reveal {
  opacity: 0;
  transform: translateY(12px);
  animation: hero-in .7s cubic-bezier(.2, .7, .2, 1) forwards;
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
  .hh-badge__dot { animation: none; }
  .hh-btn, .hh-btn svg, .hh-utility { transition: none; }
}

/* Tablet */
@media (max-width: 1023px) {
  .home-hero__grid { grid-template-columns: 1fr; gap: 48px; }
  .home-hero__visual { max-width: 440px; }
  .focus { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* Mobile */
@media (max-width: 767px) {
  .home-hero__inner { padding: 40px 16px 40px; }
  .home-hero__actions .hh-btn { flex: 1 1 100%; }
  .home-hero__visual { padding: 16px; }
  .sticker--sky { width: 64px; height: 64px; border-radius: 16px; }
  .now-card { position: relative; margin-top: -40px; margin-left: 8px; max-width: none; }
  .focus { grid-template-columns: 1fr; margin-top: 48px; }
}
`;