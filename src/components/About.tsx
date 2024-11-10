'use client';

interface AboutItem {
  title: string;
  excerpt: string;
  externalLink: string;
}

const aboutItems: AboutItem[] = [
  {
    title: 'Conversational AI Travel Agent App',
    excerpt: 'Our app revolutionizes travel with intelligent, conversational AI for personalized travel planning.',
    externalLink: 'https://www.flomadtravel.com/',
  },
  {
    title: 'AI/AGI/Robotics Entrepreneurship Executive Management School',
    excerpt: 'Empowering leaders to excel in AI and robotics through our executive education program.',
    externalLink: 'https://flomad.international/',
  },
  {
    title: 'Chief AI Productivity Officer (CAIPO)',
    excerpt: 'A groundbreaking role and platform designed to maximize productivity through AI-driven insights.',
    externalLink: 'https://www.caipo.ai/',
  },
];

const About = () => {
  return (
      <section
          id="about"
          className="py-16 bg-background text-textPrimary dark:bg-darkBackground dark:text-darkTextPrimary transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-primary dark:text-blue-400">
            About Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {aboutItems.map((item, index) => (
                <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="group relative flex flex-col bg-cardBackground dark:bg-darkCardBackground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102"
                    aria-label={`Learn more about ${item.title}`}
                >
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-textPrimary dark:text-darkTextPrimary group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-mutedText dark:text-darkMutedText mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <span className="inline-block mt-4 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-buttonHover dark:hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110">
                      Learn more
                    </span>
                  </div>
                </a>
            ))}
          </div>
        </div>
      </section>
  );
};

export default About;



