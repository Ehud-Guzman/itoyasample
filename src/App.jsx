import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SignatureExperiences from './components/SignatureExperiences'
import RoomsPreview from './components/RoomsPreview'
import ConferenceSection from './components/ConferenceSection'
import GallerySection from './components/GallerySection'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SignatureExperiences />
        <RoomsPreview />
        <ConferenceSection />
        <GallerySection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
