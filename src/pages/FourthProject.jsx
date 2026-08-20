// FourthProject.jsx — Ultra Public Transportation UX Case Study — Fully Responsive
// Hero image removed. All layouts adapt: mobile (<768) · tablet (768-1023) · desktop (≥1024)

import { useEffect, useState, useMemo, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Design_Process from "../assets/image/UX4TH/process.png";
import UP2       from "../assets/image/UX4TH/UP2.png";
import UP1       from "../assets/image/UX4TH/UP1.jpg";
import MC        from "../assets/image/UX4TH/moscow.png";
import CP        from "../assets/image/UX4TH/Com.png";
import EP        from "../assets/image/UX4TH/em.png";
import TYPOGRAPHY  from "../assets/image/UX4TH/TYP.png";
import ICONOGRAPHY from "../assets/image/UX4TH/icons.png";
import COMPONENT   from "../assets/image/UX4TH/components.png";
import G         from "../assets/image/UX4TH/grid.png";
import MIFI      from "../assets/image/UX4TH/high.png";
import LD        from "../assets/image/UX4TH/screen1.png";
import Language  from "../assets/image/UX4TH/Language.png";
import APPLY     from "../assets/image/UX4TH/pt.png";
import TRACK     from "../assets/image/UX4TH/bt.png";
import Userflow1 from "../assets/image/UX4TH/Userflow1.png";

/* ─── Hooks ─── */
const useScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return p;
};

const useWindowWidth = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
};

/* ─── Animated counter ─── */
const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const num = parseInt(value);
        const step = Math.ceil(num / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= num) { setCount(num); clearInterval(timer); }
          else setCount(start);
        }, 30);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Noise ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "fixed", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 0, opacity: 0.035, mixBlendMode: "overlay",
  }}>
    <filter id="nf4">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#nf4)" />
  </svg>
);

/* ─── Tag ─── */
const Tag = ({ children }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "3px 12px", borderRadius: 999,
    border: "1px solid rgba(0,180,255,0.3)",
    background: "rgba(0,150,255,0.08)",
    color: "#60c8ff", fontSize: 11,
    letterSpacing: "0.12em", textTransform: "uppercase",
    fontFamily: "'DM Mono', monospace", fontWeight: 500,
  }}>
    {children}
  </span>
);

/* ─── Section heading ─── */
const SectionHead = ({ kicker, title, isMobile }) => (
  <div style={{ marginBottom: isMobile ? 24 : 36 }}>
    {kicker && <Tag>{kicker}</Tag>}
    {title && (
      <h2 style={{
        marginTop: 12, marginBottom: 0,
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: isMobile ? "clamp(24px, 7vw, 36px)" : "clamp(28px, 4vw, 48px)",
        fontWeight: 800, lineHeight: 1.1, color: "#f0f4ff", letterSpacing: "-0.02em",
      }}>
        {title}
      </h2>
    )}
  </div>
);

/* ─── Frame ─── */
const Frame = ({ src, alt, maxH = 560, caption }) => (
  <div style={{
    position: "relative", borderRadius: 18, overflow: "hidden",
    background: "linear-gradient(135deg, #e8f4ff 0%, #c2dcf8 100%)",
    padding: 2, boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
  }}>
    <div style={{ borderRadius: 16, overflow: "hidden", background: "#fff" }}>
      <img src={src} alt={alt}
        style={{ width: "100%", maxHeight: maxH, objectFit: "contain", display: "block" }}
        loading="lazy" />
    </div>
    {caption && (
      <p style={{
        position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 14px",
        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
        color: "rgba(255,255,255,0.75)", fontSize: 11,
        fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em",
        borderRadius: "0 0 16px 16px", margin: 0,
      }}>
        {caption}
      </p>
    )}
  </div>
);

/* ─── Stat card ─── */
const StatCard = ({ emoji, value, suffix, label, delay = 0, isMobile }) => (
  <div data-aos="fade-up" data-aos-delay={isMobile ? 0 : delay} style={{
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 18, padding: isMobile ? "16px 14px" : "22px 20px",
    display: "flex", flexDirection: "column", gap: 7,
    backdropFilter: "blur(12px)", transition: "transform 0.3s, border-color 0.3s", cursor: "default",
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.3)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
  >
    <div style={{ fontSize: 20 }}>{emoji}</div>
    <div style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? 28 : 36,
      fontWeight: 800, lineHeight: 1,
      background: "linear-gradient(135deg, #ffffff, #60c8ff)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    }}>
      <Counter value={value} suffix={suffix} />
    </div>
    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
      {label}
    </div>
  </div>
);

/* ─── Info card ─── */
const InfoCard = ({ title, children, accent }) => (
  <div style={{
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${accent ? "rgba(0,180,255,0.2)" : "rgba(255,255,255,0.07)"}`,
    borderTop: accent ? "2px solid #0096ff" : "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20, padding: "22px 24px", backdropFilter: "blur(8px)",
  }}>
    {title && (
      <h3 style={{ margin: "0 0 12px", fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#f0f4ff" }}>{title}</h3>
    )}
    <div style={{ color: "rgba(240,244,255,0.8)", fontSize: 14, lineHeight: 1.75 }}>{children}</div>
  </div>
);

/* ─── Image card (hi-fi / style guide panels) ─── */
const ImageCard = ({ title, desc, src, tag, maxH = 460, isMobile }) => (
  <div data-aos="fade-up" style={{
    borderRadius: 22, overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.07)",
    background: "rgba(255,255,255,0.025)",
  }}>
    <div style={{
      padding: isMobile ? "14px 16px 12px" : "20px 26px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex", alignItems: isMobile ? "flex-start" : "center",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between", gap: 8,
    }}>
      <div>
        <div style={{ color: "#f0f4ff", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: isMobile ? 14 : 17 }}>{title}</div>
        {desc && <div style={{ color: "rgba(240,244,255,0.45)", fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{desc}</div>}
      </div>
      {tag && <Tag>{tag}</Tag>}
    </div>
    <div style={{ padding: isMobile ? 12 : 18 }}>
      <Frame src={src} alt={title} maxH={maxH} />
    </div>
  </div>
);

/* ─── Divider ─── */
const Divider = ({ isMobile }) => (
  <div style={{ margin: `${isMobile ? 48 : 72}px 0`, display: "flex", alignItems: "center", gap: 16 }}>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1))" }} />
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0096ff" }} />
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(255,255,255,0.1))" }} />
  </div>
);

/* ─── TOC ─── */
const TOC = ({ items, active, isMobile }) => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", justifyContent: "center",
    padding: isMobile ? "7px 10px" : "10px 16px",
    background: "rgba(8,12,22,0.9)", backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)", overflowX: "auto",
  }}>
    <div style={{ display: "flex", gap: isMobile ? 3 : 4, flexWrap: isMobile ? "nowrap" : "wrap", justifyContent: "center", maxWidth: 1100 }}>
      {items.map(i => (
        <a key={i.id} href={`#${i.id}`} style={{
          padding: isMobile ? "4px 8px" : "5px 13px", borderRadius: 999, whiteSpace: "nowrap",
          fontSize: isMobile ? 9 : 10, fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: active === i.id ? "#60c8ff" : "rgba(255,255,255,0.5)",
          background: active === i.id ? "rgba(0,150,255,0.12)" : "transparent",
          border: active === i.id ? "1px solid rgba(0,180,255,0.25)" : "1px solid transparent",
          textDecoration: "none", transition: "all 0.2s", flexShrink: 0,
        }}>
          {i.label}
        </a>
      ))}
    </div>
  </nav>
);

/* ─── Bullet ─── */
const BulletItem = ({ children }) => (
  <li style={{ listStyle: "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
    <span style={{ color: "#0096ff", marginTop: 3, flexShrink: 0, fontSize: 9 }}>◆</span>
    <span style={{ fontFamily: "'Lato', sans-serif", color: "rgba(240,244,255,0.8)", fontSize: 13, lineHeight: 1.75 }}>{children}</span>
  </li>
);

const ul  = { paddingLeft: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 9 };
const base = { fontFamily: "'Lato', sans-serif", color: "rgba(240,244,255,0.85)", fontSize: 14, lineHeight: 1.8 };

/* ═══ MAIN ═══ */
const FourthProject = () => {
  const progress = useScrollProgress();
  const [activeSection, setActiveSection] = useState("overview");
  const width    = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    document.title = "Ultra — UX Case Study";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const tocItems = useMemo(() => [
    { id: "overview",          label: "Overview"    },
    { id: "problem",           label: "Problem"     },
    { id: "solution",          label: "Solution"    },
    { id: "audience",          label: "Users"       },
    { id: "design-thinking",   label: "Process"     },
    { id: "personas",          label: "Personas"    },
    { id: "empathy",           label: "Empathy"     },
    { id: "moscow",            label: "MoSCoW"      },
    { id: "competitive",       label: "Competitive" },
    { id: "userflow",          label: "Userflow"    },
    { id: "design-system",     label: "Style"       },
    { id: "midfi",             label: "Mid-fi"      },
    { id: "hifi",              label: "Hi-fi"       },
    { id: "learning-feedback", label: "Learnings"   },
  ], []);

  const px    = isMobile ? "16px" : isTablet ? "28px" : "32px";
  const grid2 = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 14 : 20 };
  const grid3 = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? 12 : 16 };

  return (
    <div style={{ background: "#080c16", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      <NoiseLayer />

      {/* Glows */}
      <div aria-hidden style={{ position: "fixed", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,100,255,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "fixed", bottom: -300, left: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,60,160,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 3, zIndex: 200,
        width: `${progress * 100}%`,
        background: "linear-gradient(to right, #0060ff, #00c8ff)",
        transition: "width 0.1s", boxShadow: "0 0 12px rgba(0,150,255,0.6)",
      }} />

      <TOC items={tocItems} active={activeSection} isMobile={isMobile} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: `0 ${px} 100px` }}>

        {/* ═══ HERO — no image ═══ */}
        <header style={{ paddingTop: isMobile ? 68 : 88 }}>
          <div data-aos="fade-up" style={{
            borderRadius: isMobile ? 20 : 28, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(0,60,160,0.06) 100%)",
          }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #0060ff, #00c8ff, transparent)" }} />
            <div style={{ padding: isMobile ? "28px 20px 32px" : isTablet ? "40px 32px" : "52px 52px 48px" }}>

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22, alignItems: "center" }}>
                <Tag>🚌 Ultra · Umeå</Tag>
                <Tag>UX Case Study</Tag>
                {!isMobile && <Tag> Part of a Master's Thesis</Tag>}
              </div>

              {/* Title */}
              <h1 style={{
                margin: "0 0 18px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? "clamp(34px, 11vw, 52px)" : "clamp(40px, 6vw, 80px)",
                fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#f0f4ff",
              }}>
                Ultra<br />
                <span style={{ background: "linear-gradient(135deg, #4da8ff 0%, #00c8ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  UX Improvement
                </span><br />
                <span style={{ fontSize: isMobile ? "clamp(14px, 5vw, 26px)" : "clamp(22px, 3vw, 44px)", color: "rgba(240,244,255,0.4)", fontWeight: 700 }}>
                  Case Study
                </span>
              </h1>

              <p style={{ ...base, maxWidth: 580, fontSize: isMobile ? 14 : 17, marginBottom: 28 }}>
                Redesigning two critical flows in Umeå's public transit app —
                <strong style={{ color: "#60c8ff" }}> clearer ticket choices</strong> and{" "}
                <strong style={{ color: "#60c8ff" }}>quicker next-bus access</strong> — with an
                emphasis on inclusivity for non-native Swedish speakers.
              </p>

              {/* Stat cards — 3 col on desktop/tablet, 3 col on mobile too (smaller) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: isMobile ? 10 : 16, marginBottom: isMobile ? 28 : 0 }}>
                 
                <StatCard emoji="🎙" value="10"  label="User interviews"  isMobile={isMobile} delay={100} />
                <StatCard emoji="⏱" value="8"   suffix=" weeks"  label="Duration"        isMobile={isMobile} delay={200} />
                <StatCard emoji="🌍" value="2"   label="Key personas"    isMobile={isMobile} delay={300} />
              </div>
            </div>
          </div>
        </header>

        <Divider isMobile={isMobile} />

        {/* ═══ OVERVIEW ═══ */}
        <section id="overview" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="About the project" title="Project Overview" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Context" accent>
              <p style={base}>
                Ultra is Umeå's official public transport app — trip planning, ticketing, real-time tracking.
                This case study emerges from a Master's thesis research: 10 interviews
                focused on usability for international users in a culturally diverse city.
              </p>
              <p style={{ ...base, marginTop: 10 }}>
                Two representative users guide the design work:
                <strong style={{ color: "#fff" }}> Nimali</strong> (international frequent user) and
                <strong style={{ color: "#fff" }}> Erik</strong> (Swedish occasional user).
              </p>
            </InfoCard>
            <InfoCard title="Project Details">
              <ul style={ul}>
                {[["⏳","Duration","8 weeks"],["🧑‍🎨","Role","UX Researcher & UI Designer"],["🛠","Tools","Figma, ChatGPT, FigJam, Docs"],["🔬","Methods","Interviews, wireframing, prototyping"]].map(([icon, k, v]) => (
                  <li key={k} style={{ listStyle: "none", display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "'DM Mono', monospace", minWidth: 60 }}>{k}</span>
                    <span style={{ color: "#f0f4ff", fontSize: 13 }}>{v}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PROBLEM ═══ */}
        <section id="problem" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What's hard today" title="The Problem" isMobile={isMobile} />
          <div data-aos="fade-up" style={{ borderLeft: "3px solid #0096ff", paddingLeft: isMobile ? 16 : 28, marginBottom: 20 }}>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(15px, 4.5vw, 22px)" : "clamp(20px, 3vw, 30px)",
              fontWeight: 700, color: "#f0f4ff", margin: 0, lineHeight: 1.45, fontStyle: "italic",
            }}>
              "Public transport should reduce stress — not add to it."
            </blockquote>
          </div>
          <div style={grid2} data-aos="fade-up" data-aos-delay="80">
            <InfoCard title="The everyday friction">
              <p style={base}>Buying a ticket can feel confusing — especially when you're about to board and need to act fast. Important information is easy to miss, and live updates aren't always clear at a glance.</p>
            </InfoCard>
            <InfoCard title="The inclusivity gap">
              <p style={base}>For newcomers and non-native speakers, unclear ticket terms and limited guidance make the experience feel risky. Users hesitate, second-guess, and sometimes rely on Google Maps just to feel confident.</p>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ SOLUTION ═══ */}
        <section id="solution" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What I'm proposing" title="Proposed Solution" isMobile={isMobile} />
          <InfoCard title="Direction for improvements" accent>
            <div style={{ ...grid3, marginTop: 10 }}>
              {[["🏠","Surface key actions","Put tickets + departures front and center on the home screen."],["🏷","Clearer labels","Replace confusing ticket terms with plain language and short explanations."],["✅","Confidence boosts","Small confirmations during purchase so users know they chose correctly."]].map(([icon, title, desc]) => (
                <div key={title} style={{ padding: isMobile ? "14px" : "18px 20px", borderRadius: 14, background: "rgba(0,100,255,0.06)", border: "1px solid rgba(0,150,255,0.15)" }}>
                  <div style={{ fontSize: isMobile ? 20 : 22, marginBottom: 8 }}>{icon}</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: isMobile ? 13 : 15, marginBottom: 5 }}>{title}</div>
                  <div style={{ color: "rgba(240,244,255,0.6)", fontSize: isMobile ? 12 : 13, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ AUDIENCE ═══ */}
        <section id="audience" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Who this design is for" title="Target Users" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Primary audiences">
              <ul style={ul}>
                {[["🌍","Foreign daily commuters","Frequent users who need predictable, clear flows."],["🇸🇪","Swedish occasional riders","Want quick, location-aware access, minimal setup."],["🆕","Newcomers","Still learning ticket rules — need plain language guidance."]].map(([icon, name, desc]) => (
                  <li key={name} style={{ listStyle: "none", display: "flex", gap: 10, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: 16 }}>{icon}</span>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{name}</div>
                      <div style={{ color: "rgba(240,244,255,0.5)", fontSize: 12, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Inclusivity considerations">
              <ul style={ul}>
                {["Complete English coverage — no Swedish leftovers","Clear status feedback — late bus cues, confirmations","Easy-to-find controls — tracking, favorites, filters"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ DESIGN THINKING ═══ */}
        <section id="design-thinking" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Process overview" title="Design Thinking Process" isMobile={isMobile} />
          <div data-aos="fade-up">
            <Frame src={Design_Process} alt="Design thinking process" maxH={isMobile ? 220 : 520} caption="Discover → Define → Ideate → Design" />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PERSONAS ═══ */}
        <section id="personas" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Two viewpoints" title="Personas" isMobile={isMobile} />
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 22 }}>
            {[
              { src: UP2, name: "Nimali", role: "Primary persona — Foreign frequent user", desc: "Uses Ultra regularly but isn't fully comfortable with Swedish. Double-checks ticket details to avoid mistakes and prefers flows that feel predictable and safe.", delay: 0 },
              { src: UP1, name: "Erik",   role: "Secondary persona — Swedish occasional user", desc: "Takes the bus for errands, wants quick location-aware info. When the app feels slow or unclear, he defaults to Google Maps for the bigger picture.", delay: 80 },
            ].map(({ src, name, role, desc, delay }) => (
              <div key={name} data-aos="fade-up" data-aos-delay={isMobile ? 0 : delay} style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
                borderRadius: 22, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
              }}>
                <div style={{
                  padding: isMobile ? "20px 18px 0" : "28px 28px",
                  background: "rgba(0,80,200,0.07)",
                  borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.06)",
                  borderBottom: isMobile ? "1px solid rgba(255,255,255,0.06)" : "none",
                  display: "flex", flexDirection: "column", justifyContent: "center", gap: 10,
                }}>
                  <Tag>{role.split("—")[0].trim()}</Tag>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 22 : 28, fontWeight: 800, color: "#f0f4ff" }}>{name}</div>
                  <div style={{ color: "rgba(240,244,255,0.45)", fontSize: 12, fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>{role.split("—")[1]?.trim()}</div>
                  <p style={{ ...base, fontSize: 13, marginTop: 4 }}>{desc}</p>
                </div>
                <div style={{ padding: isMobile ? 14 : 18 }}>
                  <Frame src={src} alt={`Persona: ${name}`} maxH={isMobile ? 220 : 340} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ EMPATHY ═══ */}
        <section id="empathy" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Needs, pain points, goals" title="Empathy Map" isMobile={isMobile} />
          <div data-aos="fade-up">
            <Frame src={EP} alt="Empathy map" maxH={isMobile ? 260 : 520} caption="Composite empathy map drawn from 10 user interviews" />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ MoSCoW ═══ */}
        <section id="moscow" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Feature prioritization" title="MoSCoW Analysis" isMobile={isMobile} />
          <InfoCard title="What gets fixed first" accent>
            <p style={{ ...base, marginBottom: 18 }}>Must-have changes reduce confusion and risk. Should-have improvements add convenience and polish. Won't-have items are deferred to keep scope manageable.</p>
            <Frame src={MC} alt="MoSCoW model" maxH={isMobile ? 260 : 460} />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ COMPETITIVE ═══ */}
        <section id="competitive" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Learning from similar apps" title="Competitive Analysis" isMobile={isMobile} />
          <InfoCard>
            <p style={{ ...base, marginBottom: 18 }}>Many competing apps lead with "next departure" and door-to-door planning. Ultra can keep its strengths while improving discoverability and context-aware guidance.</p>
            <Frame src={CP} alt="Competitive analysis" maxH={isMobile ? 260 : 500} />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ USERFLOW ═══ */}
        <section id="userflow" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Planning a trip" title="User Flow" isMobile={isMobile} />
          <InfoCard>
            <p style={{ ...base, marginBottom: 18 }}>Mapped the trip-planning flow to identify where users hesitate — especially at the handoff between planning and purchasing a ticket.</p>
            <Frame src={Userflow1} alt="User flow diagram" maxH={isMobile ? 240 : 520} caption="Primary flow: Home → Plan Trip → My ticket → Buy ticket" />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ DESIGN SYSTEM ═══ */}
        <section id="design-system" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Typography, components, grid" title="Style Guide" isMobile={isMobile} />

          {/* Color swatches */}
          <div data-aos="fade-up" style={{ display: "flex", gap: isMobile ? 8 : 12, marginBottom: 20, flexWrap: "wrap" }}>
            {[["#014590","Primary"],["#F2B354","Secondary"],["#000000","Text"],["#FFFFFF","Background"]].map(([hex, name]) => (
              <div key={hex} style={{ display: "flex", alignItems: "center", gap: 8, padding: isMobile ? "6px 12px" : "8px 16px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ width: isMobile ? 18 : 22, height: isMobile ? 18 : 22, borderRadius: 5, background: hex, boxShadow: "0 2px 8px rgba(0,0,0,0.4)", flexShrink: 0 }} />
                <div>
                  <div style={{ color: "#fff", fontSize: isMobile ? 11 : 13, fontWeight: 600 }}>{name}</div>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{hex}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 20 }}>
            {[["Typography & Color", TYPOGRAPHY],["Iconography", ICONOGRAPHY],["Components", COMPONENT],["Grid System", G]].map(([title, src], i) => (
              <div key={title} data-aos="fade-up" data-aos-delay={isMobile ? 0 : i * 60}>
                <InfoCard title={title}>
                  <Frame src={src} alt={title} maxH={isMobile ? 260 : 460} />
                </InfoCard>
              </div>
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ MID-FI ═══ */}
        <section id="midfi" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Structure before visuals" title="Mid-Fidelity Wireframes" isMobile={isMobile} />
          <InfoCard>
            <p style={{ ...base, marginBottom: 18 }}>Mid-fi wireframes validated hierarchy and flow before adding visual polish — especially around ticket clarity, quick-access patterns, and information density.</p>
            <Frame src={MIFI} alt="Mid-fi wireframes" maxH={isMobile ? 260 : 520} caption="Mid-fi — annotated wireframes for key screens" />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ HI-FI ═══ */}
        <section id="hifi" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Final screens" title="High-Fidelity Design" isMobile={isMobile} />
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 22 }}>
            {[
              { title: "Home screen — quick access",           src: LD,       desc: "Surfacing the two most-used actions — trip planning and ticket purchase — directly on the home screen." },
              { title: "Language switch — Swedish → English",  src: Language, desc: "If a user selects English, the entire app stays in English. Language consistency is a core trust signal." },
              { title: "Plan a trip — reduced input friction", src: APPLY,    desc: "Streamlined departure search with location-aware defaults and clear time selection." },
              { title: "Buy a ticket — clearer choices",       src: TRACK,    desc: "Ticket options with plain-language labels, short contextual descriptions, and visible confirmation states." },
            ].map(({ title, src, desc }) => (
              <ImageCard key={title} title={title} desc={desc} src={src} tag="Hi-fi" maxH={isMobile ? 280 : 460} isMobile={isMobile} />
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ LEARNINGS ═══ */}
        <section id="learning-feedback" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What I took away" title="Learning & Reflection" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Key learnings" accent>
              <ul style={ul}>
                {["Discoverability matters more than adding more features.","Live tracking only helps when it's easy to find and easy to trust.","Plain language reduces stress and prevents costly mistakes.","Shortcuts and location-aware defaults save real, daily effort."].map((item, i) => (
                  <li key={i} style={{ listStyle: "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#0096ff", fontFamily: "'DM Mono', monospace", fontSize: 10, minWidth: 20, marginTop: 3 }}>0{i + 1}</span>
                    <span style={{ ...base, fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Impact framing">
              <p style={base}>
                This project helped me practice turning{" "}
                <strong style={{ color: "#60c8ff" }}>qualitative research</strong> into
                practical, prioritized design decisions — especially for a public service where
                clarity, speed, and trust have real consequences.
              </p>
              <p style={{ ...base, marginTop: 10 }}>
                The methods used — personas, empathy maps, MoSCoW, competitive analysis — demonstrate
                a complete research-to-design pipeline applicable to complex, real-world UX problems.
              </p>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ FOOTER ═══ */}
        <footer style={{ textAlign: "center", paddingTop: 20 }}>
          <a href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 14,
            background: "linear-gradient(135deg, #014590, #0060cc)",
            color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700,
            fontSize: isMobile ? 13 : 15, letterSpacing: "0.04em", textDecoration: "none",
            boxShadow: "0 8px 28px rgba(0,80,200,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,100,255,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,80,200,0.35)"; }}
          >
            ← Back to Portfolio
          </a>
          <p style={{ marginTop: 28, color: "rgba(255,255,255,0.15)", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
            ULTRA · UX CASE STUDY · MASTER'S THESIS
          </p>
        </footer>

      </div>
    </div>
  );
};

export default FourthProject;