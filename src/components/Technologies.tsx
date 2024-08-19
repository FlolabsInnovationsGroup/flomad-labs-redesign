import Link from 'next/link'

const Technologies = () => {
  const technologies = [
    {
      image: '/image.svg',
      title: 'Project Astra',
      description: 'A universal AI agent that is helpful in everyday life',
      slug: 'project-astra'
    },
    {
      image: '/image.svg',
      title: 'Gemini',
      description: 'The most general and capable AI model ve ever built.',
      slug: 'gemini'
    },
    {
      image: '/image.svg',
      title: 'Veo',
      description: 'Our most capable generative video model.',
      slug: 'veo'
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies</h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-600">Breakthrough research. Transformative products.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Link href={`/technologies/${tech.slug}`} key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={tech.image} alt={tech.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies