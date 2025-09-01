import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEye } from 'react-icons/fa';
import img from './../assets/image/myImage.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
   
    <section 
      id="about" 
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6 md:px-20 overflow-hidden"
    >
       <hr className="border-black mb-12" />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-20 max-w-6xl mx-auto">
        
        
        {/* Profile Image */}
      
        <div 
          data-aos="fade-right"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border shadow-md mx-auto md:mx-0"
        >
          <img 
            src={img} 
            alt="Farjana Jahan Sathi - Profile" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div 
  data-aos="fade-left" 
  className="text-center md:text-left max-w-2xl"
>
  <h1 className="text-4xl font-bold mb-6 text-gray-900">
    I’m <span className="font-semibold text-black">Farjana</span>
  </h1>
  
  <p className="text-lg leading-relaxed text-gray-900">
            — a passionate <span className="font-semibold text-black">Product Designer </span> 
      
    and <span className="font-semibold text-black">MERN Stack Developer</span> based in Umeå, Sweden.  
    With a strong foundation in <span className="font-semibold text-black">Human-Computer Interaction and User Experience </span> 
    and a background in development, I bring together 
     <span className="font-semibold text-black"> design thinking</span> and 
    <span className="font-semibold text-black"> technical expertise </span> 
     to create digital solutions that feel simple, intuitive, and human. ✨
  </p>

  <p className="text-lg leading-relaxed text-gray-700 mt-4">
    For me, design is more than just aesthetics — it’s about 
    <span className="font-semibold text-black"> problem-solving </span> 
     and crafting experiences that empower people in meaningful ways.  
    I believe every interface tells a story, and my goal is to make sure that story 
    is one of <span className="font-semibold text-black">clarity, accessibility, and joy</span>.
  </p>

  <p className="text-lg leading-relaxed text-gray-700 mt-4">
    As a lifelong learner, I thrive at the intersection of 
     <span className="font-semibold text-black"> creativity </span> and 
     <span className="font-semibold text-black"> technology </span>. 
    Whether I’m building interfaces in React, prototyping in Figma, or conducting user research, 
    I’m always guided by one principle: 
     <span className="italic text-black"> put the user first </span>. 🚀
  </p>

  <p className="text-lg leading-relaxed text-gray-700 mt-4">
    Outside of work, you’ll find me <span className="font-semibold text-black">
    exploring new cultures and languages , or reading books</span> to unwind.  
    These passions fuel my creativity and help me design products that connect with people on a deeper level. 
  </p>

  {/* Resume Button */}
  <div className="mt-8">
    <a 
      href="https://drive.google.com/file/d/1LHlzw5ugACEz9GUWWl6L1ZajfKRdvUcV/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button 
        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-medium rounded-md shadow hover:bg-gray-700 transition"
      >
        <FaEye className="text-lg" /> See Resume
      </button>
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;