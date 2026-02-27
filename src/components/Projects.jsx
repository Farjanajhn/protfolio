// Projects.jsx — MATCHES your Main/About/Skills style (dark + framed + glass)
// Keeps your data + routing. Modern cards, consistent chips, centered layout.

import { Link } from "react-router-dom";
import { useMemo } from "react";

import final from "../assets/image/UX1st/happy2.png";
import Mockup3 from "../assets/image/UX3RD/Mockup3.png";
import hero2 from "../assets/image/UX2nd/hero2.png";
import COVER from "../assets/image/UX4TH/Artboard.png";


// Project data
const uxProjects = [
  {
    title: "Ultra Public transportation mobile app redesign",
    description:
      "Redesign of Ultra based on Master’s thesis research, focusing on usability, inclusivity, and seamless commuting.",
    link: "/projects/four",
    backgroundImage:COVER
    // no image yet
  },
  {
    title: "MyGov",
    description:
      "Designing clearer navigation and feedback to reduce confusion in MyGov BD services.",
    link: "/projects/Third",
    backgroundImage: Mockup3,
  },

  {
    title: "Trubble Buddy",
    description:
      "A co-designed therapy support system created with youth stakeholders.",
    link: "/projects/second",
    backgroundImage: hero2,
  },
  {
    title: "Blossom Buddy",
    description:
      "A self-growth system using plant care to motivate and reflect progress.",
    link: "/projects/first",
    backgroundImage: final,
  },
 
  
];

const Projects = () => {
  const projects = useMemo(() => uxProjects, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#0b0f14]"
    >
      {/* Background tint (same vibe as other sections) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-emerald-900/10" />

      {/* Outer frame (same as hero/about) */}
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-6 rounded-[28px] border-0 md:border md:border-white/15 md:inset-10 lg:inset-12" />

        {/* Centered layout */}
        <div className="relative flex min-h-screen items-center justify-center py-24">
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  Case Studies
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  Research · UI · Prototyping
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
                  HCI · UX
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                UX <span className="text-emerald-300">Projects</span>
              </h2>

              <p className="mt-3 max-w-2xl text-white/70 md:max-w-3xl">
                A selection of UX projects focused on user research, interaction
                design, and building clear, accessible experiences.
              </p>
            </div>

            {/* Cards grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>

            {/* Subtle divider */}
            <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ title, description, link, backgroundImage }) {
  const isComingSoon = link === "#";

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition hover:-translate-y-1 hover:border-white/15"
      aria-label={title}
    >
      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Media */}
      {backgroundImage ? (
        <div className="relative overflow-hidden rounded-t-3xl">
          <div
            className="aspect-[16/10] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            role="img"
            aria-label={`${title} cover image`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

          <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            Case Study
          </div>
        </div>
      ) : (
        <div className="relative grid aspect-[16/10] place-items-center rounded-t-3xl border-b border-white/10 bg-white/5">
          <div className="text-center">
            <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-xl bg-emerald-400 text-black text-lg font-bold shadow">
              UX
            </div>
            <p className="text-sm text-white/70">Visual preview coming soon</p>
          </div>

          <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            Case Study
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 line-clamp-3 text-white/75">{description}</p>

        {/* Button */}
        <div className="mt-5">
          {isComingSoon ? (
            <button
              disabled
              className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white/60"
              aria-disabled="true"
              title="Case study coming soon"
            >
              Coming Soon
            </button>
          ) : (
            <Link
              to={link}
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
              aria-label={`View case study: ${title}`}
            >
              View Case Study
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;





 // <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20 mt-8">

        {/* 🔹 The Chef's Table Project */}
       // <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-[350px] lg:w-[370px] mx-auto">
          //<h2 className="text-2xl font-semibold text-violet-950">The Chef's Table</h2>
         // <div className="h-64 carousel carousel-vertical rounded-md shadow-md">
            //{[chef1, chef2, chef3, chef4].map((img, index) => (
             // <div key={index} className="carousel-item h-full">
                //<img className="w-full h-[230px] object-cover rounded-md" src={img} alt="Project" />
              //</div>
            //))}
          //</div>
          //<p className="text-center font-semibold py-3">
            //<span className="bg-violet-950 text-white py-2 px-2 rounded-md">Technology</span>: React, Firebase
          //</p>
          //<div className="flex justify-around font-semibold text-gray-700 mt-4">
            //<a href="https://github.com/Farjanajhn/the-chefs-table-client" className="hover:underline">GitHub Client</a>
            //<a href="https://github.com/Farjanajhn/the-chefs-table-server" className="hover:underline">GitHub Server</a>
            //<a href="https://the-chefs-table.web.app" className="hover:underline text-blue-600">Live Link</a>
          //</div>
        //</div>

        {/* 🔹 Toy Story Project */}
        //<div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-[350px] lg:w-[370px] mx-auto">
          //<h2 className="text-2xl font-semibold text-violet-950">Toy Story</h2>
          //<div className="h-64 carousel carousel-vertical rounded-md shadow-md">
            //{[toy1, toy2, toy3, toy4].map((img, index) => (
              //<div key={index} className="carousel-item h-full">
                //<img className="w-full h-[230px] object-cover rounded-md" src={img} alt="Project" />
              //</div>
            //))}
          //</div>
          //<p className="text-center font-semibold py-3">
            //<span className="bg-gray-700 text-white py-2 px-2 rounded-md">Technology</span>: React, Firebase, MongoDB
          //</p>
          //<div className="flex justify-around font-semibold text-gray-700 mt-4">
            //<a href="https://github.com/Farjanajhn/the-toy-story-client" className="hover:underline">GitHub Client</a>
            //<a href="https://github.com/Farjanajhn/the-toy-story-server" className="hover:underline">GitHub Server</a>
            //<a href="https://toy-story-b1089.web.app" className="hover:underline text-blue-600">Live Link</a>
          //</div>
        //</div>

        {/* 🔹 Lingo Bridge Project */}
        //<div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-[350px] lg:w-[370px] mx-auto">
          //<h2 className="text-2xl font-semibold text-violet-950">Lingo Bridge</h2>
          //<div className="h-64 carousel carousel-vertical rounded-md shadow-md">
            //{[lingo1, lingo2, lingo3, lingo4].map((img, index) => (
             // <div key={index} className="carousel-item h-full">
                //<img className="w-full h-[230px] object-cover rounded-md" src={img} alt="Project" />
              //</div>
            //))}
          //</div>
          //<p className="text-center font-semibold py-3">
            //<span className="bg-violet-950 text-white py-2 px-2 rounded-md">Technology</span>: React, Firebase, MongoDB, JWT
          //</p>
          //<div className="flex justify-around font-semibold text-gray-700 mt-4">
           // <a href="https://github.com/Farjanajhn/LingoBridge-client" className="hover:underline">GitHub Client</a>
            //<a href="https://github.com/Farjanajhn/LingoBridge-server" className="hover:underline">GitHub Server</a>
            //<a href="https://lingobridge-934f9.web.app/" className="hover:underline text-blue-600">Live Link</a>
         // </div>
        //</div>

      //</div>