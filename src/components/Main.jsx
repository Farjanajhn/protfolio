import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import main from './../assets/image/img1.jpg'
const Main = () => {
  return (
    <div id='main'>
      <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={main} alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/70'>
        <div className='max-w-[700px] mx-auto h-full w-full flex  flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-purple-950'>Hey there! I am Farjana</h1>
          <h2 className='sm:text-3xl text-2xl  text-purple-950'>I am a
         
          <TypeAnimation
      sequence={[
      
        'Front End Developer',
        1000,
        'Mern Developer',
        1000,
        'Digital Marketor',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em',paddingLeft:'5px'}}
      repeat={Infinity}
    />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <a href="https://github.com/Farjanajhn">
            <FaGithub size={30}>
           
              </FaGithub>
              
            </a>
            <a href="www.linkedin.com/in/
">
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a href="https://twitter.com/farjanajhn12">
            <FaTwitter size={30}></FaTwitter>
            </a>
            <a href="https://www.facebook.com/farjana.jahanJ">
            <FaFacebook size={30}></FaFacebook>
         </a>
           
         
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Main;