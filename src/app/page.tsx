import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MainFocus from '@/components/MainFocus'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <MainFocus />
        <About />
        <Technologies />
      </main>
      <Footer />
    </>
  )
}