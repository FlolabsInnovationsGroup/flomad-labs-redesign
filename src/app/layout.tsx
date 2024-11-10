'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);

        setIsDarkMode(initialDarkMode);
        document.documentElement.classList.toggle('dark', initialDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
        <html lang="en" className={`${inter.className} ${isDarkMode ? 'dark' : ''}`}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Explore the cutting-edge AI and Robotics research at Flomad Labs R&D" />
            <meta property="og:title" content="Flomad Labs R&D" />
            <meta property="og:description" content="Pioneering advanced technologies in AI and robotics" />
            <meta property="og:image" content="/path-to-image.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Flomad Labs R&D" />
            <meta name="twitter:description" content="Explore our innovations in AI and Robotics" />
            <meta name="twitter:image" content="/path-to-image.jpg" />
            <title>Flomad Labs R&D</title>
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="transition-colors duration-300 bg-pageBackground dark:bg-darkPageBackground text-textPrimary dark:text-darkTextPrimary flex flex-col">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="main-content flex-grow bg-contentBackground dark:bg-darkContentBackground px-4 sm:px-6 md:px-8 py-6">
            <main className="max-w-screen-xl mx-auto py-12">
                {children}
            </main>
        </div>
        <Footer />
        <Analytics />
        </body>
        </html>
    );
}










