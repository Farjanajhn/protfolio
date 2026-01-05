// FirstProject.jsx — Blossom Buddy Case Study (MATCHES ThirdProject DARK + GLASS STYLE)
// ✅ Reduced gaps between sections (tighter layout):
//    - main spacing: space-y-14 (was space-y-20)
//    - Divider: my-8 (was my-12)
//    - SectionWrap: md:p-5 (was md:p-6)

import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ---------- Image imports ----------
import ideation from "../assets/image/ideation.jpg";
import ideation2 from "../assets/image/ideation2.jpg";
import ideation3 from "../assets/image/ideation3.jpg";
import project1 from "../assets/image/project_1.jpg";
import project2 from "../assets/image/UX1st/project2.png";
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
import initial4 from "../assets/image/UX1st/initial3.png";
import final from "../assets/image/UX1st/final.png";
import project8 from "../assets/image/project6.jpg";

// ---------- UI helpers (ThirdProject style) ----------
const Divider = () => (
  <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
);

const SectionWrap = ({ children }) => (
  <div className="rounded-3xl bg-white/[0.06] p-4 md:p-5 shadow-2xl backdrop-blur-md">
    {children}
  </div>
);

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mx-auto max-w-6xl">
      <SectionWrap>
        {kicker ? (
          <p className="mb-2 text-xs uppercase tracking-widest text-emerald-200/80">
            {kicker}
          </p>
        ) : null}

        {title ? (
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        ) : null}

        <div className="mt-4 space-y-4 text-white/90">{children}</div>
      </SectionWrap>
    </div>
  </section>
);

const Card = ({ title, children }) => (
  <div className="rounded-3xl bg-white/[0.08] p-5 md:p-6 shadow-2xl backdrop-blur-md">
    {title ? (
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
    ) : null}
    <div className={`${title ? "mt-3" : ""} space-y-3 text-white/90`}>
      {children}
    </div>
  </div>
);

const Stat = ({ emoji, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl bg-white/[0.08] p-4 md:p-5 shadow-2xl backdrop-blur-md">
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-400 text-black text-xl">
      {emoji}
    </div>
    <div>
      <div className="text-xl md:text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/75">{label}</div>
    </div>
  </div>
);

/**
 * ✅ MODERN Img (ONE border only) — same as your ThirdProject
 * (light green frame, consistent padding)
 */
const Img = ({ src, alt, maxH = "max-h-[560px]", className = "" }) => (
  <div
    className={`rounded-3xl border border-white/12 bg-gradient-to-br from-emerald-50/70 via-emerald-100/50 to-teal-100/60 p-4 md:p-5 shadow-2xl backdrop-blur-md ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className={`w-full object-contain ${maxH} rounded-2xl`}
      loading="lazy"
    />
  </div>
);

// Horizontal scroll gallery
const ScrollRow = ({ children }) => (
  <div className="-mx-2 md:mx-0">
    <div className="flex gap-4 overflow-x-auto pb-3 px-2 md:px-0 snap-x snap-mandatory [scrollbar-width:thin]">
      {children}
    </div>
  </div>
);

// Vertical scroll container
const ScrollPanel = ({ children }) => (
  <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-md">
    <div className="max-h-[520px] overflow-y-auto pr-2 [scrollbar-width:thin]">
      {children}
    </div>
  </div>
);

const Toc = ({ items }) => (
  <nav className="sticky top-20 hidden md:block z-30">
    <ul className="flex flex-wrap gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-2 text-sm text-white shadow-2xl backdrop-blur-md">
      {items.map((i) => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            className="rounded-full px-3 py-1 hover:bg-white/15 transition"
          >
            {i.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

// ---------- Scroll progress ----------
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight ? scrolled / docHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
};

// ---------- Main Page ----------
const FirstProject = () => {
  const progress = useScrollProgress();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
    document.title = "Blossom Buddy — Case Study";
  }, []);

  const tocItems = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem & Goals" },
      { id: "process", label: "Process" },
      { id: "ideation", label: "Ideation" },
      { id: "lofi", label: "Low-Fi" },
      { id: "initial", label: "Initial Prototype" },
      { id: "hifi", label: "Hi-Fi" },
      { id: "scenarios", label: "Scenarios" },
      { id: "testing", label: "Testing & Insights" },
      { id: "decisions", label: "Design Decisions" },
      { id: "future", label: "Future & Impact" },
      { id: "theory", label: "Theory" },
      { id: "refs", label: "References" },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f141b]">
      {/* Progress */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-emerald-400 origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/90 via-[#0f172a]/85 to-[#020617]" />

      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-slate-400/8 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        {/* Hero */}
        <header className="pt-20 pb-10">
          <a
            href="#overview"
            aria-label="Scroll to project overview"
            className="group block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <div
              data-aos="fade-up"
              className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-md transition hover:bg-white/[0.09]"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                <span>🌱 Tangible · Gamified · Self-care</span>
              </div>

              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
                Blossom Buddy
              </h1>

              <p className="mt-3 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed text-white/90">
                A hybrid interactive system pairing a <em>real plant</em> with a
                playful digital companion. Users complete daily self-improvement
                tasks; the plant responds with visible state changes and tailored
                rewards to sustain motivation.
              </p>

              {/* Hero image grid */}
              <div className="mt-6 grid gap-4 md:grid-cols-12">
                <div className="md:col-span-7">
                  <Img
                    src={project2}
                    alt="Blossom Buddy main interface"
                    maxH="max-h-[420px]"
                  />
                </div>

                <div className="md:col-span-5 grid gap-4">
                  <Img
                    src={happy}
                    alt="Digital twin: happy state"
                    maxH="max-h-[200px]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Img
                      src={healthy}
                      alt="Digital twin: all needs met"
                      maxH="max-h-[170px]"
                    />
                    <Img
                      src={sad}
                      alt="Digital twin: sad state"
                      maxH="max-h-[170px]"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Stat emoji="👤" label="Role" value="UX Designer" />
                <Stat emoji="🗓️" label="Duration" value="8 weeks" />
                <Stat emoji="🧰" label="Tools" value="Figma · Paper · React" />
                <Stat emoji="🧪" label="Methods" value="Experience · WoZ" />
              </div>

            
            </div>
          </a>
        </header>

        {/* ✅ Tighter gaps here */}
        <main className="space-y-2 pb-20">
          {/* Overview */}
          <Section id="overview" title="Project Overview">
            <p>
              The concept blends nature and technology to make personal growth
              feel alive. Each day the user selects a small set of self-
              development tasks. Completing a task grants the plant a resource
              (☀️/💧/🍃). Finishing the full set unlocks a{" "}
              <strong className="text-white">special reward</strong>, and every
              3–4 days a surprise reward appears to keep excitement high.
            </p>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Core idea">
                <ul className="list-inside list-disc space-y-2">
                  <li>Real plant + digital twin for emotional engagement</li>
                  <li>Resources (☀️/💧/🍃) represent habit completion</li>
                  <li>Rewards: daily special + periodic surprise</li>
                  <li>Sensors ground motivation in tangible care</li>
                </ul>
              </Card>

              <Card title="Outcome (prototype)">
                <ul className="list-inside list-disc space-y-2">
                  <li>Hi-fi UI screens in Figma</li>
                  <li>Experience prototyping + WoZ evaluation</li>
                  <li>Improved motivation through visible feedback</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Problem & Goals */}
          <Section id="problem" title="Problem & Goals">
            <p>
              It’s difficult to stay motivated for everyday self-care and habit
              change. Many habit trackers feel mechanical and easy to abandon.
              Blossom Buddy reframes routine tasks as{" "}
              <em>care for a companion</em> — creating empathy and a meaningful
              feedback loop.
            </p>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Goals">
                <ul className="list-inside list-disc space-y-2">
                  <li>Nurture motivation via tangible feedback</li>
                  <li>Make progress visible and rewarding</li>
                  <li>Support reflection without becoming a chore</li>
                </ul>
              </Card>
              <Card title="Constraints">
                <ul className="list-inside list-disc space-y-2">
                  <li>Quick daily interactions</li>
                  <li>Different ages + tech familiarity</li>
                  <li>Balance novelty with long-term engagement</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Process */}
          <Section id="process" title="Process" kicker="Iterative, user-centered">
            <p>
              We followed an{" "}
              <strong className="text-white">experience prototyping</strong>{" "}
              approach supported by sketches, scenarios, and Wizard-of-Oz (WoZ)
              testing. Inspired by Houde &amp; Hill (1997), we explored
              look-and-feel, role, and implementation across iterations.
            </p>

            <div
              className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
              data-aos="fade-up"
            >
              <Stat emoji="📝" label="Artifacts" value="Sketches · Flows" />
              <Stat emoji="🎬" label="Technique" value="Experience prototyping" />
              <Stat emoji="🧙" label="Testing" value="Wizard-of-Oz" />
              <Stat emoji="💻" label="Hi-Fi" value="Figma screens" />
            </div>
          </Section>

          <Divider />

          {/* Ideation */}
          <Section id="ideation" title="Ideation">
            <p>
              We brainstormed many concepts and selected{" "}
              <strong className="text-white">Blossom Buddy</strong> for its
              uniqueness and emotional resonance.
            </p>

            <ScrollRow>
              <div className="min-w-[260px] sm:min-w-[360px] snap-start">
                <Img src={ideation} alt="Ideation board 1" maxH="max-h-[360px]" />
              </div>
              <div className="min-w-[260px] sm:min-w-[360px] snap-start">
                <Img
                  src={ideation2}
                  alt="Ideation board 2"
                  maxH="max-h-[360px]"
                />
              </div>
              <div className="min-w-[260px] sm:min-w-[360px] snap-start">
                <Img
                  src={ideation3}
                  alt="Ideation board 3"
                  maxH="max-h-[360px]"
                />
              </div>
            </ScrollRow>
          </Section>

          <Divider />

          {/* Low-Fi */}
          <Section id="lofi" title="Low-Fidelity Prototypes">
            <p>
              Paper sketches helped validate interactions quickly: task selection,
              reporting, feedback, and reward reveals.
            </p>

            <ScrollRow>
              <div className="min-w-[260px] sm:min-w-[320px] snap-start">
                <Img src={lofi2} alt="Low-fi sketch 1" maxH="max-h-[360px]" />
              </div>
              <div className="min-w-[260px] sm:min-w-[320px] snap-start">
                <Img src={project1} alt="Low-fi sketch 2" maxH="max-h-[360px]" />
              </div>
              <div className="min-w-[260px] sm:min-w-[320px] snap-start">
                <Img src={lofi3} alt="Low-fi sketch 3" maxH="max-h-[360px]" />
              </div>
              <div className="min-w-[260px] sm:min-w-[320px] snap-start">
                <Img src={lofi4} alt="Low-fi sketch 4" maxH="max-h-[360px]" />
              </div>
            </ScrollRow>
          </Section>

          <Divider />

          {/* Initial Prototype */}
          <Section id="initial" title="Initial Prototype">
            <p>Early mockups combining the digital twin with form-factor ideas.</p>

            <ScrollPanel>
              <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-up">
                <Img
                  src={initial1}
                  alt="Initial prototype 1"
                  maxH="max-h-[320px]"
                />
                <Img
                  src={initial2}
                  alt="Initial prototype 2"
                  maxH="max-h-[320px]"
                />
                <Img
                  src={initial3}
                  alt="Initial prototype 3"
                  maxH="max-h-[320px]"
                />
                <Img
                  src={initial4}
                  alt="Initial prototype 4"
                  maxH="max-h-[320px]"
                />
              </div>
            </ScrollPanel>
          </Section>

          <Divider />

          {/* Hi-Fi */}
          <Section id="hifi" title="High-Fidelity Prototype">
            <p>
              We refined visuals and micro-copy to keep interactions lightweight
              yet rewarding. The digital twin reflects mood and needs; completing
              the daily set reveals a special reward.
            </p>

            <div className="grid gap-4" data-aos="fade-up">
              <Img src={final} alt="Final hi-fi screen" maxH="max-h-[560px]" />
            </div>

            <ScrollRow>
              <div className="min-w-[240px] sm:min-w-[280px] snap-start">
                <Img src={happy} alt="Happy state" maxH="max-h-[260px]" />
              </div>
              <div className="min-w-[240px] sm:min-w-[280px] snap-start">
                <Img src={healthy} alt="Healthy state" maxH="max-h-[260px]" />
              </div>
              <div className="min-w-[240px] sm:min-w-[280px] snap-start">
                <Img src={sad} alt="Sad state" maxH="max-h-[260px]" />
              </div>
            </ScrollRow>
          </Section>

          <Divider />

          {/* Scenarios */}
          <Section id="scenarios" title="Experience Scenarios">
            <p>We enacted three scenarios during WoZ evaluation:</p>

            <div className="grid gap-5" data-aos="fade-up">
              <Card title="Scenario 1 — First Day (Productive)">
                <p>
                  User completes all tasks (run · meditate · study · tidy desk).
                  Reporting each task grants a resource; completing the set unlocks
                  a special reward.
                </p>
              </Card>

              <Card title="Scenario 2 — Second Day (Early Unlock)">
                <p>
                  User reports the first task next morning; a special reward is
                  primed to unlock to test anticipation and delight.
                </p>
              </Card>

              <Card title="Scenario 3 — Sad Scenario (Recovery)">
                <p>
                  User completes nothing due to a hectic day. The plant appears sad;
                  the UI offers micro-tasks to recover.
                </p>
              </Card>
            </div>

            <ScrollRow>
              <div className="min-w-[260px] sm:min-w-[320px] snap-start">
                <Img src={day} alt="Scenario day 1" maxH="max-h-[320px]" />
              </div>
              <div className="min-w-[260px] sm:min-w-[320px] snap-start">
                <Img src={day2} alt="Scenario day 2" maxH="max-h-[320px]" />
              </div>
              <div className="min-w-[260px] sm:min-w-[320px] snap-start">
                <Img src={day3} alt="Scenario day 3" maxH="max-h-[320px]" />
              </div>
            </ScrollRow>
          </Section>

          <Divider />

          {/* Testing & Insights */}
          <Section
            id="testing"
            title="User Testing & Feedback"
            kicker="Wizard-of-Oz sessions + semi-structured interviews"
          >
            <div className="grid items-start gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-4" data-aos="fade-up">
                <Card title="Key findings">
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      <strong className="text-white">Controls:</strong> Most users
                      preferred a touch-only interface.
                    </li>
                    <li>
                      <strong className="text-white">Mental model:</strong>{" "}
                      Sun/water/nutrition bars felt meaningful.
                    </li>
                    <li>
                      <strong className="text-white">Rewards:</strong> Users liked
                      rewards; some preferred cosmetics.
                    </li>
                    <li>
                      <strong className="text-white">Feedback pace:</strong>{" "}
                      Requested richer plant reactions and faster feedback.
                    </li>
                    <li>
                      <strong className="text-white">Progress:</strong> Asked for
                      calendar-like history and streaks.
                    </li>
                    <li>
                      <strong className="text-white">Form factor:</strong> Preferred a
                      gently tilted screen.
                    </li>
                  </ul>
                </Card>
              </div>

              <div
                className="lg:col-span-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Img src={project8} alt="User testing" maxH="max-h-[420px]" />
              </div>
            </div>
          </Section>

          <Divider />

          {/* Design Decisions */}
          <Section id="decisions" title="Key Design Decisions">
            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Interface">
                <ul className="list-inside list-disc space-y-2">
                  <li>Primary interaction via touch; removed buttons</li>
                  <li>Added mood granularity for clearer state</li>
                  <li>Introduced progress calendar and streak cues</li>
                </ul>
              </Card>

              <Card title="Motivation & Rewards">
                <ul className="list-inside list-disc space-y-2">
                  <li>Daily special reward + surprise rewards</li>
                  <li>Personalizable reward set (cosmetics)</li>
                </ul>
              </Card>

              <Card title="Form & Placement">
                <ul className="list-inside list-disc space-y-2">
                  <li>Gently tilted display for comfortable viewing</li>
                  <li>Option for toy-like embodiment for instant reaction</li>
                </ul>
              </Card>

              <Card title="Accessibility">
                <ul className="list-inside list-disc space-y-2">
                  <li>Large tap targets and short sessions</li>
                  <li>Clear icon + text alternatives</li>
                  <li>Friendly microcopy to reduce pressure</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Future & Impact */}
          <Section id="future" title="Future Development & Expected Impact">
            <ul className="list-inside list-disc space-y-2">
              <li>Companion mobile app for daily/weekly/monthly history</li>
              <li>Remote control of the display via app</li>
              <li>Vacation mode to pause streak pressure</li>
              <li>Optional wearable integration for automatic habit capture</li>
            </ul>
            <p className="mt-2">
              Expected outcomes: stronger emotional connection to progress,
              sustained habit building, and more playful self-care.
            </p>
          </Section>

          <Divider />

          {/* Theory */}
          <Section id="theory" title="Theoretical Grounding">
            <p>
              Draws on{" "}
              <strong className="text-white">Experience Prototyping</strong>{" "}
              (Buchenau &amp; Suri, 2000) and{" "}
              <strong className="text-white">Houde &amp; Hill</strong> (1997)
              prototype dimensions. Wizard-of-Oz testing enabled realistic
              evaluations before full implementation.
            </p>
          </Section>

          <Divider />

          {/* References */}
          <Section id="refs" title="References">
            <ul className="list-inside list-disc space-y-2">
              <li>Buchenau, M., &amp; Suri, J. F. (2000). Experience prototyping.</li>
              <li>
                Houde, S., &amp; Hill, C. (1997). Prototyping and design. In
                Handbook of HCI.
              </li>
              <li>
                Blomkvist, J., &amp; Holmlid, S. (2007). Prototyping practices
                and notations.
              </li>
              <li>Lee, G. (2018). Wizard-of-Oz Prototyping.</li>
              <li>Koskinen, I. et al. (2011). Design Research through Practice.</li>
            </ul>
          </Section>

          <Divider />

          {/* Back */}
          <div className="pt-4 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-black font-semibold shadow hover:bg-emerald-300 transition"
            >
              <span>← Back to Home</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FirstProject;
