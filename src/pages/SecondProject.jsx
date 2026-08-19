// SecondProject.jsx — Trubble Buddy Case Study — Fully Responsive
// Hero image removed. All grids adapt: mobile (<768) · tablet (768-1023) · desktop (≥1024)

import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bby2          from "../assets/image/bby2.png";
import bby3          from "../assets/image/bby3.png";
import bby4          from "../assets/image/bby4.png";
import landing2      from "../assets/image/UX2nd/landing-2.png";
import mockup1       from "../assets/image/UX2nd/mockup1.png";
import lifi          from "../assets/image/UX2nd/lifi.png";
import soundImg      from "../assets/image/UX2nd/Sound.png";
import temperatureImg from "../assets/image/UX2nd/temparature.png";
import vibrationImg  from "../assets/image/UX2nd/vibration.png";

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

/* ─── Noise ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "fixed", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 0, opacity: 0.03, mixBlendMode: "overlay",
  }}>
    <filter id="nb2">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#nb2)" />
  </svg>
);

/* ─── Tag ─── */
const Tag = ({ children, soft }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "3px 12px", borderRadius: 999,
    border: `1px solid ${soft ? "rgba(167,139,250,0.35)" : "rgba(167,139,250,0.2)"}`,
    background: soft ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.06)",
    color: "#c4b5fd", fontSize: 11,
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
        fontWeight: 800, lineHeight: 1.1, color: "#faf5ff", letterSpacing: "-0.02em",
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
    background: "linear-gradient(135deg, #f5f0ff 0%, #ddd6fe 100%)",
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
        background: "linear-gradient(transparent, rgba(0,0,0,0.72))",
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
const StatCard = ({ emoji, value, label, delay = 0, isMobile }) => (
  <div data-aos="fade-up" data-aos-delay={isMobile ? 0 : delay} style={{
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 18, padding: isMobile ? "16px 14px" : "22px 20px",
    display: "flex", flexDirection: "column", gap: 7,
    backdropFilter: "blur(12px)", transition: "transform 0.3s, border-color 0.3s", cursor: "default",
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
  >
    <div style={{ fontSize: 20 }}>{emoji}</div>
    <div style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? 13 : 16, fontWeight: 800, lineHeight: 1.2,
      background: "linear-gradient(135deg, #ffffff, #c4b5fd)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    }}>
      {value}
    </div>
    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.38)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
      {label}
    </div>
  </div>
);

/* ─── Info card ─── */
const InfoCard = ({ title, children, accent }) => (
  <div style={{
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${accent ? "rgba(167,139,250,0.2)" : "rgba(255,255,255,0.07)"}`,
    borderTop: accent ? "2px solid #8b5cf6" : "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20, padding: "22px 24px", backdropFilter: "blur(8px)",
  }}>
    {title && (
      <h3 style={{ margin: "0 0 12px", fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#faf5ff" }}>{title}</h3>
    )}
    <div style={{ color: "rgba(250,245,255,0.8)", fontSize: 14, lineHeight: 1.75 }}>{children}</div>
  </div>
);

/* ─── Sense card ─── */
const SenseCard = ({ icon, title, src, alt, desc }) => (
  <div data-aos="fade-up" style={{
    borderRadius: 22, overflow: "hidden",
    border: "1px solid rgba(167,139,250,0.12)",
    background: "rgba(139,92,246,0.04)",
    display: "flex", flexDirection: "column",
  }}>
    <div style={{ padding: "16px 18px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#faf5ff" }}>{title}</span>
    </div>
    <div style={{ padding: 14 }}>
      <Frame src={src} alt={alt} maxH={240} />
    </div>
    <div style={{ padding: "0 18px 18px", color: "rgba(250,245,255,0.6)", fontSize: 13, lineHeight: 1.7 }}>{desc}</div>
  </div>
);

/* ─── Divider ─── */
const Divider = ({ isMobile }) => (
  <div style={{ margin: `${isMobile ? 48 : 72}px 0`, display: "flex", alignItems: "center", gap: 16 }}>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07))" }} />
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6" }} />
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(255,255,255,0.07))" }} />
  </div>
);

/* ─── Carousel ─── */
const Carousel = ({ slides = [], auto = true, interval = 3500, isMobile }) => {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  useEffect(() => {
    if (!auto || count <= 1) return;
    const id = setInterval(() => setIndex(i => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [auto, interval, count]);
  const goTo = i => setIndex((i + count) % count);

  return (
    <div style={{
      position: "relative", borderRadius: 22, overflow: "hidden",
      background: "linear-gradient(135deg, #f5f0ff, #ddd6fe)",
      padding: 2, boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
    }}>
      <div style={{ borderRadius: 20, overflow: "hidden", background: "#0d0a18" }}>
        <div style={{ display: "flex", transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)", transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={i} style={{ minWidth: "100%", aspectRatio: isMobile ? "4/3" : "16/9", position: "relative" }}>
              <img src={s.src} alt={s.alt || `Slide ${i + 1}`} style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "contain", padding: isMobile ? 10 : 16, borderRadius: 18,
              }} />
            </div>
          ))}
        </div>
        <div style={{ padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(250,245,255,0.5)", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
            {slides[index]?.alt}
          </span>
          <span style={{ color: "rgba(196,181,253,0.6)", fontSize: 11, fontFamily: "'DM Mono', monospace", flexShrink: 0, marginLeft: 8 }}>
            {index + 1} / {count}
          </span>
        </div>
      </div>
      {count > 1 && (
        <>
          {["prev", "next"].map(dir => (
            <button key={dir} onClick={() => goTo(dir === "prev" ? index - 1 : index + 1)}
              style={{
                position: "absolute", [dir === "prev" ? "left" : "right"]: isMobile ? 8 : 14,
                top: "44%", transform: "translateY(-50%)",
                width: isMobile ? 32 : 40, height: isMobile ? 32 : 40, borderRadius: "50%",
                background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff", fontSize: isMobile ? 18 : 22, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(8px)", transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(139,92,246,0.4)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.55)"}
            >
              {dir === "prev" ? "‹" : "›"}
            </button>
          ))}
          <div style={{ position: "absolute", bottom: 52, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: i === index ? 18 : 6, height: 6, borderRadius: 3,
                background: i === index ? "#a78bfa" : "rgba(255,255,255,0.25)",
                border: "none", cursor: "pointer", transition: "all 0.3s",
              }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ─── TOC ─── */
const TOC = ({ items, active, isMobile }) => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", justifyContent: "center",
    padding: isMobile ? "7px 10px" : "10px 16px",
    background: "rgba(8,5,18,0.92)", backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    overflowX: "auto",
  }}>
    <div style={{ display: "flex", gap: isMobile ? 3 : 4, flexWrap: isMobile ? "nowrap" : "wrap", justifyContent: "center", maxWidth: 1100 }}>
      {items.map(i => (
        <a key={i.id} href={`#${i.id}`} style={{
          padding: isMobile ? "4px 9px" : "5px 13px", borderRadius: 999, whiteSpace: "nowrap",
          fontSize: isMobile ? 9 : 10, fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: active === i.id ? "#c4b5fd" : "rgba(255,255,255,0.4)",
          background: active === i.id ? "rgba(139,92,246,0.12)" : "transparent",
          border: active === i.id ? "1px solid rgba(167,139,250,0.25)" : "1px solid transparent",
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
  <li style={{ display: "flex", gap: 10, alignItems: "flex-start", listStyle: "none" }}>
    <span style={{ color: "#8b5cf6", marginTop: 4, flexShrink: 0, fontSize: 9 }}>◆</span>
    <span style={{ fontFamily: "'Lato', sans-serif", color: "rgba(250,245,255,0.82)", fontSize: 13, lineHeight: 1.75 }}>{children}</span>
  </li>
);

const ul = { paddingLeft: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 9 };
const base = { fontFamily: "'Lato', sans-serif", color: "rgba(250,245,255,0.82)", fontSize: 14, lineHeight: 1.8 };

/* ═══ MAIN ═══ */
const SecondProject = () => {
  const progress = useScrollProgress();
  const [activeSection, setActiveSection] = useState("overview");
  const width    = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    document.title = "Trubble Buddy — Case Study";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const tocItems = useMemo(() => [
    { id: "overview",   label: "Overview"   },
    { id: "problem",    label: "Problem"    },
    { id: "workshops",  label: "Workshops"  },
    { id: "lofi",       label: "Lo-fi"      },
    { id: "personas",   label: "Persona"    },
    { id: "hifi",       label: "Hi-fi"      },
    { id: "concept",    label: "Design"     },
    { id: "reflection", label: "Reflection" },
  ], []);

  const px    = isMobile ? "16px" : isTablet ? "28px" : "32px";
  const grid2 = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 14 : 20 };
  const grid3 = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 16 };
  const grid4 = { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 10 : 16 };

  return (
    <div style={{ background: "#080512", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      <NoiseLayer />

      {/* Glows */}
      <div aria-hidden style={{ position: "fixed", top: -200, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "fixed", bottom: -300, left: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,40,217,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 3, zIndex: 200,
        width: `${progress * 100}%`,
        background: "linear-gradient(to right, #7c3aed, #a78bfa, #c4b5fd)",
        transition: "width 0.1s", boxShadow: "0 0 12px rgba(167,139,250,0.6)",
      }} />

      <TOC items={tocItems} active={activeSection} isMobile={isMobile} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: `0 ${px} 100px` }}>

        {/* ═══ HERO ═══ */}
        <header style={{ paddingTop: isMobile ? 68 : 88 }}>
          <div data-aos="fade-up" style={{
            borderRadius: isMobile ? 20 : 28, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(139,92,246,0.06) 100%)",
          }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #7c3aed, #a78bfa, transparent)" }} />
            <div style={{ padding: isMobile ? "28px 20px 32px" : isTablet ? "40px 32px" : "52px 52px 48px" }}>

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22, alignItems: "center" }}>
                <Tag soft>🌱 Co-design</Tag>
                <Tag>Youth Mental Health</Tag>
                {!isMobile && <Tag>Wearable + App</Tag>}
              </div>

              {/* Title */}
              <h1 style={{
                margin: "0 0 18px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? "clamp(36px, 12vw, 56px)" : "clamp(40px, 6vw, 80px)",
                fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#faf5ff",
              }}>
                Trubble<br />
                <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Buddy
                </span><br />
                <span style={{ fontSize: isMobile ? "clamp(15px, 5vw, 26px)" : "clamp(22px, 3vw, 44px)", color: "rgba(250,245,255,0.4)", fontWeight: 700 }}>
                  Case Study
                </span>
              </h1>

              {/* Description */}
              <p style={{ ...base, maxWidth: 580, fontSize: isMobile ? 14 : 17, marginBottom: 28 }}>
                A participatory design project for young people experiencing anxiety — a
                <strong style={{ color: "#c4b5fd" }}> wearable calming locket</strong> paired with a
                <strong style={{ color: "#c4b5fd" }}> personalizable mobile app</strong> for discreet, ethical, and approachable support.
              </p>

              {/* Stat cards */}
              <div style={{ ...grid4, marginBottom: isMobile ? 28 : 36 }}>
                <StatCard emoji="🧑‍🎨" value="UX/UI Designer" label="Role"         isMobile={isMobile} />
                <StatCard emoji="🗓"  value="6 Weeks"        label="Duration"     isMobile={isMobile} delay={80} />
                <StatCard emoji="🛠"  value="Figma · Paper"  label="Tools"        isMobile={isMobile} delay={160} />
                <StatCard emoji="👥"  value="5–6 Students"   label="Workshop size" isMobile={isMobile} delay={240} />
              </div>

              {/* Feature badges — replaces hero image */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[["🎧","Sound"],["📳","Vibration"],["🌡","Warmth"],["🔒","Privacy"],["⚡","Quick access"]].map(([icon, label]) => (
                  <div key={label} style={{
                    padding: "8px 14px", borderRadius: 10,
                    background: "rgba(139,92,246,0.08)", border: "1px solid rgba(167,139,250,0.15)",
                    display: "flex", gap: 7, alignItems: "center",
                  }}>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{ color: "#c4b5fd", fontSize: 12, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <Divider isMobile={isMobile} />

        {/* ═══ OVERVIEW ═══ */}
        <section id="overview" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What is this" title="Overview" isMobile={isMobile} />
          <InfoCard accent>
            <p style={base}>
              Trubble Buddy bridges the gap between overloaded care services and impersonal digital tools.
              The system combines a <strong style={{ color: "#faf5ff" }}>wearable locket</strong> delivering
              multisensory calm (sound, vibration, warmth) with a <strong style={{ color: "#faf5ff" }}>mobile app</strong> for personalization and discreet control.
            </p>
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PROBLEM ═══ */}
        <section id="problem" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What we're solving" title="The Problem" isMobile={isMobile} />
          <div data-aos="fade-up" style={{ borderLeft: "3px solid #8b5cf6", paddingLeft: isMobile ? 16 : 28, marginBottom: 22 }}>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(14px, 4.5vw, 20px)" : "clamp(18px, 2.5vw, 26px)",
              fontWeight: 700, fontStyle: "italic", color: "#faf5ff", margin: 0, lineHeight: 1.5,
            }}>
              "How might we design a discreet, ethical, and youth-centered tool to support anxiety in the moment?"
            </blockquote>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 10 : 16 }} data-aos="fade-up" data-aos-delay="80">
            {[["😶","Stigma","Asking for help feels scary. Tools need to be invisible to others."],["⏳","Wait times","Care services are overwhelmed. Young people can't wait weeks."],["📱","Generic apps","Most tools feel clinical, adult-facing, or require too many steps."],["👁","Public use","Coping in school or public spaces requires discretion and speed."]].map(([icon, title, desc]) => (
              <div key={title} data-aos="fade-up" style={{
                padding: isMobile ? "14px 14px" : "18px 20px", borderRadius: 16,
                background: "rgba(139,92,246,0.05)", border: "1px solid rgba(167,139,250,0.12)",
              }}>
                <div style={{ fontSize: isMobile ? 20 : 22, marginBottom: 8 }}>{icon}</div>
                <div style={{ color: "#faf5ff", fontWeight: 700, fontSize: isMobile ? 12 : 14, marginBottom: 5 }}>{title}</div>
                <div style={{ color: "rgba(250,245,255,0.5)", fontSize: isMobile ? 11 : 13, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ WORKSHOPS ═══ */}
        <section id="workshops" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What we learned from students" title="Co-Design Workshops" isMobile={isMobile} />
          <p style={{ ...base, marginBottom: 20 }}>
            We facilitated 60–90 minute participatory sessions to understand how anxiety shows up
            in the body and which strategies already help — including <strong style={{ color: "#faf5ff" }}>body mapping</strong>,
            object ideation, and feedback rounds.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr", gap: isMobile ? 14 : 20 }} data-aos="fade-up">
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <InfoCard title="Where anxiety lives" accent>
                <ul style={ul}>
                  {[["Chest tightness","Most commonly reported — a physical weight or pressure"],["Stomach flutter","Nausea or unsettled feeling before social situations"],["Throat pressure","Difficulty speaking or feeling of being silenced"],["Cold hands","Physical chill, especially during high-stress moments"]].map(([bold, desc]) => (
                    <li key={bold} style={{ listStyle: "none", display: "flex", gap: 10 }}>
                      <span style={{ color: "#8b5cf6", flexShrink: 0, marginTop: 4, fontSize: 9 }}>◆</span>
                      <span style={{ ...base, fontSize: 13 }}><strong style={{ color: "#e9d5ff" }}>{bold}</strong> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
              <InfoCard title="What already helps">
                <ul style={ul}>
                  {["Steady breathing and paced rhythms","Rhythmic tapping and gentle haptics","Warmth and soft ambient sound","Discreet, classroom-safe activation"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
                </ul>
              </InfoCard>
            </div>
            <Frame src={bby4} alt="Body mapping workshop" maxH={isMobile ? 240 : 440} caption="Body mapping — where participants feel anxiety physically" />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ LO-FI ═══ */}
        <section id="lofi" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Structure before visuals" title="Lo-Fi Sketches" isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr", gap: isMobile ? 14 : 20 }} data-aos="fade-up">
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <InfoCard title="Early concept exploration" accent>
                <p style={base}>Quick sketches tested how a calming wearable and companion app might look and feel before investing in detailed visuals.</p>
              </InfoCard>
              <div style={grid2}>
                <InfoCard title="Purpose">
                  <ul style={ul}>
                    {["Visualize the interaction flow","Test clarity of controls","Check intuitiveness early"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
                  </ul>
                </InfoCard>
                <InfoCard title="Learnings">
                  <ul style={ul}>
                    {["Sketches sparked feedback fast","Discreet design mattered early","Iterating early saved time"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
                  </ul>
                </InfoCard>
              </div>
              <div style={{ borderLeft: "3px solid #8b5cf6", paddingLeft: 18 }}>
                <p style={{ ...base, fontSize: 13, fontStyle: "italic", color: "rgba(250,245,255,0.55)", margin: 0 }}>
                  "Even rough sketches gave valuable input on how the product should feel in real use."
                </p>
              </div>
            </div>
            <Frame src={lifi} alt="Lo-fi sketch" maxH={isMobile ? 220 : 460} caption="Early concept sketch — locket + app pairing" />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PERSONA ═══ */}
        <section id="personas" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Who we designed for" title="Persona" isMobile={isMobile} />
          <div data-aos="fade-up" style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
            gap: 0, borderRadius: 22, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
          }}>
            <div style={{ padding: isMobile ? "16px 16px 0" : 18 }}>
              <Frame src={bby3} alt="Persona — Agnes" maxH={isMobile ? 220 : 380} />
            </div>
            <div style={{
              padding: isMobile ? "20px 18px 22px" : "28px 30px",
              background: "rgba(139,92,246,0.04)",
              borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.05)",
              borderTop: isMobile ? "1px solid rgba(255,255,255,0.05)" : "none",
              display: "flex", flexDirection: "column", justifyContent: "center", gap: 16,
            }}>
              <div>
                <Tag>Primary Persona</Tag>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 26 : 32, fontWeight: 800, color: "#faf5ff", marginTop: 8 }}>Agnes</div>
                <div style={{ color: "rgba(250,245,255,0.4)", fontSize: 12, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>24 · Developer · Social Anxiety</div>
              </div>
              <p style={{ ...base, fontSize: 13 }}>Social anxiety spikes in new or crowded settings. She wants discreet, fast relief that fits everyday life without drawing attention.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[["Goals",["Manage stress at work & socially","Try new things with confidence","Stay connected with loved ones"]],["Needs",["Quick-start calming (≤3 taps)","Personalized sound/vibration/warmth","Jewelry-like, wearable form factor"]]].map(([label, items]) => (
                  <div key={label} style={{ padding: "14px 16px", borderRadius: 12, background: "rgba(139,92,246,0.06)", border: "1px solid rgba(167,139,250,0.1)" }}>
                    <div style={{ color: "#c4b5fd", fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
                    <ul style={{ ...ul, marginTop: 0 }}>{items.map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}</ul>
                  </div>
                ))}
              </div>
              <div style={{ borderLeft: "2px solid #8b5cf6", paddingLeft: 14 }}>
                <p style={{ ...base, fontSize: 13, fontStyle: "italic", color: "rgba(250,245,255,0.5)", margin: 0 }}>
                  "I want to do more and meet new people, but I get nervous outside my comfort zone."
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ HI-FI ═══ */}
        <section id="hifi" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Final screens" title="Hi-Fi Wearable & UI" isMobile={isMobile} />
          <Carousel isMobile={isMobile} slides={[
            { src: bby2,          alt: "Hi-fi — Wearable locket form"  },
            { src: mockup1,       alt: "Hi-fi — Preset list screen"    },
            { src: landing2,      alt: "Hi-fi — Connect / landing"     },
            { src: soundImg,      alt: "Hi-fi — Sound controls"        },
            { src: vibrationImg,  alt: "Hi-fi — Vibration controls"    },
            { src: temperatureImg,alt: "Hi-fi — Warmth controls"       },
          ]} auto />
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ CONCEPT ═══ */}
        <section id="concept" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="How it works" title="Design Explanation" isMobile={isMobile} />
          <div style={{ ...grid2, marginBottom: 16 }} data-aos="fade-up">
            {[
              { label: "Wearable Locket", tag: "Hardware", src: bby2, desc: "Jewelry-like form with skin-friendly materials. Gentle warmth and micro-haptics tuned to be soothing without distraction." },
              { label: "Mobile App", tag: "Software", src: landing2, desc: "Discreet companion interface — create presets, switch modes quickly. Designed for clarity, privacy, and speed." },
            ].map(({ label, tag, src, desc }) => (
              <div key={label} style={{ borderRadius: 22, overflow: "hidden", border: "1px solid rgba(167,139,250,0.1)", background: "rgba(139,92,246,0.03)" }}>
                <div style={{ padding: "16px 20px 14px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#faf5ff" }}>{label}</span>
                  <Tag>{tag}</Tag>
                </div>
                <div style={{ padding: 14 }}>
                  <Frame src={src} alt={label} maxH={isMobile ? 180 : 260} />
                </div>
                <div style={{ padding: "0 18px 18px", color: "rgba(250,245,255,0.6)", fontSize: 13, lineHeight: 1.7 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* 3 sense cards */}
          <div style={grid3} data-aos="fade-up" data-aos-delay="80">
            <SenseCard icon="🎧" title="Sound"     src={soundImg}       alt="Sound controls"    desc="Soft ambients support paced breathing. Optionally connect Spotify for familiar comfort audio." />
            <SenseCard icon="📳" title="Vibration" src={vibrationImg}   alt="Vibration controls" desc="Even, low-frequency patterns that feel like a reassuring pulse — on the chest or in the hand." />
            <SenseCard icon="🌡" title="Warmth"    src={temperatureImg} alt="Warmth controls"   desc="Gentle, capped heat provides a cozy anchor — tuned for comfort and safety, never discomfort." />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ REFLECTION ═══ */}
        <section id="reflection" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Looking back and forward" title="Reflection & Next Steps" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Process artifacts" accent>
              <p style={base}>
                The co-design process produced a <strong style={{ color: "#faf5ff" }}>value network map</strong>,{" "}
                <strong style={{ color: "#faf5ff" }}>stakeholder map</strong>, and{" "}
                <strong style={{ color: "#faf5ff" }}>ecology map</strong> — guiding decisions around tone,
                comfort, and ethics throughout.
              </p>
              <p style={{ ...base, marginTop: 10 }}>We prioritized gentle defaults, fast access, and privacy controls at every design decision point.</p>
            </InfoCard>
            <InfoCard title="What comes next">
              <ul style={ul}>
                {[["🧪","Longitudinal pilot with voluntary check-ins"],["🌡","Refined warmth caps and haptic response curves"],["🤝","Optional peer support links (opt-in, consent-based)"],["♿","Expanded accessibility testing with diverse youth groups"]].map(([icon, text]) => (
                  <li key={text} style={{ listStyle: "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{ ...base, fontSize: 13 }}>{text}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ FOOTER ═══ */}
        <footer style={{ textAlign: "center", paddingTop: 20 }}>
          <a href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 14,
            background: "linear-gradient(135deg, #6d28d9, #8b5cf6)",
            color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700,
            fontSize: isMobile ? 13 : 15, letterSpacing: "0.04em", textDecoration: "none",
            boxShadow: "0 8px 28px rgba(109,40,217,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(139,92,246,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 28px rgba(109,40,217,0.35)"; }}
          >
            ← Back to Portfolio
          </a>
          <p style={{ marginTop: 28, color: "rgba(255,255,255,0.15)", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
            TRUBBLE BUDDY · CO-DESIGN · WEARABLE + APP
          </p>
        </footer>

      </div>
    </div>
  );
};

export default SecondProject;