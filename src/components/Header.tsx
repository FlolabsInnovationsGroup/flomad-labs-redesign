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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-70' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Flomad Labs R&D</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent menu-transition ${isMenuOpen ? 'open' : ''} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><Link href="/" className="text-white hover:text-blue-400 transition-colors block" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="#focus" className="text-white hover:text-blue-400 transition-colors block" onClick={() => setIsMenuOpen(false)}>Our Focus</Link></li>
            <li><Link href="#about" className="text-white hover:text-blue-400 transition-colors block" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="#contact" className="text-white hover:text-blue-400 transition-colors block" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header