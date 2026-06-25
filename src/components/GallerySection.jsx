/* Gallery — curated premium hospitality gallery */

const galleryImages = [
  {
    src: '/hotelitoyagpt1.png',
    alt: 'Hotel Exterior',
    layout: 'sm:col-span-2 xl:col-span-3 xl:row-span-2 aspect-[4/5]',
  },
  {
    src: '/lobby1.webp',
    alt: 'Lobby Experience',
    layout: 'sm:col-span-1 xl:col-span-2 aspect-[4/5]',
  },
  {
    src: '/conference2.webp',
    alt: 'Conference Space',
    layout: 'sm:col-span-1 xl:col-span-1 aspect-[3/4]',
  },
  {
    src: '/sitting1.jpeg',
    alt: 'Guest Rooms',
    layout: 'sm:col-span-2 xl:col-span-2 aspect-[4/5]',
  },
  {
    src: '/food1.webp',
    alt: 'Dining Experience',
    layout: 'sm:col-span-1 xl:col-span-1 aspect-[3/4]',
  },
  {
    src: '/lounge1.webp',
    alt: 'Lounge Area',
    layout: 'sm:col-span-1 xl:col-span-2 aspect-[4/5]',
  },
]

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-mist py-24 lg:py-32"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="section-label mb-4">
            Visual Journey
          </p>

          <div className="gold-divider mx-auto mb-8" />

          <h2 className="section-heading mb-5">
            Discover
            <br />
            <em>Hotel Itoya</em>
          </h2>

          <p className="text-ink/60 max-w-lg mx-auto leading-relaxed">
            Explore spaces designed around comfort,
            hospitality, and memorable experiences.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6 xl:grid-rows-2">

          {galleryImages.map((img) => (

            <div
              key={img.alt}
              className={`relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl shadow-black/5 group ${img.layout}`}
            >

              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="font-serif text-lg md:text-xl drop-shadow-lg">
                  {img.alt}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-white/80">
                  Photo preview
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}