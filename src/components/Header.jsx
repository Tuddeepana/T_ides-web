import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-safari-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Tides Yala Safari
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-colors hover:text-safari-600 focus:text-safari-600 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Go to home section"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-safari-600 focus:text-safari-600 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Go to about section"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors hover:text-safari-600 focus:text-safari-600 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Go to gallery section"
            >
              Gallery
            </button>
            <a 
              href="tel:+941716520690" 
              className="btn-primary"
              aria-label="Call us at +94 17 1652 0690"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in"
          >
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="Go to home section"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="Go to about section"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="Go to gallery section"
              >
                Gallery
              </button>
              <div className="px-4 pt-2">
                <a 
                  href="tel:+941716520690" 
                  className="block w-full text-center btn-primary"
                  aria-label="Call us at +94 17 1652 0690"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header