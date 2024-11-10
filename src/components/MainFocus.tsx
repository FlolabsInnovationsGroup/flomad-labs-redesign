'use client';

const focusAreas = [
  {
    title: 'Education',
    subtext: 'Empowering learners with adaptive AI platforms that foster lifelong skills for a rapidly changing world.',
  },
  {
    title: 'Healthcare',
    subtext: 'Advancing patient care and medical research with intelligent solutions in diagnostics and treatment.',
  },
  {
    title: 'Travel',
    subtext: 'Redefining travel experiences with personalized, AI-driven automation for seamless journeys.',
  },
  {
    title: 'Space',
    subtext: 'Exploring new frontiers in space technology, from AI-driven space missions to advancements in space exploration.',
  },
];

const MainFocus = () => {
  return (
      <section id="focus" className="py-20 bg-background dark:bg-darkBackground text-textPrimary dark:text-darkTextPrimary transition-colors duration-300">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-primary dark:text-blue-400">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 gap-y-12">
            {focusAreas.map((focus, index) => (
                <div
                    key={index}
                    className="relative bg-cardBackground dark:bg-darkCardBackground rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between group transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    role="region"
                    aria-labelledby={`focus-${index}-title`}
                    aria-describedby={`focus-${index}-subtext`}
                >
                  {/* Text content */}
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-6 h-full">
                    <h3
                        id={`focus-${index}-title`}
                        className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 dark:text-gray-100"
                    >
                      {focus.title}
                    </h3>
                    <p
                        id={`focus-${index}-subtext`}
                        className="text-center text-gray-700 dark:text-darkMutedText leading-relaxed text-lg"
                    >
                      {focus.subtext}
                    </p>
                    <button
                        aria-label={`Learn more about ${focus.title}`}
                        className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-buttonHover dark:hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default MainFocus;
