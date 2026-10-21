// ThirdProject.jsx — MyGov BD case study
// Same tokens and components as the homepage and the other case studies
// Layout: sticky section heading (4 cols) | content (8 cols). Stacks on mobile.
// All class names use the "cs-" prefix so they never clash with Tailwind/daisyUI.

import { useEffect, useState } from "react";

import Design_Process from "../assets/image/UX3RD/Design_process.png";
import UP1 from "../assets/image/UX3RD/UP_1.png";
import UP2 from "../assets/image/UX3RD/UP_2.png";
import MC from "../assets/image/UX3RD/MC.png";
import CP from "../assets/image/UX3RD/ca.png";
import EP from "../assets/image/UX3RD/EP.png";
import IA from "../assets/image/UX3RD/IA.png";
import UF from "../assets/image/UX3RD/UF.png";
import TYPOGRAPHY from "../assets/image/UX3RD/TYPOGRAPHY.png";
import ICONOGRAPHY from "../assets/image/UX3RD/Iconography 2.png";
import COMPONENT from "../assets/image/UX3RD/Component.png";
import G from "../assets/image/UX3RD/G.png";
import MIFI from "../assets/image/UX3RD/MIFI-2.png";
import LD from "../assets/image/UX3RD/LD.png";
import LC from "../assets/image/UX3RD/LC.png";
import APPLY from "../assets/image/UX3RD/Apply.png";
import TRACK from "../assets/image/UX3RD/Track.png";
import UI_C from "../assets/image/UX3RD/UI_C.png";
import UT from "../assets/image/UX3RD/UT.png";
import Qf from "../assets/image/UX3RD/Qf.png";

/* ─── Content ─── */
const TOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "audience", label: "Users" },
  { id: "approach", label: "Approach" },
  { id: "design-thinking", label: "Process" },
  { id: "personas", label: "Personas" },
  { id: "moscow", label: "MoSCoW" },
  { id: "competitive", label: "Competitive" },
  { id: "userflow", label: "User flow" },
  { id: "ia", label: "IA" },
  { id: "design-system", label: "Style" },
  { id: "midfi", label: "Mid-fi" },
  { id: "hifi", label: "Hi-fi" },
  { id: "usability", label: "Usability" },
  { id: "learning-feedback", label: "Learnings" },
];

const META = [
  { label: "My role", value: "UX/UI Designer" },
  { label: "Team", value: "6 members" },
  { label: "Platform", value: "Mobile app" },
  { label: "Tool", value: "Figma" },
];

const FRICTIONS = [
  { title: "Navigation", desc: "Confusing categories make it hard to find the right task.", color: "var(--cs-sky)" },
  { title: "Language", desc: "Switching between Bangla and English breaks mid-flow.", color: "#d6b6f6" },
  { title: "Search", desc: "Poor relevance and no suggestions frustrate users.", color: "#dd5b00" },
  { title: "Feedback", desc: "No status updates, so users don't know if their task worked.", color: "var(--cs-green)" },
];

const AUDIENCES = [
  ["Students", "Certificates, registrations and education services"],
  ["Everyday citizens", "Documents, permits and public information"],
  ["Working professionals", "Fast, time-sensitive task completion"],
  ["Elderly users", "Clarity, larger touch targets and readable text"],
];

const PRINCIPLES = [
  ["Task-first", "Help users complete services fast."],
  ["Consistency", "Labels, language switching and patterns."],
  ["Visibility of status", "Feedback and progress timelines."],
  ["Accessibility by default", "Contrast, touch targets and language."],
];

const PERSONAS = [
  { src: UP1, label: "Primary persona", name: "Everyday citizen", desc: "Represents everyday citizens using MyGov BD to complete essential government services efficiently and with confidence." },
  { src: UP2, label: "Secondary persona", name: "Task-driven user", desc: "Represents users who need well-structured information, clear requirements and accessible design to confidently complete important tasks." },
];

const SWATCHES = [
  { name: "Primary", hex: "#004B37" },
  { name: "Text", hex: "#262626" },
  { name: "Tertiary", hex: "#E3EAEA" }, // was "#ЕЗЕАЕА" (Cyrillic letters) — confirm the real value
  { name: "Background", hex: "#FFFFEF" },
];

const STYLE_GUIDE = [
  { title: "Typography and color", src: TYPOGRAPHY },
  { title: "Iconography", src: ICONOGRAPHY },
  { title: "Components", src: COMPONENT },
  { title: "Grid system", src: G },
];

const HIFI = [
  { title: "Landing and home screen", src: LD, desc: "The most-used services surface directly, with clear category labels and a persistent search bar." },
  { title: "Language switch: Bangla ↔ English", src: LC, desc: "A single system-wide language control. Every screen updates when switched, with no partial translations." },
  { title: "Apply for a birth certificate", src: APPLY, desc: "A guided step-by-step form with inline validation, progress indicators and plain-language field labels." },
  { title: "Track your application", src: TRACK, desc: "A status timeline showing exactly where an application is, with timestamps and the next expected step." },
  { title: "Old vs new UI", src: UI_C, desc: "A side-by-side comparison of navigation clarity, label consistency and visual hierarchy." },
];

const USABILITY = [
  { title: "Usability testing summary", src: UT, caption: "Task completion rates and SUS scores across 5 participants" },
  { title: "Qualitative findings", src: Qf, caption: "Thematic analysis of post-task interviews" },
];

/* ─── Small building blocks ─── */
// Large figures open the full-size image in a new tab (diagrams have small text)
const Figure = ({ src, alt, caption, size = "md" }) => {
  const img = <img src={src} alt={alt} loading="lazy" decoding="async" />;
  return (
    <figure className={`cs-fig cs-fig--${size}`}>
      {size === "lg" ? (
        <a className="cs-fig__frame cs-fig__zoom" href={src} target="_blank" rel="noreferrer" aria-label={`${alt} (open full size)`}>
          {img}
          <span className="cs-zoom-hint" aria-hidden="true">Open full size ↗</span>
        </a>
      ) : (
        <div className="cs-fig__frame">{img}</div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

const List = ({ items }) => (
  <ul className="cs-list">
    {items.map((t) => <li key={t}>{t}</li>)}
  </ul>
);

const Numbered = ({ items }) => (
  <ol className="cs-numbered">
    {items.map((t) => <li key={t}>{t}</li>)}
  </ol>
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
const ThirdProject = () => {
  const [active, setActive] = useState("overview");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = "MyGov BD — Case study · Farjana Jahan Sathi";
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
            <span className="cs-pill">Government services</span>
            <span className="cs-pill">Mobile app</span>
            <span className="cs-pill">Team of 6</span>
          </div>
          <h1 className="cs-hero__title">
            MyGov <span className="cs-mark">BD</span>
          </h1>
          <p className="cs-hero__sub">Government services UX redesign</p>
          <p className="cs-hero__lead">
            A citizen-centered redesign making essential government services accessible through{" "}
            <strong>simplified navigation</strong>, <strong>consistent language switching</strong>{" "}
            and <strong>clear task feedback</strong>.
          </p>

          <dl className="cs-meta">
            {META.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Overview ── */}
        <Section id="overview" kicker="About the project" title="Project overview">
          <div className="cs-grid cs-grid--2">
            <Card title="Context">
              <p className="cs-small">
                MyGov BD helps citizens access government services digitally: certificates,
                permits, documents and status tracking. This case study focuses on reducing
                confusion and abandonment by improving navigation, language consistency, search
                and task feedback.
              </p>
            </Card>
            <Card title="Project focus">
              <List items={[
                "Find services faster with smarter navigation and search",
                "Support bilingual use with consistent language switching",
                "Build confidence with status updates and feedback",
                "Improve accessibility for diverse user groups",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── Problem ── */}
        <Section id="problem" kicker="What is broken today" title="The problem">
          <blockquote className="cs-quote">
            "Citizens struggle to complete essential tasks: confusing navigation, inconsistent
            language, poor search and no feedback."
          </blockquote>
          <div className="cs-grid cs-grid--2">
            {FRICTIONS.map(({ title, desc, color }) => (
              <div key={title} className="cs-card cs-card--compact">
                <span className="cs-chip" style={{ background: color }} aria-hidden="true" />
                <h3 className="cs-card__title">{title}</h3>
                <p className="cs-small">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Solution ── */}
        <Section id="solution" kicker="What we propose" title="Proposed solution">
          <div className="cs-grid cs-grid--2">
            <Card title="Redesign direction">
              <p className="cs-small">
                Simplified navigation, consistent language switching, more accurate search and
                clear application status feedback, so citizens can complete government services
                quickly and confidently.
              </p>
            </Card>
            <Card title="Success metrics">
              <Numbered items={[
                "Less time to find a service",
                "Higher task completion rate",
                "Fewer errors during application steps",
                "Higher user satisfaction and trust",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── Audience ── */}
        <Section id="audience" kicker="Who we designed for" title="Target users">
          <div className="cs-grid cs-grid--2">
            <Card title="Primary audiences">
              <dl className="cs-findings">
                {AUDIENCES.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card title="Accessibility considerations">
              <List items={[
                "Readable typography and high contrast",
                "Clear error prevention and recovery guidance",
                "Simple language and consistent wording",
                "Lower cognitive load through progressive disclosure",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── Approach ── */}
        <Section id="approach" kicker="How decisions were made" title="Design approach">
          <div className="cs-grid cs-grid--2">
            <Card title="Guiding principles">
              <dl className="cs-findings">
                {PRINCIPLES.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card title="Key UX improvements">
              <List items={[
                "Guided step-by-step service application flows",
                "Smart search with suggestions and filters",
                "Clear confirmation screens (reference ID and receipt)",
                "Better error messages and recovery paths",
              ]} />
            </Card>
          </div>
        </Section>

        {/* ── Design thinking ── */}
        <Section id="design-thinking" kicker="Process overview" title="Design thinking process">
          <Figure
            src={Design_Process}
            alt="Design thinking process diagram"
            caption="Empathize → Define → Ideate → Prototype → Test"
            size="lg"
          />
        </Section>

        {/* ── Personas ── */}
        <Section id="personas" kicker="User perspective" title="Personas">
          {PERSONAS.map(({ src, label, name, desc }) => (
            <div key={name} className="cs-card cs-persona">
              <div>
                <p className="cs-eyebrow">{label}</p>
                <h3 className="cs-persona__name">{name}</h3>
                <p className="cs-small">{desc}</p>
              </div>
              <Figure src={src} alt={`${label}: ${name}`} size="md" />
            </div>
          ))}
          <Card title="Empathy map">
            <Figure src={EP} alt="Composite empathy map of needs, pain points and goals" caption="Composite empathy map: needs, pain points and goals" size="lg" />
          </Card>
        </Section>

        {/* ── MoSCoW ── */}
        <Section id="moscow" kicker="Feature prioritization" title="MoSCoW analysis">
          <p className="cs-text">
            Must-have changes target confusion and task failure. Should-have improvements add
            efficiency and polish.
          </p>
          <Figure src={MC} alt="MoSCoW prioritization of features" size="lg" />
        </Section>

        {/* ── Competitive ── */}
        <Section id="competitive" kicker="Learning from similar apps" title="Competitive analysis">
          <p className="cs-text">
            We compared MyGov BD with UMANG (India), Service NSW and Malaysia MyGov. MyGov BD shows
            stronger potential through life-event-based navigation, smart search, multi-language
            support and accessibility.
          </p>
          <Figure src={CP} alt="Competitive analysis table" size="lg" />
        </Section>

        {/* ── User flow ── */}
        <Section id="userflow" kicker="App user flow" title="User flow">
          <Figure
            src={UF}
            alt="User flow diagram"
            caption="Primary flow: Home → Search → Select service → Apply → Track status"
            size="lg"
          />
        </Section>

        {/* ── IA ── */}
        <Section id="ia" kicker="App information architecture" title="Information architecture">
          <Figure
            src={IA}
            alt="Information architecture diagram"
            caption="Service hierarchy and navigation structure"
            size="lg"
          />
        </Section>

        {/* ── Style guide ── */}
        <Section id="design-system" kicker="Typography, components, grid" title="Style guide">
          <ul className="cs-swatches" aria-label="Color palette">
            {SWATCHES.map(({ name, hex }) => (
              <li key={name} className="cs-swatch">
                <span className="cs-swatch__color" style={{ background: hex }} aria-hidden="true" />
                <div>
                  <p className="cs-swatch__name">{name}</p>
                  <p className="cs-swatch__hex">{hex}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cs-grid cs-grid--2">
            {STYLE_GUIDE.map(({ title, src }) => (
              <Figure key={title} src={src} alt={`Style guide: ${title}`} caption={title} />
            ))}
          </div>
        </Section>

        {/* ── Mid-fi ── */}
        <Section id="midfi" kicker="Structure before visuals" title="Mid-fidelity wireframes">
          <p className="cs-text">
            Mid-fi wireframes validated the service hierarchy, navigation patterns and form flows
            before any visual polish was applied.
          </p>
          <Figure
            src={MIFI}
            alt="Annotated mid-fidelity wireframes"
            caption="Annotated wireframes for core service screens"
            size="lg"
          />
        </Section>

        {/* ── Hi-fi ── */}
        <Section id="hifi" kicker="Final screens" title="High-fidelity design">
          {HIFI.map(({ title, src, desc }) => (
            <div key={title} className="cs-card">
              <h3 className="cs-card__title">{title}</h3>
              <p className="cs-small" style={{ marginBottom: 16 }}>{desc}</p>
              <Figure src={src} alt={`Hi-fi: ${title}`} size="lg" />
            </div>
          ))}
        </Section>

        {/* ── Usability ── */}
        <Section id="usability" kicker="Evidence-based iteration" title="Usability testing">
          {USABILITY.map(({ title, src, caption }) => (
            <div key={title} className="cs-card">
              <h3 className="cs-card__title">{title}</h3>
              <Figure src={src} alt={title} caption={caption} size="lg" />
            </div>
          ))}
        </Section>

        {/* ── Learnings ── */}
        <Section id="learning-feedback" kicker="What I took away" title="Learning and reflection">
          <div className="cs-grid cs-grid--2">
            <Card title="Key learnings">
              <Numbered items={[
                "Clear navigation and hierarchy are critical for government apps.",
                "Consistent language (Bangla and English) builds trust and reduces errors.",
                "Progress indicators reduce form abandonment.",
                "Quick access to frequent services improves daily efficiency.",
              ]} />
            </Card>
            <Card title="User and team feedback">
              <List items={[
                "Users appreciated the simplified Apply and Track flows.",
                "Positive response to the Quick Search and Notification features.",
              ]} />
            </Card>
            <Card title="What I'd improve next">
              <List items={[
                "Clearer error prevention and inline form validation",
                "Service bookmarks and recent activity shortcuts",
                "Expanded accessibility: text size, voice guidance, contrast toggle",
                "Moderated testing with elderly and low-literacy users",
              ]} />
            </Card>
            <Card title="Impact">
              <p className="cs-small">
                This case study strengthened my ability to connect{" "}
                <strong>research-driven insights</strong> with practical UI decisions, focusing on
                clarity, trust and task completion in digital government services.
              </p>
            </Card>
          </div>
        </Section>

        {/* ── End of page ── */}
        <nav className="cs-end" aria-label="More case studies">
          <a href="/" className="cs-btn-secondary"><ArrowLeft /> Back to portfolio</a>
          <a href="/projects/four" className="cs-next">
            <span className="cs-eyebrow">Next case study</span>
            <span className="cs-next__title">Ultra <ArrowRight /></span>
          </a>
        </nav>
      </main>
    </div>
  );
};

export default ThirdProject;

/* ───────────────────────────────────────────── */
/* Same tokens as the homepage. Accent = MyGov BD's green from the Projects card. */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.cs {
  --cs-primary: #0075de;
  --cs-primary-active: #005bab;
  --cs-accent: #138a32;
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
  background: rgba(26,174,57,0.10);
  color: #137a2a;
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
  background-image: linear-gradient(transparent 62%, rgba(26,174,57,0.22) 62%);
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
.cs-meta dt, .cs-eyebrow {
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

.cs-numbered { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; list-style: none; counter-reset: cs-n; }
.cs-numbered li { position: relative; padding-left: 28px; font-size: 15px; line-height: 1.6; color: var(--cs-ink-2); counter-increment: cs-n; }
.cs-numbered li::before { content: counter(cs-n, decimal-leading-zero); position: absolute; left: 0; top: 1px; font-size: 13px; font-weight: 600; color: var(--cs-accent); }

/* Findings */
.cs-findings { margin: 0; }
.cs-findings > div { padding: 12px 0; border-top: 1px solid var(--cs-line); }
.cs-findings > div:first-child { border-top: 0; padding-top: 0; }
.cs-findings dt { font-size: 15px; font-weight: 600; color: var(--cs-ink); margin-bottom: 2px; }
.cs-findings dd { margin: 0; font-size: 15px; line-height: 1.55; color: var(--cs-muted); }

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
.cs-fig--md img { max-height: 320px; }
.cs-fig--lg img { max-height: 520px; }
.cs-fig figcaption { margin-top: 8px; font-size: 13px; color: var(--cs-muted); }

/* Images inside a card: soft paper background instead of a second border */
.cs-card .cs-fig__frame { background: var(--cs-paper); border-color: transparent; }

/* Images inside grids get the same 4:3 frame so rows line up */
.cs-grid .cs-fig__frame { aspect-ratio: 4 / 3; }
.cs-grid .cs-fig img { width: auto; height: auto; max-width: 100%; max-height: 100%; }

/* Zoomable figures */
.cs-fig__zoom { position: relative; cursor: zoom-in; text-decoration: none; }
.cs-zoom-hint {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.92);
  border: 1px solid var(--cs-line);
  font-size: 12px;
  font-weight: 500;
  color: var(--cs-ink-2);
  opacity: 0;
  transition: opacity .15s ease;
}
.cs-fig__zoom:hover .cs-zoom-hint, .cs-fig__zoom:focus-visible .cs-zoom-hint { opacity: 1; }
@media (hover: none) { .cs-zoom-hint { opacity: 1; } }

/* Persona */
.cs-persona {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 24px;
  align-items: center;
}
.cs-persona .cs-eyebrow { margin-bottom: 4px; }
/* Persona image: same 4:3 frame in both cards so they match in height */
.cs-persona .cs-fig__frame { aspect-ratio: 4 / 3; }
.cs-persona .cs-fig img { width: auto; height: auto; max-width: 100%; max-height: 100%; }
.cs-persona__name { margin: 4px 0 6px; font-size: 28px; font-weight: 700; letter-spacing: -0.02em; }

/* Style guide swatches */
.cs-swatches { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin: 0; padding: 0; list-style: none; }
.cs-swatch { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 10px; background: var(--cs-canvas); border: 1px solid var(--cs-line); }
.cs-swatch__color { width: 36px; height: 36px; flex-shrink: 0; border-radius: 8px; border: 1px solid rgba(0,0,0,0.08); }
.cs-swatch__name { margin: 0; font-size: 14px; font-weight: 600; }
.cs-swatch__hex { margin: 0; font-size: 13px; color: var(--cs-muted); font-variant-numeric: tabular-nums; }

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
  .cs-swatches { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .cs-bar__inner { padding: 8px 16px; gap: 8px; }
  .cs-back { padding: 0 12px; }
  .cs-main { padding: 0 16px 64px; }
  .cs-hero { padding-top: 32px; }
  .cs-hero__lead { font-size: 16px; }
  .cs-meta { margin-top: 28px; }
  .cs-sec { padding: 40px 0; }
  .cs-text { font-size: 16px; }
  .cs-grid--2, .cs-grid--3, .cs-persona { grid-template-columns: 1fr; }
  .cs-end { flex-direction: column-reverse; }
  .cs-next { min-width: 0; }
  .cs-btn-secondary { align-self: stretch; justify-content: center; }
}
`;