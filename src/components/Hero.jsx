const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero.webp" type="image/webp" />
          <img 
            src="/images/hero.jpg" 
            alt="Majestic leopard in Yala National Park at golden hour" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Discover Yala's Wild Side — 
          <span className="block text-safari-300 mt-2">Tides Yala Safari</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Small group safaris, expert guides, unforgettable wildlife encounters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <a 
            href="tel:+941716520690" 
            className="btn-primary text-lg px-8 py-4 inline-block"
            aria-label="Book your safari - Call +94 17 1652 0690"
          >
            Book Your Safari
          </a>
          <button 
            onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-8 py-4"
            aria-label="View our wildlife gallery"
          >
            View Gallery
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero