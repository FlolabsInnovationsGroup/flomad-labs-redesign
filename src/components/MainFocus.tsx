'use client';

import { FaGraduationCap, FaHeartbeat, FaPlane } from 'react-icons/fa';

interface FocusArea {
  title: string;
  subtext: string;
  icon: string;
  backgroundImage: string; // Path to the image in public/media folder
}

const focusAreas: FocusArea[] = [
  {
    title: 'Education',
    subtext: 'Empowering learners with adaptive AI platforms that foster lifelong skills for a rapidly changing world.',
    icon: 'education',
    backgroundImage: '/media/coderpicture.jpg',
  },
  {
    title: 'Healthcare',
    subtext: 'Advancing patient care and medical research with intelligent solutions in diagnostics and treatment.',
    icon: 'healthcare',
    backgroundImage: '/media/doctorpicture.jpg',
  },
  {
    title: 'Travel',
    subtext: 'Redefining travel experiences with personalized, AI-driven automation for seamless journeys.',
    icon: 'travel',
    backgroundImage: '/media/airplanepicture.jpg',
  },
];

const getIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'education': return <FaGraduationCap className="text-accent text-5xl mb-4 transition-transform duration-300 transform hover:scale-110" />;
    case 'healthcare': return <FaHeartbeat className="text-accent text-5xl mb-4 transition-transform duration-300 transform hover:scale-110" />;
    case 'travel': return <FaPlane className="text-accent text-5xl mb-4 transition-transform duration-300 transform hover:scale-110" />;
    default: return null;
  }
};

const MainFocus = () => {
  return (
      <section id="focus" className="py-12 md:py-16 lg:py-20 bg-background dark:bg-darkBackground text-textPrimary dark:text-darkTextPrimary transition-colors duration-300">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-primary dark:text-blue-400">Our Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {focusAreas.map((focus, index) => (
                <div
                    key={index}
                    className="relative h-80 rounded-lg overflow-hidden shadow-lg group transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    role="region" aria-labelledby={`focus-${index}-title`} aria-describedby={`focus-${index}-subtext`}
                >
                  <img
                      src={focus.backgroundImage}
                      alt={`${focus.title} background`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 dark:from-darkBackground dark:to-transparent transition duration-300 flex flex-col items-center justify-center p-6 text-white dark:text-gray-100">
                    {getIcon(focus.icon)}
                    <h3 id={`focus-${index}-title`} className="text-3xl font-semibold mb-2 text-accent dark:text-blue-400">{focus.title}</h3>
                    <p id={`focus-${index}-subtext`} className="text-center text-mutedText dark:text-gray-300 leading-relaxed">{focus.subtext}</p>
                    <button
                        aria-label={`Learn more about ${focus.title}`}
                        className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-buttonHover dark:hover:bg-blue-500 transition-colors duration-300"
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

