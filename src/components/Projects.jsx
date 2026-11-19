// Projects.jsx — Selected work (playful theme)
// Featured case study full width, then a 2 x 2 grid. Each card is one link and tilts in 3D on hover.
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import ultra from "../assets/image/covers/cover-ultra.jpg";
import meridian from "../assets/image/covers/cover-meridian.jpg";
import mygov from "../assets/image/covers/cover-mygov.jpg";
import trubble from "../assets/image/covers/cover-trubble.jpg";
import blossom from "../assets/image/covers/cover-blossom.jpg";

const PROJECTS = [
  {
    id: "ultra", num: "01 · Thesis", title: "Ultra", subtitle: "Public transportation app redesign",
    description: "Master's thesis research and redesign of Ultra, focusing on usability, inclusivity and seamless commuting for international users in Umeå.",
    link: "/projects/four", image: ultra, tags: ["Thesis", "Mobile", "Usability"], tint: "#dcecfc",
  },
  {
    id: "meridian", num: "02", title: "Meridian", subtitle: "Recipe website redesign + design system",
    description: "An audit and redesign of the recipe site I built in 2023: from a Bootstrap template to an editorial homepage with clear paths by cuisine, chef or dish.",
    link: "/projects/meridian", image: meridian, tags: ["Web redesign", "Design system", "UI"], tint: "#f3e7d3",
  },
  {
    id: "mygov", num: "03", title: "MyGov BD", subtitle: "Government services UX redesign",
    description: "Clearer navigation, consistent language switching and better task feedback in Bangladesh's digital government platform.",
    link: "/projects/Third", image: mygov, tags: ["Accessibility", "Mobile", "Research"], tint: "#9be3c0",
  },
  {
    id: "trubble", num: "04", title: "Trubble Buddy", subtitle: "Co-designed youth mental health tool",
    description: "A wearable calming locket and personalizable app created with young people for discreet anxiety support.",
    link: "/projects/second", image: trubble, tags: ["Co-design", "Wearable", "Mental health"], tint: "#d6b6f6",
  },
  {
    id: "blossom", num: "05", title: "Blossom Buddy", subtitle: "Tangible self-growth companion",
    description: "A real plant paired with a digital twin. Daily self-care tasks grant plant resources and unlock rewards.",
    link: "/projects/first", image: blossom, tags: ["Tangible UX", "Gamification", "Wellbeing"], tint: "#ffb4a2",
  },
];

/* Reveal on scroll + gentle 3D tilt */
const useCards = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll(".pf-rv");
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.1 });
      items.forEach((el) => io.observe(el));
    } else items.forEach((el) => el.classList.add("is-in"));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];
    if (!reduce && window.matchMedia("(hover: hover)").matches) {
      root.querySelectorAll(".pf-card").forEach((c) => {
        const move = (e) => {
          const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          c.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
          c.style.boxShadow = "10px 10px 0 #000";
        };
        const leave = () => { c.style.transform = ""; c.style.boxShadow = ""; };
        c.addEventListener("pointermove", move);
        c.addEventListener("pointerleave", leave);
        cleanups.push(() => { c.removeEventListener("pointermove", move); c.removeEventListener("pointerleave", leave); });
      });
    }
    return () => { io && io.disconnect(); cleanups.forEach((f) => f()); };
  }, []);
  return ref;
};

const Projects = () => {
  const ref = useCards();
  return (
    <section id="projects" className="pf pf-sec" aria-labelledby="projects-title" ref={ref}>
      <style>{css}</style>
      <div className="pf-wrap">
        <header className="pf-sh pf-rv">
          <div>
            <span className="pf-hand">things I've made</span>
            <h2 id="projects-title">Selected <em>work</em></h2>
          </div>
          <p>UX case studies focused on user research, interaction design and building clear, accessible experiences.</p>
        </header>

        <ul className="pf-grid">
          {PROJECTS.map((p, i) => (
            <li key={p.id} className={`pf-card pf-rv${i === 0 ? " is-feature" : ""}`} style={{ "--tint": p.tint }}>
              <Link to={p.link}>
                <div className="pf-card__media">
                  <img src={p.image} alt={`${p.title}: ${p.subtitle}`} loading="lazy" decoding="async" />
                  <span className="pf-card__num">{p.num}</span>
                </div>
                <div className="pf-card__body">
                  <h3>{p.title}</h3>
                  <p className="pf-card__sub">{p.subtitle}</p>
                  <p className="pf-card__text">{p.description}</p>
                  <div className="pf-card__foot">
                    <ul className="pf-pills">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                    <span className="pf-card__cta">Read case study →</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

const css = `
.pf-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;list-style:none;margin:0;padding:0;perspective:1200px}
.pf-card{border-radius:24px;background:#fff;border:1.5px solid #000;box-shadow:6px 6px 0 #000;overflow:hidden;transform-style:preserve-3d;transition:transform .2s ease-out,box-shadow .2s}
.pf-card.is-feature{grid-column:1/-1}
.pf-card a{display:flex;flex-direction:column;height:100%;text-decoration:none;color:#000}
.pf-card__media{position:relative;aspect-ratio:16/10;overflow:hidden;border-bottom:1.5px solid #000;background:var(--tint)}
.pf-card.is-feature .pf-card__media{aspect-ratio:21/9}
.pf-card__media img{width:100%;height:100%;object-fit:contain;transition:transform .6s cubic-bezier(.2,.7,.2,1)}
.pf-card:hover .pf-card__media img{transform:scale(1.03)}
.pf-card__num{position:absolute;left:16px;bottom:16px;font:700 14px var(--pf-round);background:#fff;border:1.5px solid #000;border-radius:99px;padding:3px 10px}
.pf-card__body{display:flex;flex-direction:column;gap:8px;flex:1;padding:22px 24px 24px}
.pf-card h3{margin:0;font:700 32px/1.05 var(--pf-round);letter-spacing:-.02em;color:#000}
.pf-card__sub{font:600 15px var(--pf-sans);color:var(--pf-ink-2)!important}
.pf-card__text{font-size:15px;line-height:1.55}
.pf-card__foot{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:auto;padding-top:12px}
.pf-card .pf-pills li{background:var(--tint)}
.pf-card__cta{font:600 14px var(--pf-sans);color:var(--pf-blue)}
.pf-card:focus-within{outline:2px solid var(--pf-blue);outline-offset:4px}
@media (prefers-reduced-motion:reduce){.pf-card,.pf-card__media img{transition:none}}
@media (max-width:860px){.pf-grid{grid-template-columns:1fr}.pf-card.is-feature .pf-card__media{aspect-ratio:16/10}}
`;
