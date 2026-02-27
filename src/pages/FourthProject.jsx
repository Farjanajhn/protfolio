// FourthProject.jsx — Ultra Public Transportation App UX Case Study
// DARK + GLASS style with LIGHT BLUE IMAGE BACKGROUNDS
// Primary color: #014590
// Full file — Ultra case study context (images kept; you can replace later)

import { useEffect, useState } from "react";
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

import APPLY from "../assets/image/UX4TH/pt.png";
import TRACK from "../assets/image/UX4TH/bt.png";



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
 * - no nested borders
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
const FourthProject = () => {
  const progress = useScrollProgress();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    document.title = "Ultra — UX Case Study";
  }, []);


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
        <header className="pt-20 pb-10">
          <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span>🚌 Ultra · Public Transportation · Umeå</span>
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
              Ultra — UX Improvement Case Study
            </h1>

            <p className="mt-3 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed text-white/90">
              A research-driven UX case study focused on improving{" "}
              <span className="text-[#9ecbff] font-semibold">
                ticket clarity for newcomers
              </span>
              , and{" "}
              <span className="text-[#9ecbff] font-semibold">
                faster “next bus” access
              </span>{" "}
              — especially for users with different language backgrounds and
              travel habits.
            </p>

            {/* ✅ HERO IMAGE BLOCK (kept; you’ll replace later) */}
            <div className="mt-6 w-full h-full overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-[#eaf3ff] via-[#dbeaff] to-[#cfe3ff] p-2">
              <img
                src={IMG}
                alt="Ultra hero"
                className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-full rounded-xl"
                loading="lazy"
              />
            </div>

          
          </div>
        </header>

    

        <main className="space-y-2 pb-24">
          {/* Overview */}
          <Section id="overview" title="Project Overview">
            <p>
              Ultra is a public transportation app used in Umeå for planning trips,
              viewing departures, and purchasing/activating tickets. This case study
              evaluates usability through a cultural and usage-context lens by
              comparing insights from different perspective of {" "}
              <strong className="text-white">Users</strong> 
            </p>

            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
                 <Card title="Project Details">
                <ul className="list-inside list-disc space-y-2">
                  <li>Duration: 6–8 weeks</li>
                  <li>Role: UX Researcher & UI Designer</li>
                  <li>Tools: Figma, Chatgpt, Discod, Doc, FigJam</li>
                             <li>Methods: Interviews, wireframing, prototyping</li>
                </ul>
              </Card>
              <Card title="Project Focus">
                <ul className="list-inside list-disc space-y-2">
                  <li>Reduce confusion in ticket types and labels</li>
                  <li>Support both routine and occasional travel patterns</li>
                  <li>Increase inclusivity for non-Swedish speakers</li>
                </ul>
              </Card>
 
           
            </div>
          </Section>

          <Divider />

          {/* Problem */}
          <Section id="problem" title="Problem Statement" kicker="What is broken today">
            <Card title="Problem Statement">
              <p>
                Using the Ultra app shouldn’t feel stressful — but for many users, it does.
Buying a ticket can feel confusing, important information isn’t always easy to find, and real-time updates aren’t clear at a quick glance. Simple tasks often take more steps than expected.
For newcomers and non-native users, unclear ticket terms and limited guidance make things even harder. Instead of feeling confident before boarding, users often feel uncertain and rushed.
Public transport should reduce stress — not add to it.
              </p>
            </Card>

       
          </Section>

          <Divider />

          {/* Solution */}
          <Section id="solution" title="Possible Solution" kicker="What we propose">
            <Card title="Proposed Improvement Direction">
              <p>
           This redesign aims to make Ultra feel clearer, faster, and more welcoming for everyone.
First, improve information visibility by bringing the most important actions — like buying a ticket or checking departures — directly to the home screen. Users shouldn’t have to search or second-guess where to tap.
Second, simplify ticket language and remove confusing terms, especially for newcomers and non-native users. Using clear labels and short, helpful explanations can reduce hesitation and prevent mistakes.
The focus is on making everyday travel feel straightforward and stress-free.
              </p>
            </Card>

          </Section>

          <Divider />

          {/* Audience */}
          <Section id="audience" title="Target Users" kicker="Who we designed for">
            <div className="grid gap-5 md:grid-cols-2" data-aos="fade-up">
              <Card title="Primary audiences">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong className="text-white">Foreign daily commuters</strong> — rely on Ultra daily,
                    low Swedish proficiency, need clarity and predictable flows
                  </li>
                  <li>
                    <strong className="text-white">Swedish infrequent riders</strong> — use buses for errands,
                    need quick access and minimal input
                  </li>
                  <li>
                    <strong className="text-white">Newcomers</strong> — unfamiliar with zones/terms and local
                    norms, need guidance and plain language
                  </li>
                  <li>
                    <strong className="text-white">Cold-weather riders</strong> — value certainty and reduced waiting
                    time outdoors
                  </li>
                </ul>
              </Card>

              <Card title="Accessibility & inclusivity considerations">
                <ul className="list-inside list-disc space-y-2">
                  <li>Language consistency (complete English coverage)</li>
                  <li>Clear system status (late bus cues + confirmations)</li>
                  <li>Discoverable controls (live tracking, filters, favorites)</li>
                  <li>Keyboard and spelling tolerance for stop searches</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Approach */}
          <Section id="approach" title="Design Approach" kicker="How decisions were made">
            <Card title="Research-driven approach">
              <p>
                This study used interview insights to identify friction points in
                information visibility, language clarity, and discoverability.
                Recommendations align with usability principles: visibility of system status,
                recognition over recall, and minimal user input for frequent tasks.
              </p>
            </Card>

          
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
              <Card title="Primary Persona — Foreign Daily User (Nimali)">
                <p>
                  Represents a daily commuter with low Swedish proficiency who depends on
                  Ultra for stop times and ticketing. Needs clear language, stable feedback,
                  and less clutter in busy areas.
                </p>
                <div className="mt-4">
                  <Img src={UP2} alt="Persona 1" maxH="max-h-[580px]" />
                </div>
              </Card>

              <Card title="Secondary Persona — Swedish Infrequent User (Erik)">
                <p>
                  Represents an occasional rider who wants quick, location-aware info
                  and minimal input. Defaults to Google Maps for door-to-door context.
                </p>
                <div className="mt-4">
                  <Img src={UP1} alt="Persona 2" maxH="max-h-[580px]" />
                </div>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Empathy */}
          <Section id="empathy" title="Empathy Map" kicker="Needs, pain points, and goals">
            <Card >
              <Img src={EP} alt="Empathy map" maxH="max-h-[580px]" />
            </Card>
          </Section>

          <Divider />

          {/* MoSCoW */}
          <Section id="moscow" title="MoSCoW Model" kicker="Feature prioritization">
            <Card title="MoSCoW Model – Ultra Improvements">
              <p>
                Prioritization focuses on discoverability and clarity first (must-have),
                then convenience and personalization (should-have).
              </p>
              <div className="mt-4">
                <Img src={MC} alt="MoSCoW model" maxH="max-h-[580px]" />
              </div>
            </Card>
          </Section>

          <Divider />

          {/* Competitive */}
          <Section id="competitive" title="Competitive Analysis" kicker="Learning from similar apps">
            <p>
              Competitors often emphasize door-to-door planning, clear live tracking entry points,
              and fast “next departure” access on launch. Ultra can retain its strengths (tickets and
              local service info) while improving discoverability and context-aware guidance.
            </p>
            <div className="mt-4">
              <Img src={CP} alt="Competitive analysis" maxH="max-h-[580px]" />
            </div>
          </Section>

          <Divider />


          {/* Design System */}
          <Section id="design-system" title="Design System" kicker="Typography, components, grid">
            <div className="space-y-5" data-aos="fade-up">
              <Card title="Typography & Color">
                <p className="text-white/85">
                  Primary accent color:{" "}
                  <span className="font-semibold text-[#9ecbff]">#014590</span>.
                  The design system keeps contrast high for readability while maintaining
                  a calm, transport-inspired visual identity.
                </p>
                <Img src={TYPOGRAPHY} alt="Typography and colors" maxH="max-h-[580px]" />
              </Card>
              <Card title="Iconography">
                <Img src={ICONOGRAPHY} alt="Iconography" maxH="max-h-[580px]" />
              </Card>
              <Card title="Components">
                <Img src={COMPONENT} alt="Components" maxH="max-h-[580px]" />
              </Card>
              <Card title="Grids System">
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
                <Card title="Landing / Home (Quick access)">
                  <Img src={LD} alt="Landing page" maxH="max-h-[540px]" />
                </Card>
               
                <Card title="Plan a Trip (Reduced input)">
                  <Img src={APPLY} alt="Trip planning" maxH="max-h-[540px]" />
                </Card>
                <Card title="Buy a Ticket">
                  <Img src={TRACK} alt="Live tracking" maxH="max-h-[540px]" />
                </Card>
                
              </div>
            </ScrollPanel>
          </Section>

          <Divider />



          {/* Learning & Feedback */}
          <Section
            id="learning-feedback"
            title="Learning & Feedback"
            kicker="What worked and what I learned"
          >
            <div className="grid gap-5 md:grid-cols-1" data-aos="fade-up">
              <Card title="Key Learnings">
                <ul className="list-inside list-disc space-y-2">
                  <li>Discoverability matters more than feature quantity.</li>
                  <li>Real-time tracking needs clearer entry points and visuals.</li>
                  <li>Plain language improves inclusivity and reduces errors.</li>
                  <li>Location-aware shortcuts reduce user effort significantly.</li>
                </ul>
              </Card>
            </div>

            <div className="grid gap-5 md:grid-cols-1" data-aos="fade-up">

              <Card title="Impact (Portfolio framing)">
                <p>
                  This case study strengthened my ability to translate{" "}
                  <span className="text-[#9ecbff] font-semibold">
                    qualitative insights
                  </span>{" "}
                  into actionable UX priorities for public systems—where speed,
                  clarity, and trust are essential.
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
              <span>← Back to Home </span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FourthProject;