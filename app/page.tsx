import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import ApiNotice from '@/components/ApiNotice'

export default function Home() {
  return (
    <main>
      <ApiNotice /> 
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Footer />
    </main>
  )
}