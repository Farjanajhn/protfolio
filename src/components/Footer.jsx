// Footer.jsx — minimal, same tokens as Main/About/Skills/Projects/Contact
// Layout: 12-col grid — identity (6) | navigate (3) | connect (3)

const NAV = [
  { label: "Home", href: "#main" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#message" },
];

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farjanajhn/" },
  { label: "GitHub", href: "https://github.com/Farjanajhn" },
  { label: "Dribbble", href: "https://dribbble.com/farjanajhn" },
];

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l5-5M4 3.5h4.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUp = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Footer = () => (
  <footer className="site-footer">
    <style>{css}</style>

    <div className="site-footer__inner">
      <div className="site-footer__grid">
        {/* Identity */}
        <div className="site-footer__id">
          <p className="site-footer__name">Farjana Jahan Sathi</p>
          <p className="site-footer__role">UX/UI Designer · Umeå, Sweden</p>
          <p className="site-footer__line">
            Designing accessible, human-centered digital experiences, from research
            to polished interfaces.
          </p>
          <a className="site-footer__email" href="mailto:farjanajhn12@gmail.com">
            farjanajhn12@gmail.com
          </a>
        </div>

        {/* Navigate */}
        <nav className="site-footer__col" aria-label="Footer">
          <p className="site-footer__eyebrow">Navigate</p>
          <ul className="site-footer__list">
            {NAV.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div className="site-footer__col">
          <p className="site-footer__eyebrow">Connect</p>
          <ul className="site-footer__list">
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label} <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bar">
        <p>© {new Date().getFullYear()} Farjana Jahan Sathi. Designed and built in React.</p>
        <a href="#main" className="site-footer__top">
          Back to top <ArrowUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

/* ───────────────────────────────────────────── */
/* Same tokens as Main.jsx */
const css = `
.site-footer {
  --sf-primary: #0075de;
  --sf-ink: #000000;
  --sf-ink-2: #31302e;
  --sf-muted: #615d59;
  --sf-paper: #f6f5f4;
  --sf-line: #e6e6e6;

  background: var(--sf-paper);
  color: var(--sf-ink);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.site-footer *, .site-footer *::before, .site-footer *::after { box-sizing: border-box; }

.site-footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 32px;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 32px 16px;
  padding-top: 56px;
  border-top: 1px solid var(--sf-line);
}
.site-footer__id { grid-column: span 6; }
.site-footer__col { grid-column: span 3; }

/* Identity */
.site-footer__name { margin: 0; font-size: 18px; font-weight: 700; letter-spacing: -0.01em; }
.site-footer__role { margin: 4px 0 12px; font-size: 14px; color: var(--sf-muted); }
.site-footer__line {
  margin: 0 0 16px;
  max-width: 26rem;
  font-size: 15px;
  line-height: 1.6;
  color: var(--sf-ink-2);
}
.site-footer__email {
  font-size: 15px;
  font-weight: 500;
  color: var(--sf-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
}
.site-footer__email:hover { border-color: var(--sf-primary); }

/* Columns */
.site-footer__eyebrow {
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0.125px;
  text-transform: uppercase;
  color: var(--sf-muted);
}
.site-footer__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.site-footer__list a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 15px;
  color: var(--sf-ink-2);
  text-decoration: none;
  transition: color .15s ease;
}
.site-footer__list a:hover { color: var(--sf-primary); }

/* Bottom bar */
.site-footer__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 48px;
  padding-top: 20px;
  border-top: 1px solid var(--sf-line);
}
.site-footer__bar p { margin: 0; font-size: 14px; color: var(--sf-muted); }
.site-footer__top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--sf-ink-2);
  text-decoration: none;
  transition: color .15s ease;
}
.site-footer__top:hover { color: var(--sf-primary); }

.site-footer a:focus-visible {
  outline: 2px solid var(--sf-primary);
  outline-offset: 3px;
  border-radius: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .site-footer__list a, .site-footer__top { transition: none; }
}

/* Tablet: identity full width, two columns below */
@media (max-width: 1023px) {
  .site-footer__id { grid-column: 1 / -1; }
  .site-footer__col { grid-column: span 6; }
}

/* Mobile */
@media (max-width: 767px) {
  .site-footer__inner { padding: 0 16px 28px; }
  .site-footer__grid { padding-top: 48px; }
  .site-footer__bar { flex-direction: column; align-items: flex-start; }
}
`;