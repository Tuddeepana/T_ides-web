const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white" aria-label="About Tides Yala Safari">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <picture>
                <source srcSet="/images/guide-team.webp" type="image/webp" />
                <img 
                  src="/images/guide-team.jpg" 
                  alt="Experienced local safari guides from Tides Yala Safari standing beside their safari vehicle in Yala National Park" 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Tides Yala Safari
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tides Yala Safari is a locally-run safari company offering ethical wildlife tours 
                around Yala National Park. Founded by passionate conservationists who grew up in 
                the region, we combine deep local knowledge with responsible tourism practices.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our experienced guides are not just drivers—they're naturalists, storytellers, 
                and wildlife experts who have dedicated their lives to understanding and protecting 
                Yala's incredible ecosystem. With over a decade of experience each, they know 
                where to find the elusive leopards and can share fascinating insights about 
                animal behavior and conservation efforts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-safari-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-700 text-sm">
                    To provide unforgettable wildlife experiences while supporting local 
                    communities and conservation initiatives.
                  </p>
                </div>

                <div className="bg-jungle-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Promise</h3>
                  <p className="text-gray-700 text-sm">
                    Ethical wildlife viewing with minimal environmental impact and 
                    maximum respect for animal welfare.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Licensed by Sri Lanka Tourism Development Authority</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Certified naturalist guides</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Supporting local wildlife conservation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+941716520690" 
                  className="btn-primary"
                  aria-label="Contact us to book your safari"
                >
                  Book Your Adventure
                </a>
                <button 
                  onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                  aria-label="View our wildlife photo gallery"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs