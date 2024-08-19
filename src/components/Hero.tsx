'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Flomad Labs R&D</h1>
        <p className="text-lg sm:text-xl mb-8">AI and Robotics research and development collective</p>
        <motion.a
          href="#focus"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover Our Focus
        </motion.a>
      </motion.div>
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 text-white text-2xl"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </section>
  )
}

export default Hero