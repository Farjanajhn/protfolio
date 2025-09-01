//import { FaFigma, FaPenNib, FaUniversalAccess, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
//import { MdOutlineAccessibilityNew, MdOutlineDesignServices, MdOutlineSearch } from 'react-icons/md';
//import { SiTailwindcss, SiCplusplus, SiFramer } from 'react-icons/si';
//import { motion } from 'framer-motion';
//import design from "./../assets/image/Design.png";

//const Skills = () => {
  //const uiuxSkills = [
   // { icon: <MdOutlineSearch className="text-indigo-600" />, title: "UX Research Methods" },
    //{ icon: <FaUniversalAccess className="text-indigo-600" />, title: "User Research" },
   // { icon: <MdOutlineDesignServices className="text-orange-500" />, title: "Interaction Design" },
    //{ icon: <FaFigma className="text-pink-600" />, title: "Figma Prototyping" },
    //{ icon: <FaPenNib className="text-gray-500" />, title: "Wireframing" },
    //{ icon: <SiFramer className="text-blue-600" />, title: "Framer" },
    //{ icon: <MdOutlineAccessibilityNew className="text-green-600" />, title: "Accessibility" },
    //{ icon: <FaUniversalAccess className="text-blue-500" />, title: "Usability Testing" },
    //{ icon: <FaPenNib className="text-purple-600" />, title: "UI Design" }
  //];

  //const frontendSkills = [
   // { icon: <FaHtml5 className="text-orange-600" />, title: "HTML 5" },
    //{ icon: <FaCss3Alt className="text-blue-600" />, title: "CSS 3" },
    //{ icon: <FaJs className="text-yellow-500" />, title: "JavaScript" },
    //{ icon: <FaReact className="text-blue-400" />, title: "React.js" },
    //{ icon: <FaBootstrap className="text-purple-600" />, title: "Bootstrap" },
    //{ icon: <SiTailwindcss className="text-teal-500" />, title: "Tailwind CSS" },
    //{ icon: <SiCplusplus className="text-blue-700" />, title: "C++" }
  //];

  // Animation variants
  //const containerVariants = {
    //hidden: { opacity: 0 },
    //show: {
      //opacity: 1,
    //  //transition: { staggerChildren: 0.15 }
    //}
  //};

  //const cardVariants = {
   // hidden: { opacity: 0, y: 40 },
    //show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  //};

  //return (
   // <section id="skills" className="relative bg-gradient-to-br from-gray-50 via-violet-100 to-violet-300 text-violet-950 py-24 px-6 md:px-20 overflow-hidden">
      //<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

     // {/* Header */}
      //<motion.div 
        //initial={{ opacity: 0, y: 50 }} 
        //whileInView={{ opacity: 1, y: 0 }} 
        //transition={{ duration: 0.6 }}
        //viewport={{ once: true }}
        //className="text-center max-w-4xl mx-auto"
     // >
        //<h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">UI/UX Expertise</h1>
        //<p className="py-6 font-medium text-lg text-gray-700 leading-relaxed">
         // My UI/UX expertise focuses on <span className="text-violet-700 font-semibold">User Research</span>, <span className="text-violet-700 font-semibold">Interaction Design</span>, and <span className="text-violet-700 font-semibold">Prototyping</span>, ensuring seamless and accessible digital experiences.
        //</p>
      //</motion.div>

      {/* UI/UX Grid */}
      //<motion.div
        //variants={containerVariants}
        //initial="hidden"
        //whileInView="show"
        //viewport={{ once: true }}
        //className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-12"
      //>
        //{uiuxSkills.map((skill, index) => (
          //<motion.div
           // key={index}
            //variants={cardVariants}
         //   whileHover={{ scale: 1.08, rotate: 1 }}
           // className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md hover:shadow-xl transition duration-300"
         // >
           // <div className="text-6xl mb-3 drop-shadow-md">{skill.icon}</div>
            //<p className="text-center font-semibold text-gray-800">{skill.title}</p>
          //</motion.div>
        //))}
      //</motion.div>

      {/* Frontend Development */}
      { /*<motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
           Expertise in frontend Development technology
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10"
        >
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md hover:shadow-xl transition duration-300"
            >
              <div className="text-6xl mb-3 drop-shadow-md">{skill.icon}</div>
              <p className="text-center font-semibold text-gray-800">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Familiar With */}
      {/*<motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Familiar With</h2>
        <p className="text-lg font-medium text-gray-700 leading-relaxed">
          I also have experience working with <span className="text-violet-700 font-semibold">Design Systems</span>, <span className="text-violet-700 font-semibold">UX Research Methods</span>, and <span className="text-violet-700 font-semibold">Heuristic Evaluations</span>.
        </p>
      </motion.div>
  
      {/* My Design Process Section */}
      /*<br></br>
       <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🌀 My Design Process</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          A structured, iterative approach blending research, ideation, prototyping, and testing —
          ensuring that every design decision is grounded in user needs and meaningful impact.
        </p>
        <div className="flex justify-center">
          <img
            src={design}
            alt="My Design Process"
            className="rounded-lg shadow-lg max-w-3xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;*/


import { motion } from "framer-motion";

const Skills = () => {
  const uiuxSkills = [
    "UX Research & Usability Testing",
    "Wireframing & Prototyping",
    "Interaction & Visual Design",
    "Accessibility & Inclusive Design",
    "Design Systems (Figma)"
  ];

  const frontendSkills = [
    "React.js, JavaScript (ES6+)",
    "Tailwind CSS, Bootstrap",
    "HTML5, CSS3",
    "Version Control (Git/GitHub)"
  ];

  const complementarySkills = [
    "Agile & Scrum Workflow",
    "Cross-team Collaboration",
    "Basic Backend (Node.js, Firebase)"
  ];

  const designProcess = ["Research", "Ideation", "Prototyping", "Testing"];

  return (
    <section   id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
       <hr className="border-black mb-12" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-black mb-16 text-center">
          Professional Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Core Expertise */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Expertise</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {uiuxSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Technical Proficiency */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Technical Proficiency</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {frontendSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Complementary Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Complementary Experience</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {complementarySkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Design Process Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10 text-gray-800 text-center">
            Structured Design Process
          </h3>
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center md:w-1/4 bg-white rounded-xl shadow-sm p-6 transition hover:shadow-md"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium text-center">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;