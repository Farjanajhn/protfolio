// Skills.jsx — Experience + Design Process
// Dark + framed + glass style, consistent with Hero/About sections

import { motion } from "framer-motion";

const Skills = () => {
  const designProcess = ["Research", "Ideation", "Prototyping", "Testing"];

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#0b0f14]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-emerald-900/10" />

      {/* Outer framed container */}
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-6 rounded-[28px] border-0 md:border md:border-white/15 md:inset-10 lg:inset-12" />

        {/* Centered content */}
        <div className="relative flex min-h-screen items-center justify-center py-24">
          {/* Glass card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl sm:p-8 md:p-10"
          >
            {/* ================= EXPERIENCE ================= */}
            <div>
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-left sm:text-4xl">
                Professional{" "}
                <span className="text-emerald-300">Experience</span>
              </h2>

              <p className="mt-3 text-center text-white/70 md:text-left">
                Practical experience in software testing, agile collaboration,
                and supporting usability-focused product development.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Software Tester (Intern)
                  </h3>
                  <span className="text-sm text-white/60">
                    Nov 2021 – Mar 2022
                  </span>
                </div>

                <p className="mt-1 text-sm text-white/70">
                  Vitec Software Group, Umeå
                </p>

                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Conducted functional and regression testing using Azure
                    DevOps (TFS) to improve application performance and
                    reliability.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Executed SQL-based validation to ensure data integrity and
                    smooth system integration.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Collaborated with developers and product owners in agile
                    sprints to enhance usability and user experience.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Supported release documentation and participated in sprint
                    retrospectives to streamline QA workflows.
                  </li>
                </ul>

               
              </div>
            </div>

            {/* ================= DESIGN PROCESS ================= */}
            <div className="mt-16">
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-left sm:text-4xl">
                Structured{" "}
                <span className="text-emerald-300">Design Process</span>
              </h2>

              <p className="mt-3 text-center text-white/70 md:text-left">
                A repeatable UX workflow grounded in Human-Computer Interaction,
                ensuring usability, accessibility, and user-validated decisions.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {designProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400 text-black font-bold">
                        {index + 1}
                      </div>
                      <p className="font-semibold text-white">{step}</p>
                    </div>

                    <p className="mt-3 text-sm text-white/70">
                      {step === "Research" &&
                        "Understand users, goals, constraints, and context of use through qualitative and quantitative methods."}
                      {step === "Ideation" &&
                        "Explore solution spaces, map user flows, and prioritize ideas based on user value and feasibility."}
                      {step === "Prototyping" &&
                        "Translate concepts into wireframes and high-fidelity interfaces using design systems and Figma."}
                      {step === "Testing" &&
                        "Evaluate usability, accessibility, and interaction quality through testing and rapid iteration."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
