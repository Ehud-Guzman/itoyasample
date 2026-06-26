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
import ParkingSection from './components/ParkingSection'
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ParkingSection />
        <SignatureExperiences />
        <RoomsPreview />
        <ConferenceSection />
        <GallerySection />
        <Testimonials />
        <ContactSection />
        <ChatBot />

      </main>
      <Footer />
    </>
  )
}
