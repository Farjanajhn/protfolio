// Footer.jsx — playful theme
const NAV = [
  { label: "Home", href: "#main" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#skills" },
  { label: "Contact", href: "#message" },
];
const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farjanajhn/" },
  { label: "GitHub", href: "https://github.com/Farjanajhn" },
  { label: "Dribbble", href: "https://dribbble.com/farjanajhn" },
];

const Footer = () => (
  <footer className="pf pf-foot">
    <style>{css}</style>
    <div className="pf-wrap">
      <div className="pf-foot__card pf-box">
        <div className="pf-foot__me">
          <p className="pf-foot__name">Farjana Jahan Sathi</p>
          <p>UX/UI Designer · Remote or Sweden. Designing accessible, human-centered digital experiences, from research to polished interfaces.</p>
          <a className="pf-foot__mail" href="mailto:farjanajhn12@gmail.com">farjanajhn12@gmail.com</a>
        </div>
        <nav aria-label="Footer">
          <p className="pf-foot__h">Navigate</p>
          <ul>{NAV.map(({ label, href }) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
        </nav>
        <div>
          <p className="pf-foot__h">Connect</p>
          <ul>{LINKS.map(({ label, href }) => <li key={label}><a href={href} target="_blank" rel="noreferrer">{label} ↗</a></li>)}</ul>
        </div>
      </div>
      <div className="pf-foot__bar">
        <p>© {new Date().getFullYear()} Farjana Jahan Sathi · made with ☕ in Sweden</p>
        <a href="#main">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;

const css = `
.pf-foot{padding:24px 0 40px}
.pf-foot__card{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,3fr) minmax(0,3fr);gap:32px;padding:32px;background:var(--pf-sky)!important}
.pf-foot__name{font:700 26px var(--pf-round);color:#000!important;margin-bottom:6px!important}
.pf-foot__me p:not(.pf-foot__name){font-size:15px;color:var(--pf-ink-2)!important;max-width:30rem}
.pf-foot__mail{display:inline-block;margin-top:14px;font:600 15px var(--pf-sans);color:#000;text-decoration:none;border-bottom:1.5px solid #000}
.pf-foot__h{font:600 22px var(--pf-hand);color:var(--pf-blue)!important;margin-bottom:6px!important}
.pf-foot ul{list-style:none;margin:0;padding:0;display:grid;gap:4px}
.pf-foot ul a{font-size:15px;color:#000;text-decoration:none}
.pf-foot ul a:hover{color:var(--pf-blue)}
.pf-foot__bar{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px;font-size:14px}
.pf-foot__bar a{font-weight:600;color:#000;text-decoration:none}
@media (max-width:760px){.pf-foot__card{grid-template-columns:1fr 1fr}.pf-foot__me{grid-column:1/-1}}
`;
