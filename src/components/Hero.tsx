'use client';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24 mx-auto w-full"
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
                {/* Transparent Background Box */}
                <div className="relative inline-block px-8 py-6 bg-black bg-opacity-60 rounded-lg">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-shadow-md">
                        Transforming Tomorrow with
                        <br />
                        <span className="text-4xl sm:text-5xl font-extrabold mt-2">AI and Robotics</span>
                    </h1>
                    <p className="text-lg sm:text-xl font-light mb-8">
                        Pioneering breakthrough technologies that reshape industries and elevate human potential.
                    </p>
                    <a
                        href="#focus"
                        role="button"
                        className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-buttonHover dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
                        aria-label="Explore our innovations"
                    >
                        Explore Our Innovations
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
git