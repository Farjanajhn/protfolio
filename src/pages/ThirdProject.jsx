// ThirdProject.jsx — MyGov BD Case Study — Fully Responsive
// Hero image removed. All layouts adapt: mobile (<768) · tablet (768-1023) · desktop (≥1024)

import { useEffect, useState, useMemo, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Design_Process from "../assets/image/UX3RD/Design_process.png";
import UP1  from "../assets/image/UX3RD/UP_1.png";
import UP2  from "../assets/image/UX3RD/UP_2.png";
import MC   from "../assets/image/UX3RD/MC.png";
import CP   from "../assets/image/UX3RD/ca.png";
import EP   from "../assets/image/UX3RD/EP.png";
import IA   from "../assets/image/UX3RD/IA.png";
import UF   from "../assets/image/UX3RD/UF.png";
import TYPOGRAPHY from "../assets/image/UX3RD/TYPOGRAPHY.png";
import ICONOGRAPHY from "../assets/image/UX3RD/Iconography 2.png";
import COMPONENT from "../assets/image/UX3RD/Component.png";
import G    from "../assets/image/UX3RD/G.png";
import MIFI from "../assets/image/UX3RD/MIFI-2.png";
import LD   from "../assets/image/UX3RD/LD.png";
import LC   from "../assets/image/UX3RD/LC.png";
import APPLY from "../assets/image/UX3RD/Apply.png";
import TRACK from "../assets/image/UX3RD/Track.png";
import UI_C from "../assets/image/UX3RD/UI_C.png";
import UT   from "../assets/image/UX3RD/UT.png";
import Qf   from "../assets/image/UX3RD/Qf.png";

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
const Counter = ({ value }) => {
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
  return <span ref={ref}>{count}</span>;
};

/* ─── Noise ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "fixed", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 0, opacity: 0.03, mixBlendMode: "overlay",
  }}>
    <filter id="ng3">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#ng3)" />
  </svg>
);

/* ─── Tag ─── */
const Tag = ({ children, green }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "3px 12px", borderRadius: 999,
    border: `1px solid ${green ? "rgba(52,211,153,0.35)" : "rgba(52,211,153,0.2)"}`,
    background: green ? "rgba(52,211,153,0.12)" : "rgba(52,211,153,0.06)",
    color: "#6ee7b7", fontSize: 11,
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
        fontWeight: 800, lineHeight: 1.1, color: "#f0fdf4", letterSpacing: "-0.02em",
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
    background: "linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)",
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
const StatCard = ({ emoji, value, label, delay = 0, isText, isMobile }) => (
  <div data-aos="fade-up" data-aos-delay={isMobile ? 0 : delay} style={{
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 18, padding: isMobile ? "16px 14px" : "22px 20px",
    display: "flex", flexDirection: "column", gap: 7,
    backdropFilter: "blur(12px)", transition: "transform 0.3s, border-color 0.3s", cursor: "default",
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(52,211,153,0.3)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
  >
    <div style={{ fontSize: 20 }}>{emoji}</div>
    <div style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? (isText ? 12 : 26) : (isText ? 16 : 32),
      fontWeight: 800, lineHeight: 1.1,
      background: "linear-gradient(135deg, #ffffff, #6ee7b7)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    }}>
      {isText ? value : <Counter value={value} />}
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
    border: `1px solid ${accent ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.07)"}`,
    borderTop: accent ? "2px solid #10b981" : "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20, padding: "22px 24px", backdropFilter: "blur(8px)",
  }}>
    {title && (
      <h3 style={{ margin: "0 0 12px", fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#f0fdf4" }}>{title}</h3>
    )}
    <div style={{ color: "rgba(240,253,244,0.8)", fontSize: 14, lineHeight: 1.75 }}>{children}</div>
  </div>
);

/* ─── Card with image header (hi-fi / usability) ─── */
const ImageCard = ({ title, desc, src, alt, tag, maxH = 460, isMobile }) => (
  <div data-aos="fade-up" style={{
    borderRadius: 22, overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.02)",
  }}>
    <div style={{
      padding: isMobile ? "16px 18px 12px" : "20px 26px",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      display: "flex", alignItems: isMobile ? "flex-start" : "center",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between", gap: 10,
    }}>
      <div>
        <div style={{ color: "#f0fdf4", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: isMobile ? 15 : 17 }}>{title}</div>
        {desc && <div style={{ color: "rgba(240,253,244,0.45)", fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{desc}</div>}
      </div>
      {tag && <Tag>{tag}</Tag>}
    </div>
    <div style={{ padding: isMobile ? 12 : 18 }}>
      <Frame src={src} alt={alt || title} maxH={maxH} />
    </div>
  </div>
);

/* ─── Divider ─── */
const Divider = ({ isMobile }) => (
  <div style={{ margin: `${isMobile ? 48 : 72}px 0`, display: "flex", alignItems: "center", gap: 16 }}>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08))" }} />
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(255,255,255,0.08))" }} />
  </div>
);

/* ─── TOC ─── */
const TOC = ({ items, active, isMobile }) => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", justifyContent: "center",
    padding: isMobile ? "7px 10px" : "10px 16px",
    background: "rgba(5,14,10,0.92)", backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)", overflowX: "auto",
  }}>
    <div style={{ display: "flex", gap: isMobile ? 3 : 4, flexWrap: isMobile ? "nowrap" : "wrap", justifyContent: "center", maxWidth: 1100 }}>
      {items.map(i => (
        <a key={i.id} href={`#${i.id}`} style={{
          padding: isMobile ? "4px 8px" : "5px 13px", borderRadius: 999, whiteSpace: "nowrap",
          fontSize: isMobile ? 9 : 10, fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: active === i.id ? "#6ee7b7" : "rgba(255,255,255,0.45)",
          background: active === i.id ? "rgba(16,185,129,0.1)" : "transparent",
          border: active === i.id ? "1px solid rgba(52,211,153,0.25)" : "1px solid transparent",
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
    <span style={{ color: "#10b981", marginTop: 4, flexShrink: 0, fontSize: 9 }}>◆</span>
    <span style={{ fontFamily: "'Lato', sans-serif", color: "rgba(240,253,244,0.82)", fontSize: 13, lineHeight: 1.75 }}>{children}</span>
  </li>
);

const ul  = { paddingLeft: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 9 };
const base = { fontFamily: "'Lato', sans-serif", color: "rgba(240,253,244,0.82)", fontSize: 14, lineHeight: 1.8 };

/* ═══ MAIN ═══ */
const ThirdProject = () => {
  const progress = useScrollProgress();
  const [activeSection, setActiveSection] = useState("overview");
  const width    = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    document.title = "MyGov BD — UX Case Study";
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
    { id: "overview",         label: "Overview"    },
    { id: "problem",          label: "Problem"     },
    { id: "solution",         label: "Solution"    },
    { id: "audience",         label: "Users"       },
    { id: "approach",         label: "Approach"    },
    { id: "design-thinking",  label: "Process"     },
    { id: "personas",         label: "Personas"    },
    { id: "moscow",           label: "MoSCoW"      },
    { id: "competitive",      label: "Competitive" },
    { id: "userflow",         label: "Userflow"    },
    { id: "ia",               label: "IA"          },
    { id: "design-system",    label: "Style"       },
    { id: "midfi",            label: "Mid-fi"      },
    { id: "hifi",             label: "Hi-fi"       },
    { id: "usability",        label: "Usability"   },
    { id: "learning-feedback",label: "Learnings"   },
  ], []);

  const px    = isMobile ? "16px" : isTablet ? "28px" : "32px";
  const grid2 = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 14 : 20 };
  const grid4 = { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 10 : 16 };

  return (
    <div style={{ background: "#060d0a", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      <NoiseLayer />

      {/* Glows */}
      <div aria-hidden style={{ position: "fixed", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "fixed", bottom: -300, left: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 3, zIndex: 200,
        width: `${progress * 100}%`,
        background: "linear-gradient(to right, #059669, #34d399)",
        transition: "width 0.1s", boxShadow: "0 0 12px rgba(52,211,153,0.55)",
      }} />

      <TOC items={tocItems} active={activeSection} isMobile={isMobile} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: `0 ${px} 100px` }}>

        {/* ═══ HERO ═══ */}
        <header style={{ paddingTop: isMobile ? 68 : 88 }}>
          <div data-aos="fade-up" style={{
            borderRadius: isMobile ? 20 : 28, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(16,185,129,0.05) 100%)",
          }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #059669, #34d399, transparent)" }} />
            <div style={{ padding: isMobile ? "28px 20px 32px" : isTablet ? "40px 32px" : "52px 52px 48px" }}>

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22, alignItems: "center" }}>
                <Tag green>🇧🇩 MyGov BD</Tag>
                <Tag>UX Case Study</Tag>
                {!isMobile && <Tag>Mobile App</Tag>}
                {!isMobile && <Tag>Team of 6</Tag>}
              </div>

              {/* Title */}
              <h1 style={{
                margin: "0 0 18px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? "clamp(34px, 11vw, 52px)" : "clamp(40px, 6vw, 80px)",
                fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#f0fdf4",
              }}>
                MyGov BD<br />
                <span style={{ background: "linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  UX Redesign
                </span><br />
                <span style={{ fontSize: isMobile ? "clamp(15px, 5vw, 26px)" : "clamp(22px, 3vw, 44px)", color: "rgba(240,253,244,0.4)", fontWeight: 700 }}>
                  Case Study
                </span>
              </h1>

              <p style={{ ...base, maxWidth: 580, fontSize: isMobile ? 14 : 17, marginBottom: 28 }}>
                A citizen-centered redesign making essential government services accessible via
                <strong style={{ color: "#6ee7b7" }}> simplified navigation</strong>,
                <strong style={{ color: "#6ee7b7" }}> consistent language switching</strong>, and
                <strong style={{ color: "#6ee7b7" }}> clear task feedback</strong>.
              </p>

              {/* Stat cards — 2×2 on mobile, 4 cols on larger */}
              <div style={grid4}>
                <StatCard emoji="🧑‍🎨" value="UX/UI Designer" label="My Role"       isText isMobile={isMobile} />
                <StatCard emoji="👥"  value="6"               label="Team Members"   isMobile={isMobile} delay={100} />
                <StatCard emoji="📱"  value="Mobile"          label="Platform"       isText isMobile={isMobile} delay={150} />
                <StatCard emoji="🛠"  value="Figma"           label="Design Tool"    isText isMobile={isMobile} delay={200} />
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
                MyGov BD supports citizens in accessing government services digitally — certificates, permits, documents, and status tracking. This case study focuses on reducing confusion and abandonment by improving navigation, language consistency, search, and task feedback.
              </p>
            </InfoCard>
            <InfoCard title="Project Focus">
              <ul style={ul}>
                {["Find services faster via smarter navigation + search","Support bilingual use with consistent language switching","Increase confidence with status updates + feedback","Improve accessibility for diverse user groups"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PROBLEM ═══ */}
        <section id="problem" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What is broken today" title="The Problem" isMobile={isMobile} />
          <div data-aos="fade-up" style={{ borderLeft: "3px solid #10b981", paddingLeft: isMobile ? 16 : 28, marginBottom: 22 }}>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(14px, 4.5vw, 20px)" : "clamp(18px, 3vw, 28px)",
              fontWeight: 700, color: "#f0fdf4", margin: 0, lineHeight: 1.5, fontStyle: "italic",
            }}>
              "Citizens struggle to complete essential tasks — confusing navigation, inconsistent language, poor search, and no feedback."
            </blockquote>
          </div>
          <InfoCard title="Core friction points" accent>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 10 : 16, marginTop: 8 }}>
              {[["🧭","Navigation","Confusing categories make it hard to find the right task."],["🌐","Language","Switching between Bangla and English breaks mid-flow."],["🔍","Search","Poor relevance and no suggestions frustrate users."],["📋","Feedback","No status updates — users don't know if their task worked."]].map(([icon, title, desc]) => (
                <div key={title} style={{ padding: isMobile ? "12px" : "16px 18px", borderRadius: 14, background: "rgba(16,185,129,0.05)", border: "1px solid rgba(52,211,153,0.12)" }}>
                  <div style={{ fontSize: isMobile ? 18 : 20, marginBottom: 7 }}>{icon}</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: isMobile ? 12 : 14, marginBottom: 4 }}>{title}</div>
                  <div style={{ color: "rgba(240,253,244,0.55)", fontSize: isMobile ? 11 : 12, lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ SOLUTION ═══ */}
        <section id="solution" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What we propose" title="Proposed Solution" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Redesign direction" accent>
              <p style={base}>Simplified navigation, consistent language switching, improved search accuracy, and clear application status feedback — enabling citizens to complete government services quickly and confidently.</p>
            </InfoCard>
            <InfoCard title="Success metrics">
              <ul style={ul}>
                {["Reduced time to find a service","Higher task completion rate","Fewer errors during application steps","Higher user satisfaction and trust"].map((t, i) => (
                  <li key={i} style={{ listStyle: "none", display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span style={{ color: "#10b981", fontFamily: "'DM Mono', monospace", fontSize: 10, minWidth: 20 }}>0{i + 1}</span>
                    <span style={{ ...base, fontSize: 13 }}>{t}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ AUDIENCE ═══ */}
        <section id="audience" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Who we designed for" title="Target Users" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Primary audiences">
              <ul style={ul}>
                {[["🎓","Students","Certificates, registrations, education services"],["🏙","Everyday citizens","Documents, permits, public information"],["💼","Working professionals","Fast, time-sensitive task completion"],["👴","Elderly users","Clarity, larger touch targets, readable text"]].map(([icon, name, desc]) => (
                  <li key={name} style={{ listStyle: "none", display: "flex", gap: 10, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize: 16 }}>{icon}</span>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{name}</div>
                      <div style={{ color: "rgba(240,253,244,0.45)", fontSize: 12, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Accessibility considerations">
              <ul style={ul}>
                {["Readable typography and high contrast","Clear error prevention and recovery guidance","Simple language and consistent wording","Reduced cognitive load via progressive disclosure"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ APPROACH ═══ */}
        <section id="approach" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="How decisions were made" title="Design Approach" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Guiding principles" accent>
              <ul style={ul}>
                {[["Task-first","Help users complete services fast"],["Consistency","Labels, language switching, patterns"],["Visibility of status","Feedback + progress timelines"],["Accessibility by default","Contrast, touch targets, language"]].map(([bold, rest]) => (
                  <li key={bold} style={{ listStyle: "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#10b981", flexShrink: 0, marginTop: 4, fontSize: 9 }}>◆</span>
                    <span style={{ ...base, fontSize: 13 }}><strong style={{ color: "#a7f3d0" }}>{bold}</strong> — {rest}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Key UX improvements">
              <ul style={ul}>
                {["Guided step-by-step service application flows","Smart search with suggestions and filters","Clear confirmation screens (reference ID / receipt)","Improved error messages and recovery paths"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ DESIGN THINKING ═══ */}
        <section id="design-thinking" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Process overview" title="Design Thinking Process" isMobile={isMobile} />
          <div data-aos="fade-up">
            <Frame src={Design_Process} alt="Design thinking process" maxH={isMobile ? 240 : 520} caption="Empathize → Define → Ideate → Prototype → Test" />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PERSONAS ═══ */}
        <section id="personas" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="User perspective" title="Personas" isMobile={isMobile} />
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 22 }}>
            {[
              { src: UP1, name: "Primary", sub: "Everyday Citizen", desc: "Represents everyday citizens using MyGov BD to complete essential government services efficiently and with confidence.", delay: 0 },
              { src: UP2, name: "Secondary", sub: "Task-Driven User", desc: "Represents users who need well-structured information, clear requirements, and accessible design to confidently complete important tasks.", delay: 80 },
            ].map(({ src, name, sub, desc, delay }) => (
              <div key={name} data-aos="fade-up" data-aos-delay={isMobile ? 0 : delay} style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
                borderRadius: 22, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}>
                <div style={{
                  padding: isMobile ? "20px 18px 0" : "28px 28px",
                  background: "rgba(16,185,129,0.05)",
                  borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.05)",
                  borderBottom: isMobile ? "1px solid rgba(255,255,255,0.05)" : "none",
                  display: "flex", flexDirection: "column", justifyContent: "center", gap: 10,
                }}>
                  <Tag>{name} Persona</Tag>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 22 : 26, fontWeight: 800, color: "#f0fdf4" }}>{sub}</div>
                  <p style={{ ...base, fontSize: 13, marginTop: 0 }}>{desc}</p>
                </div>
                <div style={{ padding: isMobile ? 14 : 18 }}>
                  <Frame src={src} alt={`Persona: ${name}`} maxH={isMobile ? 220 : 340} />
                </div>
              </div>
            ))}

            {/* Empathy map */}
            <ImageCard title="Empathy Map" tag="Research" src={EP} alt="Empathy map" maxH={isMobile ? 260 : 460} caption="Composite empathy map — needs, pain points, goals" isMobile={isMobile} />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ MoSCoW ═══ */}
        <section id="moscow" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Feature prioritization" title="MoSCoW Analysis" isMobile={isMobile} />
          <InfoCard title="What gets built first" accent>
            <p style={{ ...base, marginBottom: 18 }}>Must-have changes target confusion and task failure. Should-have improvements add efficiency and polish.</p>
            <Frame src={MC} alt="MoSCoW model" maxH={isMobile ? 260 : 460} />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ COMPETITIVE ═══ */}
        <section id="competitive" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Learning from similar apps" title="Competitive Analysis" isMobile={isMobile} />
          <InfoCard>
            <p style={{ ...base, marginBottom: 18 }}>Compared against UMANG (India), Service NSW, and Malaysia MyGov. MyGov BD demonstrates stronger potential through life-event–based navigation, smart search, multi-language support, and accessibility.</p>
            <Frame src={CP} alt="Competitive analysis" maxH={isMobile ? 260 : 500} />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ USERFLOW ═══ */}
        <section id="userflow" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="App user flow" title="User Flow" isMobile={isMobile} />
          <InfoCard>
            <Frame src={UF} alt="User flow" maxH={isMobile ? 240 : 520} caption="Primary flow: Home → Search → Select service → Apply → Track status" />
          </InfoCard>
        </section>

        {/* ═══ IA ═══ */}
        <section id="ia" style={{ scrollMarginTop: 68, marginTop: isMobile ? 40 : 20 }}>
          <SectionHead kicker="App information architecture" title="Information Architecture" isMobile={isMobile} />
          <InfoCard>
            <Frame src={IA} alt="Information architecture" maxH={isMobile ? 240 : 520} caption="IA — service hierarchy and navigation structure" />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ DESIGN SYSTEM ═══ */}
        <section id="design-system" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Typography, components, grid" title="Style Guide" isMobile={isMobile} />

          {/* Color swatches */}
          <div data-aos="fade-up" style={{ display: "flex", gap: isMobile ? 8 : 12, marginBottom: 22, flexWrap: "wrap" }}>
            {[["#004B37","Primary"],["#262626","Text"],["#ЕЗЕАЕА","Tertiary"],["#FFFFEf","Background"]].map(([hex, name]) => (
              <div key={hex} style={{ display: "flex", alignItems: "center", gap: 8, padding: isMobile ? "6px 12px" : "8px 16px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
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
                  <Frame src={src} alt={title} maxH={isMobile ? 260 : 480} />
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
            <p style={{ ...base, marginBottom: 18 }}>Mid-fi wireframes validated service hierarchy, navigation patterns, and form flows before any visual polish was applied.</p>
            <Frame src={MIFI} alt="Mid-fi wireframes" maxH={isMobile ? 260 : 520} caption="Mid-fi — annotated wireframes for core service screens" />
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ HI-FI ═══ */}
        <section id="hifi" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Final screens" title="High-Fidelity Design" isMobile={isMobile} />
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 22 }}>
            {[
              { title: "Landing / Home screen", src: LD, desc: "Surfacing the most-used services directly with clear category labels and a persistent search bar." },
              { title: "Language switch — Bangla ↔ English", src: LC, desc: "A single system-wide language control. Every screen updates when switched — no partial translations." },
              { title: "Apply for Birth Certificate", src: APPLY, desc: "Guided step-by-step form with inline validation, progress indicators, and plain-language field labels." },
              { title: "Track your application", src: TRACK, desc: "Status timeline showing exactly where an application is — with timestamps and next expected step." },
              { title: "Design comparison — Old vs New UI", src: UI_C, desc: "Side-by-side showing navigation clarity, label consistency, and visual hierarchy improvements." },
            ].map(({ title, src, desc }, i) => (
              <ImageCard key={title} title={title} desc={desc} src={src} tag="Hi-fi" maxH={isMobile ? 280 : 460} isMobile={isMobile} />
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ USABILITY ═══ */}
        <section id="usability" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="Evidence-based iteration" title="Usability Testing" isMobile={isMobile} />
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 14 : 20 }}>
            {[
              { title: "Usability Testing Summary", src: UT, caption: "Task completion rates and SUS scores across 5 participants" },
              { title: "Qualitative Findings",      src: Qf, caption: "Thematic analysis — themes extracted from post-task interviews" },
            ].map(({ title, src, caption }, i) => (
              <ImageCard key={title} title={title} src={src} tag="Research" maxH={isMobile ? 260 : 480} isMobile={isMobile} caption={caption} />
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ LEARNINGS ═══ */}
        <section id="learning-feedback" style={{ scrollMarginTop: 68 }}>
          <SectionHead kicker="What I took away" title="Learning & Reflection" isMobile={isMobile} />
          <div style={{ ...grid2, marginBottom: isMobile ? 14 : 20 }} data-aos="fade-up">
            <InfoCard title="Key learnings" accent>
              <ul style={ul}>
                {["Clear navigation and hierarchy are critical for government apps.","Consistent language (Bangla/English) builds trust and reduces errors.","Progress indicators reduce form abandonment significantly.","Quick access to frequent services improves daily efficiency."].map((item, i) => (
                  <li key={i} style={{ listStyle: "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#10b981", fontFamily: "'DM Mono', monospace", fontSize: 10, minWidth: 20, marginTop: 3 }}>0{i + 1}</span>
                    <span style={{ ...base, fontSize: 13 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="User & team feedback">
              <ul style={ul}>
                {["Users appreciated the simplified Apply and Track flows.","Positive response to Quick Search and Notification features."].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
          <div style={grid2} data-aos="fade-up" data-aos-delay={isMobile ? 0 : 80}>
            <InfoCard title="What I'd improve next">
              <ul style={ul}>
                {["Clearer error prevention and inline form validation.","Service bookmarks and recent activity shortcuts.","Expanded accessibility: text size, voice guidance, contrast toggle.","Moderated testing with elderly and low-literacy users."].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
            <InfoCard title="Impact framing">
              <p style={base}>
                This case study strengthened my ability to connect{" "}
                <strong style={{ color: "#6ee7b7" }}>research-driven insights</strong> with practical UI decisions — focusing on clarity, trust, and task completion in digital government services.
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
            background: "linear-gradient(135deg, #059669, #10b981)",
            color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700,
            fontSize: isMobile ? 13 : 15, letterSpacing: "0.04em", textDecoration: "none",
            boxShadow: "0 8px 28px rgba(16,185,129,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(16,185,129,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 28px rgba(16,185,129,0.3)"; }}
          >
            ← Back to Portfolio
          </a>
          <p style={{ marginTop: 28, color: "rgba(255,255,255,0.15)", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
            MYGOV BD · UX CASE STUDY · MOBILE APP
          </p>
        </footer>

      </div>
    </div>
  );
};

export default ThirdProject;