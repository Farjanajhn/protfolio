// Projects.jsx — Fully Responsive
// Editorial dark aesthetic — mobile-first, tablet & desktop layouts
// Each project retains its unique color identity

import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import final   from "../assets/image/UX1st/happy2.png";
import Mockup3 from "../assets/image/UX3RD/Mockup3.png";
import hero2   from "../assets/image/UX2nd/hero2.png";
import COVER   from "../assets/image/UX4TH/Artboard.png";

/* ─── Noise grain ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "absolute", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 1, opacity: 0.03, mixBlendMode: "overlay",
  }}>
    <filter id="pn">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#pn)" />
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

/* ─── Project data ─── */
const uxProjects = [
  {
    id: "ultra",
    number: "01",
    title: "Ultra",
    subtitle: "Public Transportation App Redesign",
    description: "Master's thesis research redesign of Ultra — focusing on usability, inclusivity, and seamless commuting for international users in Umeå.",
    link: "/projects/four",
    image: COVER,
    tags: ["Thesis", "Mobile", "Usability"],
    accent: "#3b82f6",
    accentLight: "rgba(59,130,246,0.12)",
    accentBorder: "rgba(59,130,246,0.25)",
    accentText: "#93c5fd",
  },
  {
    id: "mygov",
    number: "02",
    title: "MyGov BD",
    subtitle: "Government Services UX Redesign",
    description: "Designing clearer navigation, consistent language switching, and better task feedback to reduce confusion in Bangladesh's digital government platform.",
    link: "/projects/Third",
    image: Mockup3,
    tags: ["Accessibility", "Mobile", "Research"],
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.12)",
    accentBorder: "rgba(52,211,153,0.25)",
    accentText: "#6ee7b7",
  },
  {
    id: "trubble",
    number: "03",
    title: "Trubble Buddy",
    subtitle: "Co-designed Youth Mental Health Tool",
    description: "A participatory design project — a wearable calming locket and personalizable app created with youth stakeholders for discreet anxiety support.",
    link: "/projects/second",
    image: hero2,
    tags: ["Co-design", "Wearable", "Mental Health"],
    accent: "#8b5cf6",
    accentLight: "rgba(139,92,246,0.12)",
    accentBorder: "rgba(167,139,250,0.25)",
    accentText: "#c4b5fd",
  },
  {
    id: "blossom",
    number: "04",
    title: "Blossom Buddy",
    subtitle: "Tangible Self-Growth Companion",
    description: "A hybrid system pairing a real plant with a digital twin — completing daily self-care tasks grants plant resources and unlocks meaningful rewards.",
    link: "/projects/first",
    image: final,
    tags: ["Tangible UX", "Gamification", "Wellbeing"],
    accent: "#d97706",
    accentLight: "rgba(217,119,6,0.12)",
    accentBorder: "rgba(251,191,36,0.25)",
    accentText: "#fcd34d",
  },
];

/* ─── Project card ─── */
function ProjectCard({ project, index, isFeature, isMobile, isTablet }) {
  const [hovered, setHovered] = useState(false);
  const { number, title, subtitle, description, link, image, tags, accent, accentLight, accentBorder, accentText } = project;

  // On touch devices hover state is never sticky — fine
  const cardPadding = isMobile ? "18px 18px 20px" : "26px 28px 28px";
  const titleSize   = isFeature && !isMobile ? 26 : isMobile ? 18 : 20;
  const imgRatio    = isFeature && !isMobile ? "16/7" : isMobile ? "16/9" : "16/10";

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={isMobile ? 0 : index * 80}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: isMobile ? 20 : 24, overflow: "hidden",
        border: `1px solid ${hovered ? accentBorder : "rgba(255,255,255,0.07)"}`,
        background: hovered ? accentLight : "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-5px)" : "none",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${accentBorder}`
          : "0 4px 24px rgba(0,0,0,0.2)",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: imgRatio }}>
        <img src={image} alt={title} style={{
          width: "100%", height: "100%", objectFit: "cover",
          transition: "transform 0.6s ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 20%, rgba(8,12,16,0.85) 100%)",
        }} />

        {/* Number badge */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          letterSpacing: "0.1em", color: accentText,
          background: accentLight, border: `1px solid ${accentBorder}`,
          padding: "3px 9px", borderRadius: 999,
          backdropFilter: "blur(8px)",
        }}>
          {number}
        </div>

        {/* Tags — hide on mobile to reduce clutter */}
        {!isMobile && (
          <div style={{
            position: "absolute", top: 12, right: 12,
            display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end",
          }}>
            {tags.map(tag => (
              <span key={tag} style={{
                fontFamily: "'DM Mono', monospace", fontSize: 9,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.12)",
                padding: "3px 8px", borderRadius: 999,
                backdropFilter: "blur(8px)",
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Accent bottom line on hover */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(to right, ${accent}, transparent)`,
          opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ padding: cardPadding, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 8 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: titleSize, fontWeight: 800, color: "#f8fafc",
            lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 4,
          }}>
            {title}
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: accentText, letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            {subtitle}
          </div>
        </div>

        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: isMobile ? 13 : 14, lineHeight: 1.7,
          color: "rgba(255,255,255,0.6)",
          marginBottom: isMobile ? 16 : 22, flex: 1,
        }}>
          {description}
        </p>

        {/* CTA */}
        <Link to={link} style={{
          display: "inline-flex", alignItems: "center", justifyContent: "space-between",
          padding: isMobile ? "11px 16px" : "13px 20px", borderRadius: 12,
          background: hovered ? accent : "rgba(255,255,255,0.05)",
          border: `1px solid ${hovered ? accent : "rgba(255,255,255,0.1)"}`,
          color: hovered ? "#fff" : "rgba(255,255,255,0.7)",
          fontFamily: "'Lato', sans-serif", fontWeight: 700,
          fontSize: isMobile ? 12 : 13, letterSpacing: "0.04em",
          textDecoration: "none",
          transition: "all 0.3s",
          boxShadow: hovered ? `0 8px 24px ${accentLight}` : "none",
        }}>
          <span>View Case Study</span>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

/* ─── MAIN ─── */
const Projects = () => {
  const projects = useMemo(() => uxProjects, []);
  const width    = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const px = isMobile ? "20px" : isTablet ? "32px" : "40px";
  const py = isMobile ? "80px" : "120px";

  /* Grid columns for the bottom 3 cards:
     Mobile  → 1 col
     Tablet  → 2 cols
     Desktop → 3 cols              */
  const subGridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)";

  return (
    <section id="projects" style={{
      position: "relative", minHeight: "100vh",
      overflow: "hidden", background: "#080c10",
      fontFamily: "'Lato', sans-serif",
    }}>
      <NoiseLayer />

      {/* Ambient glows */}
      <div aria-hidden style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "absolute", bottom: -150, left: 100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto",
        padding: `${py} ${px}`,
        boxSizing: "border-box",
      }}>

        {/* ── Section header ── */}
        <div
          data-aos="fade-up"
          style={{
            marginBottom: isMobile ? 36 : 64,
            display: "flex",
            alignItems: isMobile ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 24 : 24,
            flexWrap: "wrap",
          }}
        >
          {/* Left: heading */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center",
              padding: "3px 12px", borderRadius: 999,
              border: "1px solid rgba(52,211,153,0.25)",
              background: "rgba(16,185,129,0.07)",
              color: "#6ee7b7", fontSize: 11,
              letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace", marginBottom: 14,
            }}>
              Case Studies
            </div>

            <h2 style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(32px, 10vw, 48px)" : "clamp(36px, 5vw, 64px)",
              fontWeight: 900, lineHeight: 1.0,
              letterSpacing: "-0.03em", color: "#f8fafc",
            }}>
              UX{" "}
              <span style={{
                background: "linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}>
                Projects
              </span>
            </h2>

            <p style={{
              marginTop: 12, maxWidth: 480,
              fontFamily: "'Lato', sans-serif",
              fontSize: isMobile ? 14 : 16, lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
            }}>
              A selection of UX case studies focused on user research, interaction design,
              and building clear, accessible experiences.
            </p>
          </div>

          {/* Right: stats strip */}
          <div style={{
            display: "flex", gap: 0,
            borderRadius: 14, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(8px)",
            height: "fit-content",
            alignSelf: isMobile ? "flex-start" : "flex-end",
          }}>
            {[
              { value: projects.length, label: "Projects" },
              { value: "4",             label: "Methods"  },
              { value: "2",             label: "Countries"},
            ].map(({ value, label }, i) => (
              <div key={label} style={{
                padding: isMobile ? "10px 16px" : "14px 22px", textAlign: "center",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: isMobile ? 20 : 24, fontWeight: 800, lineHeight: 1,
                  background: "linear-gradient(135deg, #fff, #6ee7b7)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  {value}
                </div>
                <div style={{
                  marginTop: 3, color: "rgba(255,255,255,0.35)",
                  fontSize: 9, fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Featured card — full width
            On mobile it's just a regular card (no wide aspect ratio advantage)
        ── */}
        <div style={{ marginBottom: isMobile ? 16 : 20 }}>
          <ProjectCard
            project={projects[0]}
            index={0}
            isFeature={!isMobile}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        </div>

        {/* ── Sub-grid: remaining 3 cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: subGridCols,
          gap: isMobile ? 16 : 20,
        }}>
          {projects.slice(1).map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              isFeature={false}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ))}
        </div>

        {/* ── Bottom divider ── */}
        <div style={{
          marginTop: isMobile ? 48 : 80, height: 1,
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }} />

      </div>
    </section>
  );
};

export default Projects;