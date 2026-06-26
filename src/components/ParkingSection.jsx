export default function ParkingSection() {
  return (
    <section id="parking" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Intro — neutral & refined */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium">
            Guest Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mt-2">
            Parking &amp; Mobile Kitchen
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* --- ROW 1: PARKING & VALET --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-stone/100 mb-8 lg:mb-12">
          {/* Left: Image */}
          <div className="relative overflow-hidden group min-h-[300px] md:min-h-[480px]">
            <img
              src="/parking1.jpeg"
              alt="Valet parking at Hotel Itoya"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-gold text-ink px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-sm">
              Premium Service
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16 bg-mist/50">
            <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium">
              Parking &amp; Valet
            </span>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink leading-tight mt-2">
              Effortless Arrivals
            </h3>
            <div className="w-12 h-[2px] bg-gold mt-4 mb-6" />
            <p className="text-ink/70 text-base leading-relaxed max-w-lg">
              Secure, gated parking with professional valet service. Arrive in
              style and leave the rest to us — monitored 24/7 for your peace of mind.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-center gap-3 text-ink/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                Valet Service Available
              </li>
              <li className="flex items-center gap-3 text-ink/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                24/7 CCTV Monitoring
              </li>
              <li className="flex items-center gap-3 text-ink/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                Dedicated Guest Spaces
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block mt-8 font-sans text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-dark border-b border-gold/30 hover:border-gold transition-colors pb-1"
            >
              Enquire about parking →
            </a>
          </div>
        </div>

        {/* --- ROW 2: MOBILE KITCHEN --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-stone/100">
          {/* Left: Content (swapped order) */}
          <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16 bg-mist/50 order-2 md:order-1">
            <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-sans font-medium">
              Culinary Excellence
            </span>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink leading-tight mt-2">
              Mobile Kitchen &amp; <br />Outdoor Catering
            </h3>
            <div className="w-12 h-[2px] bg-gold mt-4 mb-6" />
            <p className="text-ink/70 text-base leading-relaxed max-w-lg">
              Our state‑of‑the‑art mobile kitchen brings the authentic Hotel
              Itoya dining experience directly to your event, wherever it may be.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-center gap-3 text-ink/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                On‑site Cooking
              </li>
              <li className="flex items-center gap-3 text-ink/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                Custom Menu Design
              </li>
              <li className="flex items-center gap-3 text-ink/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                Fully Equipped &amp; Staffed
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block mt-8 font-sans text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-dark border-b border-gold/30 hover:border-gold transition-colors pb-1"
            >
              Explore catering options →
            </a>
          </div>

          {/* Right: Image (swapped order) */}
          <div className="relative overflow-hidden group min-h-[300px] md:min-h-[480px] order-1 md:order-2">
            <img
              src="/mobilekitcheninterior1.jpeg"
              alt="Mobile kitchen setup"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 bg-gold text-ink px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-sm">
              Tailored Experiences
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}