'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaHeartbeat, FaRocket } from 'react-icons/fa'

const focusAreas = [
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    description: 'Revolutionizing learning through AI-powered educational tools and platforms.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare',
    description: 'Advancing medical research and patient care with cutting-edge AI and robotics.',
  },
  {
    icon: <FaRocket />,
    title: 'Travel',
    description: 'Enhancing travel experiences with intelligent automation and personalized services.',
  },
]

const MainFocus = () => {
  return (
    <section id="focus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Main Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((focus, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl text-blue-600 mb-4">{focus.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{focus.title}</h3>
              <p className="text-gray-600">{focus.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainFocus