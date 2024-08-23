'use client'

import { useEffect, useState } from 'react'
import { client, urlFor } from '@/lib/sanity'

interface AboutItem {
  title: string;
  excerpt: string;
  mainImage: any;
  externalLink: string;
}

const About = () => {
  const [aboutItems, setAboutItems] = useState<AboutItem[]>([])

  useEffect(() => {
    const fetchAboutItems = async () => {
      const query = `*[_type == "about"] | order(publishedAt desc) [0...3] {
        title,
        excerpt,
        mainImage,
        externalLink
      }`
      const result = await client.fetch(query)
      console.log('Fetched about items:', result)
      setAboutItems(result)
    }

    fetchAboutItems()
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <a 
              href={item.externalLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {item.mainImage ? (
                <img 
                  src={urlFor(item.mainImage).width(400).height(200).url()} 
                  alt={item.title} 
                  className="w-full h-48 object-cover" 
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                  No image available
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <span className="text-blue-600 hover:underline">Learn more</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About