import { useState, useCallback, useEffect, lazy, Suspense } from 'react'

const Lightbox = lazy(() => import('./Lightbox'))

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    webp: '/images/gallery-1.webp',
    alt: 'Leopard in Yala National Park stalking through tall grass at golden hour',
    title: 'Yala Leopard'
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg', 
    webp: '/images/gallery-2.webp',
    alt: 'Elephant family at the waterhole during dry season in Yala',
    title: 'Elephants at Waterhole'
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    webp: '/images/gallery-3.webp', 
    alt: 'Sloth bear climbing a tree in Yala National Park',
    title: 'Yala Sloth Bear'
  },
  {
    id: 4,
    src: '/images/gallery-4.jpg',
    webp: '/images/gallery-4.webp',
    alt: 'Spotted deer herd grazing in open grasslands of Yala',
    title: 'Spotted Deer Herd'
  },
  {
    id: 5,
    src: '/images/gallery-5.jpg',
    webp: '/images/gallery-5.webp',
    alt: 'Peacock displaying colorful plumage in Yala forest',
    title: 'Yala Peacock'
  },
  {
    id: 6,
    src: '/images/gallery-6.jpg',
    webp: '/images/gallery-6.webp',
    alt: 'Wild buffalo herd crossing lagoon at sunset in Yala',
    title: 'Buffalo at Sunset'
  }
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [loadedImages, setLoadedImages] = useState(new Set())

  const handleImageLoad = useCallback((id) => {
    setLoadedImages(prev => new Set([...prev, id]))
  }, [])

  const openLightbox = useCallback((image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden' // Prevent background scroll
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedImage, closeLightbox])

  return (
    <section id="gallery" className="py-16 bg-gray-50" aria-label="Wildlife photo gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wildlife Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the incredible biodiversity of Yala National Park through our lens. 
            Each photo tells a story of Sri Lanka's magnificent wildlife.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openLightbox(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(image)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View larger image: ${image.alt}`}
            >
              <div className="aspect-ratio-4-3 overflow-hidden">
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
                      loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(image.id)}
                  />
                </picture>
                
                {/* Loading placeholder */}
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-safari-600 transition-colors">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to capture your own wildlife memories?
          </p>
          <a 
            href="tel:+941716520690" 
            className="btn-primary text-lg px-8 py-4"
            aria-label="Book your photography safari"
          >
            Book Photography Safari
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        }>
          <Lightbox 
            image={selectedImage} 
            onClose={closeLightbox}
            images={galleryImages}
            currentIndex={galleryImages.findIndex(img => img.id === selectedImage.id)}
            onNavigate={setSelectedImage}
          />
        </Suspense>
      )}
    </section>
  )
}

export default Gallery