import { Link } from "react-router-dom";
import { useMemo } from "react";

import final from '../assets/image/UX1st/happy2.png'
import mockup1 from "../assets/image/UX2nd/mockup1.png";

// Project data
const uxProjects = [
  {
    title: "Blossom Buddy",
    description:
      "A self-growth system using plant care to motivate and reflect progress.",
    link: "/projects/first",
    backgroundImage: final,
  },
  {
    title: "Trubble Buddy",
    description:
      "A co-designed therapy support system created with youth stakeholders.",
    link: "/projects/second",
    backgroundImage:mockup1 ,
  },
  {
    title: "Ultra Public transportation mobile app redesign",
    description:
      "Redesign of Ultra based on Master’s thesis research, focusing on usability, inclusivity, and seamless commuting.",
    link: "#",
  
  },
  {
    title: "E-daak (Coming Soon)",
    description:
      "A digital letterbox service for Bangladesh, enabling secure delivery of bills, documents, and payments — inspired by Sweden’s Kivra.",
    link: "#",
  },
];

const Projects = () => {
  const projects = useMemo(() => uxProjects, []);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 md:px-20"
    >
       <hr className="border-black mb-12" />
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">UI/UX Projects</h2>
          <p className="mt-4 mx-auto max-w-2xl text-gray-700">
            Showcasing projects focused on user research and interaction design.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ title, description, link, backgroundImage }) {
  const isComingSoon = link === "#";

  return (
    <article
      className="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
      aria-label={title}
    >
      {/* Elegant gradient ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-200/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow duration-300 group-hover:shadow-lg">
        {/* Media area: with or without image */}
        {backgroundImage ? (
          <div className="relative overflow-hidden rounded-t-2xl">
            <div
              className="aspect-[16/10] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
              role="img"
              aria-label={`${title} cover image`}
            />
            {/* Dark overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
            {/* Top-right chip */}
            <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow">
              Case Study
            </div>
          </div>
        ) : (
          // Fallback media if no image
          <div className="relative grid aspect-[16/10] place-items-center rounded-t-2xl bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-xl mt-4 bg-gray-900 text-white text-xl shadow">
                UI
              </div>
              <p className="text-sm text-gray-600">Visual preview coming soon</p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-white/50" />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="mt-2 line-clamp-3 text-gray-700">{description}</p>

          {/* Button */}
          <div className="mt-5">
            {isComingSoon ? (
              <button
                disabled
                className="w-full cursor-not-allowed rounded-md bg-gray-400 text-white shadow px-4 py-2"
                aria-disabled="true"
                title="Case study coming soon"
              >
                Coming Soon
              </button>
            ) : (
              <Link
                to={link}
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white shadow outline-none transition hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-900/50"
                aria-label={`View case study: ${title}`}
              >
                View Case Study
              </Link>
            )}
          </div>
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