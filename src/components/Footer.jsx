import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Services</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-violet-600 text-gray-700">UX Researcher</a></li>
            <li><a className="hover:text-violet-600 text-gray-700">UI/UX Designer</a></li>
            <li><a className="hover:text-violet-600 text-gray-700">Frontend Development</a></li>
            <li><a className="hover:text-violet-600 text-gray-700">Backend Development</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:text-violet-600 text-gray-700">About</a></li>
            <li><a href="#contact" className="hover:text-violet-600 text-gray-700">Contact</a></li>
            <li><a href="#skills" className="hover:text-violet-600 text-gray-700">Skills</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Farjanajhn" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="hover:text-violet-600 text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/farjanajhn/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="hover:text-violet-600 text-gray-700" />
            </a>
            <a href="https://twitter.com/farjanajhn12" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={28} className="hover:text-violet-600 text-gray-700" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;