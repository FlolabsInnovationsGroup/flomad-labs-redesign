import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-8 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Flomad Labs R&D</h3>
          
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#focus" className="hover:text-blue-400 transition-colors">Our Focus</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-blue-400 transition-colors"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer