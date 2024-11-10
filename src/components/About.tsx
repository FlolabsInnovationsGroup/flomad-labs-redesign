'use client';

interface AboutItem {
  title: string;
  excerpt: string;
  imagePath: string; // Path to the image in public/media folder
  externalLink: string;
}

// Static about items using local images in the public/media folder
const aboutItems: AboutItem[] = [
  {
    title: 'Conversational AI Travel Agent App',
    excerpt: 'Our app revolutionizes travel with intelligent, conversational AI for personalized travel planning.',
    imagePath: '/media/travelchatdemo.gif',
    externalLink: 'https://www.flomadtravel.com/',
  },
  {
    title: 'AI/AGI/Robotics Entrepreneurship Executive Management School',
    excerpt: 'Empowering leaders to excel in AI and robotics through our executive education program.',
    imagePath: '/media/vulcansalute.jpg',
    externalLink: 'https://flomad.international/',
  },
  {
    title: 'Chief AI Productivity Officer (CAIPO)',
    excerpt: 'A groundbreaking role and platform designed to maximize productivity through AI-driven insights.',
    imagePath: '/media/caipoanimation.gif',
    externalLink: 'https://www.caipo.ai/',
  },
];

const About = () => {
  return (
      <section id="about" className="py-16 bg-background text-textPrimary dark:bg-darkBackground dark:text-darkTextPrimary transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-accent dark:text-blue-400">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutItems.map((item, index) => (
                <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="bg-cardBackground dark:bg-darkCardBackground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group transform hover:scale-105"
                >
                  <div className="relative">
                    <img
                        src={item.imagePath}
                        alt={item.title}
                        loading="lazy" // Lazy loading for images for better performance
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-textPrimary dark:text-darkTextPrimary group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-mutedText dark:text-darkMutedText mb-4">{item.excerpt}</p>
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



