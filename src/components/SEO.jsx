import { Helmet } from 'react-helmet-async'

const SEO = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tidesyalasafari.com/#business",
    "name": "Tides Yala Safari",
    "description": "Experience Yala National Park with experienced local guides. Small group safaris, expert guides, unforgettable wildlife encounters.",
    "url": "https://tidesyalasafari.com",
    "telephone": "+94-17-1652-0690",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yala National Park Area",
      "addressLocality": "Tissamaharama",
      "addressRegion": "Southern Province",
      "addressCountry": "Sri Lanka"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.3728",
      "longitude": "81.5209"
    },
    "openingHours": "Mo-Su 05:00-18:00",
    "priceRange": "$$",
    "servedCuisine": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safari Tours",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Half Day Safari",
            "description": "4-hour wildlife safari in Yala National Park"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Full Day Safari",
            "description": "8-hour comprehensive wildlife tour with lunch"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }

  return (
    <Helmet>
      <title>Discover Yala's Wild Side — Tides Yala Safari | Wildlife Tours Sri Lanka</title>
      <meta name="description" content="Experience Yala National Park with experienced local guides. Small group safaris, expert guides, unforgettable wildlife encounters. Book your ethical wildlife tour today." />
      <meta name="keywords" content="Yala Safari, Sri Lanka Wildlife, National Park Tours, Leopard Watching, Elephant Safari, Nature Photography" />
      <link rel="canonical" href="https://tidesyalasafari.com" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Discover Yala's Wild Side — Tides Yala Safari" />
      <meta property="og:description" content="Small group safaris, expert guides, unforgettable wildlife encounters in Yala National Park, Sri Lanka." />
      <meta property="og:image" content="https://tidesyalasafari.com/images/hero.jpg" />
      <meta property="og:url" content="https://tidesyalasafari.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Tides Yala Safari" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Discover Yala's Wild Side — Tides Yala Safari" />
      <meta name="twitter:description" content="Small group safaris, expert guides, unforgettable wildlife encounters in Yala National Park, Sri Lanka." />
      <meta name="twitter:image" content="https://tidesyalasafari.com/images/hero.jpg" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Tides Yala Safari" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="LK" />
      <meta name="geo.placename" content="Yala National Park, Sri Lanka" />
      <meta name="geo.position" content="6.3728;81.5209" />
      <meta name="ICBM" content="6.3728, 81.5209" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  )
}

export default SEO