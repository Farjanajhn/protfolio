// SecondProject.jsx — Trubble Buddy Case Study (React + Tailwind + AOS)
// Pure React JSX (no TypeScript).
// Hero fills wide, equal 4-grid stats, simplified overview,
// added Workshops (with body map image), single Persona,
// Concept (wearable locket + mockup2), Hi-Fi, Prototype, Outcome, Reflection.

import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ---------- Image imports ----------
import hero2 from "../assets/image/hero2.png";

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

// ---------- UI helpers ----------
const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mx-auto max-w-6xl">
      {kicker ? (
        <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
          {kicker}
        </p>
      ) : null}
      {title ? (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>
      ) : null}
      <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">
        {children}
      </div>
    </div>
  </section>
);

const Stat = ({ emoji, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gray-900 text-white text-xl">
      {emoji}
    </div>
    <div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  </div>
);

// ---------- Carousel (no extra deps) ----------
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
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div className="min-w-full" key={i}>
            <div
              className={`${aspect} relative w-full ${
                fit === "contain"
                  ? "bg-white"
                  : "bg-gradient-to-br from-gray-50 to-gray-100"
              }`}
            >
              <img
                src={s.src}
                alt={s.alt || `Slide ${i + 1}`}
                className={`absolute inset-0 h-full w-full ${
                  fit === "contain" ? "object-contain p-2 md:p-3" : "object-cover"
                }`}
              />
            </div>
            {(s.caption || s.alt) && (
              <div className="border-t border-gray-100 p-4 text-sm text-gray-600">
                {s.caption || s.alt}
              </div>
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow ring-1 ring-gray-200 hover:bg-white"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow ring-1 ring-gray-200 hover:bg-white"
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-gray-900" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Divider = () => (
  <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
);

// ---------- Main Page ----------
const SecondProject = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    document.title = "Trubble Buddy — Case Study";
  }, []);

  const toc = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "workshops", label: "Co-design workshops" },
      { id: "lofi", label: "Lo-fi Sketch" }, // NEW
      { id: "personas", label: "Persona" },
      { id: "concept", label: "Design Explanation" },
      { id: "hifi", label: "Hi-fi Locket & UI" },
      { id: "reflection", label: "Reflection & Next" },
    ],
    []
  );

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
      />

      {/* Hero */}
      <header
        className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-24 md:px-10 lg:px-12"
        data-aos="fade-down"
      >
        <div className="grid items-start gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur">
              <span>🌱 Co-design · Youth · Mental Health</span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Trubble Buddy
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
              A participatory design project for young people experiencing
              anxiety. The outcome is a <b>wearable calming locket</b> paired
              with a <b>personalizable mobile app</b> for discreet, ethical,
              and approachable support.
            </p>

            {/* Full-width hero image */}
            <div className="mt-6 w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={hero2}
                alt="Trubble Buddy hero"
                className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-[28rem]"
              />
            </div>

            {/* Equal 4-grid stats */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
              <Stat emoji="👤" label="Role" value="UX Researcher & Co-designer" />
              <Stat emoji="🗓️" label="Duration" value="6 weeks" />
              <Stat emoji="🧰" label="Tools" value="Figma · Paper " />
              <Stat emoji="👥" label="Workshop" value="5–6 students" />
            </div>
          </div>
        </div>

        {/* Local TOC */}
        <nav className="mt-8 hidden md:block">
          <ul className="flex flex-wrap gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-sm text-gray-700 shadow-sm backdrop-blur">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="inline-block rounded-full px-3 py-1 hover:bg-gray-100"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl space-y-20 px-6 pb-28 md:px-10 lg:px-12">
        {/* Overview (no process talk) */}
        <Section id="overview" title="Overview">
          <p>
            Trubble Buddy bridges the gap between overloaded care services and
            impersonal digital tools. The system combines a{" "}
            <strong>wearable locket</strong> that delivers multisensory calm
            (sound, vibration, warmth) with a <strong>mobile app</strong> for
            personalization and discreet control. The focus is on{" "}
            <strong>comfort, privacy,</strong> and <strong>quick access</strong>{" "}
            — supporting teens and young adults in real contexts like lectures,
            corridors, and commutes.
          </p>
        </Section>

        <Divider />

        {/* Problem (images removed) */}
        <Section id="problem" title="Problem">
          <p>
            Young people commonly experience anxiety but face barriers to help:
            <strong> stigma</strong>, <strong>long waiting times</strong>, and a{" "}
            <strong>lack of discreet coping tools</strong> usable in public or
            school settings. Many apps feel clinical or generic; physical tools
            can be bulky or conspicuous.
          </p>
          <p className="italic text-gray-600 text-center">
            “How might we design a discreet, ethical, and youth-centered tool
            to support anxiety in the moment?”
          </p>
        </Section>

        <Divider />

        {/* Workshops (NEW) */}
        <Section
          id="workshops"
          title="Co-Design Workshops"
          kicker="What we learned from students"
        >
          <p>
            We facilitated 60–90 minute participatory sessions to understand how
            anxiety shows up in the body and which self-strategies already help.
            Activities included open discussion, <strong>body mapping</strong>,
            object ideation, and quick feedback rounds.
          </p>
          <div className="grid gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-7 space-y-3" data-aos="fade-up">
              <h3 className="text-lg font-semibold text-gray-900">Key insights</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>Where it’s felt:</strong> chest tightness, stomach
                  flutter, throat pressure, cold hands.
                </li>
                <li>
                  <strong>What helps:</strong> steady breathing, rhythmic
                  tapping, holding something warm, soft ambient sound, subtle
                  haptics.
                </li>
                <li>
                  <strong>Constraints:</strong> must be <em>discreet</em>,
                  quick to activate, and comfortable to wear in class.
                </li>
              </ul>
              <p className="text-gray-700">
                These findings directly shaped the locket’s multi-sensory
                design and the app’s quick-access presets.
              </p>
            </div>
            <div className="md:col-span-5" data-aos="fade-up" data-aos-delay="75">
              <img
                src={bby4}
                alt="Workshop body map — where anxiety is felt"
                className="w-full rounded-2xl shadow object-contain bg-white"
              />
              <p className="mt-3 text-sm text-gray-600">
                Body mapping helped us visualize how sensations move during
                anxious moments and pinpoint calming interventions.
              </p>
            </div>
          </div>
        </Section>

        <Divider />

       
        <Section id="lofi" title="Lo-Fi Sketch">
  <div className="grid items-center gap-8 md:grid-cols-12">
    

    {/* Lo-Fi Summary */}
    <div
      className="md:col-span-7 space-y-4"
      data-aos="fade-up"
      data-aos-delay="75"
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Early Concept Exploration</h3>
        <p className="text-gray-700">
          We created quick paper sketches to test how a calming wearable and companion app 
          might look and feel. These low-fidelity prototypes helped us validate core ideas 
          before investing in detailed visuals.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h4 className="font-medium text-gray-900">Purpose</h4>
          <ul className="mt-2 list-inside list-disc text-gray-700 text-sm space-y-1">
            <li>Visualize basic interaction flow</li>
            <li>Test clarity of task reporting</li>
            <li>Check if the concept feels intuitive</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h4 className="font-medium text-gray-900">Key Learnings</h4>
          <ul className="mt-2 list-inside list-disc text-gray-700 text-sm space-y-1">
            <li>Simple sketches sparked feedback quickly</li>
            <li>Users valued discreet design from the start</li>
            <li>Iterating early reduced wasted effort later</li>
          </ul>
        </div>
      </div>

      <p className="text-sm italic text-gray-600">
        “Even rough sketches gave us valuable input on how the product should feel in real use.”
      </p>
            </div>
            {/* Lo-Fi Image */}
    <div className="md:col-span-5" data-aos="fade-up">
      <img
        src={lifi}
        alt="Lo-Fi Sketch"
        className="w-full rounded-2xl shadow bg-white object-contain"
      />
    </div>
  </div>
        </Section>
        <Divider />
 {/* Persona — single, aligned text + image */}
<Section id="personas" title="Persona">
  <div className="grid items-center gap-8 md:grid-cols-12">
    {/* Persona Image */}
    <div className="md:col-span-5" data-aos="fade-up">
      <img
        src={bby3}
        alt="Persona — Agnes"
        className="w-full rounded-2xl shadow"
      />
    </div>

    {/* Persona Summary (short & scannable) */}
    <div
      className="md:col-span-7 space-y-4"
      data-aos="fade-up"
      data-aos-delay="75"
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Agnes, 24 — Developer</h3>
        <p className="text-gray-700">
          Social anxiety spikes in new or crowded settings. Wants discreet, fast relief that fits everyday life.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h4 className="font-medium text-gray-900">Goals</h4>
          <ul className="mt-2 list-inside list-disc text-gray-700 text-sm space-y-1">
            <li>Manage stress in work & social settings</li>
            <li>Try new things with confidence</li>
            <li>Stay connected with friends & family</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <h4 className="font-medium text-gray-900">Needs</h4>
          <ul className="mt-2 list-inside list-disc text-gray-700 text-sm space-y-1">
            <li>Discreet, quick-start calming (≤3 taps)</li>
            <li>Personalized sound/vibration/warmth</li>
            <li>Comfortable, jewelry-like form factor</li>
          </ul>
        </div>
      </div>

      <p className="text-sm italic text-gray-600">
        “I want to do more and meet new people, but I get nervous outside my comfort zone.”
      </p>
    </div>
  </div>
</Section>

        <Divider />

          {/* Hi-Fi UI Screens */}
          <Section id="hifi" title="Hi-Fi Wearable and UI Screens">
          
          <Carousel
            slides={[
              { src: bby2, alt: "Hi-Fi — onboarding" },
              { src: mockup1, alt: "Hi-Fi — preset list" },
              
              { src: landing2, alt: "Hi-Fi — onboarding" },
              
              { src: soundImg, alt: "Hi-Fi — session view" },
              { src: vibrationImg, alt: "Hi-Fi — onboarding" },
              { src: temperatureImg, alt: "Hi-Fi — onboarding" },
              
            ]}
            auto
            fit="contain"
            aspect="aspect-[16/9]"
          />
        </Section>
      

        {/* Concept — wearable locket + mockup2 with rich explanation */}
        <Section id="concept" title="Design Explanation">
          <p>
            The concept pairs a <strong>wearable calming locket</strong> with a{" "}
            <strong>easy to connect app</strong>. The locket offers immediate
            multisensory grounding without needing to look at a screen; the app
            lets users set sound, vibration, and tempareture according to their needs.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2" data-aos="fade-up">
            {/* Wearable locket visual */}
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow">
              <img
                src={bby2}
                alt="Wearable locket — form exploration"
                className="w-full rounded-xl object-contain"
              />
              <div className="mt-4 text-sm text-gray-700">
                <strong>Wearable Locket.</strong> Jewelry-like in form, crafted with skin-friendly materials. Gentle warmth and subtle micro-haptics are tuned to be soothing rather than distracting. Designed to blend naturally with everyday outfits, remain discreet in social settings, and connect effortlessly with the companion app.
              </div>
            </div>

            {/* App mockup (mockup2) */}
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow">
            <img
                src={landing2}
                alt="Mobile app — session view"
                className="w-full rounded-xl object-contain"
              />
              <img
                src={mockup2}
                alt="Mobile app — session view"
                className="w-full rounded-xl object-contain"
              />
              <div className="mt-4 text-sm text-gray-700">
                <strong>Mobile App.</strong> A discreet companion interface that connects seamlessly with the locket. Users can personalize calming presets—adjusting vibration, sound, and warmth—and switch to quick modes with just a few taps. The design emphasizes clarity, privacy, and speed, ensuring support feels immediate and effortless.
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3" data-aos="fade-up">
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow">
              <img
                src={soundImg}
                alt="Sound interaction"
                className="w-full rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-700">
                <strong>Sound</strong> — soft ambients mask noise and support
                paced breathing without requiring headphones,user can also connect with spotify easily to listen their favorite music.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow">
              <img
                src={vibrationImg}
                alt="Vibration interaction"
                className="w-full rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-700">
                <strong>Vibration</strong> — even, low-frequency patterns that
                feel like a reassuring pulse in the hand or on the chest.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow">
              <img
                src={temperatureImg}
                alt="Temperature interaction"
                className="w-full rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-700">
                <strong>Warmth</strong> — capped gentle heat provides a cozy
                anchor, tuned for safety and comfort.
              </p>
            </div>
          </div>
        </Section>

        <Divider />

      


 

    

        {/* Reflection & Next Steps */}
        <Section id="reflection" title="Reflection & Next Steps">
        <p>
  As part of the co-design process, we created a <strong>value network map</strong>, 
  <strong>stakeholder map</strong>, and <strong>ecology map</strong> to better understand 
  relationships, responsibilities, and opportunities for support. These artifacts guided 
  our design decisions around tone, comfort, and ethics. However, due to limited time and 
  resources, we were not able to fully explore all possible directions.
</p>
<p>
  We prioritized <strong>gentle defaults</strong>, <strong>fast access</strong>, and 
  <strong> privacy controls</strong>. For future development, we envision:
</p>
<ul className="list-inside list-disc space-y-2">
  <li>Longitudinal pilot with voluntary check-ins.</li>
  <li>Refined warmth caps and haptic curves.</li>
  <li>Optional peer support links (opt-in, consent-based).</li>
</ul>
        </Section>

        {/* Back */}
        <div className="pt-6 text-center">
          <a href="/" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white shadow hover:bg-gray-800">
            <span>← Back to Home</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default SecondProject;
