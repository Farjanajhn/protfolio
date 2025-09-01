// FirstProject.jsx — Blossom Buddy Case Study (React + Tailwind + AOS)
// Pure React JSX (no TypeScript). Save as FirstProject.jsx
// Features: sticky in-page nav, scroll progress bar, responsive layout, animated sections,
// and a lightweight React carousel (no extra deps). Make sure Tailwind + AOS are configured.

import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ---------- Image imports ----------
import ideation from '../assets/image/ideation.jpg';
import ideation2 from '../assets/image/ideation2.jpg';
import ideation3 from '../assets/image/ideation3.jpg';
import project1 from '../assets/image/project_1.jpg';
import project2 from '../assets/image/UX1st/project2.png';
import happy from '../assets/image/UX1st/happy2.png';
import healthy from '../assets/image/UX1st/all.png';
import sad from '../assets/image/UX1st/sad.png';
import day from '../assets/image/UX1st/Day1.png';
import day2 from '../assets/image/UX1st/Day2.png';
import day3 from '../assets/image/UX1st/Day3.png';
import lofi2 from '../assets/image/UX1st/lofi2.jpeg';
import lofi3 from '../assets/image/UX1st/lofi3.jpeg';
import lofi4 from '../assets/image/UX1st/lofi4.jpeg';
import initial1 from '../assets/image/UX1st/initial1.png';
import initial2 from '../assets/image/UX1st/initial2.png';
import initial3 from '../assets/image/UX1st/initial3.png';
import initial4 from '../assets/image/UX1st/initial3.png';
import final from '../assets/image/UX1st/final.png';
import project8 from '../assets/image/project6.jpg';

// ---------- UI helpers ----------
const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mx-auto max-w-6xl">
      {kicker ? <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">{kicker}</p> : null}
      {title ? <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2> : null}
      <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">{children}</div>
    </div>
  </section>
);

const Stat = ({ emoji, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gray-900 text-white text-xl">{emoji}</div>
    <div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  </div>
);

// ---------- Carousel (no extra libraries) ----------
// `fit` controls image behavior: 'cover' (default) or 'contain' (prevents cropping)
const Carousel = ({
  slides = [],
  auto = true,
  interval = 3500,
  aspect = 'aspect-[16/9]',
  fit = 'cover', // 'cover' | 'contain'
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
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div className="min-w-full" key={i}>
            <div className={`${aspect} relative w-full ${fit === 'contain' ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
              <img
                src={s.src}
                alt={s.alt || `Slide ${i + 1}`}
                className={`absolute inset-0 h-full w-full ${fit === 'contain' ? 'object-contain p-2 md:p-3' : 'object-cover'}`}
              />
            </div>
            {(s.caption || s.alt) && (
              <div className="border-t border-gray-100 p-4 text-sm text-gray-600">{s.caption || s.alt}</div>
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
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-gray-900' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Divider = () => <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />;

// ---------- Scroll progress ----------
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight ? scrolled / docHeight : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
};

const Toc = ({ items }) => (
  <nav className="sticky top-20 z-30 hidden md:block">
    <ul className="flex flex-wrap gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-sm text-gray-700 shadow-sm backdrop-blur">
      {items.map((i) => (
        <li key={i.id}>
          <a href={`#${i.id}`} className="inline-block rounded-full px-3 py-1 hover:bg-gray-100">
            {i.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

// ---------- Main Page ----------
const FirstProject = () => {
  const progress = useScrollProgress();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
    document.title = 'Blossom Buddy — Case Study';
  }, []);

  const tocItems = useMemo(
    () => [
      { id: 'overview', label: 'Overview' },
      { id: 'problem', label: 'Problem & Goals' },
      { id: 'process', label: 'Process' },
      { id: 'ideation', label: 'Ideation' },
      { id: 'lofi', label: 'Low-Fi' },
      { id: 'initial', label: 'Initial Prototype' },
      { id: 'hifi', label: 'Hi-Fi' },
      { id: 'scenarios', label: 'Scenarios' },
      { id: 'testing', label: 'Testing & Insights' },
      { id: 'decisions', label: 'Design Decisions' },
      { id: 'future', label: 'Future & Impact' },
      { id: 'theory', label: 'Theory' },
      { id: 'refs', label: 'References' },
    ],
    []
  );

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Progress bar */}
      <div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gray-900"
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />

      {/* Header (text first) */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-28 md:px-10 lg:px-12">
        <div data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur">
            <span>🌱 Tangible · Gamified · Self-care</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Blossom Buddy</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
            A hybrid interactive system pairing a <em>real plant</em> with a playful digital companion. Users complete daily
            self-improvement tasks; the plant responds with visible state changes and tailored rewards to sustain
            motivation.
          </p>
        </div>

        {/* Carousel (second) — fit='contain' to avoid cropping */}
        <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <Carousel
              slides={[
                { src: project2, alt: 'Hero — Blossom Buddy interface' },
                { src: happy, alt: 'Digital twin: happy state' },
                { src: healthy, alt: 'Digital twin: all needs met' },
                { src: sad, alt: 'Digital twin: needs attention' },
              ]}
              auto
              aspect="aspect-[4/3]"
              fit="contain"
            />
            <div className="flex items-center justify-between border-t border-gray-100 p-4 text-sm text-gray-600">
              <span>☀️ Light</span>
              <span>💧 Water</span>
              <span>🍃 Nutrition</span>
              <span>🎁 Rewards</span>
            </div>
          </div>
        </div>

        {/* Stats (third) */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <Stat emoji="👤" label="Role" value="UX Researcher & Designer" />
          <Stat emoji="🗓️" label="Duration" value="8 weeks" />
          <Stat emoji="🧰" label="Tools" value="Figma · Paper · React" />
          <Stat emoji="🧪" label="Methods" value="Experience · WoZ" />
        </div>

        {/* Local nav */}
        <div className="mt-8">
          <Toc items={tocItems} />
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl space-y-20 px-6 pb-28 md:px-10 lg:px-12">
        {/* Overview */}
        <Section id="overview" title="Project Overview">
          <p>
            The concept blends nature and technology to make personal growth feel alive. Each day the user selects a small
            set of self-development tasks. Completing a task grants the plant a resource (☀️/💧/🍃). Finishing the full set
            unlocks a <strong>special reward</strong>, and every 3–4 days a surprise reward appears to keep excitement high. A
            digital twin visualizes mood, needs, and progress while sensors track the real plant’s water, nutrition, and
            light levels.
          </p>
          <ul className="grid gap-3 text-gray-700 md:grid-cols-2">
            <li>• Real plant + digital twin for <strong>emotional engagement</strong>.</li>
            <li>• <strong>Progress history</strong> and streaks to reinforce habits.</li>
            <li>• <strong>Rewards</strong>: task → resource; set complete → special reward; periodic surprise rewards.</li>
            <li>• <strong>Sensors</strong> to ground motivation in tangible care.</li>
          </ul>
        </Section>

        <Divider />

        {/* Problem & Goals */}
        <Section id="problem" title="Problem & Goals">
          <p>
            It’s hard to stay motivated for everyday self-care and habit change. Generic trackers feel mechanical and easy
            to abandon. Blossom Buddy reframes routine tasks as <em>care for a companion</em>—creating empathy and a meaningful
            feedback loop.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up">
              <h3 className="font-semibold text-gray-900">Goals</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Nurture intrinsic motivation via tangible feedback.</li>
                <li>Make progress <strong>visible</strong>, <strong>rewarding</strong>, and <strong>playful</strong>.</li>
                <li>Support reflection without becoming another chore.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-semibold text-gray-900">Constraints</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Design for quick daily interactions.</li>
                <li>Support different ages and tech familiarity.</li>
                <li>Balance novelty with long-term engagement.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Process */}
        <Section id="process" title="Process" kicker="Iterative, user-centered">
          <p>
            We followed an <strong>experience prototyping</strong> approach supported by sketches, scenarios, and Wizard-of-Oz (WoZ)
            testing. Inspired by <em>Houde &amp; Hill (1997)</em>, we explored <em>look-and-feel</em>, <em>role</em>, and <em>implementation</em> across iterations;
            integrated prototypes helped balance all three. High-fidelity flows were built in Figma and enacted through WoZ
            during evaluation.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
            <Stat emoji="📝" label="Artifacts" value="Sketches · Scenarios · Flows" />
            <Stat emoji="🎬" label="Technique" value="Experience prototyping" />
            <Stat emoji="🧙" label="Testing" value="Wizard-of-Oz" />
            <Stat emoji="💻" label="Hi-Fi" value="Figma screens" />
          </div>
        </Section>

        {/* Ideation */}
        <Section id="ideation" title="Ideation">
          <p>
            We brainstormed a wide range: VR cooking aid, clothing/wardrobe app, training app, smart window, crank-powered
            productivity device, smart food container, and <strong>Blossom Buddy</strong>. We selected Blossom Buddy for its
            uniqueness and strong emotional resonance.
          </p>
         
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2" data-aos="fade-up">
            {[ideation, ideation2].map((img, i) => (
              <img key={i} src={img} alt={`Ideation ${i + 1}`} className="w-full rounded-2xl shadow" />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1" data-aos="fade-up">
            {[ideation3].map((img, i) => (
              <img key={i} src={img} alt={`Ideation ${i + 1}`} className="w-full rounded-2xl shadow" />
            ))}
          </div>
        </Section>

        {/* Low-Fi — slider with fit='contain' */}
        <Section id="lofi" title="Low-Fidelity Prototypes">
          <p>
            Early paper sketches made ideas tangible and quickly testable—great for <em>look-and-feel</em> and discussing
            interactions without over-committing to visuals. We iterated on task selection, reporting, and reward reveals.
          </p>
          <Carousel
            slides={[
              { src: lofi2, alt: 'Low-fi sketch 1' },
              { src: project1, alt: 'Low-fi sketch 2' },
              { src: lofi3, alt: 'Low-fi sketch 3' },
              { src: lofi4, alt: 'Low-fi sketch 4' },
            ]}
            auto
            fit="contain"
            aspect="aspect-[16/9]"
          />
        </Section>

        {/* Initial Prototype — using your images */}
        <Section id="initial" title="Initial Prototype">
          <p>
            Early integrated mockups combining the digital twin with physical form-factor explorations.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2" data-aos="fade-up">
            {[initial1, initial2, initial3, initial4].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Initial prototype ${i + 1}`}
                className="w-full rounded-2xl shadow object-contain bg-white"
              />
            ))}
          </div>
        </Section>

        {/* Hi-Fi — includes your final image */}
        <Section id="hifi" title="High-Fidelity Prototype">
          <p>
            We refined visuals and micro-copy to keep interactions lightweight yet rewarding. The digital twin reflects
            plant mood and needs; completing a daily set reveals a special reward to maintain momentum.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1" data-aos="fade-up">
            {[final].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Hi-fi screen ${i + 1}`}
                className="w-full rounded-2xl shadow object-contain bg-white"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3" data-aos="fade-up">
            {[happy, healthy, sad].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Hi-fi screen ${i + 1}`}
                className="w-full rounded-2xl shadow object-contain bg-white"
              />
            ))}
          </div>
        </Section>

        {/* Scenarios */}
        <Section id="scenarios" title="Experience Scenarios">
          <p>We enacted three scenarios during WoZ evaluation to observe reactions and pacing:</p>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up">
              <h3 className="font-semibold text-gray-900">Scenario 1 — First Day (Productive)</h3>
              <p className="mt-2">
                User completes all tasks (run · meditate · study · tidy desk). Reporting each task grants a resource (☀️/💧/🍃);
                completing the set unlocks a special reward.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay="50">
              <h3 className="font-semibold text-gray-900">Scenario 2 — Second Day (Early Unlock)</h3>
              <p className="mt-2">
                User reports the first task the next morning; a <em>special reward</em> is primed to unlock to test anticipation
                and delight.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-semibold text-gray-900">Sad Scenario — Low Resources</h3>
              <p className="mt-2">
                User has a hectic day and completes nothing. The plant appears sad/low on resources; the interface offers quick
                micro-tasks (read a paragraph, clean desk, 1-minute meditation) to recover.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Carousel
              slides={[
                { src: day, alt: 'Scenario Day 1' },
                { src: day2, alt: 'Scenario Day 2' },
                { src: day3, alt: 'Scenario — Sad / recovery' },
              ]}
              fit="contain"
              aspect="aspect-[16/9]"
            />
          </div>
        </Section>

        {/* Testing & Insights */}
        <Section id="testing" title="User Testing & Feedback" kicker="Wizard-of-Oz sessions + semi-structured interviews">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-4" data-aos="fade-up">
              <ul className="list-inside list-disc space-y-2">
                <li><strong>Controls:</strong> Most users preferred a <em>touch-only</em> interface over physical buttons.</li>
                <li><strong>Mental model:</strong> Sun/water/nutrition bars were clear and meaningful.</li>
                <li><strong>Rewards:</strong> Motivational reward system was well-liked; two users loved a <em>hat</em> reward variant.</li>
                <li><strong>Feedback pace:</strong> Suggested richer plant reactions (very sad → mildly sad) and faster feedback.</li>
                <li><strong>Progress view:</strong> Requested a calendar-like history to visualize streaks and growth.</li>
                <li><strong>Form factor:</strong> Screen placement okay; preferred a gently tilted screen for comfort.</li>
                <li><strong>Alternative embodiment:</strong> One user proposed a toy-like flower for immediate reactions.</li>
              </ul>
            </div>
            <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="100">
              <img src={project8} alt="User testing" className="w-full rounded-2xl shadow object-contain bg-white" />
            </div>
          </div>
        </Section>

        {/* Design Decisions */}
        <Section id="decisions" title="Key Design Decisions">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up">
              <h3 className="font-semibold text-gray-900">Interface</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Primary interaction via <strong>touch</strong>; physical buttons removed.</li>
                <li>Added <strong>mood granularity</strong> (very sad → neutral → happy) for clearer state.</li>
                <li>Introduced <strong>progress calendar</strong> and streak cues.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-semibold text-gray-900">Motivation & Rewards</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Task → resource; set complete → <strong>special reward</strong>; periodic <strong>surprise rewards</strong>.</li>
                <li>Personalizable reward set (e.g., hat variants) for delight.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" data-aos="fade-up" data-aos-delay="150">
              <h3 className="font-semibold text-gray-900">Form & Placement</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Gently <strong>tilted display</strong> for comfortable viewing.</li>
                <li>Option to switch to a <strong>toy-like</strong> plant for instant reactions.</li>
              </ul>
            </div>
            <div
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="font-semibold text-gray-900">Accessibility</h3>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Clear iconography (☀️/💧/🍃), text alternatives, and large tap targets.</li>
                <li>Short sessions; minimal cognitive load; friendly language.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Future & Impact */}
        <Section id="future" title="Future Development & Expected Impact">
          <ul className="list-inside list-disc space-y-2">
            <li>Companion <strong>mobile app</strong> to view daily/weekly/monthly/yearly improvements.</li>
            <li><strong>Remote control</strong> of the display via the app.</li>
            <li><strong>Vacation mode</strong>: temporarily automate care and pause streak pressure.</li>
            <li>Optional <strong>wearable integration</strong> for automatic habit capture.</li>
          </ul>
          <p className="mt-2">
            Expected outcomes include higher adherence to self-care routines, stronger emotional connection to progress,
            and a playful, sustainable habit-building loop.
          </p>
        </Section>

        {/* Theory */}
        <Section id="theory" title="Theoretical Grounding">
          <p>
            Our approach draws on <strong>Experience Prototyping</strong> (Buchenau &amp; Suri, 2000) and <strong>Houde &amp; Hill’s</strong> prototype
            dimensions (1997) to balance look-and-feel, role, and implementation. <strong>Wizard-of-Oz</strong> testing (Lee, 2018)
            enabled realistic evaluations before full implementation. The project also aligns with <strong>Constructive Design
            Research</strong> (Koskinen et al., 2011), creating knowledge through solution-oriented making and iterative refinement.
          </p>
        </Section>

        {/* References */}
        <Section id="refs" title="References">
          <ul className="list-inside list-disc">
            <li>Buchenau, M., &amp; Suri, J. F. (2000). Experience prototyping.</li>
            <li>
              Houde, S., &amp; Hill, C. (1997). Prototyping and design. In M. Helander, T. K. Landauer &amp; P. Prabhu (Eds.), <em>Handbook of HCI</em>.
            </li>
            <li>Blomkvist, J., &amp; Holmlid, S. (2007). Prototyping practices and notations.</li>
            <li>Lee, G. (2018). Wizard-of-Oz Prototyping. Medium.</li>
            <li>Koskinen, I., Zimmerman, J., Binder, T., Redström, J., &amp; Wensveen, S. (2011). <em>Design Research through Practice</em>.</li>
          </ul>
        </Section>

        {/* Back to Home */}
        <div className="pt-6 text-center">
          <a href="/" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white shadow hover:bg-gray-800">
            <span>← Back to Home</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default FirstProject;
