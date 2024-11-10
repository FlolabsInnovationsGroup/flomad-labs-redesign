'use client'

import { useEffect, useState } from 'react'
import { client, urlFor } from '@/lib/sanity'
import Link from 'next/link'

interface Technology {
  title: string;
  slug: { current: string };
  description: string;
  image: any;
}

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([])

  useEffect(() => {
    const fetchTechnologies = async () => {
      const query = `*[_type == "technology"] {
        title,
        slug,
        description,
        image
      }`
      const result = await client.fetch(query)
      console.log('Fetched technologies:', result)
      setTechnologies(result)
    }

    fetchTechnologies()
  }, [])

  return (
      <section id="technologies" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Technologies</h2>
          <p className="text-center text-gray-400 mb-8">Breakthrough research. Transformative products.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
                <Link href={`/technologies/${tech.slug.current}`} key={tech.slug.current} className="group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  {tech.image ? (
                      <img src={urlFor(tech.image).width(600).height(400).url()} alt={tech.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                      <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-500">600 x 400</div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-color transition-colors duration-300">{tech.title}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Technologies
