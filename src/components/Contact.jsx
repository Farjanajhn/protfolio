// Contact.jsx — Redesign + Fully Responsive
// Editorial dark aesthetic — consistent with Main/About/Projects/Skills system
// EmailJS integration preserved exactly

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

/* ─── Noise grain ─── */
const NoiseLayer = () => (
  <svg aria-hidden style={{
    position: "absolute", inset: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: 1, opacity: 0.03, mixBlendMode: "overlay",
  }}>
    <filter id="cn">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#cn)" />
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

/* ─── Styled input ─── */
const Field = ({ label, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <label style={{
      fontFamily: "'DM Mono', monospace", fontSize: 10,
      letterSpacing: "0.12em", textTransform: "uppercase",
      color: "rgba(255,255,255,0.4)",
    }}>
      {label}
    </label>
    {children}
  </div>
);

const inputStyle = {
  width: "100%", boxSizing: "border-box",
  padding: "13px 16px", borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.09)",
  background: "rgba(255,255,255,0.04)",
  color: "#f8fafc",
  fontFamily: "'Lato', sans-serif", fontSize: 14,
  outline: "none", backdropFilter: "blur(8px)",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const InputEl = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        ...inputStyle,
        borderColor: focused ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.09)",
        boxShadow: focused ? "0 0 0 3px rgba(16,185,129,0.1)" : "none",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const TextareaEl = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      style={{
        ...inputStyle,
        minHeight: 140, resize: "vertical",
        borderColor: focused ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.09)",
        boxShadow: focused ? "0 0 0 3px rgba(16,185,129,0.1)" : "none",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

/* ─── Info row item ─── */
const InfoRow = ({ icon, label, value, href }) => (
  <a
    href={href || "#"}
    target={href ? "_blank" : undefined}
    rel="noreferrer"
    style={{
      display: "flex", alignItems: "flex-start", gap: 14,
      textDecoration: "none", cursor: href ? "pointer" : "default",
      padding: "14px 16px", borderRadius: 14,
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.03)",
      transition: "border-color 0.2s, background 0.2s",
    }}
    onMouseEnter={e => { if (href) { e.currentTarget.style.borderColor = "rgba(52,211,153,0.2)"; e.currentTarget.style.background = "rgba(16,185,129,0.05)"; }}}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
  >
    <div style={{
      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(16,185,129,0.1)",
      border: "1px solid rgba(52,211,153,0.2)",
      fontSize: 16,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 3 }}>
        {label}
      </div>
      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
        {value}
      </div>
    </div>
  </a>
);

/* ─── MAIN ─── */
const Contact = () => {
  const form       = useRef(null);
  const [status, setStatus] = useState("idle");
  const [toast, setToast]   = useState("");
  const width      = useWindowWidth();
  const isMobile   = width < 768;
  const isTablet   = width >= 768 && width < 1024;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,800&family=DM+Mono:wght@400;500&family=Lato:wght@300;400;700&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;
    try {
      setStatus("sending");
      const result = await emailjs.sendForm(
        "service_bnz4abr",
        "template_gov2hhi",
        form.current,
        "eWJVylKLCzGa6yoo1"
      );
      console.log("EmailJS success:", result.text);
      setStatus("success");
      setToast("Message sent successfully!");
      form.current.reset();
      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      console.error("EmailJS error:", error?.text || error);
      setStatus("error");
      setToast(error?.text || "Failed to send. Please try again.");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const px = isMobile ? "20px" : isTablet ? "32px" : "40px";
  const py = isMobile ? "80px" : "120px";

  const socialLinks = [
    { icon: FaGithub,   href: "https://github.com/Farjanajhn",        label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/",         label: "LinkedIn" },
    { icon: FaDribbble, href: "https://dribbble.com/farjanajhn",      label: "Dribbble" },
  ];

  return (
    <section id="message" style={{
      position: "relative", minHeight: "100vh",
      overflow: "hidden", background: "#080c10",
      fontFamily: "'Lato', sans-serif",
    }}>
      <NoiseLayer />

      {/* Ambient glows */}
      <div aria-hidden style={{ position: "absolute", top: -200, right: -100, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "absolute", bottom: -150, left: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1200, margin: "0 auto",
        padding: `${py} ${px}`,
        boxSizing: "border-box",
      }}>

        {/* ── Section heading ── */}
        <div style={{ marginBottom: isMobile ? 36 : 60 }}>
          <span style={{
            display: "inline-flex", alignItems: "center",
            padding: "3px 12px", borderRadius: 999,
            border: "1px solid rgba(52,211,153,0.25)",
            background: "rgba(16,185,129,0.07)",
            color: "#6ee7b7", fontSize: 11,
            letterSpacing: "0.12em", textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace", marginBottom: 14,
          }}>
            Contact
          </span>

          <h2 style={{
            margin: "0 0 14px",
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "clamp(30px, 9vw, 44px)" : "clamp(36px, 5vw, 60px)",
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-0.03em", color: "#f8fafc",
          }}>
            Let's build something{" "}
            <span style={{
              background: "linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}>
              amazing
            </span>
          </h2>
          <p style={{
            maxWidth: 480, margin: 0,
            fontFamily: "'Lato', sans-serif",
            fontSize: isMobile ? 14 : 16, lineHeight: 1.7,
            color: "rgba(255,255,255,0.5)",
          }}>
            Send a message about a job opportunity, project, internship, or collaboration.
            I'll get back to you as soon as possible.
          </p>
        </div>

        {/* ── Main layout: sidebar + form ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "320px 1fr",
          gap: isMobile ? 24 : 28,
          alignItems: "start",
        }}>

          {/* ─── LEFT: Info sidebar ─── */}
          {/* On mobile/tablet show above the form in a compact horizontal strip */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Availability badge */}
            <div style={{
              borderRadius: 18, padding: "16px 18px",
              border: "1px solid rgba(52,211,153,0.15)",
              borderTop: "2px solid #10b981",
              background: "rgba(16,185,129,0.04)",
              backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 9, height: 9, borderRadius: "50%", flexShrink: 0,
                background: "#10b981", boxShadow: "0 0 10px rgba(16,185,129,0.8)",
                animation: "contactPulse 2s infinite",
              }} />
              <div>
                <div style={{ color: "#f8fafc", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 13 }}>
                  Open to opportunities
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>
                  Umeå, Sweden · Remote
                </div>
              </div>
            </div>

            {/* Contact info rows */}
            <InfoRow icon="📧" label="Email" value="farjanajhn12@gmail.com" href="mailto:farjanajhn12@gmail.com" />
            <InfoRow icon="📍" label="Location" value="Umeå, Sweden" />
            <InfoRow icon="🕐" label="Response time" value="Within 24–48 hours" />

            {/* Social icons */}
            <div style={{
              borderRadius: 18, padding: "16px 18px",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)", marginBottom: 12,
              }}>
                Find me online
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
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
            </div>

          </div>

          {/* ─── RIGHT: Form ─── */}
          <div style={{
            borderRadius: 24, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            borderTop: "2px solid rgba(52,211,153,0.4)",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}>
            {/* Form header */}
            <div style={{
              padding: isMobile ? "22px 20px 16px" : "28px 32px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? 18 : 22, fontWeight: 800, color: "#f8fafc",
              }}>
                Send a message
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", marginTop: 4,
              }}>
                All fields marked * are required
              </div>
            </div>

            {/* Toast notification */}
            {toast && (
              <div style={{
                margin: isMobile ? "16px 20px 0" : "20px 32px 0",
                padding: "12px 16px", borderRadius: 12,
                background: status === "success" ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
                border: `1px solid ${status === "success" ? "rgba(52,211,153,0.25)" : "rgba(239,68,68,0.25)"}`,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                {status === "success"
                  ? <FaCheckCircle size={14} color="#6ee7b7" />
                  : <FaExclamationTriangle size={14} color="#fca5a5" />
                }
                <span style={{
                  fontFamily: "'Lato', sans-serif", fontSize: 13,
                  color: status === "success" ? "#6ee7b7" : "#fca5a5",
                }}>
                  {toast}
                </span>
              </div>
            )}

            {/* Form body */}
            <form ref={form} onSubmit={sendEmail} style={{ padding: isMobile ? "20px 20px 24px" : "24px 32px 32px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 16 : 18,
                marginBottom: isMobile ? 16 : 18,
              }}>
                <Field label="Name *">
                  <InputEl type="text" name="from_name" placeholder="Your name" required />
                </Field>

                <Field label="Phone">
                  <InputEl type="text" name="phone" placeholder="+46 …" />
                </Field>

                <Field label="Email *">
                  <InputEl type="email" name="reply_to" placeholder="your@email.com" required />
                </Field>

                <Field label="Subject *">
                  <InputEl type="text" name="subject" placeholder="What's this about?" required />
                </Field>
              </div>

              <div style={{ marginBottom: isMobile ? 20 : 24 }}>
                <Field label="Message *">
                  <TextareaEl name="message" placeholder="Tell me about your idea, project, or opportunity…" required />
                </Field>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 10,
                  padding: "14px 24px", borderRadius: 12,
                  background: status === "sending"
                    ? "rgba(255,255,255,0.06)"
                    : "linear-gradient(135deg, #059669, #10b981)",
                  border: status === "sending" ? "1px solid rgba(255,255,255,0.1)" : "none",
                  color: status === "sending" ? "rgba(255,255,255,0.4)" : "#fff",
                  fontFamily: "'Lato', sans-serif", fontWeight: 700,
                  fontSize: 14, letterSpacing: "0.04em",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  boxShadow: status === "sending" ? "none" : "0 8px 28px rgba(16,185,129,0.28)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  if (status !== "sending") {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 36px rgba(16,185,129,0.42)";
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = status === "sending" ? "none" : "0 8px 28px rgba(16,185,129,0.28)";
                }}
              >
                {status === "sending" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "contactSpin 1s linear infinite" }}>
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={13} />
                    Send Message
                  </>
                )}
              </button>

              {/* Privacy note */}
              <p style={{
                marginTop: 14, textAlign: "center",
                fontFamily: "'DM Mono', monospace", fontSize: 10,
                color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
              }}>
                Your message goes directly to my inbox. No spam, ever.
              </p>
            </form>
          </div>
        </div>

        {/* ── Bottom divider ── */}
        <div style={{
          marginTop: isMobile ? 20 : 40, height: 1,
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }} />

      </div>

      <style>{`
        @keyframes contactPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(16,185,129,0.8); }
          50%       { box-shadow: 0 0 18px rgba(16,185,129,0.3); }
        }
        @keyframes contactSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
      `}</style>
    </section>
  );
};

export default Contact;