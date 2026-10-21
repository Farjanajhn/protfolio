// FirstProject.jsx — Blossom Buddy case study
// Same tokens and components as the homepage (Main/About/Skills/Projects/Contact)
// Layout: sticky section heading (4 cols) | content (8 cols). Stacks on mobile.
// All class names use the "cs-" prefix so they never clash with Tailwind/daisyUI.

import { useEffect, useState } from "react";

import ideation from "../assets/image/ideation.jpg";
import ideation2 from "../assets/image/ideation2.jpg";
import ideation3 from "../assets/image/ideation3.jpg";
import project1 from "../assets/image/project_1.jpg";
import happy from "../assets/image/UX1st/happy2.png";
import healthy from "../assets/image/UX1st/all.png";
import sad from "../assets/image/UX1st/sad.png";
import day from "../assets/image/UX1st/Day1.png";
import day2 from "../assets/image/UX1st/Day2.png";
import day3 from "../assets/image/UX1st/Day3.png";
import lofi2 from "../assets/image/UX1st/lofi2.jpeg";
import lofi3 from "../assets/image/UX1st/lofi3.jpeg";
import lofi4 from "../assets/image/UX1st/lofi4.jpeg";
import initial1 from "../assets/image/UX1st/initial1.png";
import initial2 from "../assets/image/UX1st/initial2.png";
import initial3 from "../assets/image/UX1st/initial3.png";
import initial4 from "../assets/image/UX1st/initial3.png"; // TODO: points to initial3 — replace with the 4th image
import final from "../assets/image/UX1st/final.png";
import project8 from "../assets/image/project6.jpg";

/* ─── Content ─── */
const TOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Process" },
  { id: "ideation", label: "Ideation" },
  { id: "lofi", label: "Lo-fi" },
  { id: "initial", label: "Initial" },
  { id: "hifi", label: "Hi-fi" },
  { id: "scenarios", label: "Scenarios" },
  { id: "testing", label: "Testing" },
  { id: "decisions", label: "Decisions" },
  { id: "future", label: "Future" },
  { id: "theory", label: "Theory" },
  { id: "refs", label: "References" },
];

const META = [
  { label: "Role", value: "UX Designer" },
  { label: "Duration", value: "8 weeks" },
  { label: "Tools", value: "Figma, paper, React" },
  { label: "Methods", value: "Experience prototyping, Wizard-of-Oz" },
];

const RESOURCES = [
  { label: "Sunlight", desc: "Earned by completing focus or mindfulness tasks", color: "#f6c443" },
  { label: "Water", desc: "Earned through movement or physical activity", color: "var(--cs-sky)" },
  { label: "Nutrients", desc: "Earned by journaling or reflective activities", color: "var(--cs-green)" },
];

const PROCESS = [
  { label: "Artifacts", value: "Sketches and flows" },
  { label: "Technique", value: "Experience prototyping" },
  { label: "Testing", value: "Wizard-of-Oz" },
  { label: "Output", value: "Hi-fi screens in Figma" },
];

const FINDINGS = [
  ["Controls", "Most users preferred touch-only, with no physical buttons."],
  ["Mental model", "Sun, water and nutrient bars felt meaningful and intuitive."],
  ["Rewards", "Users liked rewards; some preferred cosmetic customizations."],
  ["Feedback pace", "Participants wanted richer plant reactions and faster feedback."],
  ["Progress", "Participants asked for calendar history and streak tracking."],
  ["Form factor", "A gently tilted screen was preferred for comfortable viewing."],
];

const DECISIONS = [
  {
    title: "Interface",
    items: [
      "Primary interaction via touch; physical buttons removed",
      "More mood granularity for a clearer emotional state",
      "Progress calendar and streak cues added",
    ],
  },
  {
    title: "Motivation and rewards",
    items: ["Daily special reward plus periodic surprise rewards", "Personalizable reward set (cosmetics and themes)"],
  },
  {
    title: "Form and placement",
    items: ["Gently tilted display for a comfortable viewing angle", "Option for a toy-like embodiment for instant reactions"],
  },
  {
    title: "Accessibility",
    items: [
      "Large tap targets and short daily sessions",
      "Clear icon and text alternatives throughout",
      "Friendly microcopy to reduce pressure and guilt",
    ],
  },
];

const REFERENCES = [
  "Buchenau, M., & Suri, J. F. (2000). Experience prototyping. DIS 2000.",
  "Houde, S., & Hill, C. (1997). What do prototypes prototype? In Handbook of HCI.",
  "Blomkvist, J., & Holmlid, S. (2007). Prototyping practices and notations. NordDesign.",
  "Lee, G. (2018). Wizard-of-Oz prototyping for AI-powered applications.",
  "Koskinen, I. et al. (2011). Design Research through Practice. Morgan Kaufmann.",
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
const FirstProject = () => {
  const [active, setActive] = useState("overview");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "Blossom Buddy — Case study · Farjana Jahan Sathi";
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

      {/* ── Top bar: back link + section links + progress ── */}
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
            <span className="cs-pill">Tangible</span>
            <span className="cs-pill">Gamified</span>
            <span className="cs-pill">Self-care</span>
          </div>
          <h1 className="cs-hero__title">
            Blossom <span className="cs-mark">Buddy</span>
          </h1>
          <p className="cs-hero__sub">A tangible self-growth companion</p>
          <p className="cs-hero__lead">
            A hybrid interactive system pairing a <strong>real plant</strong> with a playful digital
            companion. Users complete daily self-improvement tasks, and the plant responds with
            visible state changes and tailored rewards to sustain motivation.
          </p>

          <dl className="cs-meta">
            {META.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <Figure src={final} alt="Blossom Buddy final interface with the digital plant and resource bars" size="hero" />
        </div>

        {/* ── Overview ── */}
        <Section id="overview" kicker="What is this" title="Project overview">
          <p className="cs-text">
            The concept blends nature and technology to make personal growth feel alive. Each day
            the user selects small self-development tasks. Completing a task grants the plant a
            resource. Finishing the full set unlocks a <strong>special reward</strong>, and every
            3–4 days a surprise reward appears to keep excitement high.
          </p>

          <div className="cs-grid cs-grid--3">
            {RESOURCES.map(({ label, desc, color }) => (
              <div key={label} className="cs-card cs-card--compact">
                <span className="cs-chip" style={{ background: color }} aria-hidden="true" />
                <h3 className="cs-card__title">{label}</h3>
                <p className="cs-small">{desc}</p>
              </div>
            ))}
          </div>

          <div className="cs-grid cs-grid--2">
            <Card title="Core idea">
              <List items={[
                "Real plant plus digital twin for emotional engagement",
                "Resources (sunlight, water, nutrients) represent habit completion",
                "Rewards: a daily special plus periodic surprises",
                "Sensors ground motivation in tangible care",
              ]} />
            </Card>
            <Card title="Outcome (prototype)">
              <List items={[
                "Hi-fi UI screens in Figma",
                "Experience prototyping and Wizard-of-Oz evaluation",
                "Improved motivation through visible feedback",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── Problem ── */}
        <Section id="problem" kicker="What we're solving" title="Problem and goals">
          <blockquote className="cs-quote">
            "It's difficult to stay motivated for everyday self-care. Most habit trackers feel
            mechanical and easy to abandon."
          </blockquote>
          <div className="cs-grid cs-grid--2">
            <Card title="Design goals">
              <List items={[
                "Nurture motivation through tangible, emotional feedback",
                "Make progress visible and genuinely rewarding",
                "Support daily reflection without it feeling like a chore",
              ]} />
            </Card>
            <Card title="Constraints">
              <List items={[
                "Interactions must be quick: daily, not demanding",
                "Designed for different ages and levels of tech familiarity",
                "Balance novelty with long-term engagement",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── Process ── */}
        <Section id="process" kicker="Iterative, user-centered" title="Design process">
          <p className="cs-text">
            We followed an <strong>experience prototyping</strong> approach supported by sketches,
            scenarios and Wizard-of-Oz (WoZ) testing.
          </p>
          <dl className="cs-grid cs-grid--4 cs-facts">
            {PROCESS.map(({ label, value }) => (
              <div key={label} className="cs-card cs-card--compact">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ── Ideation ── */}
        <Section id="ideation" kicker="Exploring concepts" title="Ideation">
          <p className="cs-text">
            We brainstormed many concepts and selected <strong>Blossom Buddy</strong> for its
            uniqueness and emotional resonance.
          </p>
          <div className="cs-grid cs-grid--3">
            <Figure src={ideation} alt="Ideation sketches, round 1" caption="Ideation 1" />
            <Figure src={ideation2} alt="Ideation sketches, round 2" caption="Ideation 2" />
            <Figure src={ideation3} alt="Ideation sketches, round 3" caption="Ideation 3" />
          </div>
        </Section>

        {/* ── Lo-fi ── */}
        <Section id="lofi" kicker="Structure before visuals" title="Low-fidelity prototypes">
          <p className="cs-text">
            Paper sketches helped validate interactions quickly before committing to visual design.
          </p>
          <div className="cs-grid cs-grid--2">
            <Figure src={lofi2} alt="Paper prototype 1" caption="Lo-fi 1" />
            <Figure src={project1} alt="Paper prototype 2" caption="Lo-fi 2" />
            <Figure src={lofi3} alt="Paper prototype 3" caption="Lo-fi 3" />
            <Figure src={lofi4} alt="Paper prototype 4" caption="Lo-fi 4" />
          </div>
        </Section>

        {/* ── Initial ── */}
        <Section id="initial" kicker="Early digital form" title="Initial prototype">
          <p className="cs-text">
            Early mockups explored emotional states, resource bars and reward reveals.
          </p>
          <div className="cs-grid cs-grid--2">
            <Figure src={initial1} alt="Initial prototype: home screen" caption="Home" />
            <Figure src={initial2} alt="Initial prototype: tasks screen" caption="Tasks" />
            <Figure src={initial3} alt="Initial prototype: reward screen" caption="Reward" />
            <Figure src={initial4} alt="Initial prototype: plant states" caption="States" />
          </div>
        </Section>

        {/* ── Hi-fi ── */}
        <Section id="hifi" kicker="Final screens" title="High-fidelity prototype">
          <p className="cs-text">
            Refined visuals and microcopy keep interactions lightweight yet rewarding. The digital
            twin reflects the plant's mood and needs.
          </p>
          <Figure
            src={final}
            alt="Final hi-fi interface with digital twin and resource system"
            caption="Final interface with the digital twin and resource system"
            size="lg"
          />
          <p className="cs-eyebrow cs-eyebrow--spaced">Plant emotional states</p>
          <div className="cs-grid cs-grid--3">
            <Figure src={happy} alt="Plant in a happy state" caption="Happy" size="sm" />
            <Figure src={healthy} alt="Plant in a healthy state" caption="Healthy" size="sm" />
            <Figure src={sad} alt="Plant in a sad state" caption="Sad" size="sm" />
          </div>
        </Section>

        {/* ── Scenarios ── */}
        <Section id="scenarios" kicker="Wizard-of-Oz evaluation" title="Experience scenarios">
          <p className="cs-text">
            Three scenarios tested different emotional arcs: success, anticipation and recovery.
          </p>
          <ol className="cs-scenarios">
            {[
              { title: "First day: productive", src: day, text: <>The user completes all tasks. Reporting each one grants a resource, and completing the set unlocks a <strong>special reward</strong>.</> },
              { title: "Second day: early unlock", src: day2, text: "The user reports the first task the next morning and a special reward is primed, testing anticipation and the pull of near-completion." },
              { title: "Sad scenario: recovery", src: day3, text: "The user completes nothing because of a hectic day. The plant appears sad, and the UI surfaces micro-tasks to help them recover." },
            ].map(({ title, src, text }, i) => (
              <li key={title} className="cs-card cs-scenario">
                <div className="cs-scenario__text">
                  <span className="cs-step">0{i + 1}</span>
                  <h3 className="cs-card__title">{title}</h3>
                  <p className="cs-small">{text}</p>
                </div>
                <Figure src={src} alt={`Scenario ${i + 1}: ${title}`} size="sm" />
              </li>
            ))}
          </ol>
        </Section>

        {/* ── Testing ── */}
        <Section id="testing" kicker="WoZ sessions and interviews" title="User testing and feedback">
          <div className="cs-grid cs-grid--2 cs-grid--start">
            <Card title="Key findings">
              <dl className="cs-findings">
                {FINDINGS.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Figure src={project8} alt="Wizard-of-Oz evaluation session with a participant" caption="WoZ evaluation session with a participant" size="lg" />
          </div>
        </Section>

        {/* ── Decisions ── */}
        <Section id="decisions" kicker="Informed by testing" title="Key design decisions">
          <div className="cs-grid cs-grid--2">
            {DECISIONS.map(({ title, items }) => (
              <Card key={title} title={title}><List items={items} /></Card>
            ))}
          </div>
        </Section>

        {/* ── Future ── */}
        <Section id="future" kicker="What comes next" title="Future development">
          <div className="cs-grid cs-grid--2">
            <Card title="Planned features">
              <List items={[
                "Companion mobile app for daily, weekly and monthly history",
                "Remote control of the display via the app",
                "Vacation mode to pause streak pressure",
                "Optional wearable for automatic habit capture",
              ]} />
            </Card>
            <Card title="Expected outcomes">
              <List items={[
                "Stronger emotional connection to personal progress",
                "Sustained habit building through tangible feedback loops",
                "A more playful, less clinical approach to self-care",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── Theory ── */}
        <Section id="theory" kicker="Academic foundation" title="Theoretical grounding">
          <p className="cs-text">
            The project draws on <strong>experience prototyping</strong> (Buchenau &amp; Suri, 2000)
            and <strong>Houde &amp; Hill's</strong> (1997) prototype dimensions: role, look and feel,
            and implementation. Wizard-of-Oz testing enabled realistic user evaluations before any
            technical build.
          </p>
        </Section>

        {/* ── References ── */}
        <Section id="refs" kicker="Academic sources" title="References">
          <ol className="cs-refs">
            {REFERENCES.map((r) => <li key={r}>{r}</li>)}
          </ol>
        </Section>

        {/* ── End of page ── */}
        <nav className="cs-end" aria-label="More case studies">
          <a href="/" className="cs-btn-secondary"><ArrowLeft /> Back to portfolio</a>
          <a href="/projects/second" className="cs-next">
            <span className="cs-eyebrow">Next case study</span>
            <span className="cs-next__title">Trubble Buddy <ArrowRight /></span>
          </a>
        </nav>
      </main>
    </div>
  );
};

export default FirstProject;

/* ───────────────────────────────────────────── */
/* Same tokens as the homepage. Accent = Blossom's orange from the Projects card. */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.cs {
  --cs-primary: #0075de;
  --cs-primary-active: #005bab;
  --cs-accent: #dd5b00;
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
  background: rgba(221,91,0,0.08);
  color: #a24300;
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
  background-image: linear-gradient(transparent 62%, rgba(221,91,0,0.22) 62%);
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