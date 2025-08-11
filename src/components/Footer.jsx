const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-safari-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl">Tides Yala Safari</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Experience Yala National Park with experienced local guides. Small group safaris, 
              expert guides, unforgettable wildlife encounters in Sri Lanka's premier national park.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-safari-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94712042150 " className="text-gray-300 hover:text-white transition-colors">
                  +94 712042150
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-safari-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Yala National Park Area, Tissamaharama</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Gallery
              </button>
              <a 
                href="tel:+941716520690" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Book Safari
              </a>
            </div>
          </div>

          {/* Safari Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Safari Times</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium text-white">Morning Safari</div>
                <div className="text-sm">6:00 AM - 10:00 AM</div>
              </div>
              <div>
                <div className="font-medium text-white">Evening Safari</div>
                <div className="text-sm">2:00 PM - 6:00 PM</div>
              </div>
              <div>
                <div className="font-medium text-white">Full Day</div>
                <div className="text-sm">6:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Tides Yala Safari. All rights reserved. | Website Developed by Wrenix(Pvt) Ltd.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer