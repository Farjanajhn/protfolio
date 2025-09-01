import {  FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import main from './../assets/image/img11.png'
const Main = () => {
  return (
    <div id='main'>
      <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={main} alt="" /> 
      <div className='w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-gray-200 to-gray-400/70'>
        <div className='max-w-[700px] mx-auto h-full w-full flex  flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-black'>Hey there! </h1>
          <h2 className='sm:text-3xl text-2xl  text-gray-800'>I am a
         
          <TypeAnimation
      sequence={[
        "UX Designer", 1000,
        "UI Designer", 1000,
        "Product Designer", 1000,
        "MERN Stack Developer", 1000,
        "HCI Enthusiast", 1000,
        "Creative Problem Solver", 1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em',paddingLeft:'5px'}}
      repeat={Infinity}
    />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <a href="https://github.com/Farjanajhn">
              <FaGithub size={30} color="black" >
           
              </FaGithub>
              
            </a>
            <a href="www.linkedin.com/in/
">
              <FaLinkedin size={30} color="black"></FaLinkedin>
            </a>
            <a href="https://twitter.com/farjanajhn12">
            <FaTwitter size={30} color="black"></FaTwitter>
            </a>
          
           
         
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Main;