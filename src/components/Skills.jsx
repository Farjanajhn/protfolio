// Skills.jsx — Experience + Design Process — Redesign + Fully Responsive
// Editorial dark aesthetic — consistent with Main/About/Projects system

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ─── Noise grain ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "absolute", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 1, opacity: 0.03, mixBlendMode: "overlay",
  }}>
    <filter id="sn">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#sn)" />
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

/* ─── Tag pill ─── */
const Tag = ({ children }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "3px 12px", borderRadius: 999,
    border: "1px solid rgba(52,211,153,0.25)",
    background: "rgba(16,185,129,0.07)",
    color: "#6ee7b7", fontSize: 11,
    letterSpacing: "0.12em", textTransform: "uppercase",
    fontFamily: "'DM Mono', monospace",
  }}>
    {children}
  </span>
);

/* ─── Process step descriptions ─── */
const processSteps = [
  {
    number: "01",
    title: "Research",
    icon: "🔍",
    color: "#3b82f6",
    colorLight: "rgba(59,130,246,0.1)",
    colorBorder: "rgba(59,130,246,0.2)",
    colorText: "#93c5fd",
    desc: "Understand users, goals, constraints, and context through qualitative interviews, surveys, and mixed-method studies.",
    methods: ["User Interviews", "Surveys", "Competitive Analysis", "MAXQDA"],
  },
  {
    number: "02",
    title: "Ideation",
    icon: "💡",
    color: "#8b5cf6",
    colorLight: "rgba(139,92,246,0.1)",
    colorBorder: "rgba(167,139,250,0.2)",
    colorText: "#c4b5fd",
    desc: "Explore solution spaces, map user flows, and prioritize ideas based on user value and technical feasibility.",
    methods: ["User Flows", "Journey Maps", "MoSCoW", "Affinity Mapping"],
  },
  {
    number: "03",
    title: "Prototyping",
    icon: "⚡",
    color: "#10b981",
    colorLight: "rgba(16,185,129,0.1)",
    colorBorder: "rgba(52,211,153,0.2)",
    colorText: "#6ee7b7",
    desc: "Translate concepts into wireframes and high-fidelity interfaces using design systems in Figma.",
    methods: ["Lo-fi Wireframes", "Hi-fi Prototypes", "Design Systems", "Figma"],
  },
  {
    number: "04",
    title: "Testing",
    icon: "✅",
    color: "#d97706",
    colorLight: "rgba(217,119,6,0.1)",
    colorBorder: "rgba(251,191,36,0.2)",
    colorText: "#fcd34d",
    desc: "Evaluate usability, accessibility, and interaction quality through moderated testing and rapid iteration.",
    methods: ["Usability Testing", "Think-Aloud", "WCAG Checks", "Iteration"],
  },
];

/* ─── Experience bullets ─── */
const bullets = [
  "Conducted functional and regression testing using Azure DevOps (TFS) to improve application performance and reliability.",
  "Executed SQL-based validation to ensure data integrity and smooth system integration.",
  "Collaborated with developers and product owners in agile sprints to enhance usability and user experience.",
  "Supported release documentation and participated in sprint retrospectives to streamline QA workflows.",
];

/* ─── Process Card ─── */
function ProcessCard({ step, isMobile, index }) {
  const [hovered, setHovered] = useState(false);
  const { number, title, icon, color, colorLight, colorBorder, colorText, desc, methods } = step;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={isMobile ? 0 : index * 80}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20, padding: isMobile ? "20px 18px" : "24px 22px",
        border: `1px solid ${hovered ? colorBorder : "rgba(255,255,255,0.07)"}`,
        borderTop: `2px solid ${hovered ? color : "rgba(255,255,255,0.1)"}`,
        background: hovered ? colorLight : "rgba(255,255,255,0.03)",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        cursor: "default",
        display: "flex", flexDirection: "column", gap: 14,
      }}
    >
      {/* Step number + icon */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: 11,
          color: colorText, letterSpacing: "0.12em",
          background: colorLight, border: `1px solid ${colorBorder}`,
          padding: "3px 10px", borderRadius: 999,
        }}>
          {number}
        </span>
        <span style={{ fontSize: 22 }}>{icon}</span>
      </div>

      {/* Title */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: isMobile ? 18 : 20, fontWeight: 800,
        color: "#f8fafc", letterSpacing: "-0.02em",
      }}>
        {title}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: 13, lineHeight: 1.7,
        color: "rgba(255,255,255,0.55)", margin: 0, flex: 1,
      }}>
        {desc}
      </p>

      {/* Method tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {methods.map(m => (
          <span key={m} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: hovered ? colorText : "rgba(255,255,255,0.4)",
            background: hovered ? colorLight : "rgba(255,255,255,0.04)",
            border: `1px solid ${hovered ? colorBorder : "rgba(255,255,255,0.08)"}`,
            padding: "3px 9px", borderRadius: 999,
            transition: "all 0.3s",
            letterSpacing: "0.06em",
          }}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN ─── */
const Skills = () => {
  const width    = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,800&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const px = isMobile ? "20px" : isTablet ? "32px" : "40px";
  const py = isMobile ? "80px" : "120px";

  const processGridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)";

  return (
    <section id="skills" style={{
      position: "relative", minHeight: "100vh",
      overflow: "hidden", background: "#080c10",
      fontFamily: "'Lato', sans-serif",
    }}>
      <NoiseLayer />

      {/* Ambient glows */}
      <div aria-hidden style={{ position: "absolute", top: -200, left: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "absolute", bottom: -150, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto",
        padding: `${py} ${px}`,
        boxSizing: "border-box",
      }}>
   <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }} />
        {/* ═══════════════════════════════════════
            EXPERIENCE SECTION
        ═══════════════════════════════════════ */}
        <div data-aos="fade-up" style={{ marginBottom: isMobile ? 64 : 100 }}>

          {/* Section heading */}
          <Tag>Experience</Tag>
          <h2 style={{
            marginTop: 14, marginBottom: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "clamp(30px, 9vw, 44px)" : "clamp(36px, 5vw, 60px)",
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-0.03em", color: "#f8fafc",
          }}>
            Professional{" "}
            <span style={{
              background: "linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}>
              Experience
            </span>
          </h2>
          <p style={{
            marginTop: 14, maxWidth: 500,
            fontFamily: "'Lato', sans-serif",
            fontSize: isMobile ? 14 : 16, lineHeight: 1.7,
            color: "rgba(255,255,255,0.5)",
          }}>
            Practical experience in software testing, agile collaboration,
            and supporting usability-focused product development.
          </p>

          {/* Experience card */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              marginTop: isMobile ? 28 : 40,
              borderRadius: 22, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              borderTop: "2px solid #10b981",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Card header */}
            <div style={{
              padding: isMobile ? "22px 20px 18px" : "28px 32px 22px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: isMobile ? 12 : 0,
            }}>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: isMobile ? 18 : 22, fontWeight: 800,
                  color: "#f8fafc", marginBottom: 4,
                }}>
                  Software Tester
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11, fontWeight: 400,
                    color: "#6ee7b7",
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(52,211,153,0.2)",
                    padding: "2px 10px", borderRadius: 999,
                    marginLeft: 10, verticalAlign: "middle",
                    letterSpacing: "0.08em",
                  }}>
                    Intern
                  </span>
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 12,
                  color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em",
                }}>
                  Vitec Software Group · Umeå, Sweden
                </div>
              </div>

              {/* Date badge */}
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 16px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
                flexShrink: 0,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ee7b7", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 11,
                  color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}>
                  Nov 2021 – Mar 2022
                </span>
              </div>
            </div>

            {/* Bullet list */}
            <div style={{ padding: isMobile ? "18px 20px 22px" : "24px 32px 28px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 14 }}>
                {bullets.map((text, i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                    style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                  >
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "linear-gradient(135deg, #059669, #34d399)",
                      marginTop: 7, flexShrink: 0,
                      boxShadow: "0 0 6px rgba(52,211,153,0.5)",
                    }} />
                    <p style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: isMobile ? 13 : 14, lineHeight: 1.75,
                      color: "rgba(255,255,255,0.65)", margin: 0,
                    }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills used row */}
              <div style={{
                marginTop: 22, paddingTop: 18,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center",
              }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 10,
                  color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em",
                  textTransform: "uppercase", marginRight: 4,
                }}>
                  Tools used
                </span>
                {["Azure DevOps", "TFS", "SQL", "Agile / Scrum", "QA Documentation"].map(tool => (
                  <span key={tool} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 10,
                    color: "rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "3px 10px", borderRadius: 999,
                    letterSpacing: "0.06em",
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{
          marginBottom: isMobile ? 64 : 100,
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }} />

        {/* ═══════════════════════════════════════
            DESIGN PROCESS SECTION
        ═══════════════════════════════════════ */}
        <div>
          {/* Section heading */}
          <div data-aos="fade-up" style={{ marginBottom: isMobile ? 32 : 48 }}>
            <Tag>Methodology</Tag>
            <h2 style={{
              marginTop: 14, marginBottom: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(30px, 9vw, 44px)" : "clamp(36px, 5vw, 60px)",
              fontWeight: 900, lineHeight: 1.0,
              letterSpacing: "-0.03em", color: "#f8fafc",
            }}>
              Structured{" "}
              <span style={{
                background: "linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}>
                Design Process
              </span>
            </h2>
            <p style={{
              marginTop: 14, maxWidth: 560,
              fontFamily: "'Lato', sans-serif",
              fontSize: isMobile ? 14 : 16, lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
            }}>
              A repeatable UX workflow grounded in Human-Computer Interaction,
              ensuring usability, accessibility, and user-validated decisions at every stage.
            </p>
          </div>

          {/* Process flow line — desktop only */}
          {!isMobile && (
            <div style={{
              position: "relative", marginBottom: 28,
              height: 2,
              background: "linear-gradient(to right, #3b82f6, #8b5cf6, #10b981, #d97706)",
              borderRadius: 2, opacity: 0.35,
            }} />
          )}

          {/* Process cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: processGridCols,
            gap: isMobile ? 14 : 16,
          }}>
            {processSteps.map((step, i) => (
              <ProcessCard key={step.title} step={step} isMobile={isMobile} index={i} />
            ))}
          </div>

          {/* Flow arrow legend — desktop only */}
          {!isMobile && (
            <div
              data-aos="fade-up"
              style={{
                marginTop: 28,
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 12,
              }}
            >
              {processSteps.map((step, i) => (
                <div key={step.title} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 11,
                    color: step.colorText, letterSpacing: "0.08em",
                  }}>
                    {step.title}
                  </span>
                  {i < processSteps.length - 1 && (
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M0 6h16M12 1l5 5-5 5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Bottom divider ── */}
        <div style={{
          marginTop: isMobile ? 64 : 90, height: 1,
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }} />

      </div>
    </section>
  );
};

export default Skills;