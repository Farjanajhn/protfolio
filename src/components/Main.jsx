// Main.jsx — Hero (playful theme)
// Draggable skill stickers + portrait polaroid, hand-drawn underline, cursor blob.
// Also injects the shared playful base styles for the homepage.
import { useEffect, useRef, useState } from "react";
import portrait from "./../assets/image/farjana-portrait.jpg";
import { pfBase } from "../theme/playful";

/* Original pen-tool icon (vector anchor + bezier) for the "Figma expert" sticker */
const PenIcon = () => (
  <svg className="pf-sticker__logo" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5l6.5 9-6.5 10-6.5-10z" fill="#0075de" stroke="#000" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="11.5" r="2.2" fill="#fff" stroke="#000" strokeWidth="1.4" />
    <path d="M12 13.7v7.8" stroke="#000" strokeWidth="1.4" />
  </svg>
);

/* Shows Figma's official logo if public/figma-logo.svg exists; otherwise the pen icon */
const ToolLogo = () => {
  const [ok, setOk] = useState(true);
  return ok ? (
    <img className="pf-sticker__logo pf-sticker__logo--img" src="/figma-logo.svg" alt="" draggable="false" onError={() => setOk(false)} />
  ) : (
    <PenIcon />
  );
};

const STICKERS = [
  { label: "🔍 User research", cls: "s3" },
  { label: "✨ AI design workflow", cls: "s7" },
  { label: "Figma expert", cls: "s2", icon: "pen" },
  { label: "🧩 Design systems", cls: "s6" },
  { label: "🎓 MSc HCI & UX", cls: "s5" },
  { label: "♿ Accessibility first", cls: "s4" },
];

/* Lets an element be dragged with mouse, pen or touch */
const useDraggable = () => {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const cleanups = [];
    root.querySelectorAll("[data-drag]").forEach((el) => {
      let sx = 0, sy = 0, ox = 0, oy = 0;
      const down = (e) => { el.setPointerCapture(e.pointerId); sx = e.clientX - ox; sy = e.clientY - oy; el.style.zIndex = 20; };
      const move = (e) => {
        if (!el.hasPointerCapture(e.pointerId)) return;
        ox = e.clientX - sx; oy = e.clientY - sy; el.style.translate = `${ox}px ${oy}px`;
      };
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointermove", move);
      cleanups.push(() => { el.removeEventListener("pointerdown", down); el.removeEventListener("pointermove", move); });
    });
    return () => cleanups.forEach((f) => f());
  }, []);
  return ref;
};

/* Soft blue circle that follows the cursor (mouse only) */
const useCursorBlob = () => {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const blob = document.createElement("div");
    blob.className = "pf-blob";
    blob.setAttribute("aria-hidden", "true");
    document.body.appendChild(blob);
    const move = (e) => { blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; };
    const over = (e) => blob.classList.toggle("is-big", !!e.target.closest("a, button, [data-drag]"));
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerover", over); blob.remove(); };
  }, []);
};

const Main = () => {
  const ref = useDraggable();
  useCursorBlob();

  return (
    <section id="main" className="pf pf-hero" aria-labelledby="hero-title" ref={ref}>
      <style>{pfBase + css}</style>

      <div className="pf-hero__stage pf-wrap">
        <div className="pf-hero__copy">
          <div className="pf-sticker pf-photo s1" data-drag>
            <img src={portrait} alt="Portrait of Farjana" draggable="false" />
            <span>that's me!</span>
          </div>
          <span className="pf-drag-hint" aria-hidden="true">↑ drag us around</span>
          {STICKERS.map(({ label, cls, icon }) => (
            <div key={cls} className={`pf-sticker ${cls}`} data-drag aria-hidden="true">{icon === "pen" && <ToolLogo />}{label}</div>
          ))}

          <p className="pf-hello">hej, I'm Farjana!</p>
          <h1 id="hero-title" className="pf-hero__title">
            I design products<br />that feel{" "}
            <span className="pf-hl">
              obvious
              <svg viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 22 C 80 6, 200 4, 296 18" stroke="#0075de" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="pf-hero__lede">
            UX/UI designer in Sweden with a master's in HCI & UX. From research and wireframes to polished,
            accessible interfaces, I turn messy problems into clear flows, then test them with real people.
          </p>
          <div className="pf-btns pf-hero__btns">
            <a className="pf-btn pf-btn--blue" href="#projects">See my work →</a>
            <a className="pf-btn" href="#message">Get in touch</a>
          </div>
          <p className="pf-hero__status"><span className="pf-dot" aria-hidden="true" />Open to UX/UI roles · Remote or Sweden</p>
        </div>
      </div>
    </section>
  );
};

export default Main;

const css = `
.pf-blob{position:fixed;left:0;top:0;width:28px;height:28px;margin:-14px 0 0 -14px;border-radius:50%;background:#0075de;mix-blend-mode:multiply;opacity:.2;pointer-events:none;z-index:200;transition:width .25s,height .25s,margin .25s,opacity .25s}
.pf-blob.is-big{width:72px;height:72px;margin:-36px 0 0 -36px;opacity:.14}
.pf-hero{position:relative}
.pf-hero__stage{position:relative;min-height:min(92vh,900px);display:grid;place-items:center;text-align:center;padding-top:240px;padding-bottom:96px}
.pf-hello{font:600 clamp(26px,3vw,38px) var(--pf-hand);color:var(--pf-blue)!important;transform:rotate(-4deg);margin-bottom:6px!important}
.pf-hero__title{margin:0;font:700 clamp(52px,8.6vw,136px)/.95 var(--pf-round);letter-spacing:-.03em;color:#000}
.pf-hl{position:relative;display:inline-block;color:var(--pf-blue)}
.pf-hl svg{position:absolute;left:-4%;bottom:-.12em;width:108%;height:.35em}
.pf-hero__lede{max-width:35rem;margin:26px auto 0!important;font-size:19px;line-height:1.6;color:var(--pf-ink-2)!important}
.pf-hero__btns{justify-content:center;margin-top:32px}
.pf-hero__status{display:inline-flex;align-items:center;gap:8px;margin-top:28px!important;font:500 14px var(--pf-sans);color:var(--pf-ink-2)!important}
.pf-dot{width:8px;height:8px;border-radius:50%;background:#1aae39;animation:pf-ping 2.4s ease-out infinite}
@keyframes pf-ping{0%{box-shadow:0 0 0 0 rgba(26,174,57,.35)}70%{box-shadow:0 0 0 7px rgba(26,174,57,0)}100%{box-shadow:0 0 0 0 rgba(26,174,57,0)}}
.pf-sticker{position:absolute;z-index:5;white-space:nowrap;cursor:grab;user-select:none;touch-action:none;font:600 15px var(--pf-sans);padding:10px 16px;border-radius:14px;border:1.5px solid #000;box-shadow:3px 3px 0 #000;background:#fff;color:#000;transition:box-shadow .15s}
.pf-sticker__logo{width:17px;height:17px;margin-right:7px;vertical-align:-3px}
.pf-sticker__logo--img{display:inline-block;width:auto;height:18px;pointer-events:none}
.pf-sticker:active{cursor:grabbing;box-shadow:6px 6px 0 #000}
.pf-photo{padding:8px;border-radius:22px}
.pf-photo img{width:150px;height:176px;object-fit:cover;object-position:center 25%;border-radius:15px;pointer-events:none}
.pf-photo span{display:block;text-align:center;font:600 22px var(--pf-hand);color:var(--pf-ink-2);margin-top:4px}
.pf-hero__copy{position:relative}
/* stickers sit in the empty space around the text: above the greeting, and beside the intro + buttons */
.s3{top:-58px;right:calc(50% + 175px);background:var(--pf-mint);transform:rotate(-5deg)}
.s6{top:-142px;right:calc(50% + 230px);background:var(--pf-sky);transform:rotate(6deg)}
.s7{top:-120px;left:calc(50% + 175px);transform:rotate(4deg)}
.s2{bottom:188px;left:calc(50% + 345px);background:var(--pf-sun);transform:rotate(6deg)}
.s5{bottom:104px;left:calc(50% + 300px);background:var(--pf-peach);transform:rotate(-7deg)}
.s4{bottom:16px;left:calc(50% + 330px);background:var(--pf-lilac);transform:rotate(-3deg)}
.s1{bottom:-12px;right:calc(50% + 310px);transform:rotate(-6deg)}
.pf-drag-hint{position:absolute;right:calc(50% + 330px);bottom:-58px;white-space:nowrap;font:600 22px var(--pf-hand);color:var(--pf-muted);transform:rotate(-4deg)}
@media (prefers-reduced-motion:reduce){.pf-dot{animation:none}}
@media (max-width:1100px){.pf-sticker:not(.pf-photo),.pf-drag-hint{display:none}.pf-photo{position:relative;inset:auto;width:fit-content;margin:0 auto 18px;cursor:default}.pf-photo img{width:130px;height:150px}}
@media (max-width:1100px){.pf-hero__stage{min-height:0;padding-top:120px;padding-bottom:56px}}
`;
