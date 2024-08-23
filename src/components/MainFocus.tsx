'use client'

import { useEffect, useState } from 'react'
import { client, urlFor } from '@/lib/sanity'
import { FaGraduationCap, FaHeartbeat, FaPlane } from 'react-icons/fa'

interface FocusArea {
  title: string;
  subtext: string;
  icon: string;
  backgroundImage: any;
}

interface MainFocusContent {
  title: string;
  focusAreas: FocusArea[];
}

const MainFocus = () => {
  const [mainFocusContent, setMainFocusContent] = useState<MainFocusContent | null>(null)

  useEffect(() => {
    const fetchMainFocusContent = async () => {
      const query = `*[_type == "mainFocus"][0]`
      const result = await client.fetch(query)
      console.log('Fetched main focus content:', result)
      setMainFocusContent(result)
    }

    fetchMainFocusContent()
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'education': return <FaGraduationCap className="text-blue-500 text-4xl mb-4" />;
      case 'healthcare': return <FaHeartbeat className="text-blue-500 text-4xl mb-4" />;
      case 'travel': return <FaPlane className="text-blue-500 text-4xl mb-4" />;
      default: return null;
    }
  }

  if (!mainFocusContent) {
    return <div className="h-64 flex items-center justify-center">Loading...</div>
  }

  const { title, focusAreas = [] } = mainFocusContent

  return (
    <section id="focus" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((focus, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg group"
            >
              <img 
                src={urlFor(focus.backgroundImage).width(400).height(320).fit('crop').url()} 
                alt={focus.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{focus.title}</h3>
                <p className="text-center">{focus.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainFocus