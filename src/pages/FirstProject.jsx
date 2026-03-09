// FirstProject.jsx — Blossom Buddy Case Study — Fully Responsive
// All layouts adapt: mobile (<768) · tablet (768-1023) · desktop (≥1024)

import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ideation  from "../assets/image/ideation.jpg";
import ideation2 from "../assets/image/ideation2.jpg";
import ideation3 from "../assets/image/ideation3.jpg";
import project1  from "../assets/image/project_1.jpg";
import project2  from "../assets/image/UX1st/project2.png";
import happy     from "../assets/image/UX1st/happy2.png";
import healthy   from "../assets/image/UX1st/all.png";
import sad       from "../assets/image/UX1st/sad.png";
import day       from "../assets/image/UX1st/Day1.png";
import day2      from "../assets/image/UX1st/Day2.png";
import day3      from "../assets/image/UX1st/Day3.png";
import lofi2     from "../assets/image/UX1st/lofi2.jpeg";
import lofi3     from "../assets/image/UX1st/lofi3.jpeg";
import lofi4     from "../assets/image/UX1st/lofi4.jpeg";
import initial1  from "../assets/image/UX1st/initial1.png";
import initial2  from "../assets/image/UX1st/initial2.png";
import initial3  from "../assets/image/UX1st/initial3.png";
import initial4  from "../assets/image/UX1st/initial3.png";
import final     from "../assets/image/UX1st/final.png";
import project8  from "../assets/image/project6.jpg";

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
    pointerEvents: "none", zIndex: 0, opacity: 0.035, mixBlendMode: "overlay",
  }}>
    <filter id="nf1">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#nf1)" />
  </svg>
);

/* ─── Tag ─── */
const Tag = ({ children, warm }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "3px 12px", borderRadius: 999,
    border: `1px solid ${warm ? "rgba(251,191,36,0.4)" : "rgba(251,191,36,0.2)"}`,
    background: warm ? "rgba(251,191,36,0.1)" : "rgba(251,191,36,0.05)",
    color: "#fcd34d", fontSize: 11,
    letterSpacing: "0.12em", textTransform: "uppercase",
    fontFamily: "'DM Mono', monospace", fontWeight: 500,
  }}>
    {children}
  </span>
);

/* ─── Section heading ─── */
const SectionHead = ({ kicker, title, isMobile }) => (
  <div style={{ marginBottom: isMobile ? 28 : 40 }}>
    {kicker && <Tag>{kicker}</Tag>}
    {title && (
      <h2 style={{
        marginTop: 12, marginBottom: 0,
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: isMobile ? "clamp(24px, 7vw, 36px)" : "clamp(28px, 4vw, 48px)",
        fontWeight: 800, lineHeight: 1.1,
        color: "#fffbeb", letterSpacing: "-0.02em",
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
    background: "linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)",
    padding: 2,
    boxShadow: "0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)",
  }}>
    <div style={{ borderRadius: 16, overflow: "hidden", background: "#fff" }}>
      <img src={src} alt={alt}
        style={{ width: "100%", maxHeight: maxH, objectFit: "contain", display: "block" }}
        loading="lazy" />
    </div>
    {caption && (
      <p style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "8px 14px",
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
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 18, padding: isMobile ? "18px 16px" : "22px 20px",
    display: "flex", flexDirection: "column", gap: 7,
    backdropFilter: "blur(12px)",
    transition: "transform 0.3s, border-color 0.3s", cursor: "default",
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(251,191,36,0.3)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
  >
    <div style={{ fontSize: 20 }}>{emoji}</div>
    <div style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? 14 : 16, fontWeight: 800, lineHeight: 1.2,
      background: "linear-gradient(135deg, #ffffff, #fcd34d)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    }}>
      {value}
    </div>
    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.38)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
      {label}
    </div>
  </div>
);

/* ─── Info card ─── */
const InfoCard = ({ title, children, accent }) => (
  <div style={{
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${accent ? "rgba(251,191,36,0.2)" : "rgba(255,255,255,0.07)"}`,
    borderTop: accent ? "2px solid #d97706" : "1px solid rgba(255,255,255,0.07)",
    borderRadius: 20, padding: "22px 24px",
    backdropFilter: "blur(8px)",
  }}>
    {title && (
      <h3 style={{
        margin: "0 0 12px", fontFamily: "'Playfair Display', serif",
        fontSize: 17, fontWeight: 700, color: "#fffbeb", letterSpacing: "-0.01em",
      }}>{title}</h3>
    )}
    <div style={{ color: "rgba(255,251,235,0.8)", fontSize: 14, lineHeight: 1.75 }}>
      {children}
    </div>
  </div>
);

/* ─── Resource badge ─── */
const ResourceBadge = ({ emoji, label, desc }) => (
  <div style={{
    padding: "16px 18px", borderRadius: 16,
    background: "rgba(251,191,36,0.05)",
    border: "1px solid rgba(251,191,36,0.14)",
    display: "flex", flexDirection: "column", gap: 6,
  }}>
    <div style={{ fontSize: 26 }}>{emoji}</div>
    <div style={{ color: "#fcd34d", fontWeight: 700, fontSize: 13, fontFamily: "'Lato', sans-serif" }}>{label}</div>
    <div style={{ color: "rgba(255,251,235,0.5)", fontSize: 12, lineHeight: 1.5 }}>{desc}</div>
  </div>
);

/* ─── Scenario card ─── */
const ScenarioCard = ({ num, title, children, src, isMobile }) => (
  <div data-aos="fade-up" style={{
    borderRadius: 20, overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.02)",
  }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: src && !isMobile ? "3fr 2fr" : "1fr",
    }}>
      <div style={{ padding: "24px 26px", borderRight: src && !isMobile ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #d97706, #f59e0b)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'DM Mono', monospace", fontWeight: 700, fontSize: 13, color: "#000",
          }}>
            {num}
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#fffbeb" }}>{title}</div>
        </div>
        <div style={{ color: "rgba(255,251,235,0.75)", fontSize: 14, lineHeight: 1.75 }}>{children}</div>
      </div>
      {src && !isMobile && (
        <div style={{ padding: 14 }}>
          <Frame src={src} alt={title} maxH={220} />
        </div>
      )}
    </div>
    {src && isMobile && (
      <div style={{ padding: "0 14px 14px" }}>
        <Frame src={src} alt={title} maxH={200} />
      </div>
    )}
  </div>
);

/* ─── Divider ─── */
const Divider = ({ isMobile }) => (
  <div style={{ margin: `${isMobile ? 48 : 72}px 0`, display: "flex", alignItems: "center", gap: 16 }}>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07))" }} />
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d97706" }} />
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(255,255,255,0.07))" }} />
  </div>
);

/* ─── TOC nav ─── */
const TOC = ({ items, active, isMobile }) => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", justifyContent: "center",
    padding: isMobile ? "8px 12px" : "10px 16px",
    background: "rgba(10,8,3,0.92)", backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    overflowX: "auto",
  }}>
    <div style={{
      display: "flex", gap: isMobile ? 3 : 4,
      flexWrap: isMobile ? "nowrap" : "wrap",
      justifyContent: "center", maxWidth: 1200,
    }}>
      {items.map(i => (
        <a key={i.id} href={`#${i.id}`} style={{
          padding: isMobile ? "4px 9px" : "5px 12px",
          borderRadius: 999, whiteSpace: "nowrap",
          fontSize: isMobile ? 9 : 10,
          fontFamily: "'DM Mono', monospace",
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: active === i.id ? "#fcd34d" : "rgba(255,255,255,0.4)",
          background: active === i.id ? "rgba(217,119,6,0.12)" : "transparent",
          border: active === i.id ? "1px solid rgba(251,191,36,0.25)" : "1px solid transparent",
          textDecoration: "none", transition: "all 0.2s", flexShrink: 0,
        }}>
          {i.label}
        </a>
      ))}
    </div>
  </nav>
);

/* ─── Bullet item ─── */
const BulletItem = ({ children }) => (
  <li style={{ display: "flex", gap: 10, alignItems: "flex-start", listStyle: "none" }}>
    <span style={{ color: "#d97706", marginTop: 4, flexShrink: 0, fontSize: 9 }}>◆</span>
    <span style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,251,235,0.82)", fontSize: 13, lineHeight: 1.75 }}>{children}</span>
  </li>
);

const ul = { paddingLeft: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 9 };
const base = { fontFamily: "'Lato', sans-serif", color: "rgba(255,251,235,0.82)", fontSize: 14, lineHeight: 1.8 };

/* ═══ MAIN ═══ */
const FirstProject = () => {
  const progress = useScrollProgress();
  const [activeSection, setActiveSection] = useState("overview");
  const width    = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    document.title = "Blossom Buddy — Case Study";
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);

    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const tocItems = useMemo(() => [
    { id: "overview",  label: "Overview"  },
    { id: "problem",   label: "Problem"   },
    { id: "process",   label: "Process"   },
    { id: "ideation",  label: "Ideation"  },
    { id: "lofi",      label: "Lo-fi"     },
    { id: "initial",   label: "Initial"   },
    { id: "hifi",      label: "Hi-fi"     },
    { id: "scenarios", label: "Scenarios" },
    { id: "testing",   label: "Testing"   },
    { id: "decisions", label: "Decisions" },
    { id: "future",    label: "Future"    },
    { id: "theory",    label: "Theory"    },
    { id: "refs",      label: "Refs"      },
  ], []);

  const px = isMobile ? "16px" : isTablet ? "28px" : "32px";

  /* helper: 2-col on tablet/desktop, 1-col on mobile */
  const grid2 = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 14 : 20 };
  const grid3 = { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 16 };
  const grid4 = { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 10 : 16 };

  return (
    <div style={{ background: "#0a0803", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      <NoiseLayer />

      {/* Ambient glows */}
      <div aria-hidden style={{ position: "fixed", top: -150, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(120,80,20,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "fixed", bottom: -200, left: -150, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,80,40,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Progress bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: 3, zIndex: 200,
        width: `${progress * 100}%`,
        background: "linear-gradient(to right, #92400e, #d97706, #fbbf24)",
        transition: "width 0.1s",
        boxShadow: "0 0 12px rgba(217,119,6,0.6)",
      }} />

      <TOC items={tocItems} active={activeSection} isMobile={isMobile} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: `0 ${px} 100px` }}>

        {/* ═══ HERO ═══ */}
        <header style={{ paddingTop: isMobile ? 72 : 90 }}>
          <div data-aos="fade-up" style={{
            borderRadius: isMobile ? 20 : 28, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(120,80,20,0.07) 100%)",
          }}>
            <div style={{ height: 3, background: "linear-gradient(to right, #92400e, #f59e0b, transparent)" }} />
            <div style={{ padding: isMobile ? "28px 20px 32px" : isTablet ? "40px 36px 40px" : "52px 52px 48px" }}>

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
                <Tag warm>🌱 Tangible · Gamified · Self-care</Tag>
                <Tag>UX Case Study</Tag>
                {!isMobile && <Tag>Wizard-of-Oz</Tag>}
              </div>

              {/* Title */}
              <h1 style={{
                margin: "0 0 20px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? "clamp(36px, 12vw, 56px)" : "clamp(40px, 6vw, 80px)",
                fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#fffbeb",
              }}>
                Blossom<br />
                <span style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Buddy
                </span><br />
                <span style={{ fontSize: isMobile ? "clamp(16px, 5vw, 26px)" : "clamp(20px, 3vw, 44px)", color: "rgba(255,251,235,0.4)", fontWeight: 700 }}>
                  Case Study
                </span>
              </h1>

              <p style={{ ...base, maxWidth: 620, fontSize: isMobile ? 14 : 17, marginBottom: 32 }}>
                A hybrid interactive system pairing a <strong style={{ color: "#fcd34d" }}>real plant</strong> with a
                playful digital companion. Users complete daily self-improvement tasks; the plant responds
                with visible state changes and tailored rewards to sustain motivation.
              </p>

              {/* Stat cards */}
              <div style={{ ...grid4, marginBottom: 36 }}>
                <StatCard emoji="👤" value="UX Designer" label="Role"     isMobile={isMobile} />
                <StatCard emoji="🗓" value="8 Weeks"     label="Duration" isMobile={isMobile} delay={80} />
                <StatCard emoji="🛠" value="Figma · Paper · React" label="Tools" isMobile={isMobile} delay={160} />
                <StatCard emoji="🧪" value="Experience · WoZ" label="Methods" isMobile={isMobile} delay={240} />
              </div>

              {/* Hero images */}
            
            </div>
          </div>
        </header>

        <Divider isMobile={isMobile} />

        {/* ═══ OVERVIEW ═══ */}
        <section id="overview" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="What is this" title="Project Overview" isMobile={isMobile} />
          <InfoCard accent>
            <p style={base}>
              The concept blends nature and technology to make personal growth feel alive. Each day the
              user selects small self-development tasks. Completing a task grants the plant a resource.
              Finishing the full set unlocks a <strong style={{ color: "#fcd34d" }}>special reward</strong>, and
              every 3–4 days a surprise reward appears to keep excitement high.
            </p>
          </InfoCard>
          <div style={{ ...grid3, marginTop: 16 }} data-aos="fade-up">
            <ResourceBadge emoji="☀️" label="Sunlight"  desc="Earned by completing focus or mindfulness tasks" />
            <ResourceBadge emoji="💧" label="Water"     desc="Earned through movement or physical activity" />
            <ResourceBadge emoji="🍃" label="Nutrients" desc="Earned by journaling or reflective activities" />
          </div>
          <div style={{ ...grid2, marginTop: 16 }} data-aos="fade-up">
            <InfoCard title="Core idea">
              <ul style={ul}>
                {["Real plant + digital twin for emotional engagement", "Resources (☀️/💧/🍃) represent habit completion", "Rewards: daily special + periodic surprise", "Sensors ground motivation in tangible care"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
            <InfoCard title="Outcome (prototype)">
              <ul style={ul}>
                {["Hi-fi UI screens in Figma", "Experience prototyping + WoZ evaluation", "Improved motivation through visible feedback"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PROBLEM ═══ */}
        <section id="problem" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="What we're solving" title="Problem & Goals" isMobile={isMobile} />
          <div data-aos="fade-up" style={{ borderLeft: "3px solid #d97706", paddingLeft: isMobile ? 18 : 28, marginBottom: 24 }}>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(15px, 4.5vw, 20px)" : "clamp(18px, 2.5vw, 26px)",
              fontWeight: 700, fontStyle: "italic",
              color: "#fffbeb", margin: 0, lineHeight: 1.5,
            }}>
              "It's difficult to stay motivated for everyday self-care. Most habit trackers feel mechanical and easy to abandon."
            </blockquote>
          </div>
          <div style={{ ...grid2 }} data-aos="fade-up" data-aos-delay="80">
            <InfoCard title="Design goals" accent>
              <ul style={ul}>
                {["Nurture motivation via tangible, emotional feedback", "Make progress visible and genuinely rewarding", "Support daily reflection without feeling like a chore"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
            <InfoCard title="Constraints">
              <ul style={ul}>
                {["Interactions must be quick — daily, not demanding", "Designed for different ages and tech familiarity", "Balance novelty with long-term engagement"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ PROCESS ═══ */}
        <section id="process" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Iterative, user-centered" title="Design Process" isMobile={isMobile} />
          <InfoCard accent>
            <p style={base}>
              We followed an <strong style={{ color: "#fcd34d" }}>experience prototyping</strong> approach
              supported by sketches, scenarios, and Wizard-of-Oz (WoZ) testing.
            </p>
          </InfoCard>
          <div style={{ ...grid4, marginTop: 16 }} data-aos="fade-up">
            {[["📝","Sketches · Flows","Artifacts"],["🎬","Experience prototyping","Technique"],["🧙","Wizard-of-Oz","Testing"],["💻","Figma screens","Hi-fi output"]].map(([icon, value, label]) => (
              <StatCard key={label} emoji={icon} value={value} label={label} isMobile={isMobile} />
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ IDEATION ═══ */}
        <section id="ideation" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Exploring concepts" title="Ideation" isMobile={isMobile} />
          <InfoCard>
            <p style={base}>We brainstormed many concepts and selected <strong style={{ color: "#fcd34d" }}>Blossom Buddy</strong> for its uniqueness and emotional resonance.</p>
          </InfoCard>
          <div style={{ marginTop: 16, overflowX: "auto", paddingBottom: 8 }}>
            <div style={{ display: "flex", gap: 14, minWidth: "max-content" }}>
              {[[ideation,"Ideation 1"],[ideation2,"Ideation 2"],[ideation3,"Ideation 3"]].map(([src, alt], i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={isMobile ? 0 : i * 80} style={{ width: isMobile ? 260 : 340, flexShrink: 0 }}>
                  <Frame src={src} alt={alt} maxH={300} caption={alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ LO-FI ═══ */}
        <section id="lofi" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Structure before visuals" title="Low-Fidelity Prototypes" isMobile={isMobile} />
          <InfoCard>
            <p style={base}>Paper sketches helped validate interactions quickly before committing to visual design.</p>
          </InfoCard>
          <div style={{ marginTop: 16, overflowX: "auto", paddingBottom: 8 }}>
            <div style={{ display: "flex", gap: 14, minWidth: "max-content" }}>
              {[[lofi2,"Lo-fi 1"],[project1,"Lo-fi 2"],[lofi3,"Lo-fi 3"],[lofi4,"Lo-fi 4"]].map(([src, alt], i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={isMobile ? 0 : i * 60} style={{ width: isMobile ? 220 : 280, flexShrink: 0 }}>
                  <Frame src={src} alt={alt} maxH={300} caption={alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ INITIAL ═══ */}
        <section id="initial" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Early digital form" title="Initial Prototype" isMobile={isMobile} />
          <InfoCard>
            <p style={{ ...base, marginBottom: 18 }}>Early mockups exploring emotional states, resource bars, and reward reveals.</p>
            <div style={grid2}>
              {[[initial1,"Initial 1 — home"],[initial2,"Initial 2 — tasks"],[initial3,"Initial 3 — reward"],[initial4,"Initial 4 — states"]].map(([src, alt], i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={isMobile ? 0 : i * 60}>
                  <Frame src={src} alt={alt} maxH={260} caption={alt} />
                </div>
              ))}
            </div>
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ HI-FI ═══ */}
        <section id="hifi" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Final screens" title="High-Fidelity Prototype" isMobile={isMobile} />
          <InfoCard accent>
            <p style={base}>Refined visuals and micro-copy keep interactions lightweight yet rewarding. The digital twin reflects mood and needs.</p>
          </InfoCard>
          <div style={{ marginTop: 16 }} data-aos="fade-up">
            <Frame src={final} alt="Final hi-fi" maxH={isMobile ? 320 : 520} caption="Final hi-fi — full interface with digital twin and resource system" />
          </div>
          <div style={{ marginTop: 16 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,251,235,0.3)", marginBottom: 10 }}>
              Plant emotional states
            </div>
            <div style={grid3}>
              {[[happy,"😊 Happy"],[healthy,"🌿 Healthy"],[sad,"😔 Sad"]].map(([src, alt], i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={isMobile ? 0 : i * 80}>
                  <Frame src={src} alt={alt} maxH={200} caption={alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ SCENARIOS ═══ */}
        <section id="scenarios" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Wizard-of-Oz evaluation" title="Experience Scenarios" isMobile={isMobile} />
          <p style={{ ...base, marginBottom: 20 }}>Three scenarios tested different emotional arcs — success, anticipation, and recovery.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <ScenarioCard num="01" title="First Day — Productive" src={day} isMobile={isMobile}>
              User completes all tasks. Reporting each grants a resource; completing the set unlocks a <strong style={{ color: "#fcd34d" }}>special reward</strong>.
            </ScenarioCard>
            <ScenarioCard num="02" title="Second Day — Early Unlock" src={day2} isMobile={isMobile}>
              User reports the first task next morning; a special reward is primed — testing anticipation and the emotional hook of near-completion.
            </ScenarioCard>
            <ScenarioCard num="03" title="Sad Scenario — Recovery" src={day3} isMobile={isMobile}>
              User completes nothing due to a hectic day. The plant appears sad; the UI surfaces micro-tasks to recover.
            </ScenarioCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ TESTING ═══ */}
        <section id="testing" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="WoZ sessions + interviews" title="User Testing & Feedback" isMobile={isMobile} />
          <div style={{ ...grid2 }} data-aos="fade-up">
            <InfoCard title="Key findings" accent>
              <ul style={ul}>
                {[["Controls","Most users preferred touch-only — no physical buttons."],["Mental model","Sun/water/nutrition bars felt meaningful and intuitive."],["Rewards","Users liked rewards; some preferred cosmetic customizations."],["Feedback pace","Requested richer plant reactions and faster feedback."],["Progress","Asked for calendar history and streak tracking."],["Form factor","Preferred a gently tilted screen for comfortable viewing."]].map(([bold, desc]) => (
                  <li key={bold} style={{ listStyle: "none", display: "flex", gap: 10, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ color: "#d97706", flexShrink: 0, marginTop: 4, fontSize: 9 }}>◆</span>
                    <span style={{ ...base, fontSize: 13 }}><strong style={{ color: "#fde68a" }}>{bold}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            <Frame src={project8} alt="Testing session" maxH={isMobile ? 240 : 440} caption="WoZ evaluation session with participant" />
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ DECISIONS ═══ */}
        <section id="decisions" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Informed by testing" title="Key Design Decisions" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            {[["Interface",["Primary interaction via touch — removed physical buttons","Added mood granularity for clearer emotional state","Introduced progress calendar and streak cues"],true],["Motivation & Rewards",["Daily special reward + periodic surprise rewards","Personalizable reward set (cosmetics and themes)"],false],["Form & Placement",["Gently tilted display for comfortable viewing angle","Option for toy-like embodiment for instant reaction"],false],["Accessibility",["Large tap targets and short daily sessions","Clear icon + text alternatives throughout","Friendly microcopy to reduce pressure and guilt"],false]].map(([title, items, accent]) => (
              <InfoCard key={title} title={title} accent={accent}>
                <ul style={ul}>{items.map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}</ul>
              </InfoCard>
            ))}
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ FUTURE ═══ */}
        <section id="future" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="What comes next" title="Future Development" isMobile={isMobile} />
          <div style={grid2} data-aos="fade-up">
            <InfoCard title="Planned features" accent>
              <ul style={ul}>
                {["Companion mobile app for daily/weekly/monthly history","Remote control of the display via app","Vacation mode to pause streak pressure","Optional wearable for automatic habit capture"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
            <InfoCard title="Expected outcomes">
              <ul style={ul}>
                {["Stronger emotional connection to personal progress","Sustained habit building via tangible feedback loops","More playful, less clinical approach to self-care"].map((t, i) => <BulletItem key={i}>{t}</BulletItem>)}
              </ul>
            </InfoCard>
          </div>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ THEORY ═══ */}
        <section id="theory" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Academic foundation" title="Theoretical Grounding" isMobile={isMobile} />
          <InfoCard>
            <p style={base}>
              Draws on <strong style={{ color: "#fcd34d" }}>Experience Prototyping</strong> (Buchenau &amp; Suri, 2000)
              and <strong style={{ color: "#fcd34d" }}>Houde &amp; Hill</strong> (1997) prototype dimensions —
              role, look-and-feel, and implementation. Wizard-of-Oz testing enabled realistic user evaluations
              before any technical build.
            </p>
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ REFERENCES ═══ */}
        <section id="refs" style={{ scrollMarginTop: 72 }}>
          <SectionHead kicker="Academic sources" title="References" isMobile={isMobile} />
          <InfoCard>
            <ul style={{ ...ul, gap: 12 }}>
              {["Buchenau, M., & Suri, J. F. (2000). Experience prototyping. DIS 2000.","Houde, S., & Hill, C. (1997). What do prototypes prototype? In Handbook of HCI.","Blomkvist, J., & Holmlid, S. (2007). Prototyping practices and notations. NordDesign.","Lee, G. (2018). Wizard-of-Oz Prototyping for AI-powered applications.","Koskinen, I. et al. (2011). Design Research through Practice. Morgan Kaufmann."].map((ref, i) => (
                <li key={i} style={{ listStyle: "none", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#d97706", fontFamily: "'DM Mono', monospace", fontSize: 10, minWidth: 20, marginTop: 2 }}>0{i + 1}</span>
                  <span style={{ ...base, fontSize: 13 }}>{ref}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </section>

        <Divider isMobile={isMobile} />

        {/* ═══ FOOTER ═══ */}
        <footer style={{ textAlign: "center", paddingTop: 20 }}>
          <a href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: isMobile ? "12px 24px" : "14px 32px", borderRadius: 14,
            background: "linear-gradient(135deg, #92400e, #d97706)",
            color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700,
            fontSize: isMobile ? 13 : 15, letterSpacing: "0.04em", textDecoration: "none",
            boxShadow: "0 8px 28px rgba(146,64,14,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(217,119,6,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 28px rgba(146,64,14,0.4)"; }}
          >
            ← Back to Portfolio
          </a>
          <p style={{ marginTop: 28, color: "rgba(255,255,255,0.15)", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
            BLOSSOM BUDDY · UX CASE STUDY · TANGIBLE + DIGITAL
          </p>
        </footer>

      </div>
    </div>
  );
};

export default FirstProject;