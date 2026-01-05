import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0f14] text-white/80 overflow-hidden">
      {/* Subtle top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* About / Identity */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Farjana Jahan Sathi
            </h3>
            <p className="mt-3 max-w-sm text-sm text-white/60 leading-relaxed">
              UX & Product Designer with a background in HCI and development.
              Designing accessible, human-centered digital experiences.
            </p>

            <p className="mt-4 text-xs text-white/40">
              Based in Umeå, Sweden 🇸🇪
            </p>
          </div>

          {/* What I Do */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/60">
              What I Do
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-emerald-300 transition">
                UX Research & Usability Testing
              </li>
              <li className="hover:text-emerald-300 transition">
                UI / Interaction Design
              </li>
              <li className="hover:text-emerald-300 transition">
                Prototyping & Design Systems
              </li>
              <li className="hover:text-emerald-300 transition">
                Frontend Development (React)
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/60">
              Connect
            </h4>

            <div className="mt-4 flex items-center gap-5">
              <a
                href="https://github.com/Farjanajhn"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:text-emerald-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/farjanajhn/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:text-emerald-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://twitter.com/farjanajhn12"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:text-emerald-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://dribbble.com/farjanajhn"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 transition hover:bg-white/10 hover:text-emerald-300"
                aria-label="Twitter"
              >
                <FaDribbble size={20} />
              </a>
            </div>

            <p className="mt-6 text-xs text-white/40">
              Open to UX/UI Job opportunities, internships & collaborations
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <span>© {new Date().getFullYear()} Farjana Jahan Sathi</span>
          <span>Designed & built with ❤️ using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
