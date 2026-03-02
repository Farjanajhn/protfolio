// FourthProject.jsx — Ultra Public Transportation App UX Case Study
// DARK + GLASS style with LIGHT BLUE IMAGE BACKGROUNDS
// Primary color: #014590
// ✅ Updated: more human tone (less “AI-ish”), cleaner writing
// ✅ Updated: removed ALL scrollable image panels (no ScrollPanel)
// ✅ Kept: your content + same images + same overall layout style

import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Keep the image imports the same (you’ll replace later)
import IMG from "../assets/image/UX4TH/Cover.png";
import Design_Process from "../assets/image/UX4TH/process.png";
import UP2 from "../assets/image/UX4TH/UP2.png";
import UP1 from "../assets/image/UX4TH/UP1.jpg";
import MC from "../assets/image/UX4TH/moscow.png";
import CP from "../assets/image/UX4TH/Com.png";
import EP from "../assets/image/UX4TH/em.png";
import TYPOGRAPHY from "../assets/image/UX4TH/TYP.png";
import ICONOGRAPHY from "../assets/image/UX4TH/icons.png";
import COMPONENT from "../assets/image/UX4TH/components.png";
import G from "../assets/image/UX4TH/grid.png";
import MIFI from "../assets/image/UX4TH/high.png";
import LD from "../assets/image/UX4TH/screen1.png";
import Language from "../assets/image/UX4TH/Language.png";
import APPLY from "../assets/image/UX4TH/pt.png";
import TRACK from "../assets/image/UX4TH/bt.png";
import Userflow1 from "../assets/image/UX4TH/Userflow1.png";

// ---------- UI helpers ----------
const Divider = () => (
  <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
);

const SectionWrap = ({ children }) => (
  <div className="rounded-3xl bg-white/[0.06] p-4 md:p-6 shadow-2xl backdrop-blur-md">
    {children}
  </div>
);

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mx-auto max-w-6xl">
      <SectionWrap>
        {kicker && (
          <p className="mb-2 text-xs uppercase tracking-widest text-[#9ecbff]/80">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        )}
        <div className="mt-4 space-y-4 text-white/90">{children}</div>
      </SectionWrap>
    </div>
  </section>
);

const Card = ({ title, children }) => (
  <div className="rounded-3xl bg-white/[0.08] p-5 md:p-6 shadow-2xl backdrop-blur-md">
    {title && (
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
    )}
    <div className={`${title ? "mt-3" : ""} space-y-3 text-white/90`}>
      {children}
    </div>
  </div>
);

const Stat = ({ emoji, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl bg-white/[0.08] p-4 md:p-5 shadow-2xl backdrop-blur-md">
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#014590] text-white text-xl">
      {emoji}
    </div>
    <div>
      <div className="text-xl md:text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/75">{label}</div>
    </div>
  </div>
);

/**
 * ✅ MODERN Img (ONE border only)
 * - single modern glass frame
 * - light blue gradient background
 * - consistent padding (image never touches edges)
 */
const Img = ({ src, alt, maxH = "max-h-[560px]" }) => (
  <div className="rounded-3xl border border-white/12 bg-gradient-to-br from-[#eaf3ff]/80 via-[#dbeaff]/55 to-[#cfe3ff]/65 p-4 md:p-5 shadow-2xl backdrop-blur-md">
    <img
      src={src}
      alt={alt}
      className={`w-full object-contain ${maxH} rounded-2xl`}
      loading="lazy"
    />
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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
};

// ---------- Main ----------
const FourthProject = () => {
  const progress = useScrollProgress();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    document.title = "Ultra — UX Case Study";
  }, []);

  const tocItems = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "audience", label: "Users" },
      { id: "approach", label: "Approach" },
      { id: "design-thinking", label: "Process" },
      { id: "personas", label: "Personas" },
      { id: "empathy", label: "Empathy" },
      { id: "moscow", label: "MoSCoW" },
      { id: "competitive", label: "Competitive" },
      { id: "userflow", label: "Userflow" },
      { id: "design-system", label: "Style guide" },
      { id: "midfi", label: "Mid-fi" },
      { id: "hifi", label: "Hi-fi" },
      { id: "learning-feedback", label: "Learnings" },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f141b]">
      {/* Progress */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#014590] origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/90 via-[#0f172a]/85 to-[#020617]" />

      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#014590]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-slate-400/8 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        {/* Hero */}
        <header className="pt-20 pb-8">
          <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span>🚌 Ultra · Public Transportation · Umeå</span>
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
              Ultra — UX Improvement Case Study
            </h1>

            <p className="mt-3 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed text-white/90">
              This project focuses on two things Ultra users need the most:{" "}
              <span className="text-[#9ecbff] font-semibold">
                clearer ticket choices
              </span>{" "}
              and{" "}
              <span className="text-[#9ecbff] font-semibold">
                quicker access to the next bus
              </span>
              . It’s especially important for people who don’t speak Swedish
              fluently or are still getting used to how public transport works in
              Sweden.
            </p>

            {/* HERO IMAGE */}
            <div className="mt-6 w-full h-full overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-[#eaf3ff] via-[#dbeaff] to-[#cfe3ff] p-2">
              <img
                src={IMG}
                alt="Ultra hero"
                className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-full rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3" data-aos="fade-up">
              <Stat emoji="🎓" value="Master’s thesis" label="Project context" />
              <Stat emoji="🌍" value="International usability" label="Main lens" />
              <Stat emoji="🧭" value="Clarity + speed" label="Design focus" />
            </div>
          </div>
        </header>

        {/* TOC */}
        <div className="mb-6">
          <Toc items={tocItems} />
        </div>

        <main className="space-y-2 pb-24">
          {/* Overview */}
          <Section id="overview" title="Project Overview">
            <p>
              Ultra is the official public transportation app for Umeå, Sweden.
              It helps people plan trips, buy tickets, and track buses in real
              time. This case study is based on my thesis work that looked at
              Ultra’s usability for international users in a culturally diverse
              city.
            </p>

            <p>
              The full study used mixed methods (55 survey responses and 10
              interviews). For the design work here, I focused on two
              representative users:
              <strong className="text-white">
                {" "}
                Nimali (international, familiar frequent user)
              </strong>{" "}
              and{" "}
              <strong className="text-white">
                Erik (Swedish, familiar infrequent user)
              </strong>
              .
            </p>

            <p className="text-white/85">
              <strong className="text-white">Goal:</strong> remove the biggest
              friction points in ticketing and “next bus” access so the app
              feels more inclusive, clearer, and more reliable—without slowing
              down experienced users.
            </p>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Project Details">
                <ul className="list-inside list-disc space-y-2">
                  <li>Duration: 6–8 weeks</li>
                  <li>Role: UX Researcher & UI Designer</li>
                  <li>Tools: Figma, ChatGPT, Discord, Docs, FigJam</li>
                  <li>Methods: Interviews, wireframing, prototyping</li>
                </ul>
              </Card>

              <Card title="What I focused on">
                <ul className="list-inside list-disc space-y-2">
                  <li>Reduce confusion around ticket types and labels</li>
                  <li>Support both frequent and occasional travel patterns</li>
                  <li>Make English usage feel complete and dependable</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Problem */}
          <Section id="problem" title="Problem Statement" kicker="What’s hard today">
            <Card title="The problem in plain words">
              <p>
                Ultra shouldn’t feel stressful, but it often does—especially
                when you’re about to board and need to act fast. Buying a ticket
                can feel confusing, important info is easy to miss, and live
                updates aren’t always clear at a glance.
              </p>
              <p className="text-white/85">
                For newcomers and non-native Swedish speakers, unclear ticket
                terms and limited guidance make the experience feel risky. The
                result is hesitation, second-guessing, and sometimes relying on
                other apps (like Google Maps) just to feel confident.
              </p>
              <p className="text-white font-semibold">
                Public transport should reduce stress—not add to it.
              </p>
            </Card>
          </Section>

          <Divider />

          {/* Solution */}
          <Section id="solution" title="Possible Solution" kicker="What I’m proposing">
            <Card title="Direction for improvements">
              <p>
                The redesign is meant to make Ultra feel clearer, faster, and
                more welcoming.
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Put the most important actions (tickets + departures) right on
                  the home screen.
                </li>
                <li>
                  Replace confusing ticket terms with clearer labels and short
                  explanations.
                </li>
                <li>
                  Add small “confidence boosts” during ticket purchase—so users
                  know they picked the right thing.
                </li>
              </ul>
              <p className="text-white/85">
                The aim is simple: everyday travel should feel straightforward,
                even if you’re new to the system.
              </p>
            </Card>
          </Section>

          <Divider />

          {/* Audience */}
          <Section id="audience" title="Target Users" kicker="Who this design is for">
            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Primary audiences">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong className="text-white">Foreign daily commuters</strong>{" "}
                    — rely on Ultra often, may not speak Swedish fluently, need
                    predictable flows
                  </li>
                  <li>
                    <strong className="text-white">Swedish occasional riders</strong>{" "}
                    — take the bus for errands, want quick access and minimal
                    setup
                  </li>
                  <li>
                    <strong className="text-white">Newcomers</strong> — still
                    learning ticket rules and local norms, need plain language
                    and guidance
                  </li>
                  <li>
                    <strong className="text-white">Cold-weather riders</strong>{" "}
                    — want certainty and less waiting time outdoors
                  </li>
                </ul>
              </Card>

              <Card title="Inclusivity considerations">
                <ul className="list-inside list-disc space-y-2">
                  <li>Complete English coverage (no Swedish leftovers)</li>
                  <li>Clear status feedback (late bus cues, confirmations)</li>
                  <li>Easy-to-find controls (tracking, favorites, filters)</li>
                  <li>Search that forgives spelling and language differences</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Approach */}
          <Section id="approach" title="Design Approach" kicker="How decisions were made">
            <Card title="Research-informed design">
              <p>
                I used interview insights to identify where people got stuck:
                missing information, unclear ticket logic, language gaps, and
                features that are hard to discover under time pressure.
              </p>
              <p className="text-white/85">
                The design recommendations follow classic usability principles:
                make system status visible, reduce memory load, and keep common
                tasks quick.
              </p>
            </Card>
          </Section>

          <Divider />

          {/* Design Thinking */}
          <Section
            id="design-thinking"
            title="Design Thinking Process"
            kicker="Process overview"
          >
            <Img
              src={Design_Process}
              alt="Design thinking process"
              maxH="max-h-[580px]"
            />
          </Section>

          <Divider />

          {/* Personas */}
          <Section id="personas" title="Personas" kicker="Two viewpoints">
            <div className="space-y-6" data-aos="fade-up">
              <Card title="Primary Persona — Foreign frequent user (Nimali)">
                <p>
                  Nimali uses Ultra often but isn’t fully comfortable with
                  Swedish. She double-checks ticket details to avoid mistakes
                  and prefers flows that feel predictable and clear.
                </p>
                <div className="mt-4">
                  <Img src={UP2} alt="Persona 1" maxH="max-h-[580px]" />
                </div>
              </Card>

              <Card title="Secondary Persona — Swedish occasional user (Erik)">
                <p>
                  Erik uses the bus less often and wants quick, location-aware
                  information. When the app feels slow or unclear, he defaults
                  to Google Maps for the bigger travel picture.
                </p>
                <div className="mt-4">
                  <Img src={UP1} alt="Persona 2" maxH="max-h-[580px]" />
                </div>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Empathy */}
          <Section id="empathy" title="Empathy Map" kicker="Needs, pain points, goals">
            <Card>
              <Img src={EP} alt="Empathy map" maxH="max-h-[580px]" />
            </Card>
          </Section>

          <Divider />

          {/* MoSCoW */}
          <Section id="moscow" title="MoSCoW Model" kicker="Feature prioritization">
            <Card title="What gets fixed first">
              <p>
                I prioritized changes that reduce confusion and risk first
                (must-have), then improvements that add convenience and polish
                (should-have).
              </p>
              <div className="mt-4">
                <Img src={MC} alt="MoSCoW model" maxH="max-h-[580px]" />
              </div>
            </Card>
          </Section>

          <Divider />

          {/* Competitive */}
          <Section
            id="competitive"
            title="Competitive Analysis"
            kicker="Learning from similar apps"
          >
            <p>
              Many competing apps lead with “next departure” and door-to-door
              planning. Ultra can keep its strengths (ticketing + local info)
              and still improve discoverability and context-aware guidance.
            </p>
            <div className="mt-4">
              <Img src={CP} alt="Competitive analysis" maxH="max-h-[580px]" />
            </div>
          </Section>

          <Divider />

          {/* Userflow */}
          <Section color="white" id="userflow" title="Userflow" kicker="Planning a trip">
            <p>
              I mapped the trip-planning flow to see where people hesitate or
              lose confidence—especially when switching between planning and
              buying a ticket.
            </p>
            <div className="mt-4">
              <Img src={Userflow1} alt="User Flow" maxH="max-h-[580px]" />
            </div>
          </Section>

          <Divider />

          {/* Design System */}
          <Section
            id="design-system"
            title="Style guide"
            kicker="Typography, components, grid system"
          >
            <div className="space-y-5" data-aos="fade-up">
              <Card title="Typography & Color">
                <p className="text-white/85">
                  I kept the interface calm and high-contrast for quick reading.
                  The primary accent is{" "}
                  <span className="font-semibold text-[#9ecbff]">#014590</span>,
                  used to highlight actions and key states without making the UI
                  noisy.
                </p>
                <Img src={TYPOGRAPHY} alt="Typography and colors" maxH="max-h-[580px]" />
              </Card>
              <Card title="Iconography">
                <Img src={ICONOGRAPHY} alt="Iconography" maxH="max-h-[580px]" />
              </Card>
              <Card title="Components">
                <Img src={COMPONENT} alt="Components" maxH="max-h-[580px]" />
              </Card>
              <Card title="Grid System">
                <Img src={G} alt="Grid" maxH="max-h-[580px]" />
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Mid-Fi */}
          <Section id="midfi" title="Mid-Fidelity" kicker="Structure before visuals">
            <p>
              Mid-fi helped validate hierarchy and flow before adding visual
              polish—especially around ticket clarity and quick actions.
            </p>
            <Img src={MIFI} alt="Mid fidelity" maxH="max-h-[580px]" />
          </Section>

          <Divider />

          {/* Hi-Fi */}
          <Section id="hifi" title="High-Fidelity Screens" kicker="Key screens">
            <div className="space-y-4">
              <Card title="Landing / Home (quick access)">
                <Img src={LD} alt="Landing page" maxH="max-h-[540px]" />
              </Card>

              <Card title="Language change (Swedish vs English)">
                <p className="text-white/85">
                  Language consistency is a big trust factor. If someone chooses
                  English, they expect the whole experience to stay in English.
                </p>
                <Img src={Language} alt="Language change" maxH="max-h-[540px]" />
              </Card>

              <Card title="Plan a trip (reduced input)">
                <Img src={APPLY} alt="Trip planning" maxH="max-h-[540px]" />
              </Card>

              <Card title="Buy a ticket (clearer choices)">
                <Img src={TRACK} alt="Buy a ticket" maxH="max-h-[540px]" />
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Learning & Feedback */}
          <Section
            id="learning-feedback"
            title="Learning & Feedback"
            kicker="What I learned from this project"
          >
            <div className="grid gap-5 md:grid-cols-1" data-aos="fade-up">
              <Card title="Key learnings">
                <ul className="list-inside list-disc space-y-2">
                  <li>Discoverability matters more than adding more features.</li>
                  <li>Live tracking only helps when it’s easy to find and easy to trust.</li>
                  <li>Plain language reduces stress and prevents mistakes.</li>
                  <li>Shortcuts and location-aware defaults save real effort.</li>
                </ul>
              </Card>

              <Card title="Impact (portfolio framing)">
                <p>
                  This case study helped me practice turning{" "}
                  <span className="text-[#9ecbff] font-semibold">
                    qualitative research
                  </span>{" "}
                  into practical design decisions—especially for a public service
                  where clarity, speed, and trust really matter.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Back */}
          <div className="pt-4 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#014590] px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition"
            >
              <span>← Back to Home</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FourthProject;