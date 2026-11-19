// Sidenav.jsx — floating pill nav (playful theme)
// Desktop: brand + section links + "Say hi" button. Mobile: brand + "Say hi" only.
import { useEffect, useState } from "react";

const ITEMS = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Experience" },
];

const Sidenav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = ["projects", "about", "skills", "message"].map((id) => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>
      <nav className="pf-nav" aria-label="Main">
        <a href="#main" className="pf-nav__brand">Farjana</a>
        {ITEMS.map(({ href, label }) => (
          <a key={href} href={href} className={`pf-nav__link${active === href ? " is-active" : ""}`} aria-current={active === href ? "true" : undefined}>
            {label}
          </a>
        ))}
        <a href="#message" className="pf-nav__cta">Say hi <span aria-hidden="true">👋</span></a>
      </nav>
    </>
  );
};

export default Sidenav;

const css = `
.pf-nav{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:90;display:flex;gap:4px;align-items:center;padding:6px 6px 6px 18px;border-radius:99px;background:rgba(255,255,255,.92);border:1.5px solid #000;box-shadow:4px 4px 0 #000;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font-family:"Inter",system-ui,sans-serif}
.pf-nav__brand{font:700 17px "Fredoka","Inter",sans-serif;margin-right:10px;color:#000;text-decoration:none}
.pf-nav__link{font:500 14px "Inter",sans-serif;color:#31302e;text-decoration:none;padding:8px 14px;border-radius:99px;transition:background .15s}
.pf-nav__link:hover{background:#f6f5f4;color:#000}
.pf-nav__link.is-active{background:#dcecfc;color:#000}
.pf-nav__cta{font:600 14px "Inter",sans-serif;color:#fff;background:#0075de;text-decoration:none;padding:8px 16px;border-radius:99px;white-space:nowrap}
.pf-nav__cta:hover{background:#005bab;color:#fff}
.pf-nav a:focus-visible{outline:2px solid #0075de;outline-offset:2px}
@media (max-width:640px){.pf-nav__link{display:none}}
`;
