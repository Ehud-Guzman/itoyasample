import { useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SignatureExperiences from './components/SignatureExperiences'
import RoomsPreview from './components/RoomsPreview'
import DiningSection from './components/DiningSection'
import ConferenceSection from './components/ConferenceSection'
import EventsSection from './components/EventsSection'
import LocationSection from './components/LocationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ParkingSection from './components/ParkingSection'
import ReceptionSection from './components/ReceptionSection'
import BookingModal from './components/BookingModal'

const GallerySection  = lazy(() => import('./components/GallerySection'))
const Testimonials    = lazy(() => import('./components/Testimonials'))
const ChatBot         = lazy(() => import('./components/ChatBot'))

export default function App() {
  const [bookingOpen,     setBookingOpen]     = useState(false)
  const [preselectedRoom, setPreselectedRoom] = useState('')

  const openBooking = (roomId = '') => {
    setPreselectedRoom(roomId)
    setBookingOpen(true)
  }

  return (
    <>
      <Navbar onBookNow={() => openBooking()} />
      <main>
        <Hero onBookNow={() => openBooking()} />
        <ReceptionSection />
        <AboutSection />
        <RoomsPreview onBookRoom={openBooking} />
        <DiningSection />
        <ConferenceSection />
        <EventsSection />
        <SignatureExperiences />
        <Suspense fallback={null}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <LocationSection />
        <ParkingSection />
        <ContactSection />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedRoom={preselectedRoom}
      />
    </>
  )
}
