// SecondProject.jsx — Trubble Buddy case study
// Same tokens and components as the homepage and the Blossom Buddy case study
// Layout: sticky section heading (4 cols) | content (8 cols). Stacks on mobile.
// All class names use the "cs-" prefix so they never clash with Tailwind/daisyUI.

import { useEffect, useState } from "react";

import bby2 from "../assets/image/bby2.png";
import bby3 from "../assets/image/bby3.png";
import bby4 from "../assets/image/bby4.png";
import landing2 from "../assets/image/UX2nd/landing-2.png";
import mockup1 from "../assets/image/UX2nd/mockup1.png";
import lifi from "../assets/image/UX2nd/lifi.png";
import soundImg from "../assets/image/UX2nd/Sound.png";
import temperatureImg from "../assets/image/UX2nd/temparature.png";
import vibrationImg from "../assets/image/UX2nd/vibration.png";

/* ─── Content ─── */
const TOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "workshops", label: "Workshops" },
  { id: "lofi", label: "Lo-fi" },
  { id: "persona", label: "Persona" },
  { id: "hifi", label: "Hi-fi" },
  { id: "concept", label: "Design" },
  { id: "reflection", label: "Reflection" },
];

const META = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Duration", value: "6 weeks" },
  { label: "Tools", value: "Figma, paper" },
  { label: "Workshops", value: "5–6 students per session" },
];

const FEATURES = ["Sound", "Vibration", "Warmth", "Privacy", "Quick access"];

const PROBLEMS = [
  { title: "Stigma", desc: "Asking for help feels scary. Tools need to be invisible to others.", color: "var(--cs-accent)" },
  { title: "Wait times", desc: "Care services are overwhelmed. Young people can't wait weeks.", color: "var(--cs-sky)" },
  { title: "Generic apps", desc: "Most tools feel clinical, adult-facing, or need too many steps.", color: "#dd5b00" },
  { title: "Public use", desc: "Coping in school or public spaces needs discretion and speed.", color: "var(--cs-green)" },
];

const BODY_MAP = [
  ["Chest tightness", "Most commonly reported: a physical weight or pressure."],
  ["Stomach flutter", "Nausea or an unsettled feeling before social situations."],
  ["Throat pressure", "Difficulty speaking, or a feeling of being silenced."],
  ["Cold hands", "A physical chill, especially in high-stress moments."],
];

const HIFI = [
  { src: bby2, alt: "Hi-fi wearable: the calming locket", caption: "Wearable locket" },
  { src: mockup1, alt: "Hi-fi app screen: list of saved presets", caption: "Preset list" },
  { src: landing2, alt: "Hi-fi app screen: connecting to the locket", caption: "Connect and landing" },
];

const SENSES = [
  { title: "Sound", src: soundImg, desc: "Soft ambient sounds support paced breathing. Optionally connect Spotify for familiar comfort audio." },
  { title: "Vibration", src: vibrationImg, desc: "Even, low-frequency patterns that feel like a reassuring pulse, on the chest or in the hand." },
  { title: "Warmth", src: temperatureImg, desc: "Gentle, capped heat provides a cozy anchor, tuned for comfort and safety, never discomfort." },
];

/* ─── Small building blocks ─── */
const Figure = ({ src, alt, caption, size = "md" }) => (
  <figure className={`cs-fig cs-fig--${size}`}>
    <div className="cs-fig__frame">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

const List = ({ items }) => (
  <ul className="cs-list">
    {items.map((t) => <li key={t}>{t}</li>)}
  </ul>
);

const Card = ({ title, children }) => (
  <div className="cs-card">
    {title && <h3 className="cs-card__title">{title}</h3>}
    {children}
  </div>
);

const Section = ({ id, kicker, title, children }) => (
  <section id={id} className="cs-sec">
    <div className="cs-sec__head">
      <p className="cs-eyebrow">{kicker}</p>
      <h2 className="cs-sec__title">{title}</h2>
    </div>
    <div className="cs-sec__body">{children}</div>
  </section>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Page ─── */
const SecondProject = () => {
  const [active, setActive] = useState("overview");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "Trubble Buddy — Case study · Farjana Jahan Sathi";
    window.scrollTo(0, 0);

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll(".cs-sec[id]").forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // Keep the active TOC link in view on small screens
  useEffect(() => {
    document.querySelector(`.cs-toc a[href="#${active}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active]);

  return (
    <div className="cs">
      <style>{css}</style>

      {/* ── Top bar ── */}
      <header className="cs-bar">
        <div className="cs-bar__inner">
          <a href="/" className="cs-back"><ArrowLeft /> Portfolio</a>
          <nav className="cs-toc" aria-label="Case study sections">
            {TOC.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "is-active" : undefined}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="cs-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </header>

      <main className="cs-main">
        {/* ── Hero ── */}
        <div className="cs-hero">
          <div className="cs-hero__tags">
            <span className="cs-badge">Case study</span>
            <span className="cs-pill">Co-design</span>
            <span className="cs-pill">Youth mental health</span>
            <span className="cs-pill">Wearable + app</span>
          </div>
          <h1 className="cs-hero__title">
            Trubble <span className="cs-mark">Buddy</span>
          </h1>
          <p className="cs-hero__sub">A co-designed youth mental health tool</p>
          <p className="cs-hero__lead">
            A participatory design project for young people experiencing anxiety: a{" "}
            <strong>wearable calming locket</strong> paired with a{" "}
            <strong>personalizable mobile app</strong> for discreet, ethical and approachable support.
          </p>

          <dl className="cs-meta">
            {META.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <p className="cs-eyebrow">Key features</p>
          <ul className="cs-pill-row" aria-label="Key features">
            {FEATURES.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        {/* ── Overview ── */}
        <Section id="overview" kicker="What is this" title="Overview">
          <p className="cs-text">
            Trubble Buddy bridges the gap between overloaded care services and impersonal digital
            tools. The system combines a <strong>wearable locket</strong> delivering multisensory
            calm (sound, vibration, warmth) with a <strong>mobile app</strong> for personalization
            and discreet control.
          </p>
        </Section>

        {/* ── Problem ── */}
        <Section id="problem" kicker="What we're solving" title="The problem">
          <blockquote className="cs-quote">
            "How might we design a discreet, ethical and youth-centered tool to support anxiety in
            the moment?"
          </blockquote>
          <div className="cs-grid cs-grid--2">
            {PROBLEMS.map(({ title, desc, color }) => (
              <div key={title} className="cs-card cs-card--compact">
                <span className="cs-chip" style={{ background: color }} aria-hidden="true" />
                <h3 className="cs-card__title">{title}</h3>
                <p className="cs-small">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Workshops ── */}
        <Section id="workshops" kicker="What we learned from students" title="Co-design workshops">
          <p className="cs-text">
            We facilitated 60–90 minute participatory sessions to understand how anxiety shows up in
            the body and which strategies already help, including <strong>body mapping</strong>,
            object ideation and feedback rounds.
          </p>
          <div className="cs-split">
            <div className="cs-stack">
              <Card title="Where anxiety lives">
                <dl className="cs-findings">
                  {BODY_MAP.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
              <Card title="What already helps">
                <List items={[
                  "Steady breathing and paced rhythms",
                  "Rhythmic tapping and gentle haptics",
                  "Warmth and soft ambient sound",
                  "Discreet, classroom-safe activation",
                ]} />
              </Card>
            </div>
            <Figure
              src={bby4}
              alt="Body map from the workshop showing where participants feel anxiety"
              caption="Body mapping: where participants feel anxiety physically"
              size="lg"
            />
          </div>
        </Section>

        {/* ── Lo-fi ── */}
        <Section id="lofi" kicker="Structure before visuals" title="Lo-fi sketches">
          <p className="cs-text">
            Quick sketches tested how a calming wearable and companion app might look and feel
            before investing in detailed visuals.
          </p>
          <Figure src={lifi} alt="Early sketch of the locket paired with the app" caption="Early concept sketch: locket and app pairing" size="lg" />
          <div className="cs-grid cs-grid--2">
            <Card title="Purpose">
              <List items={["Visualize the interaction flow", "Test clarity of controls", "Check intuitiveness early"]} />
            </Card>
            <Card title="Learnings">
              <List items={["Sketches sparked feedback fast", "Discreet design mattered early", "Iterating early saved time"]} />
            </Card>
          </div>
          <blockquote className="cs-quote cs-quote--small">
            "Even rough sketches gave valuable input on how the product should feel in real use."
          </blockquote>
        </Section>

        {/* ── Persona ── */}
        <Section id="persona" kicker="Who we designed for" title="Persona">
          <div className="cs-card cs-persona">
            <Figure src={bby3} alt="Persona card for Agnes" size="lg" />
            <div>
              <p className="cs-eyebrow">Primary persona</p>
              <h3 className="cs-persona__name">Agnes</h3>
              <p className="cs-persona__meta">24 · Developer · Social anxiety</p>
              <p className="cs-small">
                Social anxiety spikes in new or crowded settings. She wants discreet, fast relief
                that fits everyday life without drawing attention.
              </p>
              <div className="cs-grid cs-grid--2" style={{ marginTop: 16 }}>
                <div className="cs-subcard">
                  <p className="cs-eyebrow">Goals</p>
                  <List items={["Manage stress at work and socially", "Try new things with confidence", "Stay connected with loved ones"]} />
                </div>
                <div className="cs-subcard">
                  <p className="cs-eyebrow">Needs</p>
                  <List items={["Quick-start calming (3 taps or fewer)", "Personalized sound, vibration and warmth", "A jewelry-like, wearable form"]} />
                </div>
              </div>
              <p className="cs-persona__quote">
                "I want to do more and meet new people, but I get nervous outside my comfort zone."
              </p>
            </div>
          </div>
        </Section>

        {/* ── Hi-fi ── */}
        <Section id="hifi" kicker="Final screens" title="Hi-fi wearable and UI">
          <p className="cs-text">
            The final design pairs a jewelry-like locket with a simple companion app for creating
            presets and switching modes quickly.
          </p>
          <div className="cs-grid cs-grid--3">
            {HIFI.map((f) => <Figure key={f.caption} {...f} />)}
          </div>
        </Section>

        {/* ── Design explanation ── */}
        <Section id="concept" kicker="How it works" title="Design explanation">
          <div className="cs-grid cs-grid--2">
            <Card title="Wearable locket">
              <p className="cs-eyebrow">Hardware</p>
              <p className="cs-small">
                A jewelry-like form with skin-friendly materials. Gentle warmth and micro-haptics
                are tuned to be soothing without being distracting.
              </p>
            </Card>
            <Card title="Mobile app">
              <p className="cs-eyebrow">Software</p>
              <p className="cs-small">
                A discreet companion interface to create presets and switch modes quickly,
                designed for clarity, privacy and speed.
              </p>
            </Card>
          </div>

          <p className="cs-eyebrow cs-eyebrow--spaced">Three calming senses</p>
          <div className="cs-grid cs-grid--3">
            {SENSES.map(({ title, src, desc }) => (
              <div key={title} className="cs-card cs-card--compact cs-sense">
                <h3 className="cs-card__title">{title}</h3>
                <Figure src={src} alt={`${title} controls in the app`} size="sm" />
                <p className="cs-small">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Reflection ── */}
        <Section id="reflection" kicker="Looking back and forward" title="Reflection and next steps">
          <div className="cs-grid cs-grid--2">
            <Card title="Process artifacts">
              <p className="cs-small">
                The co-design process produced a <strong>value network map</strong>, a{" "}
                <strong>stakeholder map</strong> and an <strong>ecology map</strong>, guiding
                decisions around tone, comfort and ethics throughout.
              </p>
              <p className="cs-small" style={{ marginTop: 10 }}>
                We prioritized gentle defaults, fast access and privacy controls at every decision
                point.
              </p>
            </Card>
            <Card title="What comes next">
              <List items={[
                "Longitudinal pilot with voluntary check-ins",
                "Refined warmth caps and haptic response curves",
                "Optional peer support links (opt-in, consent-based)",
                "Expanded accessibility testing with diverse youth groups",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── End of page ── */}
        <nav className="cs-end" aria-label="More case studies">
          <a href="/" className="cs-btn-secondary"><ArrowLeft /> Back to portfolio</a>
          <a href="/projects/Third" className="cs-next">
            <span className="cs-eyebrow">Next case study</span>
            <span className="cs-next__title">MyGov BD <ArrowRight /></span>
          </a>
        </nav>
      </main>
    </div>
  );
};

export default SecondProject;

/* ───────────────────────────────────────────── */
/* Same tokens as the homepage. Accent = Trubble Buddy's purple from the Projects card. */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.cs {
  --cs-primary: #0075de;
  --cs-primary-active: #005bab;
  --cs-accent: #8a4fd8;
  --cs-ink: #000000;
  --cs-ink-2: #31302e;
  --cs-muted: #615d59;
  --cs-faint: #a39e98;
  --cs-canvas: #ffffff;
  --cs-paper: #f6f5f4;
  --cs-line: #e6e6e6;
  --cs-sky: #62aef0;
  --cs-green: #1aae39;
  --cs-shadow:
    0 1px 1px rgba(0,0,0,0.03),
    0 2px 4px rgba(0,0,0,0.03),
    0 6px 12px rgba(0,0,0,0.035),
    0 16px 32px rgba(0,0,0,0.04);

  min-height: 100vh;
  background: var(--cs-paper);
  color: var(--cs-ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.cs *, .cs *::before, .cs *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
.cs-sec { scroll-margin-top: 80px; }
.cs strong { font-weight: 600; color: var(--cs-ink); }

/* ── Top bar ── */
.cs-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(246,245,244,0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--cs-line);
}
.cs-bar__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 24px;
}
.cs-back {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 9999px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  color: var(--cs-ink-2);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}
.cs-back:hover { border-color: var(--cs-faint); color: var(--cs-ink); }
.cs-toc {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;
  margin-left: auto;
}
.cs-toc::-webkit-scrollbar { display: none; }
.cs-toc a {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--cs-muted);
  text-decoration: none;
  white-space: nowrap;
}
.cs-toc a:hover { color: var(--cs-ink); background: var(--cs-canvas); }
.cs-toc a.is-active { color: var(--cs-primary); background: rgba(0,117,222,0.08); }
.cs-progress {
  height: 2px;
  background: var(--cs-accent);
  transform-origin: 0 50%;
}

/* ── Layout ── */
.cs-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 96px;
}

/* ── Hero ── */
.cs-hero { padding: 56px 0 24px; }
.cs-hero__tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.cs-badge {
  display: inline-flex;
  padding: 6px 14px;
  border-radius: 9999px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  color: var(--cs-primary);
  font-size: 14px;
  font-weight: 500;
}
.cs-pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 9999px;
  background: rgba(138,79,216,0.10);
  color: #6b2fbf;
  font-size: 14px;
  font-weight: 500;
}
.cs-hero__title {
  margin: 0;
  font-size: clamp(44px, 7vw, 80px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.035em;
}
.cs-mark {
  background-image: linear-gradient(transparent 62%, rgba(138,79,216,0.22) 62%);
  padding: 0 2px;
}
.cs-hero__sub {
  margin: 12px 0 0;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 500;
  color: var(--cs-muted);
}
.cs-hero__lead {
  margin: 20px 0 0;
  max-width: 40rem;
  font-size: 18px;
  line-height: 1.6;
  color: var(--cs-ink-2);
}

.cs-meta {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 40px 0 32px;
  padding: 20px 0;
  border-top: 1px solid var(--cs-line);
  border-bottom: 1px solid var(--cs-line);
}
.cs-meta dt, .cs-facts dt, .cs-eyebrow {
  margin: 0 0 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--cs-muted);
}
.cs-meta dd { margin: 0; font-size: 15px; line-height: 1.45; color: var(--cs-ink); }

/* ── Sections: sticky heading | content ── */
.cs-sec {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
  padding: 64px 0;
  border-top: 1px solid var(--cs-line);
}
.cs-sec__head {
  grid-column: span 4;
  align-self: start;
  position: sticky;
  top: 88px;
}
.cs-sec__title {
  margin: 0;
  font-size: clamp(26px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
}
.cs-sec__body {
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}
.cs-eyebrow { display: block; }
.cs-eyebrow--spaced { margin-top: 16px; margin-bottom: 0; }

/* Text */
.cs-text { margin: 0; font-size: 17px; line-height: 1.7; color: var(--cs-ink-2); max-width: 44rem; }
.cs-small { margin: 0; font-size: 15px; line-height: 1.6; color: var(--cs-muted); }

.cs-quote {
  margin: 0;
  padding: 4px 0 4px 20px;
  border-left: 3px solid var(--cs-accent);
  font-size: clamp(19px, 2vw, 23px);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--cs-ink);
}

/* Grids */
.cs-grid { display: grid; gap: 16px; margin: 0; }
.cs-grid--2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.cs-grid--3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.cs-grid--4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.cs-grid--start { align-items: start; }

/* Cards */
.cs-card {
  padding: 24px;
  border-radius: 12px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
}
.cs-card--compact { padding: 20px; }
.cs-card__title { margin: 0 0 10px; font-size: 17px; font-weight: 600; line-height: 1.4; letter-spacing: -0.01em; }
.cs-chip { display: block; width: 24px; height: 24px; border-radius: 7px; margin-bottom: 14px; }
.cs-facts { margin: 0; }
.cs-facts dd { margin: 0; font-size: 15px; font-weight: 500; line-height: 1.4; color: var(--cs-ink); }

.cs-list { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; list-style: none; }
.cs-list li {
  position: relative;
  padding-left: 16px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--cs-ink-2);
}
.cs-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background: var(--cs-accent);
}

/* Figures */
.cs-fig { margin: 0; }
.cs-fig__frame {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 12px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  overflow: hidden;
}
.cs-fig img { display: block; max-width: 100%; height: auto; object-fit: contain; border-radius: 6px; }
.cs-fig--sm img { max-height: 220px; }
.cs-fig--md img { max-height: 320px; }
.cs-fig--lg img { max-height: 520px; }
.cs-fig--hero .cs-fig__frame { padding: 24px; box-shadow: var(--cs-shadow); }
.cs-fig--hero img { max-height: 560px; }
.cs-fig figcaption { margin-top: 8px; font-size: 13px; color: var(--cs-muted); }

/* Images inside grids get the same 4:3 frame so rows line up */
.cs-grid .cs-fig__frame,
.cs-scenario .cs-fig__frame { aspect-ratio: 4 / 3; }
.cs-grid .cs-fig img,
.cs-scenario .cs-fig img { width: auto; height: auto; max-width: 100%; max-height: 100%; }

/* Scenarios */
.cs-scenarios { display: flex; flex-direction: column; gap: 16px; margin: 0; padding: 0; list-style: none; }
.cs-scenario {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 20px;
  align-items: center;
}
.cs-step {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  margin-bottom: 12px;
  border-radius: 50%;
  background: var(--cs-accent);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
}

/* Findings */
.cs-findings { margin: 0; }
.cs-findings > div { padding: 12px 0; border-top: 1px solid var(--cs-line); }
.cs-findings > div:first-child { border-top: 0; padding-top: 0; }
.cs-findings dt { font-size: 15px; font-weight: 600; color: var(--cs-ink); margin-bottom: 2px; }
.cs-findings dd { margin: 0; font-size: 15px; line-height: 1.55; color: var(--cs-muted); }

/* References */
.cs-refs {
  margin: 0;
  padding: 0 0 0 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--cs-ink-2);
}
.cs-refs li::marker { color: var(--cs-muted); font-weight: 600; }

/* End of page */
.cs-end {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 16px;
  padding-top: 48px;
  border-top: 1px solid var(--cs-line);
}
.cs-btn-secondary {
  align-self: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 9999px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  color: var(--cs-ink);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  box-shadow: var(--cs-shadow);
}
.cs-next {
  display: flex;
  flex-direction: column;
  min-width: 280px;
  padding: 20px 24px;
  border-radius: 12px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  text-decoration: none;
  color: inherit;
  transition: box-shadow .2s ease, transform .2s ease;
}
.cs-next:hover { box-shadow: var(--cs-shadow); transform: translateY(-2px); }
.cs-next__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--cs-primary);
}

/* Persona */
.cs-quote--small { font-size: 16px; font-style: italic; font-weight: 400; color: var(--cs-ink-2); }

.cs-persona {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 24px;
  align-items: center;
}
.cs-persona__name { margin: 4px 0 2px; font-size: 28px; font-weight: 700; letter-spacing: -0.02em; }
.cs-persona__meta { margin: 0 0 14px; font-size: 14px; color: var(--cs-muted); }
.cs-persona__quote {
  margin: 16px 0 0;
  padding-left: 14px;
  border-left: 2px solid var(--cs-accent);
  font-size: 15px;
  font-style: italic;
  line-height: 1.6;
  color: var(--cs-ink-2);
}
.cs-subcard {
  padding: 16px;
  border-radius: 10px;
  background: var(--cs-paper);
  border: 1px solid var(--cs-line);
}
.cs-pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 32px; padding: 0; list-style: none; }
.cs-pill-row li {
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--cs-canvas);
  border: 1px solid var(--cs-line);
  font-size: 14px;
  font-weight: 500;
  color: var(--cs-ink-2);
}
.cs-split {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 16px;
  align-items: start;
}
.cs-stack { display: flex; flex-direction: column; gap: 16px; }
.cs-sense .cs-fig { margin: 4px 0 14px; }
@media (max-width: 767px) {
  .cs-persona, .cs-split { grid-template-columns: 1fr; }
}

/* Focus */
.cs a:focus-visible { outline: 2px solid var(--cs-primary); outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .cs-next { transition: none; }
  .cs-next:hover { transform: none; }
}

/* ── Tablet ── */
@media (max-width: 1023px) {
  .cs-sec { padding: 48px 0; }
  .cs-sec__head { grid-column: 1 / -1; position: static; }
  .cs-sec__body { grid-column: 1 / -1; }
  .cs-meta { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .cs-grid--4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .cs-bar__inner { padding: 8px 16px; gap: 8px; }
  .cs-back { padding: 0 12px; }
  .cs-main { padding: 0 16px 64px; }
  .cs-hero { padding-top: 32px; }
  .cs-hero__lead { font-size: 16px; }
  .cs-meta { margin-top: 28px; }
  .cs-fig--hero .cs-fig__frame { padding: 12px; }
  .cs-sec { padding: 40px 0; }
  .cs-text { font-size: 16px; }
  .cs-grid--2, .cs-grid--3 { grid-template-columns: 1fr; }
  .cs-scenario { grid-template-columns: 1fr; }
  .cs-end { flex-direction: column-reverse; }
  .cs-next { min-width: 0; }
  .cs-btn-secondary { align-self: stretch; justify-content: center; }
}
`;