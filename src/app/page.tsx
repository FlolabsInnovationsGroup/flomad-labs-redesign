import { Metadata } from 'next';
import Hero from '@/components/Hero';
import MainFocus from '@/components/MainFocus';
import About from '@/components/About';
import Technologies from '@/components/Technologies';

export const metadata: Metadata = {
    title: 'Home | Flomad Labs R&D',
    description: 'Explore the cutting-edge AI and Robotics research at Flomad Labs R&D',
};

export default function Home() {
    return (
        <main className="transition-colors duration-300">
            {/* Hero Section */}
            <section
                id="hero"
                aria-label="Hero Section"
                className="bg-background text-textPrimary dark:bg-darkBackground dark:text-darkTextPrimary py-8 md:py-12 lg:py-16 transition-all duration-300"
            >
                <Hero />
            </section>

            {/* Main Focus Section */}
            <section
                id="focus"
                aria-labelledby="focus-title"
                className="bg-background text-textPrimary dark:bg-darkBackground dark:text-darkTextPrimary py-8 md:py-12 lg:py-16 transition-all duration-300"
            >
                <h2 id="focus-title" className="sr-only">Main Focus</h2>
                <MainFocus />
            </section>

            {/* About Section */}
            <section
                id="about"
                aria-labelledby="about-title"
                className="bg-background text-textPrimary dark:bg-darkBackground dark:text-darkTextPrimary py-8 md:py-12 lg:py-16 transition-all duration-300"
            >
                <h2 id="about-title" className="sr-only">About Us</h2>
                <About />
            </section>

            {/* Technologies Section */}
            <section
                id="technologies"
                aria-labelledby="technologies-title"
                className="bg-background text-textPrimary dark:bg-darkBackground dark:text-darkTextPrimary py-8 md:py-12 lg:py-16 transition-all duration-300"
            >
                <h2 id="technologies-title" className="sr-only">Technologies</h2>
                <Technologies />
            </section>

            {/* CTA Section */}
            <section
                id="cta"
                aria-labelledby="cta-title"
                className="bg-primary text-white py-8 md:py-12 lg:py-16 text-center transition-all duration-300"
            >
                <h2 id="cta-title" className="text-4xl font-extrabold mb-6">
                    Ready to Explore Our Innovations?
                </h2>
                <p className="text-xl mb-8">Contact us or learn more about our groundbreaking work in AI and Robotics.</p>
                <a href="#contact" className="bg-accent text-white px-8 py-4 font-bold rounded-full shadow-lg hover:bg-buttonHover transition-colors duration-300">
                    Get in Touch
                </a>
            </section>
        </main>
    );
}








