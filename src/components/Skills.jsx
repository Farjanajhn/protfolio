// Skills.jsx — Experience + Design process (playful theme)
import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    role: "UX/UI Designer", type: "Internship", current: true, company: "Intraction",
    location: "Stockholm, Sweden · Remote", dates: "Sep 2026 – Present", tint: "var(--pf-sky)",
    summary: "Improving a digital platform that uses interactive, game-based activities and data-driven insights to help teams collaborate and communicate better.",
    bullets: [
      "Design and refine interfaces that are intuitive, accessible and engaging.",
      "Improve user journeys across game sessions, dashboards and post-session experiences so they're smoother and easier to navigate.",
      "Explore clear ways to visualize team performance, behavioural insights and feedback.",
      "Contribute to redesigning key parts of the platform, including dashboards, upcoming activities, loading screens and website pages.",
      "Build wireframes, high-fidelity designs and interactive prototypes in Figma, iterating with the developer and CPO based on feedback.",
      "Run QA on the product, catching functional and usability issues and reporting them to the team.",
    ],
    tools: ["Figma", "Interaction Design", "Prototyping", "Data Visualization", "User Research", "QA Testing", "Cross-functional Collaboration"],
  },
  {
    role: "Software Tester", type: "Internship", company: "Vitec Software Group",
    location: "Umeå, Sweden", dates: "Nov 2021 – Mar 2022", tint: "var(--pf-sand)",
    bullets: [
      "Ran functional and regression testing in Azure DevOps (TFS) to improve application performance and reliability.",
      "Validated data with SQL queries to ensure data integrity and smooth system integration.",
      "Worked with developers and product owners in agile sprints to improve usability and user experience.",
      "Supported release documentation and took part in sprint retrospectives to streamline QA workflows.",
    ],
    tools: ["Azure DevOps", "TFS", "SQL", "Agile / Scrum", "QA Documentation"],
  },
];

const PROCESS = [
  { title: "Research", tint: "var(--pf-sky)", desc: "Understand users, goals, constraints and context through interviews, surveys and mixed-method studies.", methods: ["User interviews", "Surveys", "Competitive analysis", "MAXQDA"] },
  { title: "Ideation", tint: "var(--pf-lilac)", desc: "Explore solutions, map user flows and prioritize ideas by user value and technical feasibility.", methods: ["User flows", "Journey maps", "MoSCoW", "Affinity mapping"] },
  { title: "Prototyping", tint: "var(--pf-peach)", desc: "Turn concepts into wireframes and high-fidelity interfaces using design systems in Figma.", methods: ["Lo-fi wireframes", "Hi-fi prototypes", "Design systems", "Figma"] },
  { title: "Testing", tint: "var(--pf-mint)", desc: "Evaluate usability, accessibility and interaction quality through moderated testing and fast iteration.", methods: ["Usability testing", "Think-aloud", "WCAG checks", "Iteration"] },
];

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll(".pf-rv") ?? [];
    if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.1 });
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
};

const Skills = () => {
  const ref = useReveal();
  return (
    <section id="skills" className="pf pf-sec" aria-labelledby="skills-title" ref={ref}>
      <style>{css}</style>
      <div className="pf-wrap">
        <header className="pf-sh pf-rv">
          <div>
            <span className="pf-hand">where I've worked</span>
            <h2 id="skills-title">Professional <em>experience</em></h2>
          </div>
          <p>UX/UI design and QA on a live product today, backed by hands-on experience in software testing and agile teams.</p>
        </header>

        <ol className="pf-jobs">
          {EXPERIENCE.map((job) => (
            <li key={job.company} className="pf-job pf-box pf-rv">
              <div className="pf-job__meta" style={{ background: job.tint }}>
                <div className="pf-job__tags">
                  {job.current && <span className="pf-tag pf-tag--now"><span className="pf-dot" aria-hidden="true" />Current</span>}
                  <span className="pf-tag">{job.type}</span>
                </div>
                <h3>{job.role}</h3>
                <p className="pf-job__co">{job.company}</p>
                <p>{job.location}</p>
                <p>{job.dates}</p>
              </div>
              <div className="pf-job__body">
                {job.summary && <p className="pf-job__sum">{job.summary}</p>}
                <ul className="pf-job__bul">{job.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <ul className="pf-pills">{job.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>

        <header className="pf-sh pf-rv" style={{ marginTop: "clamp(72px,8vw,104px)" }}>
          <div>
            <span className="pf-hand">how I work</span>
            <h2>A <em>repeatable</em> process</h2>
          </div>
          <p>A UX workflow grounded in Human–Computer Interaction, with usability, accessibility and user-validated decisions at every stage.</p>
        </header>

        <ol className="pf-steps">
          {PROCESS.map(({ title, tint, desc, methods }, i) => (
            <li key={title} className="pf-step pf-box pf-rv" style={{ "--d": `${i * 70}ms`, "--tint": tint }}>
              <span className="pf-step__num">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul className="pf-pills">{methods.map((m) => <li key={m}>{m}</li>)}</ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Skills;

const css = `
.pf-jobs{list-style:none;margin:0;padding:0;display:grid;gap:28px}
.pf-job{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);overflow:hidden;padding:0}
.pf-job__meta{padding:26px;border-right:1.5px solid #000;display:flex;flex-direction:column;gap:4px}
.pf-job__meta h3{margin:12px 0 2px;font:700 28px/1.05 var(--pf-round);color:#000}
.pf-job__meta p{font-size:14px;color:var(--pf-ink-2)!important}
.pf-job__meta .pf-job__co{font:600 16px var(--pf-sans);color:#000!important;margin-bottom:6px!important}
.pf-job__tags{display:flex;gap:6px;flex-wrap:wrap}
.pf-tag{display:inline-flex;align-items:center;gap:6px;font:600 12px var(--pf-sans);padding:3px 10px;border-radius:99px;border:1.5px solid #000;background:#fff;color:#000}
.pf-tag--now{background:#9be3c0}
.pf-job__body{padding:26px;display:flex;flex-direction:column;gap:14px}
.pf-job__sum{font-size:16px;color:var(--pf-ink-2)!important}
.pf-job__bul{margin:0;padding:0;list-style:none;display:grid;gap:6px}
.pf-job__bul li{position:relative;padding-left:22px;font-size:15px;line-height:1.55;color:var(--pf-muted)}
.pf-job__bul li::before{content:"";position:absolute;left:0;top:8px;width:10px;height:10px;border-radius:50%;background:var(--pf-blue);border:1.5px solid #000}
.pf-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
.pf-step{padding:24px;border-radius:22px;display:flex;flex-direction:column;gap:10px;transition:transform .2s,box-shadow .2s}
.pf-step:hover{transform:translate(-3px,-3px);box-shadow:9px 9px 0 #000}
.pf-step__num{align-self:flex-start;font:700 34px/1 var(--pf-round);background:var(--tint);border:1.5px solid #000;border-radius:16px;padding:8px 12px;margin-bottom:6px}
.pf-step h3{margin:0;font:700 24px var(--pf-round);color:#000}
.pf-step p{font-size:14.5px}
.pf-step .pf-pills{margin-top:auto;padding-top:6px}
.pf-step .pf-pills li{background:var(--tint)}
@media (prefers-reduced-motion:reduce){.pf-step{transition:none}}
@media (max-width:1023px){.pf-steps{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:760px){.pf-job{grid-template-columns:1fr}.pf-job__meta{border-right:0;border-bottom:1.5px solid #000}.pf-steps{grid-template-columns:1fr}}
`;
