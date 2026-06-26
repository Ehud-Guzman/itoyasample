/* Footer — minimal premium footer */

const footerLinks = {
  Hotel: ['About Us', 'Rooms & Suites', 'Dining', 'Gallery', 'Contact'],
  Services: ['Conference Facilities', 'Concierge', 'Events Planning'],
  Info: ['Reservations Policy', 'Privacy Policy', 'Terms of Use', 'Accessibility', 'Careers'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif text-lg text-white font-medium mb-1">
                Stay Informed
              </p>
              <p className="font-sans text-xs text-white/70 tracking-wide">
                Exclusive offers, event news, and seasonal packages — direct to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 text-white font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold placeholder:text-white/50 min-w-0"
              />
              <button className="bg-gold text-white font-sans font-medium tracking-widest uppercase text-xs px-6 py-3 hover:bg-gold-dark transition-colors duration-200 flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="font-serif font-medium text-xl text-white tracking-wide">HOTEL ITOYA</p>
              <p className="font-sans font-light text-xs tracking-widest uppercase text-gold mt-0.5">Busia, Kenya</p>
            </div>
            <p className="font-sans font-light text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
             Where Hospitality Meets Value.
            </p>

            {/* Social links — placeholders */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Instagram', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-gold transition-colors duration-200 group"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-gold transition-colors">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-5">{heading}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans font-light text-sm text-white/70 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — fully centered */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
            <p className="font-sans text-xs text-white/50">
              © {year} Hotel Itoya. All rights reserved. Busia, Kenya.
            </p>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="font-sans text-xs text-white/40">
              Created &amp; managed by{' '}
              <a
                href="https://glimmerink.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/70 hover:text-gold transition-colors duration-200"
              >
                Glimmerink Creations
              </a>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="font-sans text-xs text-gold/50 border border-gold/20 px-3 py-1 tracking-widest uppercase">
              Concept Demo
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}