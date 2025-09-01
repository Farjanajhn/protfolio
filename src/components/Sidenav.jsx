
import { useState } from 'react';
import { FaBars, FaBookOpen, FaEnvelope, FaGripHorizontal, FaHome,  FaInfo,   } from 'react-icons/fa';

const Sidenav = () => {
  const [nav, setNav]   = useState(false)
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div>
      <FaBars onClick={handleNav} className='absolute top-4 right-4 z-[99] text-black md:hidden'/>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 text-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaHome size={20} />
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 text-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaInfo size={20}  />
              <span className='pl-4'>About</span>
            </a>
    
            <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 text-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaBookOpen size={20} />
              <span className='pl-4'>Skills</span>
            </a>
            <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 text-black shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaGripHorizontal size={20} />
              <span className='pl-4'>Projects</span>
            </a>
            <a onClick={handleNav} href="#message" className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-2 p-4 text-black cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaEnvelope size={20} />
              <span className='pl-4'>Contact</span>
            </a>
           
        
         
        </div>
        ) :
('')
        }
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
        <a href="#main" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaHome/>
        </a>
        <a href="#about" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaInfo/>
        </a>
        <a href="#projects" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaGripHorizontal/>
        </a>
        <a href="#skills" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaBookOpen/>
        </a>
        <a href="#message" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
          <FaEnvelope/>
        </a>
     
       </div>
      </div>
    </div>
  );
};

export default Sidenav;

/*<a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
<FaIdBadge/>
</a> */