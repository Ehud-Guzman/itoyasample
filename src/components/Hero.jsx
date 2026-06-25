/* Hero Section — cinematic, premium, hotel-first */

export default function Hero() {
  const trustItems = [
    { value: 'Premium', label: 'Accommodation' },
    { value: 'Conference', label: 'Facilities' },
    { value: 'Business', label: 'Hospitality' },
    { value: 'Refined', label: 'Guest Experience' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hotelitoyagpt1.png"
          alt="Hotel exterior and grounds"
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-36 pt-36 w-full">

        {/* Hero Copy */}
        <div className="max-w-2xl fade-in">

          <p className="section-label text-gold-light mb-6 tracking-[0.25em]">
            Where hospitality meets value
          </p>

          <h1 className="font-serif font-medium text-white leading-[0.95] mb-8 text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-xl">
            Stay. Meet.
            <br />
            <em className="font-normal">Experience</em> Busia.
          </h1>

          <p className="font-sans text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            A refined destination for accommodation, dining, conferences,
            and memorable stays.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-16">

            <a
              href="#contact"
              className="btn-primary"
            >
              Book Your Stay
            </a>

            <a
              href="#rooms"
              className="btn-outline"
            >
              Explore Rooms
            </a>

          </div>
        </div>

        {/* Quick Inquiry Bar */}
        <div className="w-full rounded-lg overflow-hidden bg-white/95 backdrop-blur-md shadow-lg">

          <div className="flex flex-col md:flex-row">

            <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r">
              <p className="text-xs tracking-widest uppercase text-forest mb-1">
                Stay
              </p>
              <p className="text-sm text-ink">
                Business & Leisure
              </p>
            </div>

            <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r">
              <p className="text-xs tracking-widest uppercase text-forest mb-1">
                Conference
              </p>
              <p className="text-sm text-ink">
                Meetings & Events
              </p>
            </div>

            <div className="flex-1 px-6 py-5 border-b md:border-b-0 md:border-r">
              <p className="text-xs tracking-widest uppercase text-forest mb-1">
                Experience
              </p>
              <p className="text-sm text-ink">
                Premium Hospitality
              </p>
            </div>

            <button className="bg-gold hover:bg-gold-dark text-white px-10 py-5 uppercase tracking-widest text-xs transition">
              Check Availability
            </button>

          </div>
        </div>

      </div>

      {/* Trust Strip (fixed to bottom as a centered panel) */}
      <div className="fixed bottom-6 left-1/2 z-40 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-3xl bg-forest/90 border border-white/10 shadow-2xl">

        <div className="px-4 py-5 sm:px-6 lg:px-8">

          <div className="flex flex-wrap md:flex-nowrap text-center">

            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex-1 py-3 md:border-r last:border-r-0 border-white/10"
              >
                <p className="font-serif text-xl md:text-2xl text-gold">
                  {item.value}
                </p>

                <p className="text-white/85 text-xs tracking-widest uppercase mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}