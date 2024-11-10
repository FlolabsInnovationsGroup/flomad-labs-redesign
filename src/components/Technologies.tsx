'use client';

import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'
import Link from 'next/link'

interface Technology {
  title: string;
  slug: { current: string };
  description: string;
}

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([])

  useEffect(() => {
    const fetchTechnologies = async () => {
      const query = `*[_type == "technology"] {
        title,
        slug,
        description
      }`
      const result = await client.fetch(query)
      console.log('Fetched technologies:', result)
      setTechnologies(result)
    }

    fetchTechnologies()
  }, [])

  return (
      <section id="technologies" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-primary">Technologies</h2>
          <p className="text-center text-gray-300 mb-8">Breakthrough research. Transformative products.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {technologies.map((tech) => (
                <Link href={`/technologies/${tech.slug.current}`} key={tech.slug.current} className="group bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Placeholder for image */}
                  <div className="w-full h-48 bg-gray-600 flex items-center justify-center text-gray-500">
                    {/* Placeholder for image */}
                    <span>Image coming soon</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-color transition-colors duration-300">
                      {tech.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    <button className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-buttonHover dark:hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent">
                      Learn More
                    </button>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Technologies
