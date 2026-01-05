// Main.jsx — Fixed alignment (UX Portfolio Hero)

import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import main from "./../assets/image/img11.png";

const Main = () => {
  return (
    <section id="main" className="relative min-h-screen overflow-hidden bg-[#0b0f14]">
      
      {/* Background image */}
      <img
        src={main}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-left scale-x-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20 " />

      {/* Outer frame */}
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-6 rounded-[28px] border border-white/15 md:inset-10 lg:inset-12" />

        {/* Centered layout */}
        <div className="relative justify-center flex min-h-screen items-center">
          
          {/* Content column */}
          <div className="w-full max-w-3xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl sm:p-8 md:p-10">
              
              {/* Tags */}
              <div className="flex text- center flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  UX · UI · Product
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  Research · Prototyping
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  Sweden · Umeå
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Hey There! I'm <span className="text-emerald-300"> Farjana</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-lg text-white/80 sm:text-xl">
                I design clear, accessible digital experiences. I am a
                <span className="ml-2 font-semibold text-white">
                  <TypeAnimation
                    sequence={[
                      "UX Designer", 1200,
                      "UI Designer", 1200,
                      "Product Designer", 1200,
                      "MERN Stack Developer", 1200,
                      "HCI Enthusiast", 1200,
                      "Creative Problem Solver", 1200,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
                >
                  View Projects
                </a>
                <a
                  href="#message"
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>

              {/* Social icons */}
              <div className="mt-8 flex gap-5">
                <a href="https://github.com/Farjanajhn" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                  <FaGithub size={26} />
                </a>
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                  <FaLinkedin size={26} />
                </a>
                <a href="https://twitter.com/farjanajhn12" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                  <FaTwitter size={26} />
                </a>
                <a href="https://dribbble.com/farjanajhn" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                  <FaDribbble size={26} />
                </a>
              </div>

              {/* Availability */}
              <p className="mt-6 text-sm text-white/60">
                Open to UX/UI internships & collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
