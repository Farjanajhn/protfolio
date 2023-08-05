import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import img from './../assets/image/myImage.jpg'
import { FaFileDownload } from 'react-icons/fa';
import ContactInfo from './ContactInfo';
/* import resume from './../assets/image/resume.pdf' */
const About = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

/*   const handleDownload = () => {
    const url = "/public/resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "resume.pdf";
    anchor.click();
  } */
  return (
    <div id="about">
      <div className='flex md:flex-row flex-col justify-center items-center mt-10 px-16 gap-4'>
      <div className='w-[40%] '>
          <div data-aos="fade-right">
          <img className="rounded-full" src={img} alt="" />
     </div>
      </div>
      
        <div className='w-[45%]'>
        <div data-aos="fade-top ">
      <h1 className="text-4xl text-center font-bold py-8  text-purple-950">About Me</h1>
      <p className='text-xl text-center border-b-4 py-4  text-purple-950'>
              I'm Farjana Jahan Sathi, a passionate Junior Full Stack Developer with expertise in HTML5, CSS3, Bootstrap, Tailwind, React.js, C#, C++, and JavaScript. I have hands-on experience in software support and testing, and I've developed user management and e-commerce websites using Node.js, Firebase, MongoDB, and React.js. With strong communication and time management skills, I thrive in collaborative environments. Fluent in multiple languages, I'm driven to deliver seamless user experiences and contribute to company growth as a Full Stack Developer. Let's discuss how I can make an impact on your team.</p>
            <ContactInfo></ContactInfo>
            
          </div>
          <div className='mt-6 text-center' id="resume">
            <a href="https://drive.google.com/file/d/1p6BAUWJpfuYWXnDX4H6I3f1jyYt_RQJ-/view?usp=sharing" >
                   <button className='btn btn-outline btn-primary ' ><FaFileDownload></FaFileDownload>Download Resume</button>
     </a>
         </div>
        </div>
        
     </div>
    </div>
  );
};

export default About;