/* Hero Section — cinematic, premium, hotel-first */
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [footerNear, setFooterNear] = useState(false)
  const [trustMode, setTrustMode] = useState('full')
  const lastScroll = useRef(0)

  const trustItems = [
    { value: 'Premium', label: 'Accommodation' },
    { value: 'Conference', label: 'Facilities' },
    { value: 'Business', label: 'Hospitality' },
    { value: 'Refined', label: 'Guest Experience' },
  ]

  const slides = [
    '/hotelitoyagpt1.png',
    '/lobby2.jpeg',
    '/lounge1.webp',
    '/lobby1.webp',
    '/sitting1.jpeg',
    '/parking1.jpeg',
    '/parking2.jpeg',
    '/food1.webp',
    '/conference2.webp',
    '/layout1.jpeg',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        setFooterNear(footerRect.top <= window.innerHeight + 48)
      }

      const currentScroll = window.scrollY
      const isScrollingDown = currentScroll > lastScroll.current
      lastScroll.current = currentScroll

      if (currentScroll <= 220) {
        setTrustMode('full')
      } else if (isScrollingDown) {
        setTrustMode('hidden')
      } else {
        setTrustMode('compact')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background slideshow — unchanged */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Hero slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transform-gpu transition duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform will-change-opacity ${
              currentSlide === i ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-105 -translate-y-3'
            }`}
            loading={currentSlide === i ? 'eager' : 'lazy'}
          />
        ))}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Main Content — refined headline with gold accent */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-32 w-full">
        <div className="max-w-2xl fade-in">
          {/* Gold accent line above */}
          <div className="w-16 h-[2px] bg-gold/80 mb-6" />

          <h1 className="font-serif font-light text-white leading-[1.15] mb-3 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl tracking-wide drop-shadow-lg">
            Where hospitality <br />
            <span className="font-normal text-gold-light">meets value</span>
          </h1>

          <p className="text-white/40 text-[10px] sm:text-[11px] tracking-[0.35em] uppercase font-sans font-light mt-6">
            Hotel Itoya · Busia, Kenya
          </p>
        </div>
      </div>

      {/* === SCROLLING PREMIUM TRUST STRIP === */}
      <div
        className={`
          floating-panel fixed z-40 transition-all duration-500 ease-out
          hidden md:block
          ${trustMode === 'compact' 
            ? 'bottom-6 right-6 left-auto w-auto max-w-xs opacity-100' 
            : trustMode === 'hidden' 
              ? 'opacity-0 pointer-events-none' 
              : 'left-1/2 w-[min(92vw,56rem)] max-w-6xl -translate-x-1/2 opacity-100 ' + (footerNear ? 'bottom-20' : 'bottom-6')
          }
        `}
      >
        <div
          className={`
            relative overflow-hidden bg-forest/95 backdrop-blur-sm border border-white/15 shadow-2xl shadow-black/40
            ${trustMode === 'compact' 
              ? 'rounded-full px-5 py-2' 
              : 'rounded-full px-2 py-3 sm:px-4'
            }
          `}
        >
          {trustMode === 'compact' ? (
            // --- COMPACT BADGE: static, refined, visible ---
            <div className="flex items-center justify-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              </span>
              <span className="font-serif text-sm tracking-[0.15em] text-gold whitespace-nowrap">
                Hotel Itoya
              </span>
            </div>
          ) : (
            // --- FULL STRIP: infinite scrolling marquee ---
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-trust gap-8 sm:gap-12 md:gap-16">
                {/* First set */}
                {trustItems.map((item) => (
                  <div key={`${item.value}-1`} className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-baseline gap-2 whitespace-nowrap">
                      <span className="font-serif text-sm sm:text-base md:text-lg text-gold font-medium tracking-wide">
                        {item.value}
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream/70">
                        {item.label}
                      </span>
                    </div>
                    <span className="w-px h-5 md:h-6 bg-white/10" />
                  </div>
                ))}
                {/* Second set (duplicate for seamless looping) */}
                {trustItems.map((item) => (
                  <div key={`${item.value}-2`} className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-baseline gap-2 whitespace-nowrap">
                      <span className="font-serif text-sm sm:text-base md:text-lg text-gold font-medium tracking-wide">
                        {item.value}
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream/70">
                        {item.label}
                      </span>
                    </div>
                    <span className="w-px h-5 md:h-6 bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation for scrolling */}
      <style>{`
        @keyframes scrollTrust {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-trust {
          animation: scrollTrust 22s linear infinite;
        }
        /* Optional: pause animation on hover for better readability */
        .floating-panel:hover .animate-scroll-trust {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  )
}