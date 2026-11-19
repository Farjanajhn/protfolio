// About.jsx — playful theme
// Speech-bubble intro + three colour fact cards, what I do, tools, resume.
import { useEffect, useRef } from "react";

const COMPETENCIES = [
  { title: "UX & Product Design", desc: "Wireframing, interaction flows, design systems, UI polish", tint: "var(--pf-sky)" },
  { title: "User Research", desc: "Interviews, surveys, usability testing, mixed methods", tint: "var(--pf-lilac)" },
  { title: "Prototyping", desc: "Lo-fi sketches through hi-fi Figma prototypes", tint: "var(--pf-peach)" },
  { title: "Front-End Development", desc: "React, Tailwind, dev handoff, accessibility (WCAG)", tint: "var(--pf-mint)" },
];

const TOOLS = [
  "Figma", "Design Systems", "AI design workflow", "Wireframing", "Prototyping",
  "Information Architecture", "Usability Testing", "Journey Mapping", "MAXQDA",
  "Mixed-Methods Research", "Accessibility (WCAG)", "React", "Tailwind CSS", "VS Code", "GitHub",
];

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll(".pf-rv") ?? [];
    if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const About = () => {
  const ref = useReveal();
  return (
    <section id="about" className="pf pf-sec" aria-labelledby="about-title" ref={ref}>
      <style>{css}</style>
      <div className="pf-wrap">
        <header className="pf-sh pf-rv">
          <div>
            <span className="pf-hand">a little about me</span>
            <h2 id="about-title">Designed for <em>people</em></h2>
          </div>
        </header>

        <div className="pf-about">
          <div className="pf-bubble pf-box pf-rv">
            <p>
              I'm a UX/UI designer with a master's in Human–Computer Interaction &amp; User Experience
              from Umeå University. I make complex systems feel <em>simple</em> and inclusive, and I love
              testing ideas with real people.
            </p>
            <p className="pf-bubble__small">
              <strong>Interests:</strong> SaaS UX · Inclusive design · Human–AI interaction
            </p>
          </div>

          <div className="pf-facts">
            <div className="pf-fact pf-rv" style={{ background: "var(--pf-sun)" }}>
              <h3>💼 Now</h3>
              <p>UX/UI design intern at Intraction, redesigning dashboards and the homepage.</p>
            </div>
            <div className="pf-fact pf-rv" style={{ background: "var(--pf-sky)", "--d": "60ms" }}>
              <h3>🎓 Master's thesis</h3>
              <p>Evaluating the International Usability of ULTRA · Umeå University, 2023–2025</p>
              <a href="https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1977119&dswid=2404" target="_blank" rel="noopener noreferrer">Read the thesis ↗</a>
            </div>
            <div className="pf-fact pf-rv" style={{ background: "var(--pf-mint)", "--d": "120ms" }}>
              <h3>🗣 Languages</h3>
              <p>Bengali (native) · English (fluent) · Swedish (professional)</p>
            </div>
          </div>
        </div>

        <ul className="pf-comp">
          {COMPETENCIES.map(({ title, desc, tint }, i) => (
            <li key={title} className="pf-box pf-rv" style={{ "--d": `${i * 60}ms` }}>
              <span className="pf-comp__num" style={{ background: tint }}>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ul>

        <div className="pf-tools pf-rv">
          {TOOLS.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="pf-resume pf-box pf-rv">
          <p><span className="pf-dot" aria-hidden="true" />Open to UX/UI roles, internships and collaborations · Remote or Umeå</p>
          <a className="pf-btn pf-btn--blue" href="/Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf" download="Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf">
            Download resume ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

const css = `
.pf-about{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px}
.pf-bubble{grid-column:span 7;padding:36px;border-radius:28px;display:flex;flex-direction:column;gap:20px}
.pf-bubble p{font:500 clamp(22px,2.2vw,29px)/1.35 var(--pf-round);color:#000!important}
.pf-bubble em{font-style:normal;color:var(--pf-blue)}
.pf-bubble .pf-bubble__small{margin-top:auto!important;font:400 15px var(--pf-sans);color:var(--pf-muted)!important}
.pf-bubble__small strong{color:var(--pf-ink-2);font-weight:600}
.pf-facts{grid-column:span 5;display:grid;gap:16px}
.pf-fact{border:1.5px solid #000;border-radius:20px;padding:20px 22px}
.pf-fact h3{margin:0 0 6px;font:700 18px var(--pf-round);color:#000}
.pf-fact p{font-size:14.5px;color:var(--pf-ink-2)!important}
.pf-fact a{display:inline-block;margin-top:8px;font:600 14px var(--pf-sans);color:#000;text-decoration:none;border-bottom:1.5px solid #000}
.pf-comp{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;list-style:none;margin:40px 0 0;padding:0}
.pf-comp li{padding:22px;border-radius:20px;box-shadow:4px 4px 0 #000}
.pf-comp__num{display:inline-block;font:700 15px var(--pf-round);border:1.5px solid #000;border-radius:99px;padding:2px 10px;margin-bottom:14px}
.pf-comp h3{margin:0 0 4px;font:700 19px/1.2 var(--pf-round);color:#000}
.pf-comp p{font-size:14px}
.pf-tools{display:flex;flex-wrap:wrap;gap:10px;margin-top:32px}
.pf-tools span{font:600 14.5px var(--pf-sans);padding:9px 15px;border-radius:14px;background:#fff;border:1.5px solid #000;color:#000;transition:transform .2s,background .2s,color .2s}
.pf-tools span:nth-child(odd){transform:rotate(-2deg)}
.pf-tools span:nth-child(even){transform:rotate(2deg)}
.pf-tools span:hover{transform:rotate(0) scale(1.06);background:var(--pf-blue);color:#fff}
.pf-resume{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;margin-top:40px;padding:20px 24px;border-radius:20px}
.pf-resume p{display:flex;align-items:center;gap:10px;font-size:15px;color:var(--pf-ink-2)!important}
@media (max-width:1023px){.pf-bubble,.pf-facts{grid-column:1/-1}.pf-comp{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.pf-comp{grid-template-columns:1fr}.pf-bubble{padding:26px}}
`;
