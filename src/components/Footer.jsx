// Footer.jsx — Redesign + Fully Responsive
// Editorial dark aesthetic — consistent with portfolio system

import { useEffect, useState } from "react";
import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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

const socialLinks = [
  { icon: FaGithub,   href: "https://github.com/Farjanajhn",              label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/farjanajhn/",    label: "LinkedIn" },
  { icon: FaTwitter,  href: "https://twitter.com/farjanajhn12",           label: "Twitter" },
  { icon: FaDribbble, href: "https://dribbble.com/farjanajhn",            label: "Dribbble" },
];

const services = [
  "UX Research & Usability Testing",
  "UI / Interaction Design",
  "Prototyping & Design Systems",
  "Frontend Development (React)",
];

const navLinks = [
  { label: "Home",     href: "#main" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#message" },
];

const Footer = () => {
  const width    = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,800&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const px = isMobile ? "20px" : isTablet ? "32px" : "40px";

  return (
    <footer style={{
      position: "relative",
      background: "#060a0e",
      overflow: "hidden",
      fontFamily: "'Lato', sans-serif",
    }}>

      {/* Ambient glows */}
      <div aria-hidden style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Top gradient line */}
   


      {/* ── Main footer grid ── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "36px 20px 28px" : `44px ${px} 32px`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
          gap: isMobile ? 36 : 32,
        }}>

          {/* ── Col 1: Identity ── */}
          <div>
            {/* Name + title */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 20 : 22, fontWeight: 800,
              color: "#f8fafc", letterSpacing: "-0.02em", marginBottom: 4,
            }}>
              Farjana Jahan Sathi
            </div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              color: "#6ee7b7", letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 14,
            }}>
              Junior UX Designer
            </div>

            <p style={{
              fontSize: 13, lineHeight: 1.75,
              color: "rgba(255,255,255,0.45)", maxWidth: 280, margin: "0 0 18px",
            }}>
              Designing accessible, human-centered digital experiences — from
              research to polished interfaces.
            </p>

            {/* Location badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 12px", borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}>
              <span style={{ fontSize: 13 }}>🇸🇪</span>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em",
              }}>
                Umeå, Sweden
              </span>
            </div>
          </div>

          {/* ── Col 2: What I Do ── */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: 18,
            }}>
              What I Do
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map(s => (
                <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{
                    width: 4, height: 4, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, #059669, #34d399)",
                    marginTop: 7,
                  }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, transition: "color 0.2s", cursor: "default" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#6ee7b7"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Navigation ── */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: 18,
            }}>
              Navigate
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{
                    fontSize: 13, color: "rgba(255,255,255,0.55)",
                    textDecoration: "none", transition: "color 0.2s",
                    display: "inline-flex", alignItems: "center", gap: 6,
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "#6ee7b7"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Connect ── */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: 18,
            }}>
              Connect
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.5)", textDecoration: "none",
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
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <a href="mailto:farjanajhn12@gmail.com" style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "9px 14px", borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.03)",
              textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(52,211,153,0.2)"; e.currentTarget.style.background = "rgba(16,185,129,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              <span style={{ fontSize: 14 }}>📧</span>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em",
              }}>
                farjanajhn12@gmail.com
              </span>
            </a>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          marginTop: 40, paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? 10 : 0,
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em",
          }}>
            © {new Date().getFullYear()} Farjana Jahan Sathi. All rights reserved.
          </span>

          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
          }}>
            Designed & built with ♥ using React
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;