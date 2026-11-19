// playful.js — shared "playful interactive" theme for the whole portfolio
// Bold black outlines, offset hard shadows, rounded Fredoka headings,
// pastel accents, one blue (#0075de) for actions and emphasis.

export const pfFonts =
  "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600&family=Caveat:wght@600&display=swap');";

/* Homepage base: tokens + shared pieces (buttons, pills, tags, reveal) */
export const pfBase = `
${pfFonts}
:root{
  --pf-ink:#000; --pf-ink-2:#31302e; --pf-muted:#615d59; --pf-paper:#f6f5f4; --pf-white:#fff; --pf-line:#e6e3de;
  --pf-blue:#0075de; --pf-blue-d:#005bab;
  --pf-sun:#ffd166; --pf-mint:#9be3c0; --pf-lilac:#d6b6f6; --pf-peach:#ffb4a2; --pf-sky:#dcecfc; --pf-sand:#f3e7d3;
  --pf-round:"Fredoka","Inter",system-ui,sans-serif; --pf-sans:"Inter",system-ui,-apple-system,sans-serif; --pf-hand:"Caveat",cursive;
  --pf-pad:clamp(20px,4vw,56px);
}
html{scroll-behavior:smooth;overflow-x:clip}
body{background:var(--pf-paper);background-image:radial-gradient(#d9d5cf 1px,transparent 1px);background-size:24px 24px}
section[id]{scroll-margin-top:96px}
.pf{font-family:var(--pf-sans);color:var(--pf-ink);-webkit-font-smoothing:antialiased}
.pf *,.pf *::before,.pf *::after{box-sizing:border-box}
.pf p{margin:0;color:var(--pf-muted)}
.pf a{color:inherit}
.pf img{display:block;max-width:100%}
.pf-wrap{max-width:1280px;margin:0 auto;padding:0 var(--pf-pad)}
.pf-sec{padding:clamp(64px,8vw,104px) 0}
.pf-sh{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:40px;flex-wrap:wrap}
.pf-sh h2{margin:0;font:700 clamp(40px,5.6vw,76px)/1 var(--pf-round);letter-spacing:-.03em;color:var(--pf-ink)}
.pf-sh h2 em{font-style:normal;color:var(--pf-blue)}
.pf-sh > p{max-width:26rem;font-size:16px;line-height:1.6}
.pf-hand{display:inline-block;font:600 24px var(--pf-hand);color:var(--pf-blue);margin-bottom:4px}
.pf-btns{display:flex;gap:12px;flex-wrap:wrap}
.pf-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 26px;border-radius:99px;font:600 16px var(--pf-sans);text-decoration:none;color:var(--pf-ink);background:var(--pf-white);border:1.5px solid var(--pf-ink);box-shadow:4px 4px 0 var(--pf-ink);transition:transform .15s,box-shadow .15s,background .15s;white-space:nowrap;cursor:pointer}
.pf-btn:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--pf-ink)}
.pf-btn:active{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--pf-ink)}
.pf-btn--blue{background:var(--pf-blue);color:#fff}
.pf-btn--blue:hover{background:var(--pf-blue-d);color:#fff}
.pf-btn[disabled]{opacity:.6;cursor:progress}
.pf-box{background:var(--pf-white);border:1.5px solid var(--pf-ink);border-radius:24px;box-shadow:6px 6px 0 var(--pf-ink)}
.pf-pills{display:flex;flex-wrap:wrap;gap:6px;list-style:none;margin:0;padding:0}
.pf-pills li{font:600 12.5px var(--pf-sans);padding:4px 11px;border-radius:99px;border:1.5px solid var(--pf-ink);background:var(--pf-white);color:var(--pf-ink-2)}
.pf :focus-visible{outline:2px solid var(--pf-blue);outline-offset:3px}
.pf-rv{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1);transition-delay:var(--d,0ms)}
.pf-rv.is-in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.pf-rv{opacity:1;transform:none;transition:none}.pf-btn{transition:none}html{scroll-behavior:auto}}
`;

/* Case study pages: re-skins the shared cs- template in the same style */
export const pfCaseStudy = `
.cs.cs{
  --cs-primary:#0075de; --cs-primary-active:#005bab; --cs-accent:#0075de;
  --cs-ink:#000; --cs-ink-2:#31302e; --cs-muted:#615d59; --cs-line:#e6e3de; --cs-paper:#f6f5f4; --cs-canvas:#fff;
  --cs-shadow:5px 5px 0 #000;
  background:#f6f5f4;background-image:radial-gradient(#d9d5cf 1px,transparent 1px);background-size:24px 24px;
}
.cs .cs-bar{background:rgba(255,255,255,.92);border-bottom:1.5px solid #000}
.cs .cs-back{border:1.5px solid #000;box-shadow:3px 3px 0 #000;font-weight:600}
.cs .cs-back:hover{transform:translate(-1px,-1px);box-shadow:4px 4px 0 #000;border-color:#000}
.cs .cs-toc a.is-active{background:#0075de;color:#fff}
.cs .cs-progress{background:#0075de;height:3px}
.cs .cs-hero__title,.cs .cs-sec__title,.cs .cs-card__title,.cs .cs-next__title,.cs .cs-persona__name{font-family:"Fredoka","Inter",system-ui,sans-serif;font-weight:700;letter-spacing:-.02em}
.cs .cs-hero__title{font-size:clamp(52px,8vw,112px);line-height:.95}
.cs .cs-mark{background:none;color:#0075de;padding:0}
.cs .cs-badge{background:#ffd166;color:#000;border:1.5px solid #000;box-shadow:3px 3px 0 #000;font-weight:600}
.cs .cs-pill{background:#fff;border:1.5px solid #000;color:#31302e;font-weight:600}
.cs .cs-eyebrow{font-family:"Caveat",cursive;font-size:22px;font-weight:600;letter-spacing:0;text-transform:none;color:#0075de}
.cs .cs-meta{background:#fff;border:1.5px solid #000;border-radius:20px;box-shadow:5px 5px 0 #000;padding:18px 24px}
.cs .cs-card,.cs .cs-subcard,.cs .cs-swatch{background:#fff;border:1.5px solid #000;border-radius:20px;box-shadow:5px 5px 0 #000}
.cs .cs-fig__frame{border:1.5px solid #000;border-radius:18px;box-shadow:5px 5px 0 #000;background:#fff;padding:0;overflow:hidden}
.cs .cs-fig__frame img{border-radius:0;width:auto;max-width:100%}
.cs .cs-card .cs-fig__frame{box-shadow:none}
.cs .cs-toc{-webkit-mask-image:linear-gradient(to right,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to right,#000 calc(100% - 40px),transparent);padding-right:32px}
.cs .cs-toc a{padding:0 10px;font-size:13px}
@media (min-width:1280px){.cs .cs-toc{-webkit-mask-image:none;mask-image:none;padding-right:0}}
.cs .cs-quote{border-left:4px solid #0075de;font-family:"Fredoka","Inter",sans-serif;font-weight:600;color:#000}
.cs .cs-chip{border:1.5px solid #000}
.cs .cs-numbered li::before{color:#0075de}
.cs .cs-list li::marker{color:#0075de}
.cs .cs-btn-secondary,.cs .cs-next{border:1.5px solid #000;box-shadow:4px 4px 0 #000;border-radius:20px;background:#fff;transition:transform .15s,box-shadow .15s}
.cs .cs-btn-secondary:hover,.cs .cs-next:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 #000}
.cs .cs-next__title{color:#000}
/* Meridian-only pieces (mcs-) */
.cs .mcs-live{border:1.5px solid #000;box-shadow:4px 4px 0 #000;background:#0075de}
.cs .mcs-live--ghost{background:#fff}
.cs .mcs-law,.cs .mcs-comp,.cs .mcs-moscow__col,.cs .mcs-proto,.cs .mcs-tablewrap,.cs .mcs-desks,.cs .mcs-full__item,.cs .mcs-then>div,.cs .mcs-layers div{border:1.5px solid #000;box-shadow:5px 5px 0 #000}
.cs .mcs-chips li{border:1.5px solid #000;background:#dcecfc;color:#000}
`;
