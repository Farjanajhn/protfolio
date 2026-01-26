// About.jsx — MATCHES Main.jsx style (dark + framed + glass + centered layout)
// Focused on profile, education, skills & interests (NO experience section)

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload } from "react-icons/fa";
import img from "./../assets/image/myImage.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  const toolChips = [
    "Figma",
    "Miro (basic)",
    "MAXQDA",
    "VS Code",
    "GitHub",
    "React",
    "Tailwind CSS",
    "Usability Testing",
    "Journey Mapping",
    "Information Architecture",
    "Accessibility (WCAG)",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Mixed-Methods UX Research",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#0b0f14]"
    >
      {/* Background tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-emerald-900/10" />

      {/* Outer frame */}
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-6 rounded-[28px] border-0 md:border md:border-white/15 md:inset-10 lg:inset-12" />

        {/* Centered layout */}
        <div className="relative flex min-h-screen items-center justify-center py-24">
          {/* Content card */}
          <div
            className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl sm:p-8 md:p-10"
            data-aos="fade-up"
          >
            {/* Header */}
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  Junior UX Designer
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  HCI & UX Master’s Graduate
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  Research · Accessibility · SaaS UX
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                About <span className="text-emerald-300">Me</span>
              </h2>
            </div>

            {/* Body */}
            <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-start">
              {/* Left */}
              <div className="md:col-span-5" data-aos="fade-right">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mx-auto h-52 w-52 overflow-hidden rounded-2xl border border-white/10 sm:h-60 sm:w-60 md:mx-auto ">
                    <img
                      src={img}
                      alt="Farjana Jahan Sathi"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white font-semibold">
                      Farjana Jahan Sathi
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Umeå, Sweden
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      English (Fluent) · Swedish (Professional) · Bengali (Native)
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                    <p className="text-sm text-white font-semibold">
                      🎓 MSc in Human–Computer Interaction & User Experience
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Umeå University · Aug 2023 – Jun 2025
                    </p>
                    <p className="mt-1 text-sm text-white">
  Thesis: Evaluating the International Usability of ULTRA — Mixed-Method Approach
</p>

<a
  href="https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1977119&dswid=2404"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-1 inline-block text-xs text-white/70 underline hover:text-white"
>
  View full thesis
</a>
                  </div>

                  {/* Resume buttons */}
                  <div className="mt-6 grid gap-3">
                  <a
  href="/Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf"
  download="Farjana_Jahan_Sathi_Junior_UX_Designer_CV.pdf"
  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
>
  <FaDownload />
  Download Resume (PDF)
</a>

                  
                    
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="md:col-span-7" data-aos="fade-left">
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    I’m <span className="font-semibold text-white">Farjana</span>,
                    a Junior UX Designer with a background in HCI & UX.
                  </p>
                  <p>
                    I specialize in user-centered problem solving, qualitative
                    research, usability testing, and interaction design.
                  </p>
                  <p className="italic text-emerald-300">
                    Interests: SaaS UX, inclusive design, human–AI interaction
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white">
                    Core Competencies
                  </h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      ["UX & Product Design", "Wireframing, flows, UI systems"],
                      ["User Research", "Interviews, usability testing"],
                      ["Prototyping", "Low–hi-fi, iteration"],
                      ["Front-End Awareness", "React, Tailwind, handoff"],
                    ].map(([title, desc]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <p className="font-semibold text-white">{title}</p>
                        <p className="mt-1 text-sm text-white/70">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {toolChips.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[13px] text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
