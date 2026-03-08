import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
