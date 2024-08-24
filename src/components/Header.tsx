'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Flomad Labs R&D</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-white hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="#focus" className="text-white hover:text-blue-400 transition-colors">Our Focus</Link></li>
            <li><Link href="#about" className="text-white hover:text-blue-400 transition-colors">About</Link></li>
            <li><Link href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900`}>
        <ul className="px-4 py-2">
          <li><Link href="/" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="#focus" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Our Focus</Link></li>
          <li><Link href="#about" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href="#contact" className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header