'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';

interface HeaderProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Header = ({ toggleDarkMode, isDarkMode }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-darkBackground bg-opacity-90 shadow-lg' : 'bg-darkBackground bg-opacity-80'
            }`}
            aria-label="Main Navigation"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center space-x-6">
                {/* Logo with hover effect */}
                <Link
                    href="/"
                    className="text-2xl font-serif text-white hover:text-accent transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Go to Home"
                >
                    Flomad Labs R&D
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="/"
                        className="nav-link text-white hover:text-accent transition-colors"
                        aria-label="Go to Home"
                    >
                        Home
                    </Link>
                    <Link
                        href="#focus"
                        className="nav-link text-white hover:text-accent transition-colors"
                        aria-label="Go to Our Focus"
                    >
                        Our Focus
                    </Link>
                    <Link
                        href="#about"
                        className="nav-link text-white hover:text-accent transition-colors"
                        aria-label="Go to About"
                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className="nav-link text-white hover:text-accent transition-colors"
                        aria-label="Go to Contact"
                    >
                        Contact
                    </Link>

                    {/* Dark Mode Toggle Button */}
                    <button
                        onClick={toggleDarkMode}
                        className="ml-4 text-white hover:text-accent transition-transform duration-300 transform focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-darkBackground text-white py-6 transition-all duration-300 ease-in-out">
                    <ul className="px-6 space-y-4">
                        <li>
                            <Link
                                href="/"
                                className="block nav-link px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Go to Home"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#focus"
                                className="block nav-link px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Go to Our Focus"
                            >
                                Our Focus
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#about"
                                className="block nav-link px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Go to About"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className="block nav-link px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Go to Contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    toggleDarkMode();
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                                <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
