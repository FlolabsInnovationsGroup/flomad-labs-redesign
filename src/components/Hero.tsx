'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.muted = isMuted
    }
  }, [isMuted])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
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
      <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Flomad Labs R&D</h1>
        <p className="text-lg sm:text-xl mb-8">AI and Robotics research and development collective</p>
        <a href="#focus" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors">
          Discover Our Focus
        </a>
      </div>
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-4 right-4 z-20 text-white text-2xl"
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </section>
  )
}

export default Hero