import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
<footer className="footer p-10 bg-base-300 text-black">
  <div>
    <span className="footer-title  text-purple-950">Services</span> 
    <a className="link link-hover  text-purple-950">Font end development</a> 
    <a className="link link-hover  text-purple-950">Back end development</a> 
    <a className="link link-hover  text-purple-950">Digital Marketing</a> 
   
  </div> 
  <div>
    <span className="footer-title  text-purple-950">Company</span> 
    <a className="link link-hover  text-purple-950" href="#about">About</a> 
    <a className="link link-hover  text-purple-950" href="#contact">Contact</a> 
    <a className="link link-hover  text-purple-950" href="#skills">Skills</a> 
   
  </div> 
  <div>
    <span className="footer-title  text-purple-950">Social</span> 
    <div className="grid grid-flow-col gap-4">
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
</footer>
  );
};

export default Footer;