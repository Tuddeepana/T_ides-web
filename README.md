# Tides Yala Safari - Landing Page

A modern, production-ready landing page for Tides Yala Safari built with Vite + React and optimized for performance and SEO.

## 🚀 Features

### Core Functionality
- **Modern React Components**: Modular component architecture with proper separation of concerns
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Complete meta tags, JSON-LD schema, and sitemap
- **Performance Optimized**: Lazy loading, WebP support, and code splitting
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **WhatsApp Integration**: Direct contact button with pre-filled message

### Technical Stack
- **Vite**: Fast build tool and dev server
- **React 18**: Latest React with Concurrent Features
- **Tailwind CSS**: Utility-first CSS framework
- **React Helmet Async**: SEO metadata management
- **JavaScript (ES6+)**: Modern JavaScript features

### Components
- `Header.jsx` - Navigation with smooth scrolling and mobile menu
- `Hero.jsx` - Eye-catching hero section with CTA buttons  
- `MiniDescription.jsx` - Service overview with key features
- `LoremSection.jsx` - Detailed safari experience information
- `Gallery.jsx` - Image gallery with lazy loading and lightbox
- `Lightbox.jsx` - Accessible modal for gallery images
- `AboutUs.jsx` - Company information and credentials
- `Footer.jsx` - Contact info and site links
- `WhatsAppButton.jsx` - Fixed WhatsApp contact button
- `SEO.jsx` - Complete SEO meta tags and schema

## 📱 Performance Features

### Image Optimization
- **WebP Support**: Modern image format with JPG fallbacks
- **Lazy Loading**: Images load as they enter viewport
- **Responsive Images**: Proper `srcset` implementation
- **Preloading**: Hero image preloaded for better LCP

### Code Optimization  
- **Code Splitting**: Lightbox component lazy-loaded with Suspense
- **Tree Shaking**: Unused code eliminated in production builds
- **CSS Purging**: Only used Tailwind classes included
- **Minification**: All assets minified in production

### SEO Optimization
- **Complete Meta Tags**: Title, description, OG tags, Twitter cards
- **JSON-LD Schema**: LocalBusiness structured data
- **Canonical URLs**: Proper canonical link implementation
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## 🛠️ Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### File Structure
```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── MiniDescription.jsx
│   ├── LoremSection.jsx
│   ├── Gallery.jsx
│   ├── Lightbox.jsx
│   ├── AboutUs.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx
│   └── SEO.jsx
├── App.jsx             # Main app component
├── main.jsx           # React entry point
├── index.css          # Global styles
└── App.css            # Component styles

public/
├── images/            # Image assets (see placeholder-info.md)
├── robots.txt         # Search engine instructions
├── sitemap.xml        # Site structure for SEO
└── favicon.ico        # Site favicon
```

## 🖼️ Image Setup

Replace placeholder images in `public/images/` with actual photos:

### Required Images:
- `hero.jpg` (1920x1080) - Main hero leopard image
- `gallery-1.jpg` through `gallery-6.jpg` (1200x800) - Wildlife photos
- `safari-experience.jpg` (1200x800) - Safari jeep with tourists  
- `guide-team.jpg` (1200x800) - Local safari guides

### Performance Requirements:
- Optimize JPGs to 70-80% quality
- Create WebP versions for each image
- Use descriptive filenames
- Ensure proper licensing for commercial use

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure custom domain and HTTPS
4. Add redirects for SPA routing if needed

### Vercel
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 📊 Lighthouse Performance Checklist

### Performance (Target: 90+)
- [ ] Hero image preloaded
- [ ] Images lazy-loaded below fold
- [ ] WebP format used with JPG fallbacks
- [ ] Critical CSS inlined
- [ ] JavaScript code-split and tree-shaken
- [ ] Fonts preloaded with `font-display: swap`

### Accessibility (Target: 100)
- [ ] Skip link for keyboard users
- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Alt text for all images
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation support
- [ ] Color contrast ratios > 4.5:1

### Best Practices (Target: 100)
- [ ] HTTPS enabled
- [ ] No mixed content
- [ ] Images properly sized
- [ ] No console errors
- [ ] Proper meta viewport tag

### SEO (Target: 100)
- [ ] Unique, descriptive title tags
- [ ] Meta descriptions under 160 characters
- [ ] Proper heading structure
- [ ] Internal links with descriptive text
- [ ] Sitemap.xml submitted to search engines
- [ ] Schema markup implemented

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
- `safari` colors for primary branding
- `jungle` colors for secondary elements

### Content
- Update contact phone number in WhatsApp button and SEO schema
- Modify gallery images and descriptions
- Customize company information in About section
- Update meta descriptions for better SEO

### Features
- Add blog section for safari tips
- Implement booking form with backend
- Add customer testimonials
- Include pricing information

## 📞 Contact Integration

The site includes WhatsApp integration with:
- Phone: +94 17 1652 0690
- Pre-filled message for inquiries
- Fixed position button for easy access

## 🔍 SEO Configuration

The site includes comprehensive SEO setup:
- **Meta tags**: Title, description, keywords, robots
- **Open Graph**: Facebook sharing optimization  
- **Twitter Cards**: Twitter sharing optimization
- **JSON-LD Schema**: LocalBusiness structured data
- **Canonical URLs**: Duplicate content prevention
- **Sitemap**: Search engine site structure

## 📄 License

This project is licensed for commercial use by Tides Yala Safari.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch  
5. Open a Pull Request

---

**Built with ❤️ for wildlife conservation and sustainable tourism in Sri Lanka**