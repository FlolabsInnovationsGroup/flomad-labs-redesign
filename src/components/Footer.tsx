import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
      <footer id="contact" className="bg-darkBackground text-darkTextPrimary py-12 transition-colors duration-300">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 flex flex-wrap justify-between items-start space-y-8 md:space-y-0">

          {/* Branding */}
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl font-bold text-white">Flomad Labs R&D</h3>
            <p className="text-sm text-mutedText dark:text-darkMutedText mt-2">
              © {new Date().getFullYear()} Flomad Labs. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold mb-4 text-accent text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="#about" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">About</Link></li>
              <li><Link href="#focus" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">Our Focus</Link></li>
              <li><Link href="#contact" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Our Other Links */}
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold mb-4 text-accent text-lg">Our Other Websites</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.flomadtravel.com/" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  Flomad Travel
                </a>
              </li>
              <li>
                <a href="https://flomad.international/" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  Flomad International
                </a>
              </li>
              <li>
                <a href="https://www.caipo.ai/" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                  CAIPO
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold mb-4 text-accent text-lg">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://twitter.com/flomadlabs" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-2xl transition-transform duration-300 transform hover:scale-125 hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/flomad-labs-r-d/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-2xl transition-transform duration-300 transform hover:scale-125 hover:text-blue-500">
                <FaLinkedin />
              </a>
              <a href="https://github.com/flomadlabs" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-2xl transition-transform duration-300 transform hover:scale-125 hover:text-blue-500">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

