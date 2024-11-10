'use client';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
      <footer id="contact" className="bg-darkBackground text-darkTextPrimary py-16 transition-colors duration-300">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 flex flex-wrap justify-between items-start space-y-12 md:space-y-0">

          {/* Branding Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl font-serif font-bold text-white">Flomad Labs R&D</h3>
            <p className="text-sm text-mutedText dark:text-darkMutedText mt-2">
              © {new Date().getFullYear()} Flomad Labs. All rights reserved.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold mb-4 text-accent text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#focus" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">
                  Our Focus
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Other Websites Section */}
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold mb-4 text-accent text-lg">Our Other Websites</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                    href="https://www.flomadtravel.com/"
                    className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Flomad Travel
                </a>
              </li>
              <li>
                <a
                    href="https://flomad.international/"
                    className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Flomad International
                </a>
              </li>
              <li>
                <a
                    href="https://www.caipo.ai/"
                    className="hover:text-accent dark:hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  CAIPO
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold mb-4 text-accent text-lg">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                  href="https://twitter.com/flomadlabs"
                  aria-label="Follow us on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-transform duration-300 transform hover:scale-125 hover:text-blue-500"
              >
                <FaTwitter />
              </a>
              <a
                  href="https://www.linkedin.com/company/flomad-labs-r-d/"
                  aria-label="Follow us on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-transform duration-300 transform hover:scale-125 hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                  href="https://github.com/flomadlabs"
                  aria-label="Follow us on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition-transform duration-300 transform hover:scale-125 hover:text-blue-500"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Optionally add a short CTA below */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>Stay connected with us for the latest updates in AI and Robotics research!</p>
        </div>
      </footer>
  );
};

export default Footer;
