'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'} px-4 sm:px-8 py-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Flomad Labs R&D</h1>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li><a onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors cursor-pointer">Home</a></li>
            <li><a onClick={() => scrollToSection('focus')} className="text-white hover:text-blue-400 transition-colors cursor-pointer">Our Focus</a></li>
            <li><a onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors cursor-pointer">About</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 transition-colors cursor-pointer">Contact</a></li>
          </ul>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header