import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#37b8af', // Turquoise primary accent
        secondary: '#234c6a', // Darker blue accent
        accent: '#48c9b0', // Brighter turquoise accent
        background: '#f0f4f8', // Very light gray for light mode
        darkBackground: '#1a1a1a', // Dark gray background for dark mode
        pageBackground: '#e8eff5', // Light mode page background
        darkPageBackground: '#121212', // Dark mode page background
        contentBackground: '#ffffff', // Light mode content background
        darkContentBackground: '#2a2a2a', // Dark mode content background
        textPrimary: '#333333', // Text color in light mode
        darkTextPrimary: '#e5e5e5', // Text color in dark mode
        buttonHover: '#2a7f88', // Hover color for buttons
        cardBackground: '#f8f8f8', // Lighter card background for light mode
        darkCardBackground: '#333333', // Darker card background for dark mode
        highlight: '#3c3c3c', // Subtle highlight for dark mode backgrounds
        mutedText: '#4A4A4A',  // Darker text for better readability in light mode
        darkMutedText: '#9A9A9A', // Muted text color for dark mode
        gradientStart: '#eef5f8', // Gradient start for light mode
        gradientEnd: '#bce7e6', // Gradient end for light mode
        darkGradientStart: '#1a2e35', // Gradient start for dark mode
        darkGradientEnd: '#2a4d54', // Gradient end for dark mode
        linkHover: '#9a9a9a', // Hover color for links
        footerBg: '#212121', // Dark footer background
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Elegant serif font for headers
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2.0rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      spacing: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '36': '9rem',
        '72': '18rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        focusCard: '0 8px 20px rgba(0, 0, 0, 0.2)',
        header: '0 4px 10px rgba(0, 0, 0, 0.1)',
        soft: '0 2px 6px rgba(0, 0, 0, 0.15)',
        intense: '0 10px 30px rgba(0, 0, 0, 0.3)',
        hover: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        button: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      },
      opacity: {
        '10': '0.1',
        '15': '0.15',
        '50': '0.5',
        '85': '0.85',
        '95': '0.95',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
      },
      maxWidth: {
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
        'content-max': '1200px',
      },
      backgroundImage: {
        'hero-pattern': "url('/video.mp4-poster.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;

