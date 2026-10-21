// Sidenav.jsx — matches the hero's warm-minimal style
// Desktop: floating pill bar at the top with text labels (no overlap with content)
// Mobile: menu button top-right, light slide-in panel
// Same tokens as Main.jsx and About.jsx; react-icons only for the menu/close icons

import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const ITEMS = [
  { href: "#main", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#message", label: "Contact" },
];

const Sidenav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#main");
  const closeBtn = useRef(null);
  const menuBtn = useRef(null);

  const close = () => {
    setOpen(false);
    menuBtn.current?.focus();
  };

  // Esc closes the panel; lock page scroll while it's open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && open && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeBtn.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Highlight the section currently in view
  useEffect(() => {
    const els = ITEMS.map((i) => document.getElementById(i.href.slice(1))).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>

      {/* ── Desktop: floating pill bar ── */}
      <nav className="nav-bar" aria-label="Main">
        <a href="#main" className="nav-bar__brand">Farjana</a>
        <ul className="nav-bar__list">
          {ITEMS.slice(1).map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-bar__link${active === href ? " is-active" : ""}`}
                aria-current={active === href ? "true" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile: menu button ── */}
      <button
        ref={menuBtn}
        type="button"
        className="nav-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="nav-panel"
      >
        <FaBars size={16} />
      </button>

      {/* ── Mobile: panel ── */}
      <div className={`nav-sheet${open ? " is-open" : ""}`}>
        <div className="nav-sheet__backdrop" onClick={close} />
        <div
          id="nav-panel"
          className="nav-sheet__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="nav-sheet__head">
            <span className="nav-sheet__brand">Farjana</span>
            <button ref={closeBtn} type="button" className="nav-sheet__close" onClick={close} aria-label="Close menu">
              <FaTimes size={16} />
            </button>
          </div>

          <p className="nav-sheet__eyebrow">Sections</p>
          <ul className="nav-sheet__list">
            {ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`nav-sheet__link${active === href ? " is-active" : ""}`}
                  aria-current={active === href ? "true" : undefined}
                >
                  {label}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="nav-sheet__status">
            <span className="nav-dot" aria-hidden="true" />
            Open to UX/UI roles · Umeå, Sweden
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidenav;

/* ───────────────────────────────────────────── */
/* Same tokens as Main.jsx */
const css = `
:root {
  --n-primary: #0075de;
  --n-ink: #000000;
  --n-ink-2: #31302e;
  --n-muted: #615d59;
  --n-canvas: #ffffff;
  --n-paper: #f6f5f4;
  --n-line: #e6e6e6;
  --n-green: #1aae39;
  --n-shadow:
    0 1px 1px rgba(0,0,0,0.03),
    0 2px 4px rgba(0,0,0,0.03),
    0 6px 12px rgba(0,0,0,0.035),
    0 16px 32px rgba(0,0,0,0.04);
}
.nav-bar, .nav-bar *, .nav-toggle, .nav-sheet, .nav-sheet * { box-sizing: border-box; }
html { scroll-behavior: smooth; }
section[id] { scroll-margin-top: 80px; }

/* Desktop bar */
.nav-bar {
  position: fixed;
  top: 16px;
  left: 50%;
  z-index: 90;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 6px 6px 20px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--n-line);
  box-shadow: var(--n-shadow);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
.nav-bar__brand {
  margin-right: 12px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--n-ink);
  text-decoration: none;
}
.nav-bar__list {
  display: flex;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-bar__link {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 14px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--n-muted);
  text-decoration: none;
  transition: color .15s ease, background-color .15s ease;
}
.nav-bar__link:hover { color: var(--n-ink); background: var(--n-paper); }
.nav-bar__link.is-active { color: var(--n-primary); background: rgba(0,117,222,0.08); }

/* Mobile toggle */
.nav-toggle {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 90;
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  background: var(--n-canvas);
  border: 1px solid var(--n-line);
  box-shadow: var(--n-shadow);
  color: var(--n-ink);
  cursor: pointer;
}

/* Mobile sheet */
.nav-sheet {
  position: fixed;
  inset: 0;
  z-index: 100;
  visibility: hidden;
  transition: visibility 0s linear .3s;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
.nav-sheet.is-open { visibility: visible; transition-delay: 0s; }
.nav-sheet__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(20,20,19,0.35);
  opacity: 0;
  transition: opacity .25s ease;
}
.nav-sheet.is-open .nav-sheet__backdrop { opacity: 1; }
.nav-sheet__panel {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: min(85%, 360px);
  height: 100%;
  padding: 16px 20px 24px;
  background: var(--n-paper);
  border-left: 1px solid var(--n-line);
  transform: translateX(100%);
  transition: transform .3s cubic-bezier(.2,.7,.2,1);
}
.nav-sheet.is-open .nav-sheet__panel { transform: none; }
.nav-sheet__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.nav-sheet__brand { font-size: 17px; font-weight: 700; letter-spacing: -0.01em; color: var(--n-ink); }
.nav-sheet__close {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  background: var(--n-canvas);
  border: 1px solid var(--n-line);
  color: var(--n-ink);
  cursor: pointer;
}
.nav-sheet__eyebrow {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--n-muted);
}
.nav-sheet__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-sheet__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
  padding: 0 18px;
  border-radius: 12px;
  background: var(--n-canvas);
  border: 1px solid var(--n-line);
  font-size: 16px;
  font-weight: 500;
  color: var(--n-ink-2);
  text-decoration: none;
}
.nav-sheet__link span { color: var(--n-muted); }
.nav-sheet__link.is-active { border-color: var(--n-primary); color: var(--n-primary); }
.nav-sheet__link.is-active span { color: var(--n-primary); }
.nav-sheet__status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: auto 0 0;
  font-size: 14px;
  color: var(--n-muted);
}
.nav-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--n-green); }

/* Focus */
.nav-bar a:focus-visible,
.nav-toggle:focus-visible,
.nav-sheet__close:focus-visible,
.nav-sheet__link:focus-visible {
  outline: 2px solid var(--n-primary);
  outline-offset: 2px;
}

/* Switch to the menu button below 768px */
@media (max-width: 767px) {
  .nav-bar { display: none; }
  .nav-toggle { display: grid; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .nav-sheet__panel, .nav-sheet__backdrop, .nav-bar__link { transition: none; }
}
`;