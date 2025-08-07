import { useEffect, useCallback } from 'react'

const Lightbox = ({ image, onClose, images, currentIndex, onNavigate }) => {
  const handlePrevious = useCallback(() => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
    onNavigate(images[prevIndex])
  }, [currentIndex, images, onNavigate])

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
    onNavigate(images[nextIndex])
  }, [currentIndex, images, onNavigate])

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          handlePrevious()
          break
        case 'ArrowRight':
          handleNext()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, handlePrevious, handleNext])

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div className="relative max-w-7xl max-h-full p-4 w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close lightbox"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image */}
        <div className="flex items-center justify-center h-full">
          <picture>
            <source srcSet={image.webp} type="image/webp" />
            <img 
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-full object-contain animate-zoom-in"
            />
          </picture>
        </div>

        {/* Image info */}
        <div className="absolute bottom-6 left-6 right-6 bg-black/50 text-white rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
          <p className="text-gray-200 text-sm">{image.alt}</p>
          <div className="mt-2 text-xs text-gray-300">
            {currentIndex + 1} of {images.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox