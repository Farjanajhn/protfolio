// Sidenav.jsx — MATCHES your dark + framed + glass style
// Mobile: slide-in panel (glass). Desktop: floating glass icon rail.
// No extra libs needed.

import { useEffect, useState } from "react";
import {
  FaBars,
  FaBookOpen,
  FaEnvelope,
  FaGripHorizontal,
  FaHome,
  FaInfo,
  FaTimes,
} from "react-icons/fa";

const items = [
  { href: "#main", label: "Home", Icon: FaHome },
  { href: "#about", label: "About", Icon: FaInfo },
  { href: "#skills", label: "Experience & Design process ", Icon: FaBookOpen },
  { href: "#projects", label: "Projects", Icon: FaGripHorizontal },
  { href: "#message", label: "Contact", Icon: FaEnvelope },
];

const Sidenav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#main");

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Active section highlighting (simple + smooth)
  useEffect(() => {
    const ids = items.map((i) => i.href.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { root: null, threshold: [0.3, 0.5, 0.7] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[99] pointer-events-none">
      {/* Mobile toggle button */}
      <div className="pointer-events-auto">
        <button
          onClick={toggle}
          aria-label="Open navigation"
          className="md:hidden absolute right-4 top-4 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 p-3 text-white shadow-lg backdrop-blur-md hover:bg-white/15 transition"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile overlay + panel */}
      {open && (
        <div className="pointer-events-auto fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={close}
            aria-hidden
          />

          {/* Slide panel */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-[#0b0f14]/90 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                <p className="text-sm font-semibold text-white">Navigation</p>
              </div>
              <button
                onClick={close}
                aria-label="Close navigation"
                className="rounded-xl border border-white/15 bg-white/10 p-2 text-white hover:bg-white/15 transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="px-5 pb-6">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Sections
              </p>

              <div className="mt-4 space-y-3">
                {items.map(({ href, label, Icon }) => {
                  const isActive = active === href;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={close}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${
                        isActive
                          ? "border-emerald-300/40 bg-emerald-300/10 text-white"
                          : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl ${
                          isActive
                            ? "bg-emerald-400 text-black"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <Icon />
                      </span>
                      <span className="font-medium">{label}</span>
                      <span className="ml-auto text-white/40">→</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop floating rail */}
      <div className="hidden md:block pointer-events-auto fixed left-6 top-1/2 -translate-y-1/2 z-[90]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-2">
            {items.map(({ href, label, Icon }) => {
              const isActive = active === href;
              return (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  title={label}
                  className={`group relative grid h-12 w-12 place-items-center rounded-2xl border transition ${
                    isActive
                      ? "border-emerald-300/40 bg-emerald-300/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`transition ${
                      isActive ? "text-emerald-300" : "text-white/80"
                    }`}
                  >
                    <Icon size={18} />
                  </span>

                  {/* Tooltip */}
                  <span className="pointer-events-none absolute left-14 whitespace-nowrap rounded-xl border border-white/10 bg-[#0b0f14]/90 px-3 py-2 text-xs text-white/80 opacity-0 shadow-lg backdrop-blur-md transition group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;


/*<a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
<FaIdBadge/>
</a> */