// Main.jsx — Hero Section Redesign
// Editorial dark aesthetic — bold typographic hero, cinematic depth
// Consistent with the portfolio's case study visual language

import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import main from "./../assets/image/img11.png";

/* ─── Noise grain overlay ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "fixed", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 1,
    opacity: 0.04, mixBlendMode: "overlay",
  }}>
    <filter id="hn">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#hn)" />
  </svg>
);

/* ─── Animated counter for stats ─── */
const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const num = parseInt(value);
    const step = Math.ceil(num / 50);
    const delay = 800;
    const timer = setTimeout(() => {
      const id = setInterval(() => {
        start += step;
        if (start >= num) { setCount(num); clearInterval(id); }
        else setCount(start);
      }, 25);
    }, delay);
    return () => clearTimeout(timer);
  }, [value]);
  return <>{count}{suffix}</>;
};

const Main = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,800&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);

    // Stagger mount animation
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const socialLinks = [
    { icon: FaGithub,   href: "https://github.com/Farjanajhn",            label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/",             label: "LinkedIn" },
    { icon: FaTwitter,  href: "https://twitter.com/farjanajhn12",         label: "Twitter" },
    { icon: FaDribbble, href: "https://dribbble.com/farjanajhn",          label: "Dribbble" },
  ];

  const stats = [
    { value: "4", suffix: "+", label: "Case studies" },
    { value: "8", suffix: " wk", label: "Avg. project" },
    { value: "2", suffix: "", label: "Countries" },
  ];

  return (
    <section id="main" style={{
      position: "relative", minHeight: "100vh",
      overflow: "hidden", background: "#080c10",
      fontFamily: "'Lato', sans-serif",
    }}>

      <NoiseLayer />

      {/* ── Portrait photo — right side ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        display: "flex", justifyContent: "flex-end",
      }}>
        <img
          src={main}
          alt="Farjana — UX Designer"
          style={{
            height: "100%", width: "65%",
            objectFit: "cover", objectPosition: "center top",
            transform: "scaleX(-1)",
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 85%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 85%)",
          }}
        />
      </div>

      {/* ── Gradient overlays ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(105deg, #080c10 38%, rgba(8,12,16,0.85) 58%, transparent 80%)",
      }} />

      {/* ── Ambient glows ── */}
      <div aria-hidden style={{
        position: "absolute", top: -180, left: -120,
        width: 600, height: 600, borderRadius: "50%", zIndex: 1,
        background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: -200, left: 200,
        width: 500, height: 500, borderRadius: "50%", zIndex: 1,
        background: "radial-gradient(circle, rgba(0,80,200,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Decorative vertical rule ── */}
      <div style={{
        position: "absolute", left: "calc(50% - 1px)", top: 0, bottom: 0,
        width: 1, zIndex: 2, opacity: 0.06,
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.4) 70%, transparent)",
        pointerEvents: "none",
      }} />

      {/* ── Main content ── */}
      <div style={{
        position: "relative", zIndex: 3,
        maxWidth: 1280, margin: "0 auto",
        minHeight: "100vh", padding: "0 40px",
        display: "flex", alignItems: "center",
      }}>
        <div style={{
          width: "100%", maxWidth: 680,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "none" : "translateY(24px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}>

          {/* ── Location + status ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "6px 14px", borderRadius: 999,
              border: "1px solid rgba(16,185,129,0.3)",
              background: "rgba(16,185,129,0.08)",
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px rgba(16,185,129,0.8)",
                animation: "pulse 2s infinite",
              }} />
              <span style={{ color: "#6ee7b7", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Available · Umeå, Sweden
              </span>
            </div>
            {["UX · UI · Product", "Research · Prototyping"].map(tag => (
              <span key={tag} style={{
                padding: "5px 12px", borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.55)", fontSize: 11,
                fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em",
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* ── Giant editorial headline ── */}
          <h1 style={{
            margin: "0 0 8px",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-0.03em",
            fontSize: "clamp(52px, 7vw, 96px)",
            color: "#f8fafc",
          }}>
            Hey,
          </h1>
          <h1 style={{
            margin: "0 0 4px",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-0.03em",
            fontSize: "clamp(52px, 7vw, 96px)",
            color: "#f8fafc",
          }}>
            I'm{" "}
            <span style={{
              background: "linear-gradient(135deg, #34d399 0%, #6ee7b7 60%, #a7f3d0 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}>
              Farjana
            </span>
          </h1>

          {/* ── Animated role line ── */}
          <div style={{
            marginTop: 24, marginBottom: 28,
            display: "flex", alignItems: "center", gap: 14,
            flexWrap: "wrap",
          }}>
            <div style={{
              width: 32, height: 2,
              background: "linear-gradient(to right, #10b981, transparent)",
              flexShrink: 0,
            }} />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, fontFamily: "'Lato', sans-serif" }}>
              A passionate
            </span>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 700, color: "#fff",
              minWidth: 260, display: "inline-block",
            }}>
              <TypeAnimation
                sequence={[
                  "UX Designer",        1400,
                  "UI Designer",        1400,
                  "Product Designer",   1400,
                  "MERN Developer",     1400,
                  "HCI Enthusiast",     1400,
                  "Problem Solver",     1400,
                ]}
                wrapper="span"
                speed={52}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* ── Bio ── */}
          <p style={{
            margin: "0 0 36px",
            color: "rgba(255,255,255,0.6)",
            fontSize: 16, lineHeight: 1.8, maxWidth: 520,
            fontFamily: "'Lato', sans-serif",
          }}>
            I design clear, accessible digital experiences — from research and wireframes
            to polished interfaces. Currently based in Umeå, open to UX/UI roles, internships,
            and creative collaborations.
          </p>

          {/* ── Stats row ── */}
          <div style={{
            display: "flex", gap: 0,
            marginBottom: 40,
            borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(8px)",
            width: "fit-content",
          }}>
            {stats.map(({ value, suffix, label }, i) => (
              <div key={label} style={{
                padding: "16px 28px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28, fontWeight: 800, lineHeight: 1,
                  background: "linear-gradient(135deg, #fff, #6ee7b7)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  <Counter value={value} suffix={suffix} />
                </div>
                <div style={{
                  marginTop: 4, color: "rgba(255,255,255,0.4)",
                  fontSize: 11, fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA buttons ── */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 12,
              background: "linear-gradient(135deg, #059669, #10b981)",
              color: "#fff", fontFamily: "'Lato', sans-serif",
              fontWeight: 700, fontSize: 14, letterSpacing: "0.04em",
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(16,185,129,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(16,185,129,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 28px rgba(16,185,129,0.3)"; }}
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#message" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 12,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)", fontFamily: "'Lato', sans-serif",
              fontWeight: 700, fontSize: 14, letterSpacing: "0.04em",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              Contact Me
            </a>
          </div>

          {/* ── Divider ── */}
          <div style={{
            height: 1, marginBottom: 28,
            background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)",
            maxWidth: 400,
          }} />

          {/* ── Social icons ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{
              color: "rgba(255,255,255,0.3)", fontSize: 11,
              fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em",
              textTransform: "uppercase", marginRight: 8,
            }}>
              Find me
            </span>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                aria-label={label}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(16,185,129,0.1)";
                  e.currentTarget.style.borderColor = "rgba(52,211,153,0.3)";
                  e.currentTarget.style.color = "#6ee7b7";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        zIndex: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        opacity: 0.4,
      }}>
        <span style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: "0.14em", color: "#fff", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
          animation: "scrollLine 2s ease-in-out infinite",
        }} />
      </div>

      {/* ── Corner decoration ── */}
      <div style={{
        position: "absolute", top: 48, right: 48, zIndex: 4,
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6,
        opacity: 0.3,
      }}>
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.5)" }} />
        <div style={{ width: 20, height: 1, background: "rgba(255,255,255,0.3)" }} />
        <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.2)" }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(16,185,129,0.8); }
          50% { opacity: 0.6; box-shadow: 0 0 16px rgba(16,185,129,0.4); }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
};

export default Main;