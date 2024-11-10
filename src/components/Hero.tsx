'use client';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24 mx-auto w-full" // Adjusted padding for spacing and center alignment
            aria-label="Hero Section"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
                poster="/video.mp4-poster.jpg" // Optional: Add a poster image for better loading performance
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content Section */}
            <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8 transition-colors duration-300">
                <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-shadow-md">
                    Transforming Tomorrow with Advanced AI and Robotics
                </h1>
                <p className="text-xl sm:text-2xl font-medium mb-10">
                    Pioneering breakthrough technologies that reshape industries and elevate human potential.
                </p>
                <a
                    href="#focus"
                    role="button"
                    className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-buttonHover dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Explore our innovations"
                >
                    Explore Our Innovations
                </a>
            </div>
        </section>
    );
};

export default Hero;


