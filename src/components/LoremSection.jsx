const LoremSection = () => {
  return (
    <section className="py-16 bg-white" aria-label="Safari experience details">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unforgettable Wildlife Encounters
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Yala National Park is home to the highest density of leopards in the world, making it 
                the premier destination for big cat photography. Our expert guides know the territory 
                intimately, positioning you for the best wildlife sightings while respecting the 
                natural habitat.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Beyond leopards, encounter massive elephants, sloth bears, spotted deer, wild boar, 
                and over 215 bird species. Each safari is unique, with sightings varying by season 
                and time of day, ensuring every visit offers new discoveries.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-jungle-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Best Times for Wildlife</h3>
                    <p className="text-gray-600">Early morning (6 AM) and late afternoon (2 PM) safaris for optimal animal activity</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-jungle-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Seasonal Highlights</h3>
                    <p className="text-gray-600">Dry season (May-September) offers excellent leopard spotting at water holes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-jungle-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Photography Support</h3>
                    <p className="text-gray-600">Vehicle positioning and guidance for professional wildlife photography</p>
                  </div>
                </div>
              </div>

              <a 
                href="tel:+941716520690" 
                className="btn-primary inline-block"
                aria-label="Contact us to plan your safari"
              >
                Plan Your Safari
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <picture>
                <source srcSet="/images/safari-experience.webp" type="image/webp" />
                <img 
                  src="/images/safari-experience.jpg" 
                  alt="Safari jeep positioned for wildlife photography in Yala National Park with tourists observing elephants at a watering hole" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </picture>
              
              {/* Overlay stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-safari-600">40+</div>
                    <div className="text-sm text-gray-600">Leopards</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-safari-600">300+</div>
                    <div className="text-sm text-gray-600">Elephants</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-safari-600">215</div>
                    <div className="text-sm text-gray-600">Bird Species</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoremSection