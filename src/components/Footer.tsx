import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Flomad Labs R&D</h3>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Our Focus</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/flomad-labs-r-d/" className="text-2xl hover:text-blue-400"><FaLinkedin /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer