// ThirdProject.jsx — MyGov BD UX Case Study
// DARK + GLASS style with LIGHT GREEN IMAGE BACKGROUNDS
// Full file — updated: Added “Learning & Feedback” section + added to TOC
// ✅ Style preserved exactly like your reference file

import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import IMG from "../assets/image/UX3RD/IMG_1.png";
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
          <p className="mb-2 text-xs uppercase tracking-widest text-emerald-200/80">
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
 * ✅ MODERN Img (ONE border only)
 * - single modern glass frame
 * - light green gradient background
 * - no nested borders
 * - consistent padding (image never touches edges)
 */
const Img = ({ src, alt, maxH = "max-h-[560px]" }) => (
  <div className="rounded-3xl border border-white/12 bg-gradient-to-br from-emerald-50/70 via-emerald-100/50 to-teal-100/60 p-4 md:p-5 shadow-2xl backdrop-blur-md">
    <img
      src={src}
      alt={alt}
      className={`w-full object-contain ${maxH} rounded-2xl`}
      loading="lazy"
    />
  </div>
);

const ScrollPanel = ({ children }) => (
  <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-md">
    <div className="max-h-[650px] overflow-y-auto pr-2 [scrollbar-width:thin]">
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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
};

// ---------- Main ----------
const ThirdProject = () => {
  const progress = useScrollProgress();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    document.title = "MyGov BD — UX Case Study";
  }, []);

  const toc = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "audience", label: "Target Users" },
      { id: "approach", label: "Approach" },
      { id: "design-thinking", label: "Design Thinking" },
      { id: "personas", label: "Personas" },
      { id: "moscow", label: "MoSCoW" },
      { id: "competitive", label: "Competitive" },
      { id: "userflow", label: "User Flow" },
      { id: "ia", label: "IA" },
      { id: "design-system", label: "Design System" },
      { id: "midfi", label: "Mid-Fi" },
      { id: "hifi", label: "Hi-Fi" },
      { id: "usability", label: "Usability" },
      { id: "learning-feedback", label: "Learning & Feedback" }, // ✅ added
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
          <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span>🇧🇩 MyGov BD · Public Services · Accessibility</span>
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
              MyGov BD — UX Redesign Case Study
            </h1>

            <p className="mt-3 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed text-white/90">
              A user-centered redesign concept to help citizens complete essential
              government tasks with{" "}
              <span className="text-emerald-200 font-semibold">
                simplified navigation
              </span>
              ,{" "}
              <span className="text-emerald-200 font-semibold">
                consistent language switching
              </span>
              ,{" "}
              <span className="text-emerald-200 font-semibold">
                improved search
              </span>
              , and{" "}
              <span className="text-emerald-200 font-semibold">
                clear task feedback
              </span>
              .
            </p>

            {/* ✅ HERO IMAGE BLOCK */}
            <div className="mt-6 w-full h-full overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 p-2">
              <img
                src={IMG}
                alt="MyGov BD hero"
                className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-full rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Stat emoji="👤" label="My Role" value="UX/UI Designer" />
              <Stat emoji="👥" label="Team member" value="6" />
              <Stat emoji="📱" label="Platform" value="Mobile App" />
              <Stat emoji="🖌️" label="Design Tool" value="Figma" />
            </div>
          </div>
        </header>

        {/* ✅ TOC (kept but previously unused) */}
     

        <main className="space-y-2 pb-24">
          {/* Overview */}
          <Section id="overview" title="Overview">
            <p>
              MyGov BD is designed to support citizens in accessing government services digitally.
              This case study focuses on reducing confusion and abandonment by improving navigation,
              language consistency, search performance, and task feedback across the service journey.
            </p>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Project Focus">
                <ul className="list-inside list-disc space-y-2">
                  <li>Find services faster (navigation + search)</li>
                  <li>Support bilingual use with consistent switching</li>
                  <li>Increase confidence with status + feedback</li>
                  <li>Improve accessibility for diverse users</li>
                </ul>
              </Card>

              <Card title="Deliverables">
                <ul className="list-inside list-disc space-y-2">
                  <li>Design thinking process artifacts</li>
                  <li>User flows + IA</li>
                  <li>MoSCoW + Competitive analysis</li>
                  <li>Hi-fi screens + usability insights</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Problem */}
          <Section id="problem" title="Problem Statement" kicker="What is broken today">
            <Card title="Problem Statement">
              <p>
                Citizens struggle to complete essential government tasks on the MyGov app due to
                confusing navigation, inconsistent language switching, poor search functionality,
                and lack of task feedback, resulting in frustration and abandoned processes.
              </p>
            </Card>
          </Section>

          <Divider />

          {/* Solution */}
          <Section id="solution" title="Possible Solution" kicker="What we propose">
            <Card title="Proposed Redesign Direction">
              <p>
                Redesign the MyGov BD app with simplified navigation, consistent language switching,
                improved search accuracy, and clear application status feedback, enabling citizens to
                complete government services quickly, confidently, and without confusion.
              </p>
            </Card>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Core Improvements">
                <ul className="list-inside list-disc space-y-2">
                  <li>Simplified service categories and clearer labels</li>
                  <li>One consistent language switch (system-wide)</li>
                  <li>Search suggestions + better result relevance</li>
                  <li>Status timeline + confirmation receipts</li>
                </ul>
              </Card>

              <Card title="Success Metrics">
                <ul className="list-inside list-disc space-y-2">
                  <li>Reduced time to find a service</li>
                  <li>Higher task completion rate</li>
                  <li>Fewer errors during application steps</li>
                  <li>Higher user satisfaction and trust</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Audience */}
          <Section id="audience" title="Target Users" kicker="Who we designed for">
            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Primary audiences">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong className="text-white">Students</strong> — certificates,
                    registrations, education services
                  </li>
                  <li>
                    <strong className="text-white">Everyday citizens</strong> — documents,
                    permits, public info
                  </li>
                  <li>
                    <strong className="text-white">Working professionals</strong> — fast,
                    time-sensitive tasks
                  </li>
                  <li>
                    <strong className="text-white">Elderly</strong> — clarity, larger touch
                    targets, readable text
                  </li>
                </ul>
              </Card>

              <Card title="Accessibility considerations">
                <ul className="list-inside list-disc space-y-2">
                  <li>Readable typography and high contrast</li>
                  <li>Clear error prevention and guidance</li>
                  <li>Simple language and consistent wording</li>
                  <li>Reduced cognitive load (progressive disclosure)</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Approach */}
          <Section id="approach" title="Design Approach" kicker="How decisions were made">
            <Card title="User-centered approach">
              <p>
                A user-centered approach focused on simplifying navigation, improving clarity,
                and ensuring accessibility across all government services.
              </p>
            </Card>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Principles">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong className="text-white">Task-first</strong> (help users complete
                    services fast)
                  </li>
                  <li>
                    <strong className="text-white">Consistency</strong> (labels, language
                    switch, patterns)
                  </li>
                  <li>
                    <strong className="text-white">Visibility of system status</strong>{" "}
                    (feedback + timeline)
                  </li>
                  <li>
                    <strong className="text-white">Accessibility by default</strong>{" "}
                    (contrast, touch targets)
                  </li>
                </ul>
              </Card>

              <Card title="Key UX improvements">
                <ul className="list-inside list-disc space-y-2">
                  <li>Guided, step-by-step service application flows</li>
                  <li>Smart search with suggestions and filters</li>
                  <li>Clear confirmation screens (reference ID/receipt)</li>
                  <li>Improved error messages and recovery</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Design Thinking */}
          <Section id="design-thinking" title="Design Thinking Process" kicker="Process overview">
            <Img src={Design_Process} alt="Design thinking process" maxH="max-h-[580px]" />
          </Section>

          <Divider />

          {/* Personas */}
          <Section id="personas" title="Personas" kicker="User perspective">
            <div className="space-y-6" data-aos="fade-up">
              <Card title="Primary Persona">
                <p>
                  Represents everyday citizens using MyGov BD to complete essential
                  government services efficiently and with confidence.
                </p>
                <div className="mt-4">
                  <Img src={UP1} alt="Primary persona – Everyday citizen" maxH="max-h-[580px]" />
                </div>
              </Card>

              <Card title="Secondary Persona">
                <p>
                  Represents users who need well-structured information, clear requirements,
                  and accessible design to confidently complete important tasks.
                </p>
                <div className="mt-4">
                  <Img src={UP2} alt="Secondary persona – Secondary user" maxH="max-h-[580px]" />
                </div>
              </Card>

              <Card title="Empathy Map">
                <Img src={EP} alt="Empathy map" maxH="max-h-[580px]" />
              </Card>
            </div>
          </Section>

          <Divider />

          {/* MoSCoW */}
          <Section id="moscow" title="MoSCoW Model" kicker="Feature prioritization">
            <Card title="MoSCoW Model – Feature Prioritization">
              <div className="mt-4">
                <Img src={MC} alt="MoSCoW model" maxH="max-h-[580px]" />
              </div>
            </Card>
          </Section>

          <Divider />

          {/* Competitive */}
          <Section id="competitive" title="Competitive Analysis" kicker="Learning from similar apps">
            <p>
              Compared to UMANG (India), Service NSW, and Malaysia MyGov, myGov Bangladesh demonstrates
              stronger support for unified service access, particularly through life-event–based
              navigation, smart search, multi-language support, unified application status tracking,
              and built-in accessibility features such as voice and visual support.
            </p>
            <div className="mt-4">
              <Img src={CP} alt="Competitive analysis" maxH="max-h-[580px]" />
            </div>
          </Section>

          <Divider />

          {/* User Flow */}
          <Section id="userflow" title="User Flow" kicker="App user flow">
            <Img src={UF} alt="User flow" maxH="max-h-[580px]" />
          </Section>

          {/* IA */}
          <Section id="ia" title="Information Architecture" kicker="App information architecture">
            <Img src={IA} alt="Information architecture" maxH="max-h-[580px]" />
          </Section>

          <Divider />

          {/* Design System */}
          <Section id="design-system" title="Design System" kicker="Typography, components, grid">
            <div className="space-y-5" data-aos="fade-up">
              <Card title="Typography & Color">
                <Img src={TYPOGRAPHY} alt="Typography and colors" maxH="max-h-[580px]" />
              </Card>
              <Card title="Iconography">
                <Img src={ICONOGRAPHY} alt="Iconography" maxH="max-h-[580px]" />
              </Card>
              <Card title="Components">
                <Img src={COMPONENT} alt="Components" maxH="max-h-[580px]" />
              </Card>
              <Card title="Grid">
                <Img src={G} alt="Grid" maxH="max-h-[580px]" />
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Mid-Fi */}
          <Section id="midfi" title="Mid-Fidelity" kicker="Structure before visuals">
            <Img src={MIFI} alt="Mid fidelity" maxH="max-h-[580px]" />
          </Section>

          <Divider />

          {/* Hi-Fi */}
          <Section id="hifi" title="High-Fidelity & Design Explanation" kicker="Key screens">
            <ScrollPanel>
              <div className="space-y-4">
                <Card title="Landing Page">
                  <Img src={LD} alt="Landing page" maxH="max-h-[540px]" />
                </Card>
                <Card title="Language Change (Bilingual approach)">
                  <Img src={LC} alt="Language change" maxH="max-h-[540px]" />
                </Card>
                <Card title="Apply for Birth Certificate">
                  <Img src={APPLY} alt="Apply flow" maxH="max-h-[540px]" />
                </Card>
                <Card title="Track Your Application">
                  <Img src={TRACK} alt="Track flow" maxH="max-h-[540px]" />
                </Card>
                <Card title="Design Comparison (Old vs New UI)">
                  <Img src={UI_C} alt="Old vs new UI" maxH="max-h-[540px]" />
                </Card>
              </div>
            </ScrollPanel>
          </Section>

          <Divider />

          {/* Usability */}
          <Section id="usability" title="Usability Testing" kicker="Evidence-based iteration">
            <div className="space-y-4" data-aos="fade-up">
              <Card title="Usability Testing Summary">
                <Img src={UT} alt="Usability testing" maxH="max-h-[580px]" />
              </Card>
              <Card title="Qualitative Findings">
                <Img src={Qf} alt="Qualitative findings" maxH="max-h-[580px]" />
              </Card>
            </div>
          </Section>

          <Divider />

          {/* ✅ Learning & Feedback */}
          <Section
            id="learning-feedback"
            title="Learning & Feedback"
            kicker="What worked and what I learned"
          >
            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Key Learnings">
                <ul className="list-inside list-disc space-y-2">
                  <li>Clear navigation and hierarchy are crucial for government apps.</li>
                  <li>
                    Consistent language (English/Bangla) improves user trust and reduces confusion.
                  </li>
                  <li>Progress indicators help reduce form abandonment.</li>
                  <li>Quick access to frequently used services enhances efficiency.</li>
                </ul>
              </Card>

              <Card title="User & Team Feedback">
                <ul className="list-inside list-disc space-y-2">
                  <li>Users appreciated the simplified <strong className="text-white">Apply</strong> and <strong className="text-white">Track</strong> flows.</li>
                  <li>
                    Positive response to <strong className="text-white">Quick Search</strong> and{" "}
                    <strong className="text-white">Notifications</strong> for updates.
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="What I would improve next">
                <ul className="list-inside list-disc space-y-2">
                  <li>Add clearer error prevention and inline form validation.</li>
                  <li>Introduce service bookmarks and recent activity shortcuts.</li>
                  <li>Expand accessibility options (text size, voice guidance, contrast toggle).</li>
                  <li>Run moderated testing with elderly and low-literacy users for deeper insights.</li>
                </ul>
              </Card>

              <Card title="Impact (Portfolio framing)">
                <p>
                  This case study strengthened my ability to connect{" "}
                  <span className="text-emerald-200 font-semibold">
                    research-driven insights
                  </span>{" "}
                  with practical UI decisions, focusing on clarity, trust, and task completion —
                  especially important in digital government services.
                </p>
              </Card>
            </div>
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

export default ThirdProject;
