// SecondProject.jsx — Trubble Buddy Case Study (MATCHES ThirdProject DARK + GLASS STYLE)
// React + Tailwind + AOS — Pure JSX (no TS)
// ✅ Converted your LIGHT Trubble Buddy layout into the SAME style system as ThirdProject:
//    - Dark + glass panels
//    - Light green gradient image frames (ONE border only)
//    - Scroll progress bar
//    - TOC pill nav (glass)
//    - Back button (emerald)
// ✅ Content/sections kept the same (Overview, Problem, Workshops, Lo-Fi, Persona, Hi-Fi Carousel, Concept, Reflection)

import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ---------- Image imports ----------
import hero2 from "../assets/image/UX2nd/hero2.png";

import bby2 from "../assets/image/bby2.png";
import bby3 from "../assets/image/bby3.png";
import bby4 from "../assets/image/bby4.png"; // Workshop body map

import landing2 from "../assets/image/UX2nd/landing-2.png";
import mockup1 from "../assets/image/UX2nd/mockup1.png";
import mockup2 from "../assets/image/UX2nd/mockup2.png";
import lifi from "../assets/image/UX2nd/lifi.png";
import soundImg from "../assets/image/UX2nd/Sound.png";
import temperatureImg from "../assets/image/UX2nd/temparature.png";
import vibrationImg from "../assets/image/UX2nd/vibration.png";

// ---------- UI helpers (ThirdProject style) ----------
const Divider = () => (
  <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
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

const Toc = ({ items }) => (
  <nav className="mt-8 hidden md:block">
    <ul className="flex flex-wrap gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-2 text-sm text-white shadow-2xl backdrop-blur-md">
      {items.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            className="inline-block rounded-full px-3 py-1 hover:bg-white/15 transition"
          >
            {t.label}
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

// ---------- Carousel (same behavior, styled for DARK+GLASS) ----------
const Carousel = ({
  slides = [],
  auto = true,
  interval = 3500,
  aspect = "aspect-[16/9]",
  fit = "contain",
}) => {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (!auto || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [auto, interval, count]);

  const goTo = (i) => setIndex((i + count) % count);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] shadow-2xl backdrop-blur-md">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div className="min-w-full" key={i}>
            <div
              className={`${aspect} relative w-full bg-gradient-to-br from-emerald-50/60 via-emerald-100/45 to-teal-100/55`}
            >
              <img
                src={s.src}
                alt={s.alt || `Slide ${i + 1}`}
                className={`absolute inset-0 h-full w-full ${
                  fit === "contain"
                    ? "object-contain p-3 md:p-4"
                    : "object-cover"
                } rounded-2xl`}
              />
            </div>

            {(s.caption || s.alt) ? (
              <div className="border-t border-white/10 p-4 text-sm text-white/80">
                {s.caption || s.alt}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {count > 1 ? (
        <>
          <button
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 shadow ring-1 ring-white/20 hover:bg-black/55 transition"
            aria-label="Previous slide"
          >
            <span className="text-white">‹</span>
          </button>
          <button
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 shadow ring-1 ring-white/20 hover:bg-black/55 transition"
            aria-label="Next slide"
          >
            <span className="text-white">›</span>
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-emerald-300" : "bg-white/35"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

// ---------- Main Page ----------
const SecondProject = () => {
  const progress = useScrollProgress();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    document.title = "Trubble Buddy — Case Study";
  }, []);

  const toc = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "workshops", label: "Co-design workshops" },
      { id: "lofi", label: "Lo-fi Sketch" },
      { id: "personas", label: "Persona" },
      { id: "hifi", label: "Hi-fi Locket & UI" },
      { id: "concept", label: "Design Explanation" },
      { id: "reflection", label: "Reflection & Next" },
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

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        {/* Hero */}
        <header className="pt-20 pb-10" data-aos="fade-down">
          <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span>🌱 Co-design · Youth · Mental Health</span>
            </div>

            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
              Trubble Buddy
            </h1>

            <p className="mt-3 max-w-3xl text-sm md:text-base lg:text-lg leading-relaxed text-white/90">
              A participatory design project for young people experiencing anxiety.
              The outcome is a <b>wearable calming locket</b> paired with a{" "}
              <b>personalizable mobile app</b> for discreet, ethical, and approachable support.
            </p>

            {/* Hero image (modern light-green frame like ThirdProject) */}
            <div className="mt-6 w-full h-full overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 p-2">
              <img
                src={hero2}
                alt="Trubble Buddy hero"
                className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-[28rem] rounded-xl"
              />
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
              <Stat emoji="👤" label="Role" value="UX/UI designer" />
              <Stat emoji="🗓️" label="Duration" value="6 weeks" />
              <Stat emoji="🧰" label="Tools" value="Figma · Paper" />
              <Stat emoji="👥" label="Workshop" value="5–6 students" />
            </div>

            {/* TOC */}
           
          </div>
        </header>

        <main className="space-y-2 pb-24">
          {/* Overview */}
          <Section id="overview" title="Overview">
            <p>
              Trubble Buddy bridges the gap between overloaded care services and
              impersonal digital tools. The system combines a{" "}
              <strong className="text-white">wearable locket</strong> that delivers
              multisensory calm (sound, vibration, warmth) with a{" "}
              <strong className="text-white">mobile app</strong> for personalization and
              discreet control. The focus is on{" "}
              <strong className="text-white">comfort</strong>,{" "}
              <strong className="text-white">privacy</strong>, and{" "}
              <strong className="text-white">quick access</strong>.
            </p>
          </Section>

          <Divider />

          {/* Problem */}
          <Section id="problem" title="Problem">
            <p>
              Young people commonly experience anxiety but face barriers to help:
              <strong className="text-white"> stigma</strong>,{" "}
              <strong className="text-white">long waiting times</strong>, and a{" "}
              <strong className="text-white">lack of discreet coping tools</strong>{" "}
              usable in public or school settings. Many apps feel clinical or generic;
              physical tools can be bulky or conspicuous.
            </p>
            <Card title="Design question">
              <p className="italic text-white/80 text-center">
                “How might we design a discreet, ethical, and youth-centered tool
                to support anxiety in the moment?”
              </p>
            </Card>
          </Section>

          <Divider />

          {/* Workshops */}
          <Section
            id="workshops"
            title="Co-Design Workshops"
            kicker="What we learned from students"
          >
            <p>
              We facilitated 60–90 minute participatory sessions to understand how
              anxiety shows up in the body and which strategies already help.
              Activities included open discussion, <strong className="text-white">body mapping</strong>,
              object ideation, and feedback rounds.
            </p>

            <div className="grid gap-6 md:grid-cols-12 items-start" data-aos="fade-up">
              <div className="md:col-span-7 space-y-4">
                <Card title="Key insights">
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      <strong className="text-white">Where it’s felt:</strong> chest tightness,
                      stomach flutter, throat pressure, cold hands.
                    </li>
                    <li>
                      <strong className="text-white">What helps:</strong> steady breathing,
                      rhythmic tapping, warmth, soft ambient sound, subtle haptics.
                    </li>
                    <li>
                      <strong className="text-white">Constraints:</strong> must be discreet,
                      quick to activate, and comfortable in class.
                    </li>
                  </ul>
                  <p className="mt-3 text-white/85">
                    These findings shaped the locket’s multi-sensory design and the app’s quick presets.
                  </p>
                </Card>
              </div>

              <div className="md:col-span-5" data-aos="fade-up" data-aos-delay="75">
                <Img
                  src={bby4}
                  alt="Workshop body map — where anxiety is felt"
                  maxH="max-h-[520px]"
                />
                <p className="mt-3 text-sm text-white/75">
                  Body mapping helped visualize how sensations move during anxious moments.
                </p>
              </div>
            </div>
          </Section>

          <Divider />

          {/* Lo-Fi */}
          <Section id="lofi" title="Lo-Fi Sketch">
            <div className="grid items-start gap-6 md:grid-cols-12" data-aos="fade-up">
              <div className="md:col-span-7 space-y-4">
                <Card title="Early concept exploration">
                  <p>
                    We created quick sketches to test how a calming wearable and companion app
                    might look and feel. Low-fi prototypes helped validate the core idea before
                    investing in detailed visuals.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="rounded-2xl bg-white/[0.07] p-4 shadow-2xl backdrop-blur-md">
                      <h4 className="font-semibold text-white">Purpose</h4>
                      <ul className="mt-2 list-inside list-disc text-white/85 text-sm space-y-1">
                        <li>Visualize the interaction flow</li>
                        <li>Test clarity of controls</li>
                        <li>Check if it feels intuitive</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-white/[0.07] p-4 shadow-2xl backdrop-blur-md">
                      <h4 className="font-semibold text-white">Key learnings</h4>
                      <ul className="mt-2 list-inside list-disc text-white/85 text-sm space-y-1">
                        <li>Sketches sparked feedback quickly</li>
                        <li>Discreet design mattered early</li>
                        <li>Iterating early saved time later</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm italic text-white/70 mt-3">
                    “Even rough sketches gave valuable input on how the product should feel in real use.”
                  </p>
                </Card>
              </div>

              <div className="md:col-span-5">
                <Img src={lifi} alt="Lo-Fi Sketch" maxH="max-h-[520px]" />
              </div>
            </div>
          </Section>

          <Divider />

          {/* Persona */}
          <Section id="personas" title="Persona">
            <div className="grid items-start gap-6 md:grid-cols-12" data-aos="fade-up">
              <div className="md:col-span-5">
                <Img src={bby3} alt="Persona — Agnes" maxH="max-h-[520px]" />
              </div>

              <div className="md:col-span-7 space-y-4">
                <Card title="Agnes, 24 — Developer">
                  <p>
                    Social anxiety spikes in new or crowded settings. She wants discreet, fast
                    relief that fits everyday life.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="rounded-2xl bg-white/[0.07] p-4 shadow-2xl backdrop-blur-md">
                      <h4 className="font-semibold text-white">Goals</h4>
                      <ul className="mt-2 list-inside list-disc text-white/85 text-sm space-y-1">
                        <li>Manage stress in work & social settings</li>
                        <li>Try new things with confidence</li>
                        <li>Stay connected with friends & family</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-white/[0.07] p-4 shadow-2xl backdrop-blur-md">
                      <h4 className="font-semibold text-white">Needs</h4>
                      <ul className="mt-2 list-inside list-disc text-white/85 text-sm space-y-1">
                        <li>Quick-start calming (≤3 taps)</li>
                        <li>Personalized sound/vibration/warmth</li>
                        <li>Jewelry-like, comfortable form factor</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm italic text-white/70 mt-3">
                    “I want to do more and meet new people, but I get nervous outside my comfort zone.”
                  </p>
                </Card>
              </div>
            </div>
          </Section>

          <Divider />

          {/* Hi-Fi */}
          <Section id="hifi" title="Hi-Fi Wearable and UI Screens">
            <Carousel
              slides={[
                { src: bby2, alt: "Hi-Fi — onboarding" },
                { src: mockup1, alt: "Hi-Fi — preset list" },
                { src: landing2, alt: "Hi-Fi — connect / landing" },
                { src: soundImg, alt: "Hi-Fi — sound controls" },
                { src: vibrationImg, alt: "Hi-Fi — vibration controls" },
                { src: temperatureImg, alt: "Hi-Fi — warmth controls" },
              ]}
              auto
              fit="contain"
              aspect="aspect-[16/9]"
            />
          </Section>

          <Divider />

          {/* Concept */}
          <Section id="concept" title="Design Explanation">
            <p>
              The concept pairs a <strong className="text-white">wearable calming locket</strong>{" "}
              with an <strong className="text-white">easy-to-connect app</strong>.
              The locket provides immediate grounding without needing to look at a screen,
              while the app lets users personalize sound, vibration, and temperature.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2" data-aos="fade-up">
              <Card title="Wearable Locket">
                <div className="mt-4">
                  <Img
                    src={bby2}
                    alt="Wearable locket — form exploration"
                    maxH="max-h-[420px]"
                  />
                </div>
                <p className="text-sm text-white/85 mt-4">
                  Jewelry-like form with skin-friendly materials. Gentle warmth and subtle micro-haptics
                  are tuned to be soothing (not distracting). Designed to blend into everyday outfits and
                  remain discreet in social settings.
                </p>
              </Card>

              <Card title="Mobile App">
                <div className="mt-4 space-y-4">
                  <Img
                    src={landing2}
                    alt="Mobile app — landing"
                    maxH="max-h-[260px]"
                  />
                  <Img
                    src={mockup2}
                    alt="Mobile app — session view"
                    maxH="max-h-[260px]"
                  />
                </div>
                <p className="text-sm text-white/85 mt-4">
                  A discreet companion interface that connects seamlessly with the locket.
                  Users can create presets (sound/vibration/warmth) and switch modes quickly.
                  The UI emphasizes clarity, privacy, and speed.
                </p>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3" data-aos="fade-up">
              <Card title="Sound">
                <Img src={soundImg} alt="Sound interaction" maxH="max-h-[260px]" />
                <p className="text-sm text-white/85 mt-3">
                  Soft ambients support paced breathing. Optionally connect Spotify for familiar comfort audio.
                </p>
              </Card>

              <Card title="Vibration">
                <Img
                  src={vibrationImg}
                  alt="Vibration interaction"
                  maxH="max-h-[260px]"
                />
                <p className="text-sm text-white/85 mt-3">
                  Even, low-frequency patterns that feel like a reassuring pulse on the chest or in the hand.
                </p>
              </Card>

              <Card title="Warmth">
                <Img
                  src={temperatureImg}
                  alt="Temperature interaction"
                  maxH="max-h-[260px]"
                />
                <p className="text-sm text-white/85 mt-3">
                  Gentle, capped heat provides a cozy anchor, tuned for comfort and safety.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* Reflection */}
          <Section id="reflection" title="Reflection & Next Steps">
            <p>
              As part of the co-design process, we created a{" "}
              <strong className="text-white">value network map</strong>,{" "}
              <strong className="text-white">stakeholder map</strong>, and{" "}
              <strong className="text-white">ecology map</strong> to understand relationships,
              responsibilities, and opportunities for support. These artifacts guided decisions around
              tone, comfort, and ethics.
            </p>
            <p>
              We prioritized <strong className="text-white">gentle defaults</strong>,{" "}
              <strong className="text-white">fast access</strong>, and{" "}
              <strong className="text-white">privacy controls</strong>. Next, we envision:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Longitudinal pilot with voluntary check-ins</li>
              <li>Refined warmth caps and haptic curves</li>
              <li>Optional peer support links (opt-in, consent-based)</li>
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

export default SecondProject;
