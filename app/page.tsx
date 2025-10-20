import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Rooms from '@/components/Rooms'
import Amenities from '@/components/Amenities'
import LocalArea from '@/components/LocalArea'
import Reviews from '@/components/Reviews'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <About />
        <LocalArea />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
