// About.jsx — MATCHES Main.jsx style (dark + framed + glass + centered layout)
// Focused on profile, education, skills & interests (NO experience section)

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye } from "react-icons/fa";
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
              {/* Left: image + education */}
              <div className="md:col-span-5" data-aos="fade-right">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  {/* Profile image */}
                  <div className="mx-auto h-52 w-52 overflow-hidden rounded-2xl border border-white/10 sm:h-60 sm:w-60 md:mx-0">
                    <img
                      src={img}
                      alt="Farjana Jahan Sathi"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Personal info */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/85">
                      <span className="font-semibold text-white">
                        Farjana Jahan Sathi
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Umeå, Sweden
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      English (Fluent) · Swedish (Professional) · Bengali (Native)
                    </p>
                  </div>

                  {/* Education highlight */}
                  <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
                    <p className="text-sm text-white/85">
                      🎓{" "}
                      <span className="font-semibold text-white">
                        MSc in Human–Computer Interaction & User Experience
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Umeå University, Sweden · Aug 2023 – Jun 2025
                    </p>
                    <p className="mt-1  font-semibold text-white">
  Thesis:{" "}
  <a
    href="https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1977119&dswid=3290"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-emerald-300 underline-offset-4 hover:underline"
  >
    Evaluating the International Usability of ULTRA — Mixed-Method Approach
  </a>
</p>
                    
                  </div>

                  {/* Resume button */}
                  <div className="mt-6">
                    <a
                      href="https://drive.google.com/file/d/1LHlzw5ugACEz9GUWWl6L1ZajfKRdvUcV/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
                    >
                      <FaEye className="text-lg" />
                      View Resume
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: profile + skills */}
              <div className="md:col-span-7" data-aos="fade-left">
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    I’m{" "}
                    <span className="font-semibold text-white">Farjana</span>, a{" "}
                    <span className="font-semibold text-white">
                      Junior UX Designer
                    </span>{" "}
                    with a background in Human–Computer Interaction and User
                    Experience.
                  </p>

                  <p>
                    My work is driven by{" "}
                    <span className="font-semibold text-white">
                      user-centered problem solving
                    </span>
                    , combining qualitative research, usability testing, and
                    thoughtful interaction design to simplify complex systems.
                  </p>

                  <p>
                    I’m particularly interested in{" "}
                    <span className="italic text-emerald-300">
                      SaaS UX, inclusive design, and human–AI interaction
                    </span>
                    , and enjoy translating research insights into clear,
                    scalable interfaces.
                  </p>
                </div>

                {/* Core competencies */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white">
                    Core Competencies
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">
                        UX & Product Design
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        Wireframing, user flows, interaction design, UI systems
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">User Research</p>
                      <p className="mt-1 text-sm text-white/70">
                        Interviews, usability testing, insight synthesis
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">
                        Prototyping & Iteration
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        Low–hi-fi prototyping, feedback-driven design
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">
                        Front-End Awareness
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        React, HTML, CSS, Tailwind, design–dev handoff
                      </p>
                    </div>
                  </div>

                  {/* Tools chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {toolChips.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-white/60">
                    Interests: Human–AI collaboration, inclusive & assistive
                    design, data-driven UX, scalable design systems, and SaaS UX.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
