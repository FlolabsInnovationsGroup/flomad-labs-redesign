'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Flomad Labs R&D</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-white hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-blue-400 transition-colors">About</Link></li>
            <li><Link href="/focus" className="text-white hover:text-blue-400 transition-colors">Our Focus</Link></li>
            <li><Link href="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile menu */}
      <motion.nav
        className={`md:hidden fixed top-0 right-0 bottom-0 w-64 bg-gray-900 p-6 ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col space-y-4 mt-12">
          <li><Link href="/" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href="/focus" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Our Focus</Link></li>
          <li><Link href="/contact" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </motion.nav>
    </header>
  )
}

export default Header