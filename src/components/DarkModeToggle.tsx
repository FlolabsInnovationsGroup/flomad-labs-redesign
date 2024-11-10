'use client';

import { FaSun, FaMoon } from 'react-icons/fa';

interface DarkModeToggleProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }: DarkModeToggleProps) => {
    return (
        <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-pressed={isDarkMode}
            className={`p-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-blue-500'
            } ${
                isDarkMode ? 'focus:ring-yellow-400' : 'focus:ring-blue-400'
            }`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {isDarkMode ? (
                <FaSun className="text-yellow-400 transition-transform duration-300 transform scale-150" />
            ) : (
                <FaMoon className="text-blue-500 transition-transform duration-300 transform scale-150" />
            )}
        </button>
    );
};

export default DarkModeToggle;

