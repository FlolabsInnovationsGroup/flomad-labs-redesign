import { Metadata } from 'next'
import Hero from '@/components/Hero'
import MainFocus from '@/components/MainFocus'
import About from '@/components/About'
import Technologies from '@/components/Technologies'

export const metadata: Metadata = {
  title: 'Home | Flomad Labs R&D',
  description: 'Explore the cutting-edge AI and Robotics research at Flomad Labs R&D',
}

export default function Home() {
  return (
    <>
      <Hero />
      <MainFocus />
      <About />
      <Technologies />
    </>
  )
}