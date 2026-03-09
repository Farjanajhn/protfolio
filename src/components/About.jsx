// About.jsx — Fully Responsive
// Editorial dark aesthetic — mobile-first, tablet & desktop layouts

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";
import img from "./../assets/image/myImage.png";

/* ─── Noise grain ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "absolute", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 1, opacity: 0.03, mixBlendMode: "overlay",
  }}>
    <filter id="an">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#an)" />
  </svg>
);

/* ─── Window width hook ─── */
const useWindowWidth = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
};

const Tag = ({ children }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "3px 12px", borderRadius: 999,
    border: "1px solid rgba(52,211,153,0.25)",
    background: "rgba(16,185,129,0.07)",
    color: "#6ee7b7", fontSize: 11,
    letterSpacing: "0.1em", textTransform: "uppercase",
    fontFamily: "'DM Mono', monospace", fontWeight: 500,
  }}>
    {children}
  </span>
);

const SkillChip = ({ label, delay }) => (
  <span
    data-aos="fade-up"
    data-aos-delay={delay}
    style={{
      display: "inline-flex", alignItems: "center",
      padding: "6px 13px", borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.09)",
      background: "rgba(255,255,255,0.04)",
      color: "rgba(255,255,255,0.75)", fontSize: 13,
      fontFamily: "'Lato', sans-serif",
      backdropFilter: "blur(6px)",
      transition: "border-color 0.2s, color 0.2s, background 0.2s",
      cursor: "default",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "rgba(52,211,153,0.3)";
      e.currentTarget.style.color = "#a7f3d0";
      e.currentTarget.style.background = "rgba(16,185,129,0.08)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
      e.currentTarget.style.color = "rgba(255,255,255,0.75)";
      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
    }}
  >
    {label}
  </span>
);

const About = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,800&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const competencies = [
    { icon: "🎨", title: "UX & Product Design", desc: "Wireframing, interaction flows, design systems, UI polish" },
    { icon: "🔬", title: "User Research",        desc: "Interviews, surveys, usability testing, mixed methods" },
    { icon: "⚡", title: "Prototyping",          desc: "Lo-fi sketches through hi-fi Figma prototypes" },
    { icon: "💻", title: "Front-End Awareness",  desc: "React, Tailwind, dev handoff, accessibility (WCAG)" },
  ];

  const tools = [
    "Figma", "Miro", "MAXQDA", "VS Code", "GitHub",
    "React", "Tailwind CSS", "Usability Testing",
    "Journey Mapping", "Information Architecture",
    "Accessibility (WCAG)", "Design Systems",
    "Wireframing", "Prototyping", "Mixed-Methods Research",
  ];

  const languages = [
    { lang: "English", level: "Fluent",       pct: 95 },
    { lang: "Swedish", level: "Professional", pct: 65 },
    { lang: "Bengali", level: "Native",       pct: 100 },
  ];

  const base = { fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.72)", fontSize: isMobile ? 14 : 15, lineHeight: 1.8 };
  const px   = isMobile ? "20px" : isTablet ? "32px" : "40px";
  const py   = isMobile ? "80px" : "120px";

  return (
    <section id="about" style={{
      position: "relative", minHeight: "100vh",
      overflow: "hidden", background: "#080c10",
      fontFamily: "'Lato', sans-serif",
    }}>
      <NoiseLayer />

      {/* Ambient glows */}
      <div aria-hidden style={{ position: "absolute", top: -200, right: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "absolute", bottom: -200, left: -150, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,80,180,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto",
        padding: `${py} ${px}`,
        boxSizing: "border-box",
      }}>
   <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }} />
        {/* ── Section header ── */}
        <div data-aos="fade-up" style={{ marginBottom: isMobile ? 40 : 64 }}>
          <Tag>About me</Tag>
          <h2 style={{
            marginTop: 14, marginBottom: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "clamp(32px, 10vw, 48px)" : "clamp(36px, 5vw, 64px)",
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: "-0.03em", color: "#f8fafc",
          }}>
            Designed for{" "}
            <span style={{
              background: "linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}>
              people
            </span>
            {isMobile ? " " : ",\n"}
            {!isMobile && <br />}
            built for{" "}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>impact.</span>
          </h2>
        </div>

        {/* ── Main layout ──
            Mobile  → single column, stacked
            Tablet  → 2 cols equal
            Desktop → 360px left + 1fr right
        ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "360px 1fr",
          gap: isMobile ? 24 : 28,
          alignItems: "start",
        }}>

          {/* ─────────────────── LEFT COLUMN ─────────────────── */}
          <div data-aos="fade-right" style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 16 }}>

            {/* Photo — smaller on mobile */}
            <div style={{
              borderRadius: 24, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "linear-gradient(160deg, rgba(16,185,129,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              padding: 3,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              /* on mobile cap the photo height so it doesn't dominate */
              maxHeight: isMobile ? 300 : "none",
            }}>
              <div style={{ borderRadius: 22, overflow: "hidden" }}>
                <img src={img} alt="Farjana Jahan Sathi" style={{
                  width: "100%",
                  aspectRatio: isMobile ? "3/2" : "4/5",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }} />
              </div>
            </div>

            {/* Identity card */}
            <div style={{
              borderRadius: 20, padding: isMobile ? "18px 20px" : "22px 24px",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 18 : 22, fontWeight: 800, color: "#f8fafc", marginBottom: 4 }}>
                Farjana Jahan Sathi
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", marginBottom: 16 }}>
                Junior UX Designer · Umeå, Sweden
              </div>

              {/* Language bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {languages.map(({ lang, level, pct }) => (
                  <div key={lang}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontSize: 13, color: "#fff", fontFamily: "'Lato', sans-serif" }}>{lang}</span>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Mono', monospace" }}>{level}</span>
                    </div>
                    <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
                      <div data-aos="slide-right" style={{
                        height: "100%", width: `${pct}%`, borderRadius: 2,
                        background: "linear-gradient(to right, #059669, #34d399)",
                        transition: "width 1s ease",
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thesis card */}
            <div style={{
              borderRadius: 20, padding: isMobile ? "16px 18px" : "20px 22px",
              border: "1px solid rgba(52,211,153,0.15)",
              borderTop: "2px solid #10b981",
              background: "rgba(16,185,129,0.04)",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#6ee7b7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                🎓 Master's Thesis
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "#f8fafc", lineHeight: 1.45, marginBottom: 6 }}>
                Evaluating the International Usability of ULTRA
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>
                Umeå University · 2023–2025
              </div>
              <a
                href="https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1977119&dswid=2404"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12, color: "#6ee7b7", textDecoration: "none",
                  fontFamily: "'DM Mono', monospace",
                  borderBottom: "1px solid rgba(110,231,183,0.3)", paddingBottom: 1,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#a7f3d0"}
                onMouseLeave={e => e.currentTarget.style.color = "#6ee7b7"}
              >
                View full thesis →
              </a>
            </div>

            {/* Download resume */}
            <a
              href="/Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf"
              download="Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                padding: isMobile ? "13px 20px" : "14px 24px",
                borderRadius: 14,
                background: "linear-gradient(135deg, #059669, #10b981)",
                color: "#fff", fontFamily: "'Lato', sans-serif",
                fontWeight: 700, fontSize: 14, letterSpacing: "0.04em",
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(16,185,129,0.28)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(16,185,129,0.42)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 28px rgba(16,185,129,0.28)"; }}
            >
              <FaDownload size={14} />
              Download Resume
            </a>

          </div>

          {/* ─────────────────── RIGHT COLUMN ─────────────────── */}
          <div data-aos={isMobile ? "fade-up" : "fade-left"} style={{ display: "flex", flexDirection: "column", gap: isMobile ? 20 : 28 }}>

            {/* Bio */}
            <div style={{
              borderRadius: 22,
              padding: isMobile ? "22px 20px" : "32px 34px",
              border: "1px solid rgba(255,255,255,0.07)",
              borderTop: "2px solid #10b981",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#6ee7b7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>
                Who I am
              </div>
              <p style={{ ...base, fontSize: isMobile ? 15 : 16, marginBottom: 14 }}>
                I'm <strong style={{ color: "#fff" }}>Farjana</strong>, a Junior UX Designer with a Master's in
                Human–Computer Interaction & User Experience from Umeå University.
              </p>
              <p style={{ ...base, marginBottom: 14 }}>
                I specialize in user-centered problem solving, qualitative research, usability testing,
                and interaction design — with a focus on making complex systems feel simple and inclusive.
              </p>
              <p style={{ ...base, color: "#6ee7b7", fontStyle: "italic" }}>
                Interests: SaaS UX · Inclusive design · Human–AI interaction
              </p>
            </div>

            {/* Competency grid — 2 cols on tablet/desktop, 1 col on mobile */}
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? 18 : 22,
                fontWeight: 800, color: "#f8fafc", marginBottom: 16,
              }}>
                Core Competencies
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 12 : 14,
              }}>
                {competencies.map(({ icon, title, desc }, i) => (
                  <div
                    key={title}
                    data-aos="fade-up"
                    data-aos-delay={i * 70}
                    style={{
                      borderRadius: 18,
                      padding: isMobile ? "18px 18px" : "22px 24px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(8px)",
                      transition: "border-color 0.2s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(52,211,153,0.2)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = ""; }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "#f8fafc", marginBottom: 5 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & skills */}
            <div style={{
              borderRadius: 22,
              padding: isMobile ? "22px 20px" : "28px 30px",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", marginBottom: 18,
                flexWrap: "wrap", gap: 10,
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 17 : 20, fontWeight: 800, color: "#f8fafc" }}>
                  Tools & Skills
                </div>
                <Tag>{tools.length} total</Tag>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tools.map((t, i) => (
                  <SkillChip key={t} label={t} delay={i * 30} />
                ))}
              </div>
            </div>

            {/* Availability strip */}
            <div style={{
              borderRadius: 18,
              padding: isMobile ? "16px 18px" : "18px 24px",
              border: "1px solid rgba(52,211,153,0.15)",
              background: "rgba(16,185,129,0.04)",
              display: "flex", alignItems: "center", gap: 14,
              backdropFilter: "blur(8px)",
              flexWrap: "wrap",
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%", flexShrink: 0,
                background: "#10b981",
                boxShadow: "0 0 10px rgba(16,185,129,0.8)",
                animation: "aboutPulse 2s infinite",
              }} />
              <div>
                <div style={{ color: "#f8fafc", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: isMobile ? 13 : 14 }}>
                  Open to opportunities
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>
                  UX/UI roles · Internships · Collaborations · Remote or Umeå
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(16,185,129,0.8); }
          50%       { box-shadow: 0 0 18px rgba(16,185,129,0.3); }
        }
      `}</style>
    </section>
  );
};

export default About;