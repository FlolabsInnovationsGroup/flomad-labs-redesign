import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MainFocus from '@/components/MainFocus'
import LatestNews from '@/components/LatestNews'
import Technologies from '@/components/Technologies'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainFocus />
        <LatestNews />
        <Technologies />
      </main>
      <Footer />
    </>
  )
}